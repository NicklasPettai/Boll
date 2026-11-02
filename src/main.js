import * as THREE from 'three';
import { Game, RADIUS, formatTime } from './game.js';
import { onPlatform } from './level.js';
import { ChaseCamera } from './chase-camera.js';
import './style.css';

const $ = (id) => document.getElementById(id);
export const game = new Game();
export const chaseCamera = new ChaseCamera();
const keys = new Set();
const touch = new Set();
let jumpQueued = false;
const fixedStep = 1 / 120;
let accumulator = 0;
let lastTime = 0;
let toastTimeout;
let soundEnabled = false;
let audio;
let scene, camera, renderer, ballMesh, ballShadow, courseGroup, sun;
export { camera };
let stars = [], barMeshes = [], checkpointMeshes = [];
let particles = [];
let best = 0;
let thirdPerson = false;
let resumeAfterOptions = false;
let returnToDialog = false;
let optionsFocus = null;
try { thirdPerson = localStorage.getItem('boll-camera-mode') === 'third-person'; } catch { /* Settings still work without storage. */ }
try { best = Number(localStorage.getItem('boll-longest-journey')) || 0; } catch { /* Storage is optional. */ }
if (best) $('best').textContent = `LÄNGSTA RESA: ${best} ${best === 1 ? 'BANA' : 'BANOR'}`;

const palette = { grass: 0xc2d0a0, side: 0xa2b38b, cream: 0xf7f4db, orange: 0xed8064, wood: 0xe6ca9f, dark: 0x4b6550, star: 0xe7b956 };
const material = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.78, ...extra });
const mat = Object.fromEntries(Object.entries(palette).map(([key, color]) => [key, material(color)]));

function mesh(geometry, material, position, parent = courseGroup ?? scene) {
  const obj = new THREE.Mesh(geometry, material);
  obj.position.set(...position);
  obj.castShadow = true;
  obj.receiveShadow = true;
  parent.add(obj);
  return obj;
}

function box(w, h, d, material, position, parent) { return mesh(new THREE.BoxGeometry(w, h, d), material, position, parent); }

function cloud(x, y, z, scale) {
  const group = new THREE.Group();
  const cloudMat = material(0xf9fbef, { flatShading: true });
  [[0,0,0,2.2],[-2,-.3,0,1.6],[2,.1,.2,1.7],[.2,1,-.3,1.7]].forEach(([cx,cy,cz,r]) => {
    const puff = mesh(new THREE.IcosahedronGeometry(r, 2), cloudMat, [cx,cy,cz], group);
    puff.scale.y = 0.65;
    puff.castShadow = false;
  });
  group.position.set(x,y,z); group.scale.setScalar(scale); courseGroup.add(group);
}

function tree(x, z, size = 1) {
  const group = new THREE.Group();
  mesh(new THREE.CylinderGeometry(.08, .12, 1, 6), mat.wood, [0,.5,0], group);
  mesh(new THREE.IcosahedronGeometry(.65, 1), mat.side, [0,1.35,0], group).scale.set(.8,1.3,.8);
  group.position.set(x,0,z); group.scale.setScalar(size); courseGroup.add(group);
}

function starShape() {
  const shape = new THREE.Shape();
  for (let i=0;i<10;i++) {
    const angle = i * Math.PI / 5 + Math.PI / 2;
    const r = i % 2 === 0 ? .47 : .23;
    if (!i) shape.moveTo(Math.cos(angle)*r,Math.sin(angle)*r);
    else shape.lineTo(Math.cos(angle)*r,Math.sin(angle)*r);
  }
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape,{depth:.13,bevelEnabled:true,bevelThickness:.05,bevelSize:.04,bevelSegments:2,steps:1});
}

function buildLevelView() {
  if (courseGroup) {
    const geometries = new Set();
    const materials = new Set();
    const shared = new Set(Object.values(mat));
    courseGroup.traverse(object => {
      if (object.geometry) geometries.add(object.geometry);
      const list = Array.isArray(object.material) ? object.material : [object.material];
      for (const item of list) if (item && !shared.has(item)) materials.add(item);
    });
    scene.remove(courseGroup);
    for (const geometry of geometries) geometry.dispose();
    for (const item of materials) item.dispose();
  }
  for (const particle of particles) {
    scene.remove(particle.mesh);
    particle.mesh.geometry.dispose();
  }
  particles = [];
  courseGroup = new THREE.Group();
  scene.add(courseGroup);
  const { platforms, starLocations, obstacles, checkpoints, goal, number, seed } = game.level;
  const label = String(number).padStart(2, '0');
  $('level-number').textContent = label;
  $('course-number').textContent = `BANA ${label}`;
  $('star-total').textContent = ` / ${starLocations.length}`;
  $('intro-summary').textContent = `En ny väg genom himlen, varje gång. Samla alla ${starLocations.length} stjärnor och hitta till mål.`;
  $('app').dataset.seed = seed;
  $('app').dataset.level = number;
  platforms.forEach((p, i) => {
    if (p.kind === 'island') {
      box(p.w, .7, p.d, mat.side, [p.x,-.55,p.z]);
      box(p.w+.08, .3, p.d+.08, mat.grass, [p.x,-.15,p.z]);
      const rock = mesh(new THREE.CylinderGeometry(Math.min(p.w,p.d)*.56, 1.1, 3.8, 5), material(0xb6bea7, { flatShading:true }), [p.x,-2.7,p.z]);
      rock.rotation.y = i;
      // Warm inset edges make the platform boundaries readable from above.
      box(.09,.035,p.d-.4,mat.cream,[p.x-p.w/2+.2,.025,p.z]);
      box(.09,.035,p.d-.4,mat.cream,[p.x+p.w/2-.2,.025,p.z]);
      for (const sign of [-1,1]) {
        tree(p.x+sign*(p.w/2-1), p.z-p.d/2+1.1, .8+(i%3)*.15);
        const pebble = mesh(new THREE.IcosahedronGeometry(.35,0), mat.cream, [p.x+sign*(p.w/2-1.2),.2,p.z+1.5]);
        pebble.scale.set(1,.6,.8);
      }
    } else {
      const bridge = new THREE.Group();
      bridge.position.set(p.x, 0, p.z);
      bridge.rotation.y = p.angle;
      courseGroup.add(bridge);
      box(p.w, .55, p.d, mat.wood, [0, -.3, 0], bridge);
      const planks = Math.round(p.d / .55);
      for (let j = 0; j < planks; j++) {
        box(p.w + .08, .07, .46, j % 3 === 0 ? mat.cream : mat.wood,
          [0, .01, -p.d / 2 + (j + .5) * p.d / planks], bridge);
      }
      for (const sign of [-1, 1]) {
        box(.09, .12, p.d, mat.cream, [sign * (p.w / 2 - .04), .1, 0], bridge);
      }
    }
  });

  // A runway and small markers point the way to the first bridge.
  for(let z=1;z>=-1;z-=1) {
    const chevron = new THREE.Shape();
    chevron.moveTo(-.4,.2);chevron.lineTo(0,-.15);chevron.lineTo(.4,.2);chevron.lineTo(.4,.35);chevron.lineTo(0,0);chevron.lineTo(-.4,.35);
    const arrow = mesh(new THREE.ShapeGeometry(chevron), mat.cream, [0,.035,z]);
    arrow.rotation.x = -Math.PI/2;
  }
  const startRing = mesh(new THREE.TorusGeometry(1,.025,8,48),mat.cream,[0,.04,7]);
  startRing.rotation.x = -Math.PI/2;

  const starGeo = starShape();
  stars = starLocations.map(([x,z]) => {
    const star = mesh(starGeo,material(palette.star,{metalness:.3,roughness:.35}),[x,1.15,z]);
    const ring = mesh(new THREE.TorusGeometry(.6,.018,6,40),mat.star,[x,.045,z]);
    ring.rotation.x = -Math.PI/2;
    return {star,ring};
  });

  barMeshes = obstacles.map(o => {
    const group = new THREE.Group();
    box(o.length,.56,.52,mat.orange,[0,0,0],group);
    [-1,1].forEach(sign=>box(.22,.58,.54,mat.cream,[sign*(o.length/2-.3),0,0],group));
    mesh(new THREE.CylinderGeometry(.33,.33,.8,16),mat.cream,[0,-.05,0],group);
    group.position.set(o.x,.65,o.z);
    courseGroup.add(group);
    return group;
  });

  checkpointMeshes = checkpoints.map(c => {
    const ring = mesh(new THREE.TorusGeometry(.9,.045,8,48),material(0xf7f4db),[c.x,.07,c.z]);
    ring.rotation.x = -Math.PI/2;
    box(.08,1.6,.08,mat.cream,[c.x+1.15,.8,c.z]);
    box(.65,.4,.03,mat.side,[c.x+1.45,1.4,c.z]);
    return ring;
  });

  const gate = new THREE.Group();
  [-1,1].forEach(sign=>{
    box(.2,3.5,.2,mat.cream,[sign*1.5,1.75,0],gate);
    mesh(new THREE.SphereGeometry(.2,12,8),mat.star,[sign*1.5,3.65,0],gate);
  });
  box(3.2,.55,.14,mat.side,[0,3.1,0],gate);
  for(let x=-1.25;x<=1.25;x+=.5) for(let z=-.5;z<=.5;z+=.5) {
    box(.5,.025,.5,(Math.round(x*2+2.5)+Math.round(z*2+1))%2 ? mat.cream : mat.side,[x,.03,z],gate);
  }
  gate.position.set(goal.x,0,goal.z);courseGroup.add(gate);

  const salt = Number.parseInt(game.level.seed.slice(0, 8), 16) || 0;
  const random = (seed) => { const value = Math.sin(seed * 127.1 + salt) * 43758.5453; return value - Math.floor(value); };
  const length = game.level.spawn.z - game.level.goal.z + 30;
  for(let i=0;i<30;i++) cloud((random(i)-.5)*90,-7-random(i+40)*14,20-random(i+60)*length,.7+random(i+90)*1.6);
  for(let i=0;i<9;i++) {
    const rock=mesh(new THREE.IcosahedronGeometry(1.5+random(i+20)*2,0),mat.side,[(random(i+100)-.5)*65,-15,10-i*11]);
    rock.scale.y=2;
  }
}

function setupScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe9f0e7);
  scene.fog = new THREE.FogExp2(0xe9f0e7, .009);
  camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, .1, 220);
  camera.position.set(15, 24, 29);
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  $('scene').appendChild(renderer.domElement);
  renderer.domElement.tabIndex = 0;
  renderer.domElement.setAttribute('aria-label', 'Styr bollen med piltangenter eller WASD. Mellanslag hoppar, Shift bromsar, Esc pausar.');
  scene.add(new THREE.HemisphereLight(0xfffff2, 0x89a798, 1.9));
  sun = new THREE.DirectionalLight(0xfff2d8, 2.4);
  sun.position.set(-14, 30, 14);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048,2048);
  Object.assign(sun.shadow.camera, {left:-24,right:24,top:40,bottom:-40,near:1,far:110});
  sun.shadow.bias = -.0005;
  sun.shadow.normalBias = .035;
  sun.target.position.set(0,0,-20);
  scene.add(sun,sun.target);

  const ballGroup = new THREE.Group();
  mesh(new THREE.SphereGeometry(RADIUS,40,28),material(0x8b4dd0,{roughness:.32}),[0,0,0],ballGroup);
  const stripe = mesh(new THREE.SphereGeometry(RADIUS+.002,40,12,0,Math.PI*2,Math.PI*.42,Math.PI*.16),material(0xfff0d4,{roughness:.4}),[0,0,0],ballGroup);
  stripe.rotation.z = .3;
  ballMesh = ballGroup;
  scene.add(ballMesh);
  ballShadow = mesh(new THREE.CircleGeometry(.65,32),new THREE.MeshBasicMaterial({color:0x3f5132,transparent:true,opacity:.16,depthWrite:false}),[0,.06,7],scene);
  ballShadow.rotation.x = -Math.PI/2;
  ballShadow.castShadow = false;
  buildLevelView();
  $('app').dataset.camera = 'overview';
  resize();
  renderer.render(scene,camera);
  $('loading').hidden = true;
  requestAnimationFrame(frame);
}

function toast(message) {
  clearTimeout(toastTimeout);
  $('toast').textContent = message;
  $('toast').classList.add('visible');
  toastTimeout = setTimeout(()=>$('toast').classList.remove('visible'),3200);
}

function tone(frequency, duration=.12, volume=.05, delay=0) {
  if (!soundEnabled || !audio) return;
  const start = audio.currentTime+delay;
  const osc=audio.createOscillator(),gain=audio.createGain();
  osc.type='sine';osc.frequency.value=frequency;
  gain.gain.setValueAtTime(0,start);
  gain.gain.linearRampToValueAtTime(volume,start+.012);
  gain.gain.exponentialRampToValueAtTime(.001,start+duration);
  osc.connect(gain);gain.connect(audio.destination);
  osc.start(start);osc.stop(start+duration);
}

function burst(position) {
  for(let i=0;i<18;i++) {
    const particle=mesh(new THREE.IcosahedronGeometry(.07,0),i%2 ? mat.star : mat.cream,[position.x,position.y,position.z],scene);
    particle.castShadow=false;
    particles.push({mesh:particle,velocity:new THREE.Vector3((Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4),life:1});
  }
}

function processEvents(events) {
  for(const event of events) {
    if(event.type==='jump') tone(360,.16,.035);
    if(event.type==='star') {
      burst(stars[event.index].star.position);
      tone(660+game.collected.size*65);tone(990+game.collected.size*65,.18,.04,.07);
      if(game.collected.size===game.level.starLocations.length) toast('Alla stjärnor! Rulla genom målporten.');
    }
    if(event.type==='checkpoint') { toast('Checkpoint! Härifrån fortsätter du om du faller.');tone(520,.15);tone(780,.2,.04,.12); }
    if(event.type==='fall') {
      const bridge = game.checkpoint >= 0 ? game.level.bridges[game.checkpoint + 1] : null;
      resetSelectedCamera(bridge ? { x: bridge.to.x - bridge.from.x, z: bridge.to.z - bridge.from.z } : undefined);
      toast('Oj då! Tillbaka på banan. Stjärnorna är kvar.');tone(220,.3);
    }
    if(event.type==='locked') {
      const remaining = game.level.starLocations.length - game.collected.size;
      toast(`Samla ${remaining} ${remaining === 1 ? 'stjärna' : 'stjärnor'} till innan du går i mål.`);
    }
    if(event.type==='win') {
      burst(ballMesh.position);
      if(game.level.number > best) {
        best=game.level.number;
        try { localStorage.setItem('boll-longest-journey',String(best)); } catch { /* Saving progress is optional. */ }
        $('best').textContent=`LÄNGSTA RESA: ${best} ${best === 1 ? 'BANA' : 'BANOR'}`;
      }
      [523,659,784,1047].forEach((f,i)=>tone(f,.3,.06,i*.12));
      openDialog('win');
    }
  }
}

function getInput() {
  const input = {
    up: keys.has('KeyW') || keys.has('ArrowUp') || touch.has('up'),
    down: keys.has('KeyS') || keys.has('ArrowDown') || touch.has('down'),
    left: keys.has('KeyA') || keys.has('ArrowLeft') || touch.has('left'),
    right: keys.has('KeyD') || keys.has('ArrowRight') || touch.has('right'),
    brake: keys.has('ShiftLeft') || keys.has('ShiftRight') || touch.has('brake'),
    jump: keys.has('Space') || touch.has('jump'),
    jumpPressed: jumpQueued,
  };
  return thirdPerson ? { ...input, ...chaseCamera.movement(input) } : input;
}

function applyChaseCamera() {
  const { position, target } = chaseCamera;
  camera.position.set(position.x, position.y, position.z);
  camera.lookAt(target.x, target.y, target.z);
}

function applyOverheadCamera(snap = false, dt = 0) {
  const p = game.ball.position;
  const target = new THREE.Vector3(p.x, Math.max(0, p.y - RADIUS) + 12, p.z + 17);
  if (snap) camera.position.copy(target);
  else camera.position.lerp(target, 1 - Math.exp(-3 * dt));
  camera.lookAt(p.x, 0, p.z - 4.5);
}

function resetSelectedCamera(direction) {
  chaseCamera.reset(game.ball.position, direction, innerWidth < 641);
  $('app').dataset.camera = thirdPerson ? 'third-person' : 'overhead';
  resize();
  if (thirdPerson) applyChaseCamera();
  else applyOverheadCamera(true);
}

function frame(time) {
  const dt=Math.min((time-(lastTime||time))/1000,.05);
  lastTime=time;
  accumulator+=dt;
  while(accumulator>=fixedStep) {
    processEvents(game.step(fixedStep,getInput()));
    jumpQueued = false;
    accumulator-=fixedStep;
  }
  const p=game.ball.position;
  ballMesh.position.copy(p);
  ballMesh.quaternion.copy(game.ball.quaternion);
  ballMesh.visible=game.respawnTimer===0 || Math.floor(game.respawnTimer*12)%2===0;
  ballShadow.position.set(p.x,.065,p.z);
  ballShadow.visible=p.y>-1 && game.level.platforms.some(t=>onPlatform(t,p.x,p.z));
  ballShadow.material.opacity=.17/Math.max(1,p.y);
  stars.forEach(({star,ring},i)=>{
    star.visible=ring.visible=!game.collected.has(i);
    star.rotation.y=time*.001+i;
    star.position.y=1.2+Math.sin(time*.002+i)*.12;
  });
  barMeshes.forEach((bar,i)=>bar.quaternion.copy(game.bars[i].quaternion));
  checkpointMeshes.forEach((ring,i)=>ring.material.color.setHex(game.checkpoint>=i ? 0x78986c : 0xf7f4db));
  particles=particles.filter(part=>{
    part.life-=dt;
    part.velocity.y-=5*dt;
    part.mesh.position.addScaledVector(part.velocity,dt);
    part.mesh.scale.setScalar(Math.max(0,part.life));
    if(part.life<=0) {scene.remove(part.mesh);part.mesh.geometry.dispose();return false;}
    return true;
  });
  const intro=game.state==='intro';
  const mobile=innerWidth<641;
  if (intro) {
    camera.position.lerp(new THREE.Vector3(mobile?12:15,mobile?25:26,mobile?25:28),1-Math.exp(-dt*3));
    camera.lookAt(mobile?0:-9,0,mobile?-9:-10);
  } else if (game.state === 'playing') {
    if (thirdPerson) {
      chaseCamera.update(p, game.ball.velocity, dt, mobile);
      applyChaseCamera();
    } else applyOverheadCamera(false, dt);
  }
  $('timer').textContent=formatTime(game.elapsed);
  $('stars').textContent=game.collected.size;
  $('progress').style.height=`${THREE.MathUtils.clamp((game.level.spawn.z-p.z)/(game.level.spawn.z-game.level.goal.z),0,1)*100}%`;
  sun.position.set(p.x - 14, 30, p.z + 14);
  sun.target.position.set(p.x, 0, p.z - 18);
  renderer.render(scene,camera);
  requestAnimationFrame(frame);
}

function clearInput() {
  keys.clear();touch.clear();
  jumpQueued = false;
  document.querySelectorAll('.active').forEach(el=>el.classList.remove('active'));
}

function start() {
  game.start();
  resetSelectedCamera();
  $('intro').classList.add('dismissed');
  $('intro').inert=true;
  $('app').classList.add('playing');
  $('pause').disabled=false;
  renderer?.domElement.focus({preventScroll:true});
  toast(matchMedia('(pointer: coarse)').matches
    ? 'Följ stjärnorna. Använd Hoppa och Bromsa!'
    : 'Mellanslag hoppar · Shift bromsar. Följ stjärnorna!');
}

function openDialog(type='pause') {
  clearInput();
  $('dialog').hidden=false;
  const win=type==='win';
  $('dialog-symbol').textContent=win?'✦':'Ⅱ';
  $('dialog-kicker').textContent=win?`BANA ${game.level.number} AVKLARAD`:'TA ETT ANDETAG';
  $('dialog-title').textContent=win?'Du nådde hela vägen!':'En liten paus.';
  $('dialog-text').textContent=win?`${game.collected.size} av ${game.level.starLocations.length} stjärnor på ${formatTime(game.elapsed)}.\n${game.falls===0?'Och inte ett enda fall. Snyggt!':`${game.falls} fall, men du gav inte upp.`}`:'Molnen finns kvar när du är redo.';
  $('resume').innerHTML=win?'Nästa bana <span>↗</span>':'Fortsätt rulla <span>↗</span>';
  $('restart-dialog').hidden=win;
  $('resume').focus();
}

function closeDialog() {
  $('dialog').hidden=true;
  game.resume();
  renderer?.domElement.focus({preventScroll:true});
}

function togglePause() {
  if(game.state==='playing') {game.pause();openDialog();}
  else if(game.state==='paused') closeDialog();
}

function restart(advance = false) {
  clearInput();
  if (advance) {
    if (!game.nextLevel()) return;
  } else game.newLevel();
  game.start();
  buildLevelView();
  accumulator = 0;
  $('dialog').hidden=true;
  $('intro').classList.add('dismissed');$('intro').inert=true;
  $('app').classList.add('playing');
  $('pause').disabled=false;
  renderer?.domElement.focus({preventScroll:true});
  checkpointMeshes.forEach(ring=>ring.material.color.setHex(0xf7f4db));
  resetSelectedCamera();
  toast(advance ? `Bana ${game.level.number}! En helt ny väg väntar.` : 'En ny bana är redo. Nu rullar vi!');
}

function resize() {
  camera.aspect=innerWidth/innerHeight;
  camera.fov=game.state==='intro'||!thirdPerson?42:(innerWidth<641?60:54);
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
}

$('play').addEventListener('click',start);
$('pause').disabled=true;
$('pause').addEventListener('click',togglePause);
$('restart').addEventListener('click',()=>restart());
$('restart-dialog').addEventListener('click',()=>restart());
$('resume').addEventListener('click',()=>game.state==='won'?restart(true):closeDialog());

function updateCameraChoice() {
  $('third-person').checked = thirdPerson;
  $('camera-choice').textContent = thirdPerson
    ? 'Aktuell vy: Tredjeperson – bakom bollen.'
    : 'Aktuell vy: Ovanifrån – klassisk styrning.';
}

function openOptions() {
  if ($('options-dialog').open) return;
  optionsFocus = document.activeElement;
  returnToDialog = !$('dialog').hidden;
  resumeAfterOptions = game.state === 'playing';
  if (resumeAfterOptions) game.pause();
  clearInput();
  if (returnToDialog) $('dialog').hidden = true;
  updateCameraChoice();
  $('options-dialog').showModal();
  $('third-person').focus();
}

$('options').addEventListener('click', openOptions);
$('pause-options').addEventListener('click', openOptions);
$('third-person').addEventListener('change', () => {
  thirdPerson = $('third-person').checked;
  clearInput();
  try { localStorage.setItem('boll-camera-mode', thirdPerson ? 'third-person' : 'overhead'); } catch { /* Keep the current-session preference. */ }
  updateCameraChoice();
  if (game.state !== 'intro') {
    const v = game.ball.velocity;
    resetSelectedCamera(Math.hypot(v.x, v.z) > 0.45 ? { x: v.x, z: v.z } : undefined);
  }
});
$('options-dialog').addEventListener('close', () => {
  clearInput();
  if (returnToDialog) {
    $('dialog').hidden = false;
    optionsFocus?.focus();
  } else if (resumeAfterOptions && !document.hidden && game.state === 'paused') {
    game.resume();
    renderer?.domElement.focus({ preventScroll: true });
  } else if (game.state === 'paused') openDialog();
  else optionsFocus?.focus();
  resumeAfterOptions = false;
  returnToDialog = false;
  optionsFocus = null;
});
updateCameraChoice();
$('sound').addEventListener('click',async()=>{
  try {
    audio??=new (window.AudioContext||window.webkitAudioContext)();
    await audio.resume();soundEnabled=!soundEnabled;
    $('sound').setAttribute('aria-label',soundEnabled?'Stäng av ljud':'Slå på ljud');
    $('sound-waves').setAttribute('d',soundEnabled?'M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14':'m16 9 6 6m0-6-6 6');
    if(soundEnabled) tone(660);
  } catch { toast('Ljud är inte tillgängligt i den här webbläsaren.'); }
});

window.addEventListener('keydown',event=>{
  if ($('options-dialog').open) return;
  if(event.code==='Tab' && !$('dialog').hidden) {
    const buttons=[...$('dialog').querySelectorAll('button:not([hidden])')];
    const first=buttons[0],last=buttons.at(-1);
    if(event.shiftKey && document.activeElement===first) {event.preventDefault();last.focus();}
    else if(!event.shiftKey && document.activeElement===last) {event.preventDefault();first.focus();}
    return;
  }
  if(event.target instanceof HTMLButtonElement && ['Space','Enter'].includes(event.code)) return;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(event.code)) event.preventDefault();
  if(event.repeat) return;
  if(event.code==='Space' && game.state==='playing') jumpQueued = true;
  if(event.code==='Escape') togglePause();
  if(event.code==='KeyR' && ['playing','paused','won'].includes(game.state)) restart();
  if(event.code==='Enter' && game.state==='intro') start();
  keys.add(event.code);
});
window.addEventListener('keyup',event=>keys.delete(event.code));
function autoPause() {
  clearInput();
  if ($('options-dialog').open) { resumeAfterOptions = false; return; }
  if(game.state==='playing') {game.pause();openDialog();}
}
window.addEventListener('blur',autoPause);
document.addEventListener('visibilitychange',()=>{if(document.hidden) autoPause();});
window.addEventListener('resize',()=>{if(renderer) resize();});
document.querySelectorAll('[data-direction],#touch-brake,#touch-jump').forEach(button=>{
  const direction=button.dataset.direction||(button.id==='touch-jump'?'jump':'brake');
  button.addEventListener('pointerdown',event=>{
    event.preventDefault();button.setPointerCapture(event.pointerId);
    if(direction==='jump' && game.state==='playing') jumpQueued = true;
    touch.add(direction);button.classList.add('active');
  });
  const release=()=>{touch.delete(direction);button.classList.remove('active');};
  button.addEventListener('pointerup',release);
  button.addEventListener('pointercancel',release);
  button.addEventListener('lostpointercapture',release);
  if (direction === 'jump') button.addEventListener('click', event => {
    // Keyboard and assistive activation use click detail 0. Pointer presses
    // already jump on pointerdown and must not jump again on release.
    if (event.detail === 0 && game.state === 'playing') jumpQueued = true;
  });
});

try { setupScene(); } catch(error) {
  console.error('Kunde inte starta 3D-spelet:',error);
  $('loading').hidden=true;
  $('error').hidden=false;
}
