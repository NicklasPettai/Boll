(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const ma="180",Rh=0,Za=1,Ph=2,yc=1,Mc=2,Rn=3,jn=0,Be=1,Pn=2,qn=0,Hi=1,$a=2,Ka=3,Ja=4,Lh=5,li=100,Ih=101,Dh=102,Nh=103,Uh=104,Fh=200,Oh=201,Bh=202,zh=203,yo=204,Mo=205,Vh=206,Hh=207,kh=208,Gh=209,Wh=210,Xh=211,qh=212,Yh=213,jh=214,So=0,Eo=1,wo=2,Xi=3,To=4,bo=5,Ao=6,Co=7,Sc=0,Zh=1,$h=2,Yn=0,Kh=1,Jh=2,Qh=3,Ec=4,tu=5,eu=6,nu=7,wc=300,qi=301,Yi=302,Ro=303,Po=304,wr=306,Lo=1e3,fi=1001,Io=1002,on=1003,iu=1004,zs=1005,dn=1006,Ir=1007,pi=1008,gn=1009,Tc=1010,bc=1011,xs=1012,ga=1013,gi=1014,Ln=1015,Ls=1016,va=1017,_a=1018,ys=1020,Ac=35902,Cc=35899,Rc=1021,Pc=1022,sn=1023,Ms=1026,Ss=1027,Lc=1028,xa=1029,Ic=1030,ya=1031,Ma=1033,pr=33776,mr=33777,gr=33778,vr=33779,Do=35840,No=35841,Uo=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,Vo=37808,Ho=37809,ko=37810,Go=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,jo=37816,Zo=37817,$o=37818,Ko=37819,Jo=37820,Qo=37821,ta=36492,ea=36494,na=36495,ia=36283,sa=36284,ra=36285,oa=36286,su=3200,ru=3201,Dc=0,ou=1,Gn="",Xe="srgb",ji="srgb-linear",xr="linear",re="srgb",Si=7680,Qa=519,au=512,lu=513,cu=514,Nc=515,hu=516,uu=517,du=518,fu=519,tl=35044,el="300 es",fn=2e3,yr=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const ds=Math.PI/180,Es=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Yt(s,t,e){return Math.max(t,Math.min(e,s))}function Sa(s,t){return(s%t+t)%t}function pu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function mu(s,t,e){return s!==t?(e-s)/(t-s):0}function fs(s,t,e){return(1-e)*s+e*t}function gu(s,t,e,n){return fs(s,t,1-Math.exp(-e*n))}function vu(s,t=1){return t-Math.abs(Sa(s,t*2)-t)}function _u(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function xu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Mu(s,t){return s+Math.random()*(t-s)}function Su(s){return s*(.5-Math.random())}function Eu(s){s!==void 0&&(nl=s);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(s){return s*ds}function Tu(s){return s*Es}function bu(s){return(s&s-1)===0&&s!==0}function Au(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ru(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pu={DEG2RAD:ds,RAD2DEG:Es,generateUUID:yi,clamp:Yt,euclideanModulo:Sa,mapLinear:pu,inverseLerp:mu,lerp:fs,damp:gu,pingpong:vu,smoothstep:_u,smootherstep:xu,randInt:yu,randFloat:Mu,randFloatSpread:Su,seededRandom:Eu,degToRad:wu,radToDeg:Tu,isPowerOfTwo:bu,ceilPowerOfTwo:Au,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Ru,normalize:Ie,denormalize:Bi};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Is=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,p*_);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*_;if(l=l*m+u*x,c=c*m+f*x,h=h*m+g*x,d=d*m+v*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new B,il=new Is;class Wt{constructor(t,e,n,i,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],b=i[2],A=i[5],C=i[8];return r[0]=o*v+a*_+l*b,r[3]=o*m+a*y+l*A,r[6]=o*p+a*x+l*C,r[1]=c*v+h*_+d*b,r[4]=c*m+h*y+d*A,r[7]=c*p+h*x+d*C,r[2]=u*v+f*_+g*b,r[5]=u*m+f*y+g*A,r[8]=u*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Wt;function Uc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lu(){const s=Mr("canvas");return s.style.display="block",s}const sl={};function ws(s){s in sl||(sl[s]=!0,console.warn(s))}function Iu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const rl=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Du(){const s={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?xr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ji]:{primaries:t,whitePoint:n,transfer:xr,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:re,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),s}const ee=Du();function Nn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ei;class Nu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ei===void 0&&(Ei=Mr("canvas")),Ei.width=t.width,Ei.height=t.height;const i=Ei.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ei}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Nn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uu=0;class Ea{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ur(i[o].image)):r.push(Ur(i[o]))}else r=Ur(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ur(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fu=0;const Fr=new B;class ze extends Ji{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=fi,i=fi,r=dn,o=pi,a=sn,l=gn,c=ze.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=yi(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=wc;ze.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,b=(p+1)/2,A=(h+u)/4,C=(d+v)/4,L=(g+m)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=C/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=L/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=L/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ou extends Ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new ze(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ea(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fc extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bu extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Hs.subVectors(this.max,ns),wi.subVectors(t.a,ns),Ti.subVectors(t.b,ns),bi.subVectors(t.c,ns),Fn.subVectors(Ti,wi),On.subVectors(bi,Ti),Jn.subVectors(wi,bi);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Jn.z,Jn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Jn.z,0,-Jn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Jn.y,Jn.x,0];return!Or(e,wi,Ti,bi,Hs)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,wi,Ti,bi,Hs))?!1:(ks.crossVectors(Fn,On),e=[ks.x,ks.y,ks.z],Or(e,wi,Ti,bi,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yn=[new B,new B,new B,new B,new B,new B,new B,new B],Je=new B,Vs=new Ds,wi=new B,Ti=new B,bi=new B,Fn=new B,On=new B,Jn=new B,ns=new B,Hs=new B,ks=new B,Qn=new B;function Or(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qn.fromArray(s,r);const a=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zu=new Ds,is=new B,Br=new B;let wa=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Br)),this.expandByPoint(is.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Mn=new B,zr=new B,Gs=new B,Bn=new B,Vr=new B,Ws=new B,Hr=new B;let Vu=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zr.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(zr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gs),a=Bn.dot(this.direction),l=-Bn.dot(Gs),c=Bn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(zr).addScaledVector(Gs,u),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,r){Vr.subVectors(e,t),Ws.subVectors(n,t),Hr.crossVectors(Vr,Ws);let o=this.direction.dot(Hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const l=a*this.direction.dot(Ws.crossVectors(Bn,Ws));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(Bn));if(c<0||l+c>o)return null;const h=-a*Bn.dot(Hr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class _e{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,g,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,v,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,ku)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),zn.crossVectors(n,Ge),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),zn.crossVectors(n,Ge)),zn.normalize(),Xs.crossVectors(Ge,zn),i[0]=zn.x,i[4]=Xs.x,i[8]=Ge.x,i[1]=zn.y,i[5]=Xs.y,i[9]=Ge.y,i[2]=zn.z,i[6]=Xs.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],b=n[15],A=i[0],C=i[4],L=i[8],w=i[12],M=i[1],P=i[5],F=i[9],D=i[13],z=i[2],U=i[6],N=i[10],Y=i[14],H=i[3],$=i[7],ht=i[11],dt=i[15];return r[0]=o*A+a*M+l*z+c*H,r[4]=o*C+a*P+l*U+c*$,r[8]=o*L+a*F+l*N+c*ht,r[12]=o*w+a*D+l*Y+c*dt,r[1]=h*A+d*M+u*z+f*H,r[5]=h*C+d*P+u*U+f*$,r[9]=h*L+d*F+u*N+f*ht,r[13]=h*w+d*D+u*Y+f*dt,r[2]=g*A+v*M+m*z+p*H,r[6]=g*C+v*P+m*U+p*$,r[10]=g*L+v*F+m*N+p*ht,r[14]=g*w+v*D+m*Y+p*dt,r[3]=_*A+y*M+x*z+b*H,r[7]=_*C+y*P+x*U+b*$,r[11]=_*L+y*F+x*N+b*ht,r[15]=_*w+y*D+x*Y+b*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+v*(+e*l*f-e*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=d*m*c-v*u*c+v*l*f-a*m*f-d*l*p+a*u*p,y=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,x=h*v*c-g*d*c+g*a*f-o*v*f-h*a*p+o*d*p,b=g*d*l-h*v*l-g*a*u+o*v*u+h*a*m-o*d*m,A=e*_+n*y+i*x+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=_*C,t[1]=(v*u*r-d*m*r-v*i*f+n*m*f+d*i*p-n*u*p)*C,t[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*p+n*l*p)*C,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*C,t[4]=y*C,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*C,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*C,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*f+e*l*f)*C,t[8]=x*C,t[9]=(g*d*r-h*v*r-g*n*f+e*v*f+h*n*p-e*d*p)*C,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*C,t[12]=b*C,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*C,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,m=o*d,p=a*d,_=l*c,y=l*h,x=l*d,b=n.x,A=n.y,C=n.z;return i[0]=(1-(v+p))*b,i[1]=(f+x)*b,i[2]=(g-y)*b,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(u+p))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+y)*C,i[9]=(m-_)*C,i[10]=(1-(u+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ai.set(i[0],i[1],i[2]).length();const o=Ai.set(i[4],i[5],i[6]).length(),a=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);const c=1/r,h=1/o,d=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=d,Qe.elements[9]*=d,Qe.elements[10]*=d,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=fn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===fn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===yr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=fn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===fn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===yr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new B,Qe=new _e,Hu=new B(0,0,0),ku=new B(1,1,1),zn=new B,Xs=new B,Ge=new B,al=new _e,ll=new Is;class vn{constructor(t=0,e=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gu=0;const cl=new B,Ci=new Is,Sn=new _e,qs=new B,ss=new B,Wu=new B,Xu=new Is,hl=new B(1,0,0),ul=new B(0,1,0),dl=new B(0,0,1),fl={type:"added"},qu={type:"removed"},Ri={type:"childadded",child:null},kr={type:"childremoved",child:null};class Ce extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new B,e=new vn,n=new Is,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Wt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ss,qs,this.up):Sn.lookAt(qs,ss,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qu),kr.child=t,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,Wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ce.DEFAULT_UP=new B(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new B,En=new B,Gr=new B,wn=new B,Pi=new B,Li=new B,pl=new B,Wr=new B,Xr=new B,qr=new B,Yr=new ve,jr=new ve,Zr=new ve;class nn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){tn.subVectors(i,e),En.subVectors(n,e),Gr.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(En),l=tn.dot(Gr),c=En.dot(En),h=En.dot(Gr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Yr.setScalar(0),jr.setScalar(0),Zr.setScalar(0),Yr.fromBufferAttribute(t,e),jr.fromBufferAttribute(t,n),Zr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Yr,r.x),o.addScaledVector(jr,r.y),o.addScaledVector(Zr,r.z),o}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),En.subVectors(t,e),tn.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),tn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Pi.subVectors(i,n),Li.subVectors(r,n),Wr.subVectors(t,n);const l=Pi.dot(Wr),c=Li.dot(Wr);if(l<=0&&c<=0)return e.copy(n);Xr.subVectors(t,i);const h=Pi.dot(Xr),d=Li.dot(Xr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Pi,o);qr.subVectors(t,r);const f=Pi.dot(qr),g=Li.dot(qr);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Li,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return pl.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(pl,a);const p=1/(m+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function $r(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Sa(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$r(o,r,t+1/3),this.g=$r(o,r,t),this.b=$r(o,r,t-1/3)}return ee.colorSpaceToWorking(this,i),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ee.workingToColorSpace(Pe.copy(this),t),Math.round(Yt(Pe.r*255,0,255))*65536+Math.round(Yt(Pe.g*255,0,255))*256+Math.round(Yt(Pe.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,r=Pe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Xe){ee.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Ys);const n=fs(Vn.h,Ys.h,e),i=fs(Vn.s,Ys.s,e),r=fs(Vn.l,Ys.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Jt;Jt.NAMES=Bc;let Yu=0,Ns=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Hi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Mo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Ta extends Ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new B,js=new mt;let ju=0;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ju++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}}class zc extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vc extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zu=0;const Ze=new _e,Kr=new Ce,Ii=new B,We=new Ds,rs=new Ds,Te=new B;class Ve extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uc(t)?Vc:zc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(We.min,rs.min),We.expandByPoint(Te),Te.addVectors(We.max,rs.max),We.expandByPoint(Te)):(We.expandByPoint(rs.min),We.expandByPoint(rs.max))}We.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(t,c),Te.add(Ii)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new B,l[L]=new B;const c=new B,h=new B,d=new B,u=new mt,f=new mt,g=new mt,v=new B,m=new B;function p(L,w,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(v),a[w].add(v),a[M].add(v),l[L].add(m),l[w].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,w=_.length;L<w;++L){const M=_[L],P=M.start,F=M.count;for(let D=P,z=P+F;D<z;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new B,x=new B,b=new B,A=new B;function C(L){b.fromBufferAttribute(i,L),A.copy(b);const w=a[L];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(A,w);const P=x.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,w=_.length;L<w;++L){const M=_[L],P=M.start,F=M.count;for(let D=P,z=P+F;D<z;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new _e,ti=new Vu,Zs=new wa,gl=new B,$s=new B,Ks=new B,Js=new B,Jr=new B,Qs=new B,vl=new B,tr=new B;class pn extends Ce{constructor(t=new Ve,e=new Ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Jr.fromBufferAttribute(d,t),o?Qs.addScaledVector(Jr,h):Qs.addScaledVector(Jr.sub(e),h))}e.add(Qs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Zs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Zs,gl)===null||ti.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(r).invert(),ti.copy(t.ray).applyMatrix4(ml),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,b=y;x<b;x+=3){const A=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);i=er(this,p,t,n,c,h,d,A,C,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=er(this,o,t,n,c,h,d,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,b=y;x<b;x+=3){const A=x,C=x+1,L=x+2;i=er(this,p,t,n,c,h,d,A,C,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;i=er(this,o,t,n,c,h,d,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function $u(s,t,e,n,i,r,o,a){let l;if(t.side===Be?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===jn,a),l===null)return null;tr.copy(a),tr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:s}}function er(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,$s),s.getVertexPosition(l,Ks),s.getVertexPosition(c,Js);const h=$u(s,t,e,n,$s,Ks,Js,vl);if(h){const d=new B;nn.getBarycoord(vl,$s,Ks,Js,d),i&&(h.uv=nn.getInterpolatedAttribute(i,a,l,c,d,new mt)),r&&(h.uv1=nn.getInterpolatedAttribute(r,a,l,c,d,new mt)),o&&(h.normal=nn.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new B,materialIndex:0};nn.getNormal($s,Ks,Js,u.normal),h.face=u,h.barycoord=d}return h}class Qi extends Ve{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(v,m,p,_,y,x,b,A,C,L,w){const M=x/C,P=b/L,F=x/2,D=b/2,z=A/2,U=C+1,N=L+1;let Y=0,H=0;const $=new B;for(let ht=0;ht<N;ht++){const dt=ht*P-D;for(let lt=0;lt<U;lt++){const kt=lt*M-F;$[v]=kt*_,$[m]=dt*y,$[p]=z,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=A>0?1:-1,h.push($.x,$.y,$.z),d.push(lt/C),d.push(1-ht/L),Y+=1}}for(let ht=0;ht<L;ht++)for(let dt=0;dt<C;dt++){const lt=u+dt+U*ht,kt=u+dt+U*(ht+1),Kt=u+(dt+1)+U*(ht+1),jt=u+(dt+1)+U*ht;l.push(lt,kt,jt),l.push(kt,Kt,jt),H+=6}a.addGroup(f,H,w),f+=H,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=Zi(s[e]);for(const i in n)t[i]=n[i]}return t}function Ku(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Ju={clone:Zi,merge:De};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kc extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new B,_l=new mt,xl=new mt;class Ke extends kc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,xl),e.subVectors(xl,_l)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=-90,Ni=1;class ed extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ke(Di,Ni,t,e);i.layers=this.layers,this.add(i);const r=new Ke(Di,Ni,t,e);r.layers=this.layers,this.add(r);const o=new Ke(Di,Ni,t,e);o.layers=this.layers,this.add(o);const a=new Ke(Di,Ni,t,e);a.layers=this.layers,this.add(a);const l=new Ke(Di,Ni,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Di,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gc extends ze{constructor(t=[],e=qi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nd extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Gc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qi(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:qn});r.uniforms.tEquirect.value=e;const o=new pn(i,r),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=dn),new ed(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class In extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const id={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(id)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ba{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sd extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const to=new B,rd=new B,od=new Wt;class ri{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=to.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(to),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||od.getNormalMatrix(t),i=this.coplanarPoint(to).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new wa,ad=new mt(.5,.5),nr=new B;class Aa{constructor(t=new ri,e=new ri,n=new ri,i=new ri,r=new ri,o=new ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],y=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,p-g,b-_).normalize(),i[1].setComponents(c+o,f+h,p+g,b+_).normalize(),i[2].setComponents(c+a,f+d,p+v,b+y).normalize(),i[3].setComponents(c-a,f-d,p-v,b-y).normalize(),n)i[4].setComponents(l,u,m,x).normalize(),i[5].setComponents(c-l,f-u,p-m,b-x).normalize();else if(i[4].setComponents(c-l,f-u,p-m,b-x).normalize(),e===fn)i[5].setComponents(c+l,f+u,p+m,b+x).normalize();else if(e===yr)i[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){ei.center.set(0,0,0);const e=ad.distanceTo(t.center);return ei.radius=.7071067811865476+e,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(nr.x=i.normal.x>0?t.max.x:t.min.x,nr.y=i.normal.y>0?t.max.y:t.min.y,nr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wc extends ze{constructor(t,e,n=gi,i,r,o,a=on,l=on,c,h=Ms,d=1){if(h!==Ms&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Xc extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ca extends Ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new B,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ts extends Ve{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function _(){const x=new B,b=new B;let A=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const w=[],M=L/r,P=M*(e-t)+t;for(let F=0;F<=i;F++){const D=F/i,z=D*l+a,U=Math.sin(z),N=Math.cos(z);b.x=P*U,b.y=-M*n+m,b.z=P*N,d.push(b.x,b.y,b.z),x.set(U,C,N).normalize(),u.push(x.x,x.y,x.z),f.push(D,1-M),w.push(g++)}v.push(w)}for(let L=0;L<i;L++)for(let w=0;w<r;w++){const M=v[w][L],P=v[w+1][L],F=v[w+1][L+1],D=v[w][L+1];(t>0||w!==0)&&(h.push(M,P,D),A+=3),(e>0||w!==r-1)&&(h.push(P,F,D),A+=3)}c.addGroup(p,A,0),p+=A}function y(x){const b=g,A=new mt,C=new B;let L=0;const w=x===!0?t:e,M=x===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const z=F/i*l+a,U=Math.cos(z),N=Math.sin(z);C.x=w*N,C.y=m*M,C.z=w*U,d.push(C.x,C.y,C.z),u.push(0,M,0),A.x=U*.5+.5,A.y=N*.5*M+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){const D=b+F,z=P+F;x===!0?h.push(z,z+1,D):h.push(z+1,z,D),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ra extends Ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new B,x=new B,b=new B;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],x),f(e[A+2],b),l(y,x,b,_)}function l(_,y,x,b){const A=b+1,C=[];for(let L=0;L<=A;L++){C[L]=[];const w=_.clone().lerp(x,L/A),M=y.clone().lerp(x,L/A),P=A-L;for(let F=0;F<=P;F++)F===0&&L===A?C[L][F]=w:C[L][F]=w.clone().lerp(M,F/P)}for(let L=0;L<A;L++)for(let w=0;w<2*(A-L)-1;w++){const M=Math.floor(w/2);w%2===0?(u(C[L][M+1]),u(C[L+1][M]),u(C[L][M])):(u(C[L][M+1]),u(C[L+1][M+1]),u(C[L+1][M]))}}function c(_){const y=new B;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(_),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const _=new B;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const x=m(_)/2/Math.PI+.5,b=p(_)/Math.PI+.5;o.push(x,1-b)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){const y=o[_+0],x=o[_+2],b=o[_+4],A=Math.max(y,x,b),C=Math.min(y,x,b);A>.9&&C<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const _=new B,y=new B,x=new B,b=new B,A=new mt,C=new mt,L=new mt;for(let w=0,M=0;w<r.length;w+=9,M+=6){_.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),b.copy(_).add(y).add(x).divideScalar(3);const P=m(b);v(A,M+0,_,P),v(C,M+2,y,P),v(L,M+4,x,P)}}function v(_,y,x,b){b<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.vertices,t.indices,t.radius,t.details)}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new mt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,i=[],r=[],o=[],a=new B,l=new _e;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pa extends _n{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ld extends Pa{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function La(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ir=new B,eo=new La,no=new La,io=new La;class cd extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ir.subVectors(i[0],i[1]).add(i[0]),c=ir);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ir.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),eo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),no.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),io.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),no.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),io.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(eo.calc(l),no.calc(l),io.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yl(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function hd(s,t){const e=1-s;return e*e*t}function ud(s,t){return 2*(1-s)*s*t}function dd(s,t){return s*s*t}function ps(s,t,e,n){return hd(s,t)+ud(s,e)+dd(s,n)}function fd(s,t){const e=1-s;return e*e*e*t}function pd(s,t){const e=1-s;return 3*e*e*s*t}function md(s,t){return 3*(1-s)*s*s*t}function gd(s,t){return s*s*s*t}function ms(s,t,e,n,i){return fd(s,t)+pd(s,e)+md(s,n)+gd(s,i)}class qc extends _n{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(t,i.x,r.x,o.x,a.x),ms(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vd extends _n{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ms(t,i.x,r.x,o.x,a.x),ms(t,i.y,r.y,o.y,a.y),ms(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yc extends _n{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends _n{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jc extends _n{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ps(t,i.x,r.x,o.x),ps(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends _n{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ps(t,i.x,r.x,o.x),ps(t,i.y,r.y,o.y),ps(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zc extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(yl(a,l.x,c.x,h.x,d.x),yl(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var aa=Object.freeze({__proto__:null,ArcCurve:ld,CatmullRomCurve3:cd,CubicBezierCurve:qc,CubicBezierCurve3:vd,EllipseCurve:Pa,LineCurve:Yc,LineCurve3:_d,QuadraticBezierCurve:jc,QuadraticBezierCurve3:xd,SplineCurve:Zc});class yd extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new aa[i.type]().fromJSON(i))}return this}}class Ml extends yd{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yc(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new jc(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new qc(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Pa(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Tr=class extends Ml{constructor(t){super(t),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ml().fromJSON(i))}return this}};function Md(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=$c(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=bd(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let u=e;u<i;u+=e){const f=s[u],g=s[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return bs(r,o,e,a,l,c,0),o}function $c(s,t,e,n,i){let r;if(i===Od(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Sl(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Sl(o/n|0,s[o],s[o+1],r);return r&&$i(r,r.next)&&(Cs(r),r=r.next),r}function _i(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&($i(e,e.next)||me(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bs(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Ld(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Ed(s,n,i,r):Sd(s)){t.push(l.i,s.i,c.i),Cs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=wd(_i(s),t),bs(s,t,e,n,i,r,2)):o===2&&Td(s,t,e,n,i,r):bs(_i(s),t,e,n,i,r,1);break}}}function Sd(s){const t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),u=Math.max(i,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&hs(i,a,r,l,o,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ed(s,t,e,n){const i=s.prev,r=s,o=s.next;if(me(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),v=Math.max(a,l,c),m=Math.max(h,d,u),p=la(f,g,t,e,n),_=la(v,m,t,e,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&hs(a,h,l,d,c,u,y.x,y.y)&&me(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&hs(a,h,l,d,c,u,x.x,x.y)&&me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&hs(a,h,l,d,c,u,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&hs(a,h,l,d,c,u,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wd(s,t){let e=s;do{const n=e.prev,i=e.next.next;!$i(n,i)&&Jc(n,e,e.next,i)&&As(n,i)&&As(i,n)&&(t.push(n.i,e.i,i.i),Cs(e),Cs(e.next),e=s=i),e=e.next}while(e!==s);return _i(e)}function Td(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nd(o,a)){let l=Qc(o,a);o=_i(o,o.next),l=_i(l,l.next),bs(o,t,e,n,i,r,0),bs(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function bd(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=$c(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Dd(c))}i.sort(Ad);for(let r=0;r<i.length;r++)e=Cd(i[r],e);return e}function Ad(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Cd(s,t){const e=Rd(s,t);if(!e)return t;const n=Qc(e,s);return _i(n,n.next),_i(e,e.next)}function Rd(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if($i(s,e))return e;do{if($i(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Kc(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);As(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Pd(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Pd(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function Ld(s,t,e,n){let i=s;do i.z===0&&(i.z=la(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Id(i)}function Id(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function la(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Dd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Kc(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function hs(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Kc(s,t,e,n,i,r,o,a)}function Nd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ud(s,t)&&(As(s,t)&&As(t,s)&&Fd(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||$i(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function $i(s,t){return s.x===t.x&&s.y===t.y}function Jc(s,t,e,n){const i=rr(me(s,t,e)),r=rr(me(s,t,n)),o=rr(me(e,n,s)),a=rr(me(e,n,t));return!!(i!==r&&o!==a||i===0&&sr(s,e,t)||r===0&&sr(s,n,t)||o===0&&sr(e,s,n)||a===0&&sr(e,t,n))}function sr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function rr(s){return s>0?1:s<0?-1:0}function Ud(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Jc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function As(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function Fd(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Qc(s,t){const e=ca(s.i,s.x,s.y),n=ca(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sl(s,t,e,n){const i=ca(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ca(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Od(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Bd{static triangulate(t,e,n=2){return Md(t,e,n)}}class Dn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];El(t),wl(n,t);let o=t.length;e.forEach(El);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,wl(n,e[l]);const a=Bd.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function El(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function wl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ia extends Ve{constructor(t=new Tr([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:zd;let y,x=!1,b,A,C,L;p&&(y=p.getSpacedPoints(h),x=!0,u=!1,b=p.computeFrenetFrames(h,!1),A=new B,C=new B,L=new B),u||(m=0,f=0,g=0,v=0);const w=a.extractPoints(c);let M=w.shape;const P=w.holes;if(!Dn.isClockWise(M)){M=M.reverse();for(let it=0,Q=P.length;it<Q;it++){const J=P[it];Dn.isClockWise(J)&&(P[it]=J.reverse())}}function D(it){const J=10000000000000001e-36;let K=it[0];for(let ft=1;ft<=it.length;ft++){const st=ft%it.length,pt=it[st],Vt=pt.x-K.x,zt=pt.y-K.y,R=Vt*Vt+zt*zt,S=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(K.x),Math.abs(K.y)),G=J*S*S;if(R<=G){it.splice(st,1),ft--;continue}K=pt}}D(M),P.forEach(D);const z=P.length,U=M;for(let it=0;it<z;it++){const Q=P[it];M=M.concat(Q)}function N(it,Q,J){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Q,J)}const Y=M.length;function H(it,Q,J){let K,ft,st;const pt=it.x-Q.x,Vt=it.y-Q.y,zt=J.x-it.x,R=J.y-it.y,S=pt*pt+Vt*Vt,G=pt*R-Vt*zt;if(Math.abs(G)>Number.EPSILON){const q=Math.sqrt(S),nt=Math.sqrt(zt*zt+R*R),j=Q.x-Vt/q,Lt=Q.y+pt/q,ut=J.x-R/nt,Ct=J.y+zt/nt,Rt=((ut-j)*R-(Ct-Lt)*zt)/(pt*R-Vt*zt);K=j+pt*Rt-it.x,ft=Lt+Vt*Rt-it.y;const rt=K*K+ft*ft;if(rt<=2)return new mt(K,ft);st=Math.sqrt(rt/2)}else{let q=!1;pt>Number.EPSILON?zt>Number.EPSILON&&(q=!0):pt<-Number.EPSILON?zt<-Number.EPSILON&&(q=!0):Math.sign(Vt)===Math.sign(R)&&(q=!0),q?(K=-Vt,ft=pt,st=Math.sqrt(S)):(K=pt,ft=Vt,st=Math.sqrt(S/2))}return new mt(K/st,ft/st)}const $=[];for(let it=0,Q=U.length,J=Q-1,K=it+1;it<Q;it++,J++,K++)J===Q&&(J=0),K===Q&&(K=0),$[it]=H(U[it],U[J],U[K]);const ht=[];let dt,lt=$.concat();for(let it=0,Q=z;it<Q;it++){const J=P[it];dt=[];for(let K=0,ft=J.length,st=ft-1,pt=K+1;K<ft;K++,st++,pt++)st===ft&&(st=0),pt===ft&&(pt=0),dt[K]=H(J[K],J[st],J[pt]);ht.push(dt),lt=lt.concat(dt)}let kt;if(m===0)kt=Dn.triangulateShape(U,P);else{const it=[],Q=[];for(let J=0;J<m;J++){const K=J/m,ft=f*Math.cos(K*Math.PI/2),st=g*Math.sin(K*Math.PI/2)+v;for(let pt=0,Vt=U.length;pt<Vt;pt++){const zt=N(U[pt],$[pt],st);Dt(zt.x,zt.y,-ft),K===0&&it.push(zt)}for(let pt=0,Vt=z;pt<Vt;pt++){const zt=P[pt];dt=ht[pt];const R=[];for(let S=0,G=zt.length;S<G;S++){const q=N(zt[S],dt[S],st);Dt(q.x,q.y,-ft),K===0&&R.push(q)}K===0&&Q.push(R)}}kt=Dn.triangulateShape(it,Q)}const Kt=kt.length,jt=g+v;for(let it=0;it<Y;it++){const Q=u?N(M[it],lt[it],jt):M[it];x?(C.copy(b.normals[0]).multiplyScalar(Q.x),A.copy(b.binormals[0]).multiplyScalar(Q.y),L.copy(y[0]).add(C).add(A),Dt(L.x,L.y,L.z)):Dt(Q.x,Q.y,0)}for(let it=1;it<=h;it++)for(let Q=0;Q<Y;Q++){const J=u?N(M[Q],lt[Q],jt):M[Q];x?(C.copy(b.normals[it]).multiplyScalar(J.x),A.copy(b.binormals[it]).multiplyScalar(J.y),L.copy(y[it]).add(C).add(A),Dt(L.x,L.y,L.z)):Dt(J.x,J.y,d/h*it)}for(let it=m-1;it>=0;it--){const Q=it/m,J=f*Math.cos(Q*Math.PI/2),K=g*Math.sin(Q*Math.PI/2)+v;for(let ft=0,st=U.length;ft<st;ft++){const pt=N(U[ft],$[ft],K);Dt(pt.x,pt.y,d+J)}for(let ft=0,st=P.length;ft<st;ft++){const pt=P[ft];dt=ht[ft];for(let Vt=0,zt=pt.length;Vt<zt;Vt++){const R=N(pt[Vt],dt[Vt],K);x?Dt(R.x,R.y+y[h-1].y,y[h-1].x+J):Dt(R.x,R.y,d+J)}}}Z(),et();function Z(){const it=i.length/3;if(u){let Q=0,J=Y*Q;for(let K=0;K<Kt;K++){const ft=kt[K];At(ft[2]+J,ft[1]+J,ft[0]+J)}Q=h+m*2,J=Y*Q;for(let K=0;K<Kt;K++){const ft=kt[K];At(ft[0]+J,ft[1]+J,ft[2]+J)}}else{for(let Q=0;Q<Kt;Q++){const J=kt[Q];At(J[2],J[1],J[0])}for(let Q=0;Q<Kt;Q++){const J=kt[Q];At(J[0]+Y*h,J[1]+Y*h,J[2]+Y*h)}}n.addGroup(it,i.length/3-it,0)}function et(){const it=i.length/3;let Q=0;Et(U,Q),Q+=U.length;for(let J=0,K=P.length;J<K;J++){const ft=P[J];Et(ft,Q),Q+=ft.length}n.addGroup(it,i.length/3-it,1)}function Et(it,Q){let J=it.length;for(;--J>=0;){const K=J;let ft=J-1;ft<0&&(ft=it.length-1);for(let st=0,pt=h+m*2;st<pt;st++){const Vt=Y*st,zt=Y*(st+1),R=Q+K+Vt,S=Q+ft+Vt,G=Q+ft+zt,q=Q+K+zt;Zt(R,S,G,q)}}}function Dt(it,Q,J){l.push(it),l.push(Q),l.push(J)}function At(it,Q,J){ce(it),ce(Q),ce(J);const K=i.length/3,ft=_.generateTopUV(n,i,K-3,K-2,K-1);I(ft[0]),I(ft[1]),I(ft[2])}function Zt(it,Q,J,K){ce(it),ce(Q),ce(K),ce(Q),ce(J),ce(K);const ft=i.length/3,st=_.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);I(st[0]),I(st[1]),I(st[3]),I(st[1]),I(st[2]),I(st[3])}function ce(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function I(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new aa[i.type]().fromJSON(i)),new Ia(n,t.options)}}const zd={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-d),new mt(u,1-g),new mt(v,1-p)]:[new mt(a,1-l),new mt(h,1-d),new mt(f,1-g),new mt(m,1-p)]}};function Vd(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xi extends Ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xi(t.radius,t.detail)}}class br extends Ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*u-o;for(let y=0;y<c;y++){const x=y*d-r;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+c*p,x=_+c*(p+1),b=_+1+c*(p+1),A=_+1+c*p;f.push(y,x,A),f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.width,t.height,t.widthSegments,t.heightSegments)}}class Da extends Ve{constructor(t=new Tr([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new le(i,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;Dn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];Dn.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=Dn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],y=_[0]+d,x=_[1]+d,b=_[2]+d;n.push(y,x,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Hd(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Da(n,t.curveSegments)}}function Hd(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class gs extends Ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new B,u=new B,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const A=b/e;d.x=-t*Math.cos(i+A*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+A*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+x,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=h[p][_+1],x=h[p][_],b=h[p+1][_],A=h[p+1][_+1];(p!==0||o>0)&&f.push(y,x,A),(p!==n-1||l<Math.PI)&&f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vs extends Ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new B,d=new B,u=new B;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kd extends Ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gd extends Ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wd extends Ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class th extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xd extends th{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const so=new _e,Tl=new B,bl=new B;class qd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tl),bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bl),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eh extends kc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yd extends qd{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jd extends th{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Yd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zd extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Al(s,t,e,n){const i=$d(n);switch(e){case Rc:return s*t;case Lc:return s*t/i.components*i.byteLength;case xa:return s*t/i.components*i.byteLength;case Ic:return s*t*2/i.components*i.byteLength;case ya:return s*t*2/i.components*i.byteLength;case Pc:return s*t*3/i.components*i.byteLength;case sn:return s*t*4/i.components*i.byteLength;case Ma:return s*t*4/i.components*i.byteLength;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case gr:case vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case No:case Fo:return Math.max(s,16)*Math.max(t,8)/4;case Do:case Uo:return Math.max(s,8)*Math.max(t,8)/2;case Oo:case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ta:case ea:case na:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ia:case sa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ra:case oa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $d(s){switch(s){case gn:case Tc:return{byteLength:1,components:1};case xs:case bc:case Ls:return{byteLength:2,components:1};case va:case _a:return{byteLength:2,components:4};case gi:case ga:case Ln:return{byteLength:4,components:1};case Ac:case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);function nh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Kd(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Jd,alphahash_pars_fragment:Qd,alphamap_fragment:tf,alphamap_pars_fragment:ef,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:of,batching_pars_vertex:af,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:vf,color_fragment:_f,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:wf,displacementmap_pars_vertex:Tf,displacementmap_vertex:bf,emissivemap_fragment:Af,emissivemap_pars_fragment:Cf,colorspace_fragment:Rf,colorspace_pars_fragment:Pf,envmap_fragment:Lf,envmap_common_pars_fragment:If,envmap_pars_fragment:Df,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Xf,envmap_vertex:Uf,fog_vertex:Ff,fog_pars_vertex:Of,fog_fragment:Bf,fog_pars_fragment:zf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Hf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:jf,lights_phong_pars_fragment:Zf,lights_physical_fragment:$f,lights_physical_pars_fragment:Kf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:vp,normal_pars_fragment:_p,normal_pars_vertex:xp,normal_vertex:yp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Tp,opaque_fragment:bp,packing:Ap,premultiplied_alpha_fragment:Cp,project_vertex:Rp,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Up,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:Vp,skinnormal_vertex:Hp,specularmap_fragment:kp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:jp,uv_pars_vertex:Zp,uv_vertex:$p,worldpos_vertex:Kp,background_vert:Jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:vm,meshnormal_vert:_m,meshnormal_frag:xm,meshphong_vert:ym,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:Em,meshtoon_vert:wm,meshtoon_frag:Tm,points_vert:bm,points_frag:Am,shadow_vert:Cm,shadow_frag:Rm,sprite_vert:Pm,sprite_frag:Lm},vt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},un={basic:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:De([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:De([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:De([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:De([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:De([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:De([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:De([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:De([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:De([vt.common,vt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:De([vt.lights,vt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};un.physical={uniforms:De([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const or={r:0,b:0,g:0},ni=new vn,Im=new _e;function Dm(s,t,e,n,i,r,o){const a=new Jt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===wr)?(h===void 0&&(h=new pn(new Qi(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Zi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ni.copy(x.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(ni)),h.material.toneMapped=ee.getTransfer(b.colorSpace)!==re,(d!==b||u!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new pn(new br(2,2),new Zn({name:"BackgroundMaterial",uniforms:Zi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ee.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(or,Hc(s)),n.buffers.color.setClear(or.r,or.g,or.b,x,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:m,dispose:_}}function Nm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(M,P,F,D,z){let U=!1;const N=d(D,F,P);r!==N&&(r=N,c(r.object)),U=f(M,D,F,z),U&&g(M,D,F,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(M,P,F,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,P,F){const D=F.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let U=z[P.id];U===void 0&&(U={},z[P.id]=U);let N=U[D];return N===void 0&&(N=u(l()),U[D]=N),N}function u(M){const P=[],F=[],D=[];for(let z=0;z<e;z++)P[z]=0,F[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,P,F,D){const z=r.attributes,U=P.attributes;let N=0;const Y=F.getAttributes();for(const H in Y)if(Y[H].location>=0){const ht=z[H];let dt=U[H];if(dt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),ht===void 0||ht.attribute!==dt||dt&&ht.data!==dt.data)return!0;N++}return r.attributesNum!==N||r.index!==D}function g(M,P,F,D){const z={},U=P.attributes;let N=0;const Y=F.getAttributes();for(const H in Y)if(Y[H].location>=0){let ht=U[H];ht===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const dt={};dt.attribute=ht,ht&&ht.data&&(dt.data=ht.data),z[H]=dt,N++}r.attributes=z,r.attributesNum=N,r.index=D}function v(){const M=r.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const F=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;F[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),z[M]!==P&&(s.vertexAttribDivisor(M,P),z[M]=P)}function _(){const M=r.newAttributes,P=r.enabledAttributes;for(let F=0,D=P.length;F<D;F++)P[F]!==M[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function y(M,P,F,D,z,U,N){N===!0?s.vertexAttribIPointer(M,P,F,z,U):s.vertexAttribPointer(M,P,F,D,z,U)}function x(M,P,F,D){v();const z=D.attributes,U=F.getAttributes(),N=P.defaultAttributeValues;for(const Y in U){const H=U[Y];if(H.location>=0){let $=z[Y];if($===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const ht=$.normalized,dt=$.itemSize,lt=t.get($);if(lt===void 0)continue;const kt=lt.buffer,Kt=lt.type,jt=lt.bytesPerElement,Z=Kt===s.INT||Kt===s.UNSIGNED_INT||$.gpuType===ga;if($.isInterleavedBufferAttribute){const et=$.data,Et=et.stride,Dt=$.offset;if(et.isInstancedInterleavedBuffer){for(let At=0;At<H.locationSize;At++)p(H.location+At,et.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let At=0;At<H.locationSize;At++)m(H.location+At);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let At=0;At<H.locationSize;At++)y(H.location+At,dt/H.locationSize,Kt,ht,Et*jt,(Dt+dt/H.locationSize*At)*jt,Z)}else{if($.isInstancedBufferAttribute){for(let et=0;et<H.locationSize;et++)p(H.location+et,$.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let et=0;et<H.locationSize;et++)m(H.location+et);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let et=0;et<H.locationSize;et++)y(H.location+et,dt/H.locationSize,Kt,ht,dt*jt,dt/H.locationSize*et*jt,Z)}}else if(N!==void 0){const ht=N[Y];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(H.location,ht);break;case 3:s.vertexAttrib3fv(H.location,ht);break;case 4:s.vertexAttrib4fv(H.location,ht);break;default:s.vertexAttrib1fv(H.location,ht)}}}}_()}function b(){L();for(const M in n){const P=n[M];for(const F in P){const D=P[F];for(const z in D)h(D[z].object),delete D[z];delete P[F]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const F in P){const D=P[F];for(const z in D)h(D[z].object),delete D[z];delete P[F]}delete n[M.id]}function C(M){for(const P in n){const F=n[P];if(F[M.id]===void 0)continue;const D=F[M.id];for(const z in D)h(D[z].object),delete D[z];delete F[M.id]}}function L(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Um(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==sn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!L)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function Om(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ri,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=h(g,u,y,f);for(let b=0;b!==y;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Bm(s){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=qi:a===Po&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Po)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nd(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Vi=4,Cl=[.125,.215,.35,.446,.526,.582],ci=20,ro=new eh,Rl=new Jt;let oo=null,ao=0,lo=0,co=!1;const oi=(1+Math.sqrt(5))/2,Ui=1/oi,Pl=[new B(-oi,Ui,0),new B(oi,Ui,0),new B(-Ui,0,oi),new B(Ui,0,oi),new B(0,oi,-Ui),new B(0,oi,Ui),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],zm=new B;class Ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=zm}=r;oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,ao,lo),this._renderer.xr.enabled=co,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ls,format:sn,colorSpace:ji,depthBuffer:!1},i=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Hm(r,t,e)}return i}_compileMaterial(t){const e=new pn(this._lodPlanes[0],t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,n,i,r){const l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Rl),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const v=new Ta({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new pn(new Qi,v);let p=!1;const _=t.background;_?_.isColor&&(v.color.copy(_),t.background=null,p=!0):(v.color.copy(Rl),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const b=this._cubeSize;ar(i,x*b,y>2?b:0,b,b),d.setRenderTarget(i),p&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qi||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ro)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pl[(i-r-1)%Pl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new pn(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ci-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let _=0;for(let C=0;C<ci;++C){const L=C/v,w=Math.exp(-L*L/2);p.push(w),C===0?_+=w:C<m&&(_+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const x=this._sizeLods[i],b=3*x*(i>y-Vi?i-y+Vi:0),A=4*(this._cubeSize-x);ar(e,b,A,3*x,2*x),l.setRenderTarget(e),l.render(d,ro)}}function Vm(s){const t=[],e=[],n=[];let i=s;const r=s-Vi+1+Cl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Vi?l=Cl[o-s+Vi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,L=A>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];_.set(w,v*g*A),y.set(u,m*g*A);const M=[A,A,A,A,A,A];x.set(M,p*g*A)}const b=new Ve;b.setAttribute("position",new mn(_,v)),b.setAttribute("uv",new mn(y,m)),b.setAttribute("faceIndex",new mn(x,p)),t.push(b),i>Vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Il(s,t,e){const n=new vi(s,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Hm(s,t,e){const n=new Float32Array(ci),i=new B(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Dl(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Nl(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ro||l===Po,h=l===qi||l===Yi;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ll(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ll(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wm(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const b=_[y+0],A=_[y+1],C=_[y+2];u.push(b,A,A,C,C,b)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const b=y+0,A=y+1,C=y+2;u.push(b,A,A,C,C,b)}}else return;const m=new(Uc(u)?Vc:zc)(u,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Xm(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function qm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ym(s,t,e){const n=new WeakMap,i=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*A*4*d),L=new Fc(C,b,A,d);L.type=Ln,L.needsUpdate=!0;const w=x*4;for(let P=0;P<d;P++){const F=p[P],D=_[P],z=y[P],U=b*A*4*P;for(let N=0;N<F.count;N++){const Y=N*w;g===!0&&(i.fromBufferAttribute(F,N),C[U+Y+0]=i.x,C[U+Y+1]=i.y,C[U+Y+2]=i.z,C[U+Y+3]=0),v===!0&&(i.fromBufferAttribute(D,N),C[U+Y+4]=i.x,C[U+Y+5]=i.y,C[U+Y+6]=i.z,C[U+Y+7]=0),m===!0&&(i.fromBufferAttribute(z,N),C[U+Y+8]=i.x,C[U+Y+9]=i.y,C[U+Y+10]=i.z,C[U+Y+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:L,size:new mt(b,A)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function jm(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const ih=new ze,Ul=new Wc(1,1),sh=new Fc,rh=new Bu,oh=new Gc,Fl=[],Ol=[],Bl=new Float32Array(16),zl=new Float32Array(9),Vl=new Float32Array(4);function ts(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fl[i];if(r===void 0&&(r=new Float32Array(i),Fl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ar(s,t){let e=Ol[t];e===void 0&&(e=new Int32Array(t),Ol[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function $m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function Km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function Jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function Qm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Vl.set(n),s.uniformMatrix2fv(this.addr,!1,Vl),we(e,n)}}function tg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;zl.set(n),s.uniformMatrix3fv(this.addr,!1,zl),we(e,n)}}function eg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Bl.set(n),s.uniformMatrix4fv(this.addr,!1,Bl),we(e,n)}}function ng(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function og(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function hg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ul.compareFunction=Nc,r=Ul):r=ih,e.setTexture2D(t||r,i)}function ug(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rh,i)}function dg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||oh,i)}function fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sh,i)}function pg(s){switch(s){case 5126:return Zm;case 35664:return $m;case 35665:return Km;case 35666:return Jm;case 35674:return Qm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(s,t){s.uniform1fv(this.addr,t)}function gg(s,t){const e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function vg(s,t){const e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function _g(s,t){const e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function xg(s,t){const e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function yg(s,t){const e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Mg(s,t){const e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sg(s,t){s.uniform1iv(this.addr,t)}function Eg(s,t){s.uniform2iv(this.addr,t)}function wg(s,t){s.uniform3iv(this.addr,t)}function Tg(s,t){s.uniform4iv(this.addr,t)}function bg(s,t){s.uniform1uiv(this.addr,t)}function Ag(s,t){s.uniform2uiv(this.addr,t)}function Cg(s,t){s.uniform3uiv(this.addr,t)}function Rg(s,t){s.uniform4uiv(this.addr,t)}function Pg(s,t,e){const n=this.cache,i=t.length,r=Ar(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ih,r[o])}function Lg(s,t,e){const n=this.cache,i=t.length,r=Ar(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||rh,r[o])}function Ig(s,t,e){const n=this.cache,i=t.length,r=Ar(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||oh,r[o])}function Dg(s,t,e){const n=this.cache,i=t.length,r=Ar(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||sh,r[o])}function Ng(s){switch(s){case 5126:return mg;case 35664:return gg;case 35665:return vg;case 35666:return _g;case 35674:return xg;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return wg;case 35669:case 35673:return Tg;case 5125:return bg;case 36294:return Ag;case 36295:return Cg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ng(e.type)}}class Og{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function Hl(s,t){s.seq.push(t),s.map[t.id]=t}function Bg(s,t,e){const n=s.name,i=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),o=ho.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hl(e,c===void 0?new Ug(a,s,t):new Fg(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Og(a),Hl(e,d)),e=d}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Bg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function kl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const zg=37297;let Vg=0;function Hg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gl=new Wt;function kg(s){ee._getMatrix(Gl,ee.workingColorSpace,s);const t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case xr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Wl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Hg(s.getShaderSource(t),a)}else return r}function Gg(s,t){const e=kg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wg(s,t){let e;switch(t){case Kh:e="Linear";break;case Jh:e="Reinhard";break;case Qh:e="Cineon";break;case Ec:e="ACESFilmic";break;case eu:e="AgX";break;case nu:e="Neutral";break;case tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lr=new B;function Xg(){ee.getLuminanceCoefficients(lr);const s=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function Yg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function us(s){return s!==""}function Xl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(s){return s.replace(Zg,Kg)}const $g=new Map;function Kg(s,t){let e=qt[t];if(e===void 0){const n=$g.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ha(e)}const Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(s){return s.replace(Jg,Qg)}function Qg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function ev(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function iv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sc:t="ENVMAP_BLENDING_MULTIPLY";break;case Zh:t="ENVMAP_BLENDING_MIX";break;case $h:t="ENVMAP_BLENDING_ADD";break}return t}function sv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=tv(e),c=ev(e),h=nv(e),d=iv(e),u=sv(e),f=qg(e),g=Yg(r),v=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),p.length>0&&(p+=`
`)):(m=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),Xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),o=ha(o),o=Xl(o,e),o=ql(o,e),a=ha(a),a=Xl(a,e),a=ql(a,e),o=Yl(o),a=Yl(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+o,x=_+p+a,b=kl(i,i.VERTEX_SHADER,y),A=kl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,b),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(v)||"",D=i.getShaderInfoLog(b)||"",z=i.getShaderInfoLog(A)||"",U=F.trim(),N=D.trim(),Y=z.trim();let H=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,A);else{const ht=Wl(i,b,"vertex"),dt=Wl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+ht+`
`+dt)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||Y==="")&&($=!1);$&&(P.diagnostics={runnable:H,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(b),i.deleteShader(A),L=new _r(i,v),w=jg(i,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,zg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}let ov=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lv(t),e.set(t,n)),n}}class lv{constructor(t){this.id=ov++,this.code=t,this.usedTimes=0}}function cv(s,t,e,n,i,r,o){const a=new Oc,l=new av,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,F,D){const z=F.fog,U=D.geometry,N=w.isMeshStandardMaterial?F.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||N),H=Y&&Y.mapping===wr?Y.image.height:null,$=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ht=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,dt=ht!==void 0?ht.length:0;let lt=0;U.morphAttributes.position!==void 0&&(lt=1),U.morphAttributes.normal!==void 0&&(lt=2),U.morphAttributes.color!==void 0&&(lt=3);let kt,Kt,jt,Z;if($){const ie=un[$];kt=ie.vertexShader,Kt=ie.fragmentShader}else kt=w.vertexShader,Kt=w.fragmentShader,l.update(w),jt=l.getVertexShaderID(w),Z=l.getFragmentShaderID(w);const et=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),Dt=D.isInstancedMesh===!0,At=D.isBatchedMesh===!0,Zt=!!w.map,ce=!!w.matcap,I=!!Y,it=!!w.aoMap,Q=!!w.lightMap,J=!!w.bumpMap,K=!!w.normalMap,ft=!!w.displacementMap,st=!!w.emissiveMap,pt=!!w.metalnessMap,Vt=!!w.roughnessMap,zt=w.anisotropy>0,R=w.clearcoat>0,S=w.dispersion>0,G=w.iridescence>0,q=w.sheen>0,nt=w.transmission>0,j=zt&&!!w.anisotropyMap,Lt=R&&!!w.clearcoatMap,ut=R&&!!w.clearcoatNormalMap,Ct=R&&!!w.clearcoatRoughnessMap,Rt=G&&!!w.iridescenceMap,rt=G&&!!w.iridescenceThicknessMap,yt=q&&!!w.sheenColorMap,Ot=q&&!!w.sheenRoughnessMap,It=!!w.specularMap,_t=!!w.specularColorMap,Gt=!!w.specularIntensityMap,O=nt&&!!w.transmissionMap,ct=nt&&!!w.thicknessMap,gt=!!w.gradientMap,Tt=!!w.alphaMap,ot=w.alphaTest>0,tt=!!w.alphaHash,Pt=!!w.extensions;let Ht=Yn;w.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ht=s.toneMapping);const he={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:kt,fragmentShader:Kt,defines:w.defines,customVertexShaderID:jt,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:At,batchingColor:At&&D._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&D.instanceColor!==null,instancingMorph:Dt&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ji,alphaToCoverage:!!w.alphaToCoverage,map:Zt,matcap:ce,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:Q,bumpMap:J,normalMap:K,displacementMap:u&&ft,emissiveMap:st,normalMapObjectSpace:K&&w.normalMapType===ou,normalMapTangentSpace:K&&w.normalMapType===Dc,metalnessMap:pt,roughnessMap:Vt,anisotropy:zt,anisotropyMap:j,clearcoat:R,clearcoatMap:Lt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ct,dispersion:S,iridescence:G,iridescenceMap:Rt,iridescenceThicknessMap:rt,sheen:q,sheenColorMap:yt,sheenRoughnessMap:Ot,specularMap:It,specularColorMap:_t,specularIntensityMap:Gt,transmission:nt,transmissionMap:O,thicknessMap:ct,gradientMap:gt,opaque:w.transparent===!1&&w.blending===Hi&&w.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ot,alphaHash:tt,combine:w.combine,mapUv:Zt&&v(w.map.channel),aoMapUv:it&&v(w.aoMap.channel),lightMapUv:Q&&v(w.lightMap.channel),bumpMapUv:J&&v(w.bumpMap.channel),normalMapUv:K&&v(w.normalMap.channel),displacementMapUv:ft&&v(w.displacementMap.channel),emissiveMapUv:st&&v(w.emissiveMap.channel),metalnessMapUv:pt&&v(w.metalnessMap.channel),roughnessMapUv:Vt&&v(w.roughnessMap.channel),anisotropyMapUv:j&&v(w.anisotropyMap.channel),clearcoatMapUv:Lt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&v(w.sheenRoughnessMap.channel),specularMapUv:It&&v(w.specularMap.channel),specularColorMapUv:_t&&v(w.specularColorMap.channel),specularIntensityMapUv:Gt&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:ct&&v(w.thicknessMap.channel),alphaMapUv:Tt&&v(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(K||zt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(Zt||Tt),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Zt&&w.map.isVideoTexture===!0&&ee.getTransfer(w.map.colorSpace)===re,decodeVideoTextureEmissive:st&&w.emissiveMap.isVideoTexture===!0&&ee.getTransfer(w.emissiveMap.colorSpace)===re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pn,flipSided:w.side===Be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&w.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(_(M,w),y(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let P;if(M){const F=un[M];P=Ju.clone(F.uniforms)}else P=w.uniforms;return P}function b(w,M){let P;for(let F=0,D=h.length;F<D;F++){const z=h[F];if(z.cacheKey===M){P=z,++P.usedTimes;break}}return P===void 0&&(P=new rv(s,M,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:L}}function hv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function uv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Zl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $l(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||uv),n.length>1&&n.sort(u||Zl),i.length>1&&i.sort(u||Zl)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function dv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new $l,s.set(n,[o])):i>=r.length?(o=new $l,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function fv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Jt};break;case"SpotLight":e={position:new B,direction:new B,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function pv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let mv=0;function gv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function vv(s){const t=new fv,e=pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new _e,o=new _e;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,b=0,A=0,C=0;c.sort(gv);for(let w=0,M=c.length;w<M;w++){const P=c[w],F=P.color,D=P.intensity,z=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*D,d+=F.g*D,u+=F.b*D;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],D);C++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=N,f++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(F).multiplyScalar(D),N.distance=z,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[v]=N;const Y=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Y.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=Y.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=U,x++}v++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(F).multiplyScalar(D),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=N,m++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const Y=P.shadow,H=e.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=N,g++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(D),N.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[p]=N,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==_||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=_,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=C,n.version=mv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Kl(s){const t=new vv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _v(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Kl(s),t.set(i,[a])):r>=o.length?(a=new Kl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mv(s,t,e){let n=new Aa;const i=new mt,r=new mt,o=new ve,a=new Gd({depthPacking:ru}),l=new Wd,c={},h=e.maxTextureSize,d={[jn]:Be,[Be]:jn,[Pn]:Pn},u=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:xv,fragmentShader:yv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let p=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=p!==Rn&&this.type===Rn,z=p===Rn&&this.type!==Rn;for(let U=0,N=A.length;U<N;U++){const Y=A[U],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const $=H.getFrameExtents();if(i.multiply($),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||D===!0||z===!0){const dt=this.type!==Rn?{minFilter:on,magFilter:on}:{};H.map!==null&&H.map.dispose(),H.map=new vi(i.x,i.y,dt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ht=H.getViewportCount();for(let dt=0;dt<ht;dt++){const lt=H.getViewport(dt);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),F.viewport(o),H.updateMatrices(Y,dt),n=H.getFrustum(),x(C,L,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Rn&&_(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,P)};function _(A,C){const L=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,L,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,L,f,v,null)}function y(A,C,L,w){let M=null;const P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=M.uuid,D=C.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let U=z[D];U===void 0&&(U=M.clone(),z[D]=U,C.addEventListener("dispose",b)),M=U}if(M.visible=C.visible,M.wireframe=C.wireframe,w===Rn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=s.properties.get(M);F.light=L}return M}function x(A,C,L,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const D=t.update(A),z=A.material;if(Array.isArray(z)){const U=D.groups;for(let N=0,Y=U.length;N<Y;N++){const H=U[N],$=z[H.materialIndex];if($&&$.visible){const ht=y(A,$,w,M);A.onBeforeShadow(s,A,C,L,D,ht,H),s.renderBufferDirect(L,null,D,ht,A,H),A.onAfterShadow(s,A,C,L,D,ht,H)}}}else if(z.visible){const U=y(A,z,w,M);A.onBeforeShadow(s,A,C,L,D,U,null),s.renderBufferDirect(L,null,D,U,A,null),A.onAfterShadow(s,A,C,L,D,U,null)}}const F=A.children;for(let D=0,z=F.length;D<z;D++)x(F[D],C,L,w,M)}function b(A){A.target.removeEventListener("dispose",b);for(const L in c){const w=c[L],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Sv={[So]:Eo,[wo]:Ao,[To]:Co,[Xi]:bo,[Eo]:So,[Ao]:wo,[Co]:To,[bo]:Xi};function Ev(s,t){function e(){let O=!1;const ct=new ve;let gt=null;const Tt=new ve(0,0,0,0);return{setMask:function(ot){gt!==ot&&!O&&(s.colorMask(ot,ot,ot,ot),gt=ot)},setLocked:function(ot){O=ot},setClear:function(ot,tt,Pt,Ht,he){he===!0&&(ot*=Ht,tt*=Ht,Pt*=Ht),ct.set(ot,tt,Pt,Ht),Tt.equals(ct)===!1&&(s.clearColor(ot,tt,Pt,Ht),Tt.copy(ct))},reset:function(){O=!1,gt=null,Tt.set(-1,0,0,0)}}}function n(){let O=!1,ct=!1,gt=null,Tt=null,ot=null;return{setReversed:function(tt){if(ct!==tt){const Pt=t.get("EXT_clip_control");tt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ct=tt;const Ht=ot;ot=null,this.setClear(Ht)}},getReversed:function(){return ct},setTest:function(tt){tt?et(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(tt){gt!==tt&&!O&&(s.depthMask(tt),gt=tt)},setFunc:function(tt){if(ct&&(tt=Sv[tt]),Tt!==tt){switch(tt){case So:s.depthFunc(s.NEVER);break;case Eo:s.depthFunc(s.ALWAYS);break;case wo:s.depthFunc(s.LESS);break;case Xi:s.depthFunc(s.LEQUAL);break;case To:s.depthFunc(s.EQUAL);break;case bo:s.depthFunc(s.GEQUAL);break;case Ao:s.depthFunc(s.GREATER);break;case Co:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Tt=tt}},setLocked:function(tt){O=tt},setClear:function(tt){ot!==tt&&(ct&&(tt=1-tt),s.clearDepth(tt),ot=tt)},reset:function(){O=!1,gt=null,Tt=null,ot=null,ct=!1}}}function i(){let O=!1,ct=null,gt=null,Tt=null,ot=null,tt=null,Pt=null,Ht=null,he=null;return{setTest:function(ie){O||(ie?et(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(ie){ct!==ie&&!O&&(s.stencilMask(ie),ct=ie)},setFunc:function(ie,xn,an){(gt!==ie||Tt!==xn||ot!==an)&&(s.stencilFunc(ie,xn,an),gt=ie,Tt=xn,ot=an)},setOp:function(ie,xn,an){(tt!==ie||Pt!==xn||Ht!==an)&&(s.stencilOp(ie,xn,an),tt=ie,Pt=xn,Ht=an)},setLocked:function(ie){O=ie},setClear:function(ie){he!==ie&&(s.clearStencil(ie),he=ie)},reset:function(){O=!1,ct=null,gt=null,Tt=null,ot=null,tt=null,Pt=null,Ht=null,he=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,b=null,A=null,C=new Jt(0,0,0),L=0,w=!1,M=null,P=null,F=null,D=null,z=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Y=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=Y>=2);let $=null,ht={};const dt=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),kt=new ve().fromArray(dt),Kt=new ve().fromArray(lt);function jt(O,ct,gt,Tt){const ot=new Uint8Array(4),tt=s.createTexture();s.bindTexture(O,tt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<gt;Pt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,Tt,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(ct+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return tt}const Z={};Z[s.TEXTURE_2D]=jt(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(s.DEPTH_TEST),o.setFunc(Xi),J(!1),K(Za),et(s.CULL_FACE),it(qn);function et(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Et(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Dt(O,ct){return d[O]!==ct?(s.bindFramebuffer(O,ct),d[O]=ct,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ct),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function At(O,ct){let gt=f,Tt=!1;if(O){gt=u.get(ct),gt===void 0&&(gt=[],u.set(ct,gt));const ot=O.textures;if(gt.length!==ot.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,Pt=ot.length;tt<Pt;tt++)gt[tt]=s.COLOR_ATTACHMENT0+tt;gt.length=ot.length,Tt=!0}}else gt[0]!==s.BACK&&(gt[0]=s.BACK,Tt=!0);Tt&&s.drawBuffers(gt)}function Zt(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const ce={[li]:s.FUNC_ADD,[Ih]:s.FUNC_SUBTRACT,[Dh]:s.FUNC_REVERSE_SUBTRACT};ce[Nh]=s.MIN,ce[Uh]=s.MAX;const I={[Fh]:s.ZERO,[Oh]:s.ONE,[Bh]:s.SRC_COLOR,[yo]:s.SRC_ALPHA,[Wh]:s.SRC_ALPHA_SATURATE,[kh]:s.DST_COLOR,[Vh]:s.DST_ALPHA,[zh]:s.ONE_MINUS_SRC_COLOR,[Mo]:s.ONE_MINUS_SRC_ALPHA,[Gh]:s.ONE_MINUS_DST_COLOR,[Hh]:s.ONE_MINUS_DST_ALPHA,[Xh]:s.CONSTANT_COLOR,[qh]:s.ONE_MINUS_CONSTANT_COLOR,[Yh]:s.CONSTANT_ALPHA,[jh]:s.ONE_MINUS_CONSTANT_ALPHA};function it(O,ct,gt,Tt,ot,tt,Pt,Ht,he,ie){if(O===qn){v===!0&&(Et(s.BLEND),v=!1);return}if(v===!1&&(et(s.BLEND),v=!0),O!==Lh){if(O!==m||ie!==w){if((p!==li||x!==li)&&(s.blendEquation(s.FUNC_ADD),p=li,x=li),ie)switch(O){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $a:s.blendFunc(s.ONE,s.ONE);break;case Ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ja:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $a:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ka:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ja:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,y=null,b=null,A=null,C.set(0,0,0),L=0,m=O,w=ie}return}ot=ot||ct,tt=tt||gt,Pt=Pt||Tt,(ct!==p||ot!==x)&&(s.blendEquationSeparate(ce[ct],ce[ot]),p=ct,x=ot),(gt!==_||Tt!==y||tt!==b||Pt!==A)&&(s.blendFuncSeparate(I[gt],I[Tt],I[tt],I[Pt]),_=gt,y=Tt,b=tt,A=Pt),(Ht.equals(C)===!1||he!==L)&&(s.blendColor(Ht.r,Ht.g,Ht.b,he),C.copy(Ht),L=he),m=O,w=!1}function Q(O,ct){O.side===Pn?Et(s.CULL_FACE):et(s.CULL_FACE);let gt=O.side===Be;ct&&(gt=!gt),J(gt),O.blending===Hi&&O.transparent===!1?it(qn):it(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Tt=O.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),st(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){M!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),M=O)}function K(O){O!==Rh?(et(s.CULL_FACE),O!==P&&(O===Za?s.cullFace(s.BACK):O===Ph?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),P=O}function ft(O){O!==F&&(N&&s.lineWidth(O),F=O)}function st(O,ct,gt){O?(et(s.POLYGON_OFFSET_FILL),(D!==ct||z!==gt)&&(s.polygonOffset(ct,gt),D=ct,z=gt)):Et(s.POLYGON_OFFSET_FILL)}function pt(O){O?et(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Vt(O){O===void 0&&(O=s.TEXTURE0+U-1),$!==O&&(s.activeTexture(O),$=O)}function zt(O,ct,gt){gt===void 0&&($===null?gt=s.TEXTURE0+U-1:gt=$);let Tt=ht[gt];Tt===void 0&&(Tt={type:void 0,texture:void 0},ht[gt]=Tt),(Tt.type!==O||Tt.texture!==ct)&&($!==gt&&(s.activeTexture(gt),$=gt),s.bindTexture(O,ct||Z[O]),Tt.type=O,Tt.texture=ct)}function R(){const O=ht[$];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(O){kt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),kt.copy(O))}function Ot(O){Kt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Kt.copy(O))}function It(O,ct){let gt=c.get(ct);gt===void 0&&(gt=new WeakMap,c.set(ct,gt));let Tt=gt.get(O);Tt===void 0&&(Tt=s.getUniformBlockIndex(ct,O.name),gt.set(O,Tt))}function _t(O,ct){const Tt=c.get(ct).get(O);l.get(ct)!==Tt&&(s.uniformBlockBinding(ct,Tt,O.__bindingPointIndex),l.set(ct,Tt))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,ht={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,b=null,A=null,C=new Jt(0,0,0),L=0,w=!1,M=null,P=null,F=null,D=null,z=null,kt.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Et,bindFramebuffer:Dt,drawBuffers:At,useProgram:Zt,setBlending:it,setMaterial:Q,setFlipSided:J,setCullFace:K,setLineWidth:ft,setPolygonOffset:st,setScissorTest:pt,activeTexture:Vt,bindTexture:zt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Rt,texImage3D:rt,updateUBOMapping:It,uniformBlockBinding:_t,texStorage2D:ut,texStorage3D:Ct,texSubImage2D:q,texSubImage3D:nt,compressedTexSubImage2D:j,compressedTexSubImage3D:Lt,scissor:yt,viewport:Ot,reset:Gt}}function wv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):Mr("canvas")}function v(R,S,G){let q=1;const nt=zt(R);if((nt.width>G||nt.height>G)&&(q=G/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(q*nt.width),Lt=Math.floor(q*nt.height);d===void 0&&(d=g(j,Lt));const ut=S?g(j,Lt):d;return ut.width=j,ut.height=Lt,ut.getContext("2d").drawImage(R,0,0,j,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+Lt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,S,G,q,nt=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===s.RED&&(G===s.FLOAT&&(j=s.R32F),G===s.HALF_FLOAT&&(j=s.R16F),G===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.R8UI),G===s.UNSIGNED_SHORT&&(j=s.R16UI),G===s.UNSIGNED_INT&&(j=s.R32UI),G===s.BYTE&&(j=s.R8I),G===s.SHORT&&(j=s.R16I),G===s.INT&&(j=s.R32I)),S===s.RG&&(G===s.FLOAT&&(j=s.RG32F),G===s.HALF_FLOAT&&(j=s.RG16F),G===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RG8UI),G===s.UNSIGNED_SHORT&&(j=s.RG16UI),G===s.UNSIGNED_INT&&(j=s.RG32UI),G===s.BYTE&&(j=s.RG8I),G===s.SHORT&&(j=s.RG16I),G===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGB8UI),G===s.UNSIGNED_SHORT&&(j=s.RGB16UI),G===s.UNSIGNED_INT&&(j=s.RGB32UI),G===s.BYTE&&(j=s.RGB8I),G===s.SHORT&&(j=s.RGB16I),G===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),G===s.UNSIGNED_INT&&(j=s.RGBA32UI),G===s.BYTE&&(j=s.RGBA8I),G===s.SHORT&&(j=s.RGBA16I),G===s.INT&&(j=s.RGBA32I)),S===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),S===s.RGBA){const Lt=nt?xr:ee.getTransfer(q);G===s.FLOAT&&(j=s.RGBA32F),G===s.HALF_FLOAT&&(j=s.RGBA16F),G===s.UNSIGNED_BYTE&&(j=Lt===re?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(R,S){let G;return R?S===null||S===gi||S===ys?G=s.DEPTH24_STENCIL8:S===Ln?G=s.DEPTH32F_STENCIL8:S===xs&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===ys?G=s.DEPTH_COMPONENT24:S===Ln?G=s.DEPTH_COMPONENT32F:S===xs&&(G=s.DEPTH_COMPONENT16),G}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),L(S),S.isVideoTexture&&h.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),M(S)}function L(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,q=u.get(G);if(q){const nt=q[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(R),Object.keys(q).length===0&&u.delete(G)}n.remove(R)}function w(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const G=R.source,q=u.get(G);delete q[S.__cacheKey],o.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let nt=0;nt<S.__webglFramebuffer[q].length;nt++)s.deleteFramebuffer(S.__webglFramebuffer[q][nt]);else s.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)s.deleteFramebuffer(S.__webglFramebuffer[q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let q=0,nt=G.length;q<nt;q++){const j=n.get(G[q]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(G[q])}n.remove(R)}let P=0;function F(){P=0}function D(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function z(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function U(R,S){const G=n.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,R,S);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function N(R,S){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Z(G,R,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function Y(R,S){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Z(G,R,S);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function H(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){et(G,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const $={[Lo]:s.REPEAT,[fi]:s.CLAMP_TO_EDGE,[Io]:s.MIRRORED_REPEAT},ht={[on]:s.NEAREST,[iu]:s.NEAREST_MIPMAP_NEAREST,[zs]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[Ir]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},dt={[au]:s.NEVER,[fu]:s.ALWAYS,[lu]:s.LESS,[Nc]:s.LEQUAL,[cu]:s.EQUAL,[du]:s.GEQUAL,[hu]:s.GREATER,[uu]:s.NOTEQUAL};function lt(R,S){if(S.type===Ln&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===Ir||S.magFilter===zs||S.magFilter===pi||S.minFilter===dn||S.minFilter===Ir||S.minFilter===zs||S.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,$[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,$[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,$[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ht[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==zs&&S.minFilter!==pi||S.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function kt(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let nt=u.get(q);nt===void 0&&(nt={},u.set(q,nt));const j=z(S);if(j!==R.__cacheKey){nt[j]===void 0&&(nt[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[j].usedTimes++;const Lt=nt[R.__cacheKey];Lt!==void 0&&(nt[R.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(S)),R.__cacheKey=j,R.__webglTexture=nt[j].texture}return G}function Kt(R,S,G){return Math.floor(Math.floor(R/G)/S)}function jt(R,S,G,q){const j=R.updateRanges;if(j.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,G,q,S.data);else{j.sort((rt,yt)=>rt.start-yt.start);let Lt=0;for(let rt=1;rt<j.length;rt++){const yt=j[Lt],Ot=j[rt],It=yt.start+yt.count,_t=Kt(Ot.start,S.width,4),Gt=Kt(yt.start,S.width,4);Ot.start<=It+1&&_t===Gt&&Kt(Ot.start+Ot.count-1,S.width,4)===_t?yt.count=Math.max(yt.count,Ot.start+Ot.count-yt.start):(++Lt,j[Lt]=Ot)}j.length=Lt+1;const ut=s.getParameter(s.UNPACK_ROW_LENGTH),Ct=s.getParameter(s.UNPACK_SKIP_PIXELS),Rt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let rt=0,yt=j.length;rt<yt;rt++){const Ot=j[rt],It=Math.floor(Ot.start/4),_t=Math.ceil(Ot.count/4),Gt=It%S.width,O=Math.floor(It/S.width),ct=_t,gt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Gt,O,ct,gt,G,q,S.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function Z(R,S,G){let q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=s.TEXTURE_3D);const nt=kt(R,S),j=S.source;e.bindTexture(q,R.__webglTexture,s.TEXTURE0+G);const Lt=n.get(j);if(j.version!==Lt.__version||nt===!0){e.activeTexture(s.TEXTURE0+G);const ut=ee.getPrimaries(ee.workingColorSpace),Ct=S.colorSpace===Gn?null:ee.getPrimaries(S.colorSpace),Rt=S.colorSpace===Gn||ut===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let rt=v(S.image,!1,i.maxTextureSize);rt=Vt(S,rt);const yt=r.convert(S.format,S.colorSpace),Ot=r.convert(S.type);let It=y(S.internalFormat,yt,Ot,S.colorSpace,S.isVideoTexture);lt(q,S);let _t;const Gt=S.mipmaps,O=S.isVideoTexture!==!0,ct=Lt.__version===void 0||nt===!0,gt=j.dataReady,Tt=b(S,rt);if(S.isDepthTexture)It=x(S.format===Ss,S.type),ct&&(O?e.texStorage2D(s.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,It,rt.width,rt.height,0,yt,Ot,null));else if(S.isDataTexture)if(Gt.length>0){O&&ct&&e.texStorage2D(s.TEXTURE_2D,Tt,It,Gt[0].width,Gt[0].height);for(let ot=0,tt=Gt.length;ot<tt;ot++)_t=Gt[ot],O?gt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,_t.width,_t.height,yt,Ot,_t.data):e.texImage2D(s.TEXTURE_2D,ot,It,_t.width,_t.height,0,yt,Ot,_t.data);S.generateMipmaps=!1}else O?(ct&&e.texStorage2D(s.TEXTURE_2D,Tt,It,rt.width,rt.height),gt&&jt(S,rt,yt,Ot)):e.texImage2D(s.TEXTURE_2D,0,It,rt.width,rt.height,0,yt,Ot,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,It,Gt[0].width,Gt[0].height,rt.depth);for(let ot=0,tt=Gt.length;ot<tt;ot++)if(_t=Gt[ot],S.format!==sn)if(yt!==null)if(O){if(gt)if(S.layerUpdates.size>0){const Pt=Al(_t.width,_t.height,S.format,S.type);for(const Ht of S.layerUpdates){const he=_t.data.subarray(Ht*Pt/_t.data.BYTES_PER_ELEMENT,(Ht+1)*Pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Ht,_t.width,_t.height,1,yt,he)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,rt.depth,yt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,It,_t.width,_t.height,rt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?gt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,rt.depth,yt,Ot,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,It,_t.width,_t.height,rt.depth,0,yt,Ot,_t.data)}else{O&&ct&&e.texStorage2D(s.TEXTURE_2D,Tt,It,Gt[0].width,Gt[0].height);for(let ot=0,tt=Gt.length;ot<tt;ot++)_t=Gt[ot],S.format!==sn?yt!==null?O?gt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,It,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?gt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,_t.width,_t.height,yt,Ot,_t.data):e.texImage2D(s.TEXTURE_2D,ot,It,_t.width,_t.height,0,yt,Ot,_t.data)}else if(S.isDataArrayTexture)if(O){if(ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,It,rt.width,rt.height,rt.depth),gt)if(S.layerUpdates.size>0){const ot=Al(rt.width,rt.height,S.format,S.type);for(const tt of S.layerUpdates){const Pt=rt.data.subarray(tt*ot/rt.data.BYTES_PER_ELEMENT,(tt+1)*ot/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,yt,Ot,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Ot,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,yt,Ot,rt.data);else if(S.isData3DTexture)O?(ct&&e.texStorage3D(s.TEXTURE_3D,Tt,It,rt.width,rt.height,rt.depth),gt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Ot,rt.data)):e.texImage3D(s.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,yt,Ot,rt.data);else if(S.isFramebufferTexture){if(ct)if(O)e.texStorage2D(s.TEXTURE_2D,Tt,It,rt.width,rt.height);else{let ot=rt.width,tt=rt.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(s.TEXTURE_2D,Pt,It,ot,tt,0,yt,Ot,null),ot>>=1,tt>>=1}}else if(Gt.length>0){if(O&&ct){const ot=zt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,Tt,It,ot.width,ot.height)}for(let ot=0,tt=Gt.length;ot<tt;ot++)_t=Gt[ot],O?gt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,yt,Ot,_t):e.texImage2D(s.TEXTURE_2D,ot,It,yt,Ot,_t);S.generateMipmaps=!1}else if(O){if(ct){const ot=zt(rt);e.texStorage2D(s.TEXTURE_2D,Tt,It,ot.width,ot.height)}gt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Ot,rt)}else e.texImage2D(s.TEXTURE_2D,0,It,yt,Ot,rt);m(S)&&p(q),Lt.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function et(R,S,G){if(S.image.length!==6)return;const q=kt(R,S),nt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);const j=n.get(nt);if(nt.version!==j.__version||q===!0){e.activeTexture(s.TEXTURE0+G);const Lt=ee.getPrimaries(ee.workingColorSpace),ut=S.colorSpace===Gn?null:ee.getPrimaries(S.colorSpace),Ct=S.colorSpace===Gn||Lt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!Rt&&!rt?yt[tt]=v(S.image[tt],!0,i.maxCubemapSize):yt[tt]=rt?S.image[tt].image:S.image[tt],yt[tt]=Vt(S,yt[tt]);const Ot=yt[0],It=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Gt=y(S.internalFormat,It,_t,S.colorSpace),O=S.isVideoTexture!==!0,ct=j.__version===void 0||q===!0,gt=nt.dataReady;let Tt=b(S,Ot);lt(s.TEXTURE_CUBE_MAP,S);let ot;if(Rt){O&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,Gt,Ot.width,Ot.height);for(let tt=0;tt<6;tt++){ot=yt[tt].mipmaps;for(let Pt=0;Pt<ot.length;Pt++){const Ht=ot[Pt];S.format!==sn?It!==null?O?gt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt,0,0,Ht.width,Ht.height,It,Ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt,Gt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt,0,0,Ht.width,Ht.height,It,_t,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt,Gt,Ht.width,Ht.height,0,It,_t,Ht.data)}}}else{if(ot=S.mipmaps,O&&ct){ot.length>0&&Tt++;const tt=zt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,Gt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){O?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,It,_t,yt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,yt[tt].width,yt[tt].height,0,It,_t,yt[tt].data);for(let Pt=0;Pt<ot.length;Pt++){const he=ot[Pt].image[tt].image;O?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt+1,0,0,he.width,he.height,It,_t,he.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt+1,Gt,he.width,he.height,0,It,_t,he.data)}}else{O?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,_t,yt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,It,_t,yt[tt]);for(let Pt=0;Pt<ot.length;Pt++){const Ht=ot[Pt];O?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt+1,0,0,It,_t,Ht.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt+1,Gt,It,_t,Ht.image[tt])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=nt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Et(R,S,G,q,nt,j){const Lt=r.convert(G.format,G.colorSpace),ut=r.convert(G.type),Ct=y(G.internalFormat,Lt,ut,G.colorSpace),Rt=n.get(S),rt=n.get(G);if(rt.__renderTarget=S,!Rt.__hasExternalTextures){const yt=Math.max(1,S.width>>j),Ot=Math.max(1,S.height>>j);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,Ct,yt,Ot,S.depth,0,Lt,ut,null):e.texImage2D(nt,j,Ct,yt,Ot,0,Lt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),st(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,nt,rt.__webglTexture,0,ft(S)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,nt,rt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(R,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const q=S.depthTexture,nt=q&&q.isDepthTexture?q.type:null,j=x(S.stencilBuffer,nt),Lt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=ft(S);st(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,j,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,R)}else{const q=S.textures;for(let nt=0;nt<q.length;nt++){const j=q[nt],Lt=r.convert(j.format,j.colorSpace),ut=r.convert(j.type),Ct=y(j.internalFormat,Lt,ut,j.colorSpace),Rt=ft(S);G&&st(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,Ct,S.width,S.height):st(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,Ct,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ct,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const nt=q.__webglTexture,j=ft(S);if(S.depthTexture.format===Ms)st(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(S.depthTexture.format===Ss)st(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Zt(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const q=R.texture.mipmaps;q&&q.length>0?At(S.__webglFramebuffer[0],R):At(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=s.createRenderbuffer(),Dt(S.__webglDepthbuffer[q],R,!1);else{const nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,j)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Dt(S.__webglDepthbuffer,R,!1);else{const nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,j)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(R,S,G){const q=n.get(R);S!==void 0&&Et(q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Zt(R)}function I(R){const S=R.texture,G=n.get(R),q=n.get(S);R.addEventListener("dispose",C);const nt=R.textures,j=R.isWebGLCubeRenderTarget===!0,Lt=nt.length>1;if(Lt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=S.version,o.memory.textures++),j){G.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ut]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)G.__webglFramebuffer[ut][Ct]=s.createFramebuffer()}else G.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)G.__webglFramebuffer[ut]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let ut=0,Ct=nt.length;ut<Ct;ut++){const Rt=n.get(nt[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&st(R)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const Ct=nt[ut];G.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ut]);const Rt=r.convert(Ct.format,Ct.colorSpace),rt=r.convert(Ct.type),yt=y(Ct.internalFormat,Rt,rt,Ct.colorSpace,R.isXRRenderTarget===!0),Ot=ft(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,yt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,G.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),lt(s.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)Et(G.__webglFramebuffer[ut][Ct],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct);else Et(G.__webglFramebuffer[ut],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let ut=0,Ct=nt.length;ut<Ct;ut++){const Rt=nt[ut],rt=n.get(Rt);let yt=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(yt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,rt.__webglTexture),lt(yt,Rt),Et(G.__webglFramebuffer,R,Rt,s.COLOR_ATTACHMENT0+ut,yt,0),m(Rt)&&p(yt)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,q.__webglTexture),lt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)Et(G.__webglFramebuffer[Ct],R,S,s.COLOR_ATTACHMENT0,ut,Ct);else Et(G.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}R.depthBuffer&&Zt(R)}function it(R){const S=R.textures;for(let G=0,q=S.length;G<q;G++){const nt=S[G];if(m(nt)){const j=_(R),Lt=n.get(nt).__webglTexture;e.bindTexture(j,Lt),p(j),e.unbindTexture()}}}const Q=[],J=[];function K(R){if(R.samples>0){if(st(R)===!1){const S=R.textures,G=R.width,q=R.height;let nt=s.COLOR_BUFFER_BIT;const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(R),ut=S.length>1;if(ut)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Ct=R.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Rt]);const rt=n.get(S[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,G,q,0,0,G,q,nt,s.NEAREST),l===!0&&(Q.length=0,J.length=0,Q.push(s.COLOR_ATTACHMENT0+Rt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(j),J.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,J)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Rt]);const rt=n.get(S[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ft(R){return Math.min(i.maxSamples,R.samples)}function st(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pt(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Vt(R,S){const G=R.colorSpace,q=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ji&&G!==Gn&&(ee.getTransfer(G)===re?(q!==sn||nt!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function zt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=ce,this.setupRenderTarget=I,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=st}function Tv(s,t){function e(n,i=Gn){let r;const o=ee.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===va)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tc)return s.BYTE;if(n===bc)return s.SHORT;if(n===xs)return s.UNSIGNED_SHORT;if(n===ga)return s.INT;if(n===gi)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Ls)return s.HALF_FLOAT;if(n===Rc)return s.ALPHA;if(n===Pc)return s.RGB;if(n===sn)return s.RGBA;if(n===Ms)return s.DEPTH_COMPONENT;if(n===Ss)return s.DEPTH_STENCIL;if(n===Lc)return s.RED;if(n===xa)return s.RED_INTEGER;if(n===Ic)return s.RG;if(n===ya)return s.RG_INTEGER;if(n===Ma)return s.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===vr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===No||n===Uo||n===Fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Bo)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Ho||n===ko||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===Zo||n===$o||n===Ko||n===Jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ta)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:bv,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pn(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rv extends Ji{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Cv,p={},_=e.getContextAttributes();let y=null,x=null;const b=[],A=[],C=new mt;let L=null;const w=new Ke;w.viewport=new ve;const M=new Ke;M.viewport=new ve;const P=[w,M],F=new Zd;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=b[Z];return et===void 0&&(et=new Qr,b[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=b[Z];return et===void 0&&(et=new Qr,b[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=b[Z];return et===void 0&&(et=new Qr,b[Z]=et),et.getHandSpace()};function U(Z){const et=A.indexOf(Z.inputSource);if(et===-1)return;const Et=b[et];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,c||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<b.length;Z++){const et=A[Z];et!==null&&(A[Z]=null,b[Z].disconnect(et))}D=null,z=null,m.reset();for(const Z in p)delete p[Z];t.setRenderTarget(y),f=null,u=null,d=null,i=null,x=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Dt=null,At=null;_.depth&&(At=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=_.stencil?Ss:Ms,Dt=_.stencil?ys:gi);const Zt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Zt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new vi(u.textureWidth,u.textureHeight,{format:sn,type:gn,depthTexture:new Wc(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Et={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new vi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let et=0;et<Z.removed.length;et++){const Et=Z.removed[et],Dt=A.indexOf(Et);Dt>=0&&(A[Dt]=null,b[Dt].disconnect(Et))}for(let et=0;et<Z.added.length;et++){const Et=Z.added[et];let Dt=A.indexOf(Et);if(Dt===-1){for(let Zt=0;Zt<b.length;Zt++)if(Zt>=A.length){A.push(Et),Dt=Zt;break}else if(A[Zt]===null){A[Zt]=Et,Dt=Zt;break}if(Dt===-1)break}const At=b[Dt];At&&At.connect(Et)}}const H=new B,$=new B;function ht(Z,et,Et){H.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const Dt=H.distanceTo($),At=et.projectionMatrix.elements,Zt=Et.projectionMatrix.elements,ce=At[14]/(At[10]-1),I=At[14]/(At[10]+1),it=(At[9]+1)/At[5],Q=(At[9]-1)/At[5],J=(At[8]-1)/At[0],K=(Zt[8]+1)/Zt[0],ft=ce*J,st=ce*K,pt=Dt/(-J+K),Vt=pt*-J;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Vt),Z.translateZ(pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const zt=ce+pt,R=I+pt,S=ft-Vt,G=st+(Dt-Vt),q=it*I/R*zt,nt=Q*I/R*zt;Z.projectionMatrix.makePerspective(S,G,q,nt,zt,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function dt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let et=Z.near,Et=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),F.near=M.near=w.near=et,F.far=M.far=w.far=Et,(D!==F.near||z!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,z=F.far),F.layers.mask=Z.layers.mask|6,w.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Dt=Z.parent,At=F.cameras;dt(F,Dt);for(let Zt=0;Zt<At.length;Zt++)dt(At[Zt],Dt);At.length===2?ht(F,w,M):F.projectionMatrix.copy(w.projectionMatrix),lt(Z,F,Dt)};function lt(Z,et,Et){Et===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Es*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return p[Z]};let kt=null;function Kt(Z,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Dt=!1;Et.length!==F.cameras.length&&(F.cameras.length=0,Dt=!0);for(let I=0;I<Et.length;I++){const it=Et[I];let Q=null;if(f!==null)Q=f.getViewport(it);else{const K=d.getViewSubImage(u,it);Q=K.viewport,I===0&&(t.setRenderTargetTextures(x,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(x))}let J=P[I];J===void 0&&(J=new Ke,J.layers.enable(I),J.viewport=new ve,P[I]=J),J.matrix.fromArray(it.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(it.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(F.matrix.copy(J.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Dt===!0&&F.cameras.push(J)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const I=d.getDepthInformation(Et[0]);I&&I.isValid&&I.texture&&m.init(I,i.renderState)}if(At&&At.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let I=0;I<Et.length;I++){const it=Et[I].camera;if(it){let Q=p[it];Q||(Q=new Xc,p[it]=Q);const J=d.getCameraImage(it);Q.sourceTexture=J}}}}for(let Et=0;Et<b.length;Et++){const Dt=A[Et],At=b[Et];Dt!==null&&At!==void 0&&At.update(Dt,et,c||o)}kt&&kt(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const jt=new nh;jt.setAnimationLoop(Kt),this.setAnimationLoop=function(Z){kt=Z},this.dispose=function(){}}}const ii=new vn,Pv=new _e;function Lv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,ii.copy(x),ii.x*=-1,ii.y*=-1,ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(ii)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(_,b);const A=t.render.frame;r[_.id]!==A&&(u(_),r[_.id]=A)}function h(_){const y=d();_.__bindingPointIndex=y;const x=s.createBuffer(),b=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,b,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=i[_.id],x=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,M=L.length;w<M;w++){const P=L[w];if(f(P,A,w,b)===!0){const F=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let U=0;U<D.length;U++){const N=D[U],Y=v(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,F+z,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,x,b){const A=_.value,C=y+"_"+x;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const L=b[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return b[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(_){const y=_.uniforms;let x=0;const b=16;for(let C=0,L=y.length;C<L;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,P=w.length;M<P;M++){const F=w[M],D=Array.isArray(F.value)?F.value:[F.value];for(let z=0,U=D.length;z<U;z++){const N=D[z],Y=v(N),H=x%b,$=H%Y.boundary,ht=H+$;x+=$,ht!==0&&b-ht<Y.storage&&(x+=b-ht),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Y.storage}}}const A=x%b;return A>0&&(x+=b-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Dv{constructor(t={}){const{canvas:e=Lu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=Xe;let A=0,C=0,L=null,w=-1,M=null;const P=new ve,F=new ve;let D=null;const z=new Jt(0);let U=0,N=e.width,Y=e.height,H=1,$=null,ht=null;const dt=new ve(0,0,N,Y),lt=new ve(0,0,N,Y);let kt=!1;const Kt=new Aa;let jt=!1,Z=!1;const et=new _e,Et=new B,Dt=new ve,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function ce(){return L===null?H:1}let I=n;function it(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),I===null){const V="webgl2";if(I=it(V,T),I===null)throw it(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,J,K,ft,st,pt,Vt,zt,R,S,G,q,nt,j,Lt,ut,Ct,Rt,rt,yt,Ot,It,_t,Gt;function O(){Q=new Gm(I),Q.init(),It=new Tv(I,Q),J=new Fm(I,Q,t,It),K=new Ev(I,Q),J.reversedDepthBuffer&&u&&K.buffers.depth.setReversed(!0),ft=new qm(I),st=new hv,pt=new wv(I,Q,K,st,J,It,ft),Vt=new Bm(x),zt=new km(x),R=new Kd(I),_t=new Nm(I,R),S=new Wm(I,R,ft,_t),G=new jm(I,S,R,ft),rt=new Ym(I,J,pt),ut=new Om(st),q=new cv(x,Vt,zt,Q,J,_t,ut),nt=new Lv(x,st),j=new dv,Lt=new _v(Q),Rt=new Dm(x,Vt,zt,K,G,f,l),Ct=new Mv(x,G,J),Gt=new Iv(I,ft,J,K),yt=new Um(I,Q,ft),Ot=new Xm(I,Q,ft),ft.programs=q.programs,x.capabilities=J,x.extensions=Q,x.properties=st,x.renderLists=j,x.shadowMap=Ct,x.state=K,x.info=ft}O();const ct=new Rv(x,I);this.xr=ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(N,Y,!1))},this.getSize=function(T){return T.set(N,Y)},this.setSize=function(T,V,W=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,Y=V,e.width=Math.floor(T*H),e.height=Math.floor(V*H),W===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(N*H,Y*H).floor()},this.setDrawingBufferSize=function(T,V,W){N=T,Y=V,H=W,e.width=Math.floor(T*W),e.height=Math.floor(V*W),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,V,W,X){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,V,W,X),K.viewport(P.copy(dt).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(lt)},this.setScissor=function(T,V,W,X){T.isVector4?lt.set(T.x,T.y,T.z,T.w):lt.set(T,V,W,X),K.scissor(F.copy(lt).multiplyScalar(H).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(T){K.setScissorTest(kt=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,W=!0){let X=0;if(T){let k=!1;if(L!==null){const at=L.texture.format;k=at===Ma||at===ya||at===xa}if(k){const at=L.texture.type,xt=at===gn||at===gi||at===xs||at===ys||at===va||at===_a,bt=Rt.getClearColor(),St=Rt.getClearAlpha(),Ft=bt.r,Bt=bt.g,Nt=bt.b;xt?(g[0]=Ft,g[1]=Bt,g[2]=Nt,g[3]=St,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Ft,v[1]=Bt,v[2]=Nt,v[3]=St,I.clearBufferiv(I.COLOR,0,v))}else X|=I.COLOR_BUFFER_BIT}V&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Rt.dispose(),j.dispose(),Lt.dispose(),st.dispose(),Vt.dispose(),zt.dispose(),G.dispose(),_t.dispose(),Gt.dispose(),q.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",an),ct.removeEventListener("sessionend",Ga),$n.stop()};function gt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=ft.autoReset,V=Ct.enabled,W=Ct.autoUpdate,X=Ct.needsUpdate,k=Ct.type;O(),ft.autoReset=T,Ct.enabled=V,Ct.autoUpdate=W,Ct.needsUpdate=X,Ct.type=k}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function tt(T){const V=T.target;V.removeEventListener("dispose",tt),Pt(V)}function Pt(T){Ht(T),st.remove(T)}function Ht(T){const V=st.get(T).programs;V!==void 0&&(V.forEach(function(W){q.releaseProgram(W)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,W,X,k,at){V===null&&(V=At);const xt=k.isMesh&&k.matrixWorld.determinant()<0,bt=Eh(T,V,W,X,k);K.setMaterial(X,xt);let St=W.index,Ft=1;if(X.wireframe===!0){if(St=S.getWireframeAttribute(W),St===void 0)return;Ft=2}const Bt=W.drawRange,Nt=W.attributes.position;let $t=Bt.start*Ft,se=(Bt.start+Bt.count)*Ft;at!==null&&($t=Math.max($t,at.start*Ft),se=Math.min(se,(at.start+at.count)*Ft)),St!==null?($t=Math.max($t,0),se=Math.min(se,St.count)):Nt!=null&&($t=Math.max($t,0),se=Math.min(se,Nt.count));const ge=se-$t;if(ge<0||ge===1/0)return;_t.setup(k,X,bt,W,St);let ue,oe=yt;if(St!==null&&(ue=R.get(St),oe=Ot,oe.setIndex(ue)),k.isMesh)X.wireframe===!0?(K.setLineWidth(X.wireframeLinewidth*ce()),oe.setMode(I.LINES)):oe.setMode(I.TRIANGLES);else if(k.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),K.setLineWidth(Ut*ce()),k.isLineSegments?oe.setMode(I.LINES):k.isLineLoop?oe.setMode(I.LINE_LOOP):oe.setMode(I.LINE_STRIP)}else k.isPoints?oe.setMode(I.POINTS):k.isSprite&&oe.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ut=k._multiDrawStarts,fe=k._multiDrawCounts,te=k._multiDrawCount,He=St?R.get(St).bytesPerElement:1,Mi=st.get(X).currentProgram.getUniforms();for(let ke=0;ke<te;ke++)Mi.setValue(I,"_gl_DrawID",ke),oe.render(Ut[ke]/He,fe[ke])}else if(k.isInstancedMesh)oe.renderInstances($t,ge,k.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,fe=Math.min(W.instanceCount,Ut);oe.renderInstances($t,ge,fe)}else oe.render($t,ge)};function he(T,V,W){T.transparent===!0&&T.side===Pn&&T.forceSinglePass===!1?(T.side=Be,T.needsUpdate=!0,Bs(T,V,W),T.side=jn,T.needsUpdate=!0,Bs(T,V,W),T.side=Pn):Bs(T,V,W)}this.compile=function(T,V,W=null){W===null&&(W=T),p=Lt.get(W),p.init(V),y.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==W&&T.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const at=k.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const bt=at[xt];he(bt,W,k),X.add(bt)}else he(at,W,k),X.add(at)}),p=y.pop(),X},this.compileAsync=function(T,V,W=null){const X=this.compile(T,V,W);return new Promise(k=>{function at(){if(X.forEach(function(xt){st.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){k(T);return}setTimeout(at,10)}Q.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ie=null;function xn(T){ie&&ie(T)}function an(){$n.stop()}function Ga(){$n.start()}const $n=new nh;$n.setAnimationLoop(xn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(T){ie=T,ct.setAnimationLoop(T),T===null?$n.stop():$n.start()},ct.addEventListener("sessionstart",an),ct.addEventListener("sessionend",Ga),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(V),V=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,V,L),p=Lt.get(T,y.length),p.init(V),y.push(p),et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Kt.setFromProjectionMatrix(et,fn,V.reversedDepth),Z=this.localClippingEnabled,jt=ut.init(this.clippingPlanes,Z),m=j.get(T,_.length),m.init(),_.push(m),ct.enabled===!0&&ct.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Pr(at,V,-1/0,x.sortObjects)}Pr(T,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,ht),Zt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Zt&&Rt.addToRenderList(m,T),this.info.render.frame++,jt===!0&&ut.beginShadows();const W=p.state.shadowsArray;Ct.render(W,T,V),jt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(p.setupLights(),V.isArrayCamera){const at=V.cameras;if(k.length>0)for(let xt=0,bt=at.length;xt<bt;xt++){const St=at[xt];Xa(X,k,T,St)}Zt&&Rt.render(T);for(let xt=0,bt=at.length;xt<bt;xt++){const St=at[xt];Wa(m,T,St,St.viewport)}}else k.length>0&&Xa(X,k,T,V),Zt&&Rt.render(T),Wa(m,T,V);L!==null&&C===0&&(pt.updateMultisampleRenderTarget(L),pt.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(x,T,V),_t.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],jt===!0&&ut.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Pr(T,V,W,X){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Kt.intersectsSprite(T)){X&&Dt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(et);const xt=G.update(T),bt=T.material;bt.visible&&m.push(T,xt,bt,W,Dt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Kt.intersectsObject(T))){const xt=G.update(T),bt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Dt.copy(T.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Dt.copy(xt.boundingSphere.center)),Dt.applyMatrix4(T.matrixWorld).applyMatrix4(et)),Array.isArray(bt)){const St=xt.groups;for(let Ft=0,Bt=St.length;Ft<Bt;Ft++){const Nt=St[Ft],$t=bt[Nt.materialIndex];$t&&$t.visible&&m.push(T,xt,$t,W,Dt.z,Nt)}}else bt.visible&&m.push(T,xt,bt,W,Dt.z,null)}}const at=T.children;for(let xt=0,bt=at.length;xt<bt;xt++)Pr(at[xt],V,W,X)}function Wa(T,V,W,X){const k=T.opaque,at=T.transmissive,xt=T.transparent;p.setupLightsView(W),jt===!0&&ut.setGlobalState(x.clippingPlanes,W),X&&K.viewport(P.copy(X)),k.length>0&&Os(k,V,W),at.length>0&&Os(at,V,W),xt.length>0&&Os(xt,V,W),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Xa(T,V,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new vi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ls:gn,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const at=p.state.transmissionRenderTarget[X.id],xt=X.viewport||P;at.setSize(xt.z*x.transmissionResolutionScale,xt.w*x.transmissionResolutionScale);const bt=x.getRenderTarget(),St=x.getActiveCubeFace(),Ft=x.getActiveMipmapLevel();x.setRenderTarget(at),x.getClearColor(z),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),Zt&&Rt.render(W);const Bt=x.toneMapping;x.toneMapping=Yn;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),jt===!0&&ut.setGlobalState(x.clippingPlanes,X),Os(T,W,X),pt.updateMultisampleRenderTarget(at),pt.updateRenderTargetMipmap(at),Q.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let se=0,ge=V.length;se<ge;se++){const ue=V[se],oe=ue.object,Ut=ue.geometry,fe=ue.material,te=ue.group;if(fe.side===Pn&&oe.layers.test(X.layers)){const He=fe.side;fe.side=Be,fe.needsUpdate=!0,qa(oe,W,X,Ut,fe,te),fe.side=He,fe.needsUpdate=!0,$t=!0}}$t===!0&&(pt.updateMultisampleRenderTarget(at),pt.updateRenderTargetMipmap(at))}x.setRenderTarget(bt,St,Ft),x.setClearColor(z,U),Nt!==void 0&&(X.viewport=Nt),x.toneMapping=Bt}function Os(T,V,W){const X=V.isScene===!0?V.overrideMaterial:null;for(let k=0,at=T.length;k<at;k++){const xt=T[k],bt=xt.object,St=xt.geometry,Ft=xt.group;let Bt=xt.material;Bt.allowOverride===!0&&X!==null&&(Bt=X),bt.layers.test(W.layers)&&qa(bt,V,W,St,Bt,Ft)}}function qa(T,V,W,X,k,at){T.onBeforeRender(x,V,W,X,k,at),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,V,W,X,T,at),k.transparent===!0&&k.side===Pn&&k.forceSinglePass===!1?(k.side=Be,k.needsUpdate=!0,x.renderBufferDirect(W,V,X,k,T,at),k.side=jn,k.needsUpdate=!0,x.renderBufferDirect(W,V,X,k,T,at),k.side=Pn):x.renderBufferDirect(W,V,X,k,T,at),T.onAfterRender(x,V,W,X,k,at)}function Bs(T,V,W){V.isScene!==!0&&(V=At);const X=st.get(T),k=p.state.lights,at=p.state.shadowsArray,xt=k.state.version,bt=q.getParameters(T,k.state,at,V,W),St=q.getProgramCacheKey(bt);let Ft=X.programs;X.environment=T.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(T.isMeshStandardMaterial?zt:Vt).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",tt),Ft=new Map,X.programs=Ft);let Bt=Ft.get(St);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===xt)return ja(T,bt),Bt}else bt.uniforms=q.getUniforms(T),T.onBeforeCompile(bt,x),Bt=q.acquireProgram(bt,St),Ft.set(St,Bt),X.uniforms=bt.uniforms;const Nt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),ja(T,bt),X.needsLights=Th(T),X.lightsStateVersion=xt,X.needsLights&&(Nt.ambientLightColor.value=k.state.ambient,Nt.lightProbe.value=k.state.probe,Nt.directionalLights.value=k.state.directional,Nt.directionalLightShadows.value=k.state.directionalShadow,Nt.spotLights.value=k.state.spot,Nt.spotLightShadows.value=k.state.spotShadow,Nt.rectAreaLights.value=k.state.rectArea,Nt.ltc_1.value=k.state.rectAreaLTC1,Nt.ltc_2.value=k.state.rectAreaLTC2,Nt.pointLights.value=k.state.point,Nt.pointLightShadows.value=k.state.pointShadow,Nt.hemisphereLights.value=k.state.hemi,Nt.directionalShadowMap.value=k.state.directionalShadowMap,Nt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Nt.spotShadowMap.value=k.state.spotShadowMap,Nt.spotLightMatrix.value=k.state.spotLightMatrix,Nt.spotLightMap.value=k.state.spotLightMap,Nt.pointShadowMap.value=k.state.pointShadowMap,Nt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function Ya(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=_r.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function ja(T,V){const W=st.get(T);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function Eh(T,V,W,X,k){V.isScene!==!0&&(V=At),pt.resetTextureUnits();const at=V.fog,xt=X.isMeshStandardMaterial?V.environment:null,bt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ji,St=(X.isMeshStandardMaterial?zt:Vt).get(X.envMap||xt),Ft=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,se=!!W.morphAttributes.color;let ge=Yn;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ge=x.toneMapping);const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=ue!==void 0?ue.length:0,Ut=st.get(X),fe=p.state.lights;if(jt===!0&&(Z===!0||T!==M)){const Le=T===M&&X.id===w;ut.setState(X,T,Le)}let te=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==fe.state.version||Ut.outputColorSpace!==bt||k.isBatchedMesh&&Ut.batching===!1||!k.isBatchedMesh&&Ut.batching===!0||k.isBatchedMesh&&Ut.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ut.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ut.instancing===!1||!k.isInstancedMesh&&Ut.instancing===!0||k.isSkinnedMesh&&Ut.skinning===!1||!k.isSkinnedMesh&&Ut.skinning===!0||k.isInstancedMesh&&Ut.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ut.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ut.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ut.instancingMorph===!1&&k.morphTexture!==null||Ut.envMap!==St||X.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ut.numPlanes||Ut.numIntersection!==ut.numIntersection)||Ut.vertexAlphas!==Ft||Ut.vertexTangents!==Bt||Ut.morphTargets!==Nt||Ut.morphNormals!==$t||Ut.morphColors!==se||Ut.toneMapping!==ge||Ut.morphTargetsCount!==oe)&&(te=!0):(te=!0,Ut.__version=X.version);let He=Ut.currentProgram;te===!0&&(He=Bs(X,V,k));let Mi=!1,ke=!1,es=!1;const pe=He.getUniforms(),Ye=Ut.uniforms;if(K.useProgram(He.program)&&(Mi=!0,ke=!0,es=!0),X.id!==w&&(w=X.id,ke=!0),Mi||M!==T){K.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pe.setValue(I,"projectionMatrix",T.projectionMatrix),pe.setValue(I,"viewMatrix",T.matrixWorldInverse);const Ne=pe.map.cameraPosition;Ne!==void 0&&Ne.setValue(I,Et.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ke=!0,es=!0)}if(k.isSkinnedMesh){pe.setOptional(I,k,"bindMatrix"),pe.setOptional(I,k,"bindMatrixInverse");const Le=k.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),pe.setValue(I,"boneTexture",Le.boneTexture,pt))}k.isBatchedMesh&&(pe.setOptional(I,k,"batchingTexture"),pe.setValue(I,"batchingTexture",k._matricesTexture,pt),pe.setOptional(I,k,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",k._indirectTexture,pt),pe.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",k._colorsTexture,pt));const je=W.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&rt.update(k,W,He),(ke||Ut.receiveShadow!==k.receiveShadow)&&(Ut.receiveShadow=k.receiveShadow,pe.setValue(I,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ye.envMap.value=St,Ye.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&V.environment!==null&&(Ye.envMapIntensity.value=V.environmentIntensity),ke&&(pe.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&wh(Ye,es),at&&X.fog===!0&&nt.refreshFogUniforms(Ye,at),nt.refreshMaterialUniforms(Ye,X,H,Y,p.state.transmissionRenderTarget[T.id]),_r.upload(I,Ya(Ut),Ye,pt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_r.upload(I,Ya(Ut),Ye,pt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(I,"center",k.center),pe.setValue(I,"modelViewMatrix",k.modelViewMatrix),pe.setValue(I,"normalMatrix",k.normalMatrix),pe.setValue(I,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Le=X.uniformsGroups;for(let Ne=0,Lr=Le.length;Ne<Lr;Ne++){const Kn=Le[Ne];Gt.update(Kn,He),Gt.bind(Kn,He)}}return He}function wh(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Th(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,V,W){const X=st.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),st.get(T.texture).__webglTexture=V,st.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const W=st.get(T);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0};const bh=I.createFramebuffer();this.setRenderTarget=function(T,V=0,W=0){L=T,A=V,C=W;let X=!0,k=null,at=!1,xt=!1;if(T){const St=st.get(T);if(St.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)pt.setupRenderTarget(T);else if(St.__hasExternalTextures)pt.rebindTextures(T,st.get(T.texture).__webglTexture,st.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Nt=T.depthTexture;if(St.__boundDepthTexture!==Nt){if(Nt!==null&&st.has(Nt)&&(T.width!==Nt.image.width||T.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(T)}}const Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(xt=!0);const Bt=st.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[V])?k=Bt[V][W]:k=Bt[V],at=!0):T.samples>0&&pt.useMultisampledRTT(T)===!1?k=st.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?k=Bt[W]:k=Bt,P.copy(T.viewport),F.copy(T.scissor),D=T.scissorTest}else P.copy(dt).multiplyScalar(H).floor(),F.copy(lt).multiplyScalar(H).floor(),D=kt;if(W!==0&&(k=bh),K.bindFramebuffer(I.FRAMEBUFFER,k)&&X&&K.drawBuffers(T,k),K.viewport(P),K.scissor(F),K.setScissorTest(D),at){const St=st.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,St.__webglTexture,W)}else if(xt){const St=V;for(let Ft=0;Ft<T.textures.length;Ft++){const Bt=st.get(T.textures[Ft]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ft,Bt.__webglTexture,W,St)}}else if(T!==null&&W!==0){const St=st.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,St.__webglTexture,W)}w=-1},this.readRenderTargetPixels=function(T,V,W,X,k,at,xt,bt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){K.bindFramebuffer(I.FRAMEBUFFER,St);try{const Ft=T.textures[bt],Bt=Ft.format,Nt=Ft.type;if(!J.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-X&&W>=0&&W<=T.height-k&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt),I.readPixels(V,W,X,k,It.convert(Bt),It.convert(Nt),at))}finally{const Ft=L!==null?st.get(L).__webglFramebuffer:null;K.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,V,W,X,k,at,xt,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St)if(V>=0&&V<=T.width-X&&W>=0&&W<=T.height-k){K.bindFramebuffer(I.FRAMEBUFFER,St);const Ft=T.textures[bt],Bt=Ft.format,Nt=Ft.type;if(!J.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt),I.readPixels(V,W,X,k,It.convert(Bt),It.convert(Nt),0);const se=L!==null?st.get(L).__webglFramebuffer:null;K.bindFramebuffer(I.FRAMEBUFFER,se);const ge=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Iu(I,ge,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer($t),I.deleteSync(ge),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,W=0){const X=Math.pow(2,-W),k=Math.floor(T.image.width*X),at=Math.floor(T.image.height*X),xt=V!==null?V.x:0,bt=V!==null?V.y:0;pt.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,xt,bt,k,at),K.unbindTexture()};const Ah=I.createFramebuffer(),Ch=I.createFramebuffer();this.copyTextureToTexture=function(T,V,W=null,X=null,k=0,at=null){at===null&&(k!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=k,k=0):at=0);let xt,bt,St,Ft,Bt,Nt,$t,se,ge;const ue=T.isCompressedTexture?T.mipmaps[at]:T.image;if(W!==null)xt=W.max.x-W.min.x,bt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,Ft=W.min.x,Bt=W.min.y,Nt=W.isBox3?W.min.z:0;else{const je=Math.pow(2,-k);xt=Math.floor(ue.width*je),bt=Math.floor(ue.height*je),T.isDataArrayTexture?St=ue.depth:T.isData3DTexture?St=Math.floor(ue.depth*je):St=1,Ft=0,Bt=0,Nt=0}X!==null?($t=X.x,se=X.y,ge=X.z):($t=0,se=0,ge=0);const oe=It.convert(V.format),Ut=It.convert(V.type);let fe;V.isData3DTexture?(pt.setTexture3D(V,0),fe=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(pt.setTexture2DArray(V,0),fe=I.TEXTURE_2D_ARRAY):(pt.setTexture2D(V,0),fe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const te=I.getParameter(I.UNPACK_ROW_LENGTH),He=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mi=I.getParameter(I.UNPACK_SKIP_PIXELS),ke=I.getParameter(I.UNPACK_SKIP_ROWS),es=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt);const pe=T.isDataArrayTexture||T.isData3DTexture,Ye=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const je=st.get(T),Le=st.get(V),Ne=st.get(je.__renderTarget),Lr=st.get(Le.__renderTarget);K.bindFramebuffer(I.READ_FRAMEBUFFER,Ne.__webglFramebuffer),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let Kn=0;Kn<St;Kn++)pe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,st.get(T).__webglTexture,k,Nt+Kn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,st.get(V).__webglTexture,at,ge+Kn)),I.blitFramebuffer(Ft,Bt,xt,bt,$t,se,xt,bt,I.DEPTH_BUFFER_BIT,I.NEAREST);K.bindFramebuffer(I.READ_FRAMEBUFFER,null),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||st.has(T)){const je=st.get(T),Le=st.get(V);K.bindFramebuffer(I.READ_FRAMEBUFFER,Ah),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ch);for(let Ne=0;Ne<St;Ne++)pe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,k,Nt+Ne):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,k),Ye?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,at,ge+Ne):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,at),k!==0?I.blitFramebuffer(Ft,Bt,xt,bt,$t,se,xt,bt,I.COLOR_BUFFER_BIT,I.NEAREST):Ye?I.copyTexSubImage3D(fe,at,$t,se,ge+Ne,Ft,Bt,xt,bt):I.copyTexSubImage2D(fe,at,$t,se,Ft,Bt,xt,bt);K.bindFramebuffer(I.READ_FRAMEBUFFER,null),K.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ye?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(fe,at,$t,se,ge,xt,bt,St,oe,Ut,ue.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(fe,at,$t,se,ge,xt,bt,St,oe,ue.data):I.texSubImage3D(fe,at,$t,se,ge,xt,bt,St,oe,Ut,ue):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,at,$t,se,xt,bt,oe,Ut,ue.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,at,$t,se,ue.width,ue.height,oe,ue.data):I.texSubImage2D(I.TEXTURE_2D,at,$t,se,xt,bt,oe,Ut,ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mi),I.pixelStorei(I.UNPACK_SKIP_ROWS,ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,es),at===0&&V.generateMipmaps&&I.generateMipmap(fe),K.unbindTexture()},this.initRenderTarget=function(T){st.get(T).__webglFramebuffer===void 0&&pt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?pt.setTextureCube(T,0):T.isData3DTexture?pt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?pt.setTexture2DArray(T,0):pt.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,K.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class rn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new rn);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],_=i[3],y=i[4],x=i[5],b=i[6],A=i[7],C=i[8];return r[0]=o*v+a*_+l*b,r[1]=o*m+a*y+l*A,r[2]=o*p+a*x+l*C,r[3]=c*v+h*_+d*b,r[4]=c*m+h*y+d*A,r[5]=c*p+h*x+d*C,r[6]=u*v+f*_+g*b,r[7]=u*m+f*y+g*A,r[8]=u*p+f*x+g*C,e}scale(t,e){e===void 0&&(e=new rn);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const f=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*f;while(--h)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new rn);const e=3,n=6,i=Nv;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const h=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,g=i*l,v=r*o,m=r*a,p=r*l,_=this.elements;return _[0]=1-(u+g),_[1]=h-p,_[2]=d+m,_[3]=h+p,_[4]=1-(c+g),_[5]=f-v,_[6]=d-m,_[7]=f+v,_[8]=1-(c+u),this}transpose(t){t===void 0&&(t=new rn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Nv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new E);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Uv,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Fv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Jl),Jl.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const Uv=new E,Fv=new E,Jl=new E;class qe{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Ql),c=Ql),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new qe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=tc,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=tc,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}}const Ql=new E,tc=[new E,new E,new E,new E,new E,new E,new E,new E];class ec{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class ah{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class Me{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Ov,i=Bv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Me);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-r*l,e.y=i*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new Me);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Me),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,f=-o*n-a*i-l*r;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new Me(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Me);const i=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,v,m;return f=i*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),v=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*r+m*c,n.z=v*o+m*h,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new Me);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}}const Ov=new E,Bv=new E,zv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class wt{constructor(t){t===void 0&&(t={}),this.id=wt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}wt.idCounter=0;wt.types=zv;class ne{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Me,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ne.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ne.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),n.vsub(t,i),e.conjugate(nc),nc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new E),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const nc=new Me;class _s extends wt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:wt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];_s.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new E,o=new E;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){const h=new E;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],m=new E;m.copy(v),r.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){const c=new E,h=new E,d=new E,u=new E,f=new E,g=new E;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const _=m.testSepAxis(c,t,e,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let _=0;_<p;_++){const y=a?a[_]:_;c.copy(m.faceNormals[y]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);const _=m.testSepAxis(h,t,e,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let _=0;_<p;_++){const y=l?l[_]:_;h.copy(t.faceNormals[y]),r.vmult(h,h);const x=m.testSepAxis(h,t,e,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(r.vmult(t.uniqueEdges[_],f),u.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;_s.project(a,t,n,i,uo),_s.project(e,t,r,o,fo);const l=uo[0],c=uo[1],h=fo[0],d=fo[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new E,i=new E;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const l=new E,c=new E,h=new E,d=new E,u=new E,f=new E,g=new E,v=new E,m=this,p=[],_=i,y=p;let x=-1,b=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){l.copy(m.faceNormals[M]),n.vmult(l,l);const P=l.dot(t);P<b&&(b=P,x=M)}if(x<0)return;const A=m.faces[x];A.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let P=0;P<m.faces[M].length;P++)A.indexOf(m.faces[M][P])!==-1&&M!==x&&A.connectedFaces.indexOf(M)===-1&&A.connectedFaces.push(M);const C=A.length;for(let M=0;M<C;M++){const P=m.vertices[A[M]],F=m.vertices[A[(M+1)%C]];P.vsub(F,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(P),n.vmult(f,f),e.vadd(f,f);const D=A.connectedFaces[M];g.copy(this.faceNormals[D]);const z=this.getPlaneConstantOfFace(D);v.copy(g),n.vmult(v,v);const U=z-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,U);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[x]);const L=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);const w=L-v.dot(e);for(let M=0;M<_.length;M++){let P=v.dot(_[M])+w;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){const F=_[M];if(P<=1e-6){const D={point:F,normal:v,depth:P};a.push(D)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,r<0)if(o<0){const d=new E;d.copy(c),e.push(d)}else{const d=new E;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new E;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,l,c,h,d,u=new E;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new E;t.vsub(l,c);const h=a.dot(c),d=new E;r.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,r){const o=t.vertices.length,a=Vv;let l=0,c=0;const h=Hv,d=t.vertices;h.setZero(),ne.vectorToLocalFrame(n,i,e,a),ne.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const uo=[],fo=[];new E;const Vv=new E,Hv=new E;class Rs extends wt{constructor(t){super({type:wt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=E,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new _s({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),Rs.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)kn.set(r[o][0],r[o][1],r[o][2]),e.vmult(kn,kn),t.vadd(kn,kn),n(kn.x,kn.y,kn.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;ln[0].set(r.x,r.y,r.z),ln[1].set(-r.x,r.y,r.z),ln[2].set(-r.x,-r.y,r.z),ln[3].set(-r.x,-r.y,-r.z),ln[4].set(r.x,-r.y,-r.z),ln[5].set(r.x,r.y,-r.z),ln[6].set(-r.x,r.y,-r.z),ln[7].set(r.x,-r.y,r.z);const o=ln[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=ln[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const kn=new E,ln=[new E,new E,new E,new E,new E,new E,new E,new E],Ua={DYNAMIC:1,STATIC:2,KINEMATIC:4},Fa={AWAKE:0,SLEEPY:1,SLEEPING:2};class Mt extends ah{constructor(t){t===void 0&&(t={}),super(),this.id=Mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Mt.STATIC:Mt.DYNAMIC,typeof t.type==typeof Mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Me,this.initQuaternion=new Me,this.previousQuaternion=new Me,this.interpolatedQuaternion=new Me,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new rn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new rn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new qe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Mt.SLEEPING&&this.dispatchEvent(Mt.wakeupEvent)}sleep(){this.sleepState=Mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Mt.AWAKE&&n<i?(this.sleepState=Mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Mt.sleepyEvent)):e===Mt.SLEEPY&&n>i?this.wakeUp():e===Mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Mt.SLEEPING||this.type===Mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new E,r=new Me;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=kv,o=Gv,a=this.quaternion,l=this.aabb,c=Wv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Xv,i=qv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==Mt.DYNAMIC)return;this.sleepState===Mt.SLEEPING&&this.wakeUp();const n=Yv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==Mt.DYNAMIC)return;const n=jv,i=Zv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Mt.DYNAMIC&&(this.sleepState===Mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==Mt.DYNAMIC)return;this.sleepState===Mt.SLEEPING&&this.wakeUp();const n=e,i=$v;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=Kv;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==Mt.DYNAMIC)return;const n=Jv,i=Qv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=t_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Rs.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Mt.DYNAMIC||this.type===Mt.KINEMATIC)||this.sleepState===Mt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,v=this.angularFactor,m=l.x*v.x,p=l.y*v.y,_=l.z*v.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*_),r.y+=t*(g[3]*m+g[4]*p+g[5]*_),r.z+=t*(g[6]*m+g[7]*p+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Mt.idCounter=0;Mt.COLLIDE_EVENT_NAME="collide";Mt.DYNAMIC=Ua.DYNAMIC;Mt.STATIC=Ua.STATIC;Mt.KINEMATIC=Ua.KINEMATIC;Mt.AWAKE=Fa.AWAKE;Mt.SLEEPY=Fa.SLEEPY;Mt.SLEEPING=Fa.SLEEPING;Mt.wakeupEvent={type:"wakeup"};Mt.sleepyEvent={type:"sleepy"};Mt.sleepEvent={type:"sleep"};const kv=new E,Gv=new Me,Wv=new qe,Xv=new rn,qv=new rn;new rn;const Yv=new E,jv=new E,Zv=new E,$v=new E,Kv=new E,Jv=new E,Qv=new E,t_=new E;class e_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Mt.STATIC)!==0||t.sleepState===Mt.SLEEPING)&&((e.type&Mt.STATIC)!==0||e.sleepState===Mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=n_;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=i_,i=s_,r=r_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const n_=new E;new E;new Me;new E;const i_={keys:[]},s_=[],r_=[];new E;new E;new E;class o_ extends e_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class Sr{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let lh,ch,hh,uh,dh,fh,ph;const Oa={CLOSEST:1,ANY:2,ALL:4};lh=wt.types.SPHERE;ch=wt.types.PLANE;hh=wt.types.BOX;uh=wt.types.CYLINDER;dh=wt.types.CONVEXPOLYHEDRON;fh=wt.types.HEIGHTFIELD;ph=wt.types.TRIMESH;class ye{get[lh](){return this._intersectSphere}get[ch](){return this._intersectPlane}get[hh](){return this._intersectBox}get[uh](){return this._intersectConvex}get[dh](){return this._intersectConvex}get[fh](){return this._intersectHeightfield}get[ph](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ye.ANY,this.result=new Sr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ye.ANY,this.result=e.result||new Sr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ic),po.length=0,t.broadphase.aabbQuery(t,ic,po),this.intersectBodies(po),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=a_,r=l_;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(S_(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const h=new E;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new E,v=new E,m=new E;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,v),o.vadd(v,m),this.reportIntersection(c,m,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=c_;o.from.copy(this.from),o.to.copy(this.to),ne.pointToLocalFrame(n,e,o.from,o.from),ne.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=h_;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new qe;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),ne.pointToWorldFrame(n,e,t.pillarOffset,cr),this._intersectConvex(t.pillarConvex,e,cr,i,r,sc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),ne.pointToWorldFrame(n,e,t.pillarOffset,cr),this._intersectConvex(t.pillarConvex,e,cr,i,r,sc)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=u_,g=d_;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=f_,l=rc,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=c?c.length:h.length,_=this.result;for(let y=0;!_.shouldStop&&y<p;y++){const x=c?c[y]:y,b=h[x],A=u[x],C=e,L=n;l.copy(d[b[0]]),C.vmult(l,l),l.vadd(L,l),l.vsub(g,l),C.vmult(A,a);const w=f.dot(a);if(Math.abs(w)<this.precision)continue;const M=a.dot(l)/w;if(!(M<0)){f.scale(M,Ue),Ue.vadd(g,Ue),en.copy(d[b[0]]),C.vmult(en,en),L.vadd(en,en);for(let P=1;!_.shouldStop&&P<b.length-1;P++){cn.copy(d[b[P]]),hn.copy(d[b[P+1]]),C.vmult(cn,cn),C.vmult(hn,hn),L.vadd(cn,cn),L.vadd(hn,hn);const F=Ue.distanceTo(g);!(ye.pointInTriangle(Ue,en,cn,hn)||ye.pointInTriangle(Ue,cn,en,hn))||F>m||this.reportIntersection(a,Ue,r,i,x)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=p_,l=y_,c=M_,h=rc,d=m_,u=g_,f=v_,g=x_,v=__,m=t.indices;t.vertices;const p=this.from,_=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),ne.vectorToLocalFrame(n,e,y,d),ne.pointToLocalFrame(n,e,p,u),ne.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const x=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let b=0,A=l.length;!this.result.shouldStop&&b!==A;b++){const C=l[b];t.getNormal(C,a),t.getVertex(m[C*3],en),en.vsub(u,h);const L=d.dot(a),w=a.dot(h)/L;if(w<0)continue;d.scale(w,Ue),Ue.vadd(u,Ue),t.getVertex(m[C*3+1],cn),t.getVertex(m[C*3+2],hn);const M=Ue.distanceSquared(u);!(ye.pointInTriangle(Ue,cn,en,hn)||ye.pointInTriangle(Ue,en,cn,hn))||M>x||(ne.vectorToWorldFrame(e,a,v),ne.pointToWorldFrame(n,e,Ue,g),this.reportIntersection(v,g,r,i,C))}l.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case ye.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ye.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case ye.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,hi),n.vsub(e,os),t.vsub(e,mo);const r=hi.dot(hi),o=hi.dot(os),a=hi.dot(mo),l=os.dot(os),c=os.dot(mo);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}ye.CLOSEST=Oa.CLOSEST;ye.ANY=Oa.ANY;ye.ALL=Oa.ALL;const ic=new qe,po=[],os=new E,mo=new E,a_=new E,l_=new Me,Ue=new E,en=new E,cn=new E,hn=new E;new E;new Sr;const sc={faceList:[0]},cr=new E,c_=new ye,h_=[],u_=new E,d_=new E,f_=new E;new E;new E;const rc=new E,p_=new E,m_=new E,g_=new E,v_=new E,__=new E,x_=new E;new qe;const y_=[],M_=new ne,hi=new E,hr=new E;function S_(s,t,e){e.vsub(s,hi);const n=hi.dot(t);return t.scale(n,hr),hr.vadd(s,hr),e.distanceTo(hr)}class E_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class oc{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Us{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Us.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new oc,this.jacobianElementB=new oc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,ac),a.scale(h,lc),n.invInertiaWorldSolve.vmult(o,cc),i.invInertiaWorldSolve.vmult(l,hc),t.multiplyVectors(ac,cc)+e.multiplyVectors(lc,hc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,ur),c+=ur.dot(t.rotational),l.vmult(e.rotational,ur),c+=ur.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=w_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Us.idCounter=0;const ac=new E,lc=new E,cc=new E,hc=new E,ur=new E,w_=new E;class T_ extends Us{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=b_,c=A_,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,f=r.angularVelocity;r.force,r.torque;const g=C_,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=p.dot(g),y=this.restitution+1,x=y*u.dot(p)-y*h.dot(p)+f.dot(c)-d.dot(l),b=this.computeGiMf();return-_*e-x*n-t*b}getImpactVelocityAlongNormal(){const t=R_,e=P_,n=L_,i=I_,r=D_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const b_=new E,A_=new E,C_=new E,R_=new E,P_=new E,L_=new E,I_=new E,D_=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class uc extends Us{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=N_,o=U_,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const N_=new E,U_=new E;class Fs{constructor(t,e,n){n=E_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Fs.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Fs.idCounter=0;class Ki{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Ki.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Ki.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new ye;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class F_ extends wt{constructor(t){if(super({type:wt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new E);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-r,i[l]=t[l]+r}}}new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new qe;new E;new qe;new E;new E;new E;new E;new E;new E;new E;new qe;new E;new ne;new qe;class O_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class B_ extends O_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,g,v,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=V_,_=H_,y=z_;p.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const b=o[x];y[x]=0,_[x]=b.computeB(h),p[x]=1/b.computeC()}if(a!==0){for(let A=0;A!==c;A++){const C=l[A],L=C.vlambda,w=C.wlambda;L.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==a;A++){const C=o[A];d=_[A],u=p[A],m=y[A],v=C.computeGWlambda(),f=u*(d-v-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),y[A]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<r)break}for(let A=0;A!==c;A++){const C=l[A],L=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),L.vadd(C.vlambda,L),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let x=o.length;const b=1/h;for(;x--;)o[x].multiplier=y[x]*b}return n}}const z_=[],V_=[],H_=[];class k_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class G_ extends k_{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const de={sphereSphere:wt.types.SPHERE,spherePlane:wt.types.SPHERE|wt.types.PLANE,boxBox:wt.types.BOX|wt.types.BOX,sphereBox:wt.types.SPHERE|wt.types.BOX,planeBox:wt.types.PLANE|wt.types.BOX,convexConvex:wt.types.CONVEXPOLYHEDRON,sphereConvex:wt.types.SPHERE|wt.types.CONVEXPOLYHEDRON,planeConvex:wt.types.PLANE|wt.types.CONVEXPOLYHEDRON,boxConvex:wt.types.BOX|wt.types.CONVEXPOLYHEDRON,sphereHeightfield:wt.types.SPHERE|wt.types.HEIGHTFIELD,boxHeightfield:wt.types.BOX|wt.types.HEIGHTFIELD,convexHeightfield:wt.types.CONVEXPOLYHEDRON|wt.types.HEIGHTFIELD,sphereParticle:wt.types.PARTICLE|wt.types.SPHERE,planeParticle:wt.types.PLANE|wt.types.PARTICLE,boxParticle:wt.types.BOX|wt.types.PARTICLE,convexParticle:wt.types.PARTICLE|wt.types.CONVEXPOLYHEDRON,cylinderCylinder:wt.types.CYLINDER,sphereCylinder:wt.types.SPHERE|wt.types.CYLINDER,planeCylinder:wt.types.PLANE|wt.types.CYLINDER,boxCylinder:wt.types.BOX|wt.types.CYLINDER,convexCylinder:wt.types.CONVEXPOLYHEDRON|wt.types.CYLINDER,heightfieldCylinder:wt.types.HEIGHTFIELD|wt.types.CYLINDER,particleCylinder:wt.types.PARTICLE|wt.types.CYLINDER,sphereTrimesh:wt.types.SPHERE|wt.types.TRIMESH,planeTrimesh:wt.types.PLANE|wt.types.TRIMESH};class W_{get[de.sphereSphere](){return this.sphereSphere}get[de.spherePlane](){return this.spherePlane}get[de.boxBox](){return this.boxBox}get[de.sphereBox](){return this.sphereBox}get[de.planeBox](){return this.planeBox}get[de.convexConvex](){return this.convexConvex}get[de.sphereConvex](){return this.sphereConvex}get[de.planeConvex](){return this.planeConvex}get[de.boxConvex](){return this.boxConvex}get[de.sphereHeightfield](){return this.sphereHeightfield}get[de.boxHeightfield](){return this.boxHeightfield}get[de.convexHeightfield](){return this.convexHeightfield}get[de.sphereParticle](){return this.sphereParticle}get[de.planeParticle](){return this.planeParticle}get[de.boxParticle](){return this.boxParticle}get[de.convexParticle](){return this.convexParticle}get[de.cylinderCylinder](){return this.convexConvex}get[de.sphereCylinder](){return this.sphereConvex}get[de.planeCylinder](){return this.planeConvex}get[de.boxCylinder](){return this.boxConvex}get[de.convexCylinder](){return this.convexConvex}get[de.heightfieldCylinder](){return this.heightfieldCylinder}get[de.particleCylinder](){return this.particleCylinder}get[de.sphereTrimesh](){return this.sphereTrimesh}get[de.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new G_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new T_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new uc(n,i,u*f),m=g.length?g.pop():new uc(n,i,u*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];si.setZero(),Fi.setZero(),Oi.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(si.vadd(e.ni,si),Fi.vadd(e.ri,Fi),Oi.vadd(e.rj,Oi)):(si.vsub(e.ni,si),Fi.vadd(e.rj,Fi),Oi.vadd(e.ri,Oi));const o=1/t;Fi.scale(o,n.ri),Oi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),si.normalize(),si.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Y_,c=j_,h=X_,d=q_;for(let u=0,f=t.length;u!==f;u++){const g=t[u],v=e[u];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&Mt.KINEMATIC&&v.type&Mt.STATIC||g.type&Mt.STATIC&&v.type&Mt.KINEMATIC||g.type&Mt.KINEMATIC&&v.type&Mt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const y=g.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],c),v.quaternion.vmult(v.shapeOffsets[x],d),d.vadd(v.position,d);const b=v.shapes[x];if(!(y.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+b.boundingSphereRadius)continue;let A=null;y.material&&b.material&&(A=n.getContactMaterial(y.material,b.material)||null),this.currentContactMaterial=A||m||n.defaultContactMaterial;const C=y.type|b.type,L=this[C];if(L){let w=!1;y.type<b.type?w=L.call(this,y,b,h,d,l,c,g,v,y,b,p):w=L.call(this,b,y,d,h,c,l,v,g,y,b,p),w&&p&&(n.shapeOverlapKeeper.set(y.id,b.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,dr),u.ni.scale(u.ni.dot(dr),dc),dr.vsub(dc,u.rj),-dr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}sphereBox(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool,f=y0;n.vsub(i,fr),e.getSideNormals(f,o);const g=t.radius;let v=!1;const m=S0,p=E0,_=w0;let y=null,x=0,b=0,A=0,C=null;for(let N=0,Y=f.length;N!==Y&&v===!1;N++){const H=v0;H.copy(f[N]);const $=H.length();H.normalize();const ht=fr.dot(H);if(ht<$+g&&ht>0){const dt=_0,lt=x0;dt.copy(f[(N+1)%3]),lt.copy(f[(N+2)%3]);const kt=dt.length(),Kt=lt.length();dt.normalize(),lt.normalize();const jt=fr.dot(dt),Z=fr.dot(lt);if(jt<kt&&jt>-kt&&Z<Kt&&Z>-Kt){const et=Math.abs(ht-$-g);if((C===null||et<C)&&(C=et,b=jt,A=Z,y=$,m.copy(H),p.copy(dt),_.copy(lt),x++,d))return!0}}}if(x){v=!0;const N=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(y,m),p.scale(b,p),m.vadd(p,m),_.scale(A,_),m.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let L=u.get();const w=M0;for(let N=0;N!==2&&!v;N++)for(let Y=0;Y!==2&&!v;Y++)for(let H=0;H!==2&&!v;H++)if(L.set(0,0,0),N?L.vadd(f[0],L):L.vsub(f[0],L),Y?L.vadd(f[1],L):L.vsub(f[1],L),H?L.vadd(f[2],L):L.vsub(f[2],L),i.vadd(L,w),w.vsub(n,w),w.lengthSquared()<g*g){if(d)return!0;v=!0;const $=this.createContactEquation(a,l,t,e,c,h);$.ri.copy(w),$.ri.normalize(),$.ni.copy($.ri),$.ri.scale(g,$.ri),$.rj.copy(L),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(l.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}u.release(L),L=null;const M=u.get(),P=u.get(),F=u.get(),D=u.get(),z=u.get(),U=f.length;for(let N=0;N!==U&&!v;N++)for(let Y=0;Y!==U&&!v;Y++)if(N%3!==Y%3){f[Y].cross(f[N],M),M.normalize(),f[N].vadd(f[Y],P),F.copy(n),F.vsub(P,F),F.vsub(i,F);const H=F.dot(M);M.scale(H,D);let $=0;for(;$===N%3||$===Y%3;)$++;z.copy(n),z.vsub(D,z),z.vsub(P,z),z.vsub(i,z);const ht=Math.abs(H),dt=z.length();if(ht<f[$].length()&&dt<g){if(d)return!0;v=!0;const lt=this.createContactEquation(a,l,t,e,c,h);P.vadd(D,lt.rj),lt.rj.copy(lt.rj),z.negate(lt.ni),lt.ni.normalize(),lt.ri.copy(lt.rj),lt.ri.vadd(i,lt.ri),lt.ri.vsub(n,lt.ri),lt.ri.normalize(),lt.ri.scale(g,lt.ri),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),lt.rj.vadd(i,lt.rj),lt.rj.vsub(l.position,lt.rj),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult)}}u.release(M,P,F,D,z)}planeBox(t,e,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}convexConvex(t,e,n,i,r,o,a,l,c,h,d,u,f){const g=z0;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,g,u,f)){const v=[],m=V0;t.clipAgainstHull(n,r,e,i,o,g,-100,100,v);let p=0;for(let _=0;_!==v.length;_++){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,h),x=y.ri,b=y.rj;g.negate(y.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,x),b.copy(v[_].point),x.vsub(n,x),b.vsub(i,b),x.vadd(n,x),x.vsub(a.position,x),b.vadd(i,b),b.vsub(l.position,b),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,T0);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=R0;o.vmult(y,x),i.vadd(x,x);const b=C0;if(x.vsub(n,b),b.lengthSquared()<m*m){if(d)return!0;p=!0;const A=this.createContactEquation(a,l,t,e,c,h);A.ri.copy(b),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(m,A.ri),x.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&p===!1;_++){const x=f[_],b=g[_],A=P0;o.vmult(x,A);const C=L0;o.vmult(v[b[0]],C),C.vadd(i,C);const L=I0;A.scale(-m,L),n.vadd(L,L);const w=D0;L.vsub(C,w);const M=w.dot(A),P=N0;if(n.vsub(C,P),M<0&&P.dot(A)>0){const F=[];for(let D=0,z=b.length;D!==z;D++){const U=u.get();o.vmult(v[b[D]],U),i.vadd(U,U),F.push(U)}if(g0(F,A,n)){if(d)return!0;p=!0;const D=this.createContactEquation(a,l,t,e,c,h);A.scale(-m,D.ri),A.negate(D.ni);const z=u.get();A.scale(-M,z);const U=u.get();A.scale(-m,U),n.vsub(i,D.rj),D.rj.vadd(U,D.rj),D.rj.vadd(z,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),u.release(z),u.release(U),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let N=0,Y=F.length;N!==Y;N++)u.release(F[N]);return}else for(let D=0;D!==b.length;D++){const z=u.get(),U=u.get();o.vmult(v[b[(D+1)%b.length]],z),o.vmult(v[b[(D+2)%b.length]],U),i.vadd(z,z),i.vadd(U,U);const N=b0;U.vsub(z,N);const Y=A0;N.unit(Y);const H=u.get(),$=u.get();n.vsub(z,$);const ht=$.dot(Y);Y.scale(ht,H),H.vadd(z,H);const dt=u.get();if(H.vsub(n,dt),ht>0&&ht*ht<N.lengthSquared()&&dt.lengthSquared()<m*m){if(d)return!0;const lt=this.createContactEquation(a,l,t,e,c,h);H.vsub(i,lt.rj),H.vsub(n,lt.ni),lt.ni.normalize(),lt.ni.scale(m,lt.ri),lt.rj.vadd(i,lt.rj),lt.rj.vsub(l.position,lt.rj),lt.ri.vadd(n,lt.ri),lt.ri.vsub(a.position,lt.ri),this.result.push(lt),this.createFrictionEquationsFromContact(lt,this.frictionResult);for(let kt=0,Kt=F.length;kt!==Kt;kt++)u.release(F[kt]);u.release(z),u.release(U),u.release(H),u.release(dt),u.release($);return}u.release(z),u.release(U),u.release(H),u.release(dt),u.release($)}for(let D=0,z=F.length;D!==z;D++)u.release(F[D])}}}planeConvex(t,e,n,i,r,o,a,l,c,h,d){const u=U0,f=F0;f.set(0,0,1),r.vmult(f,f);let g=0;const v=O0;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h),y=B0;f.scale(f.dot(v),y),u.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(f),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,f=t.radius,g=e.elementSize,v=J0,m=K0;ne.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(_<0||x<0||p>u.length||y>u[0].length)return;p<0&&(p=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),p>=u.length&&(p=u.length-1),_>=u.length&&(_=u.length-1),x>=u[0].length&&(x=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const b=[];e.getRectMinMax(p,y,_,x,b);const A=b[0],C=b[1];if(m.z-f>C||m.z+f<A)return;const L=this.result;for(let w=p;w<_;w++)for(let M=y;M<x;M++){const P=L.length;let F=!1;if(e.getConvexTrianglePillar(w,M,!1),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,d)),d&&F||(e.getConvexTrianglePillar(w,M,!0),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,d)),d&&F))return!0;if(L.length-P>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=Z0,m=$0,p=j0;ne.pointToLocalFrame(i,o,n,p);let _=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,b=Math.ceil((p.y+g)/f)+1;if(y<0||b<0||_>u.length||x>u[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),b<0&&(b=0),_>=u.length&&(_=u.length-1),y>=u.length&&(y=u.length-1),b>=u[0].length&&(b=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const A=[];e.getRectMinMax(_,x,y,b,A);const C=A[0],L=A[1];if(!(p.z-g>L||p.z+g<C))for(let w=_;w<y;w++)for(let M=x;M<b;M++){let P=!1;if(e.getConvexTrianglePillar(w,M,!1),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,d,m,null)),d&&P||(e.getConvexTrianglePillar(w,M,!0),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,d,m,null)),d&&P))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,h,d){const u=W0;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,h,d){const u=H0;u.set(0,0,1),a.quaternion.vmult(u,u);const f=k0;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=G0;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexParticle(t,e,n,i,r,o,a,l,c,h,d){let u=-1;const f=q0,g=Y0;let v=null;const m=X0;if(m.copy(i),m.vsub(n,m),r.conjugate(fc),fc.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,_=t.faces.length;p!==_;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];i.vsub(y[0],pc);const b=-x.dot(pc);if(v===null||Math.abs(b)<Math.abs(v)){if(d)return!0;v=b,u=p,f.copy(x)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,y=p.rj;_.vadd(i,_),_.vsub(l.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=n0,f=i0,g=s0,v=r0,m=o0,p=a0,_=u0,y=e0,x=Q_,b=d0;ne.pointToLocalFrame(i,o,n,m);const A=t.radius;_.lowerBound.set(m.x-A,m.y-A,m.z-A),_.upperBound.set(m.x+A,m.y+A,m.z+A),e.getTrianglesInAABB(_,b);const C=t0,L=t.radius*t.radius;for(let D=0;D<b.length;D++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[b[D]*3+z],C),C.vsub(m,x),x.lengthSquared()<=L){if(y.copy(C),ne.pointToWorldFrame(i,o,y,C),C.vsub(n,x),d)return!0;let U=this.createContactEquation(a,l,t,e,c,h);U.ni.copy(x),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(C),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let D=0;D<b.length;D++)for(let z=0;z<3;z++){e.getVertex(e.indices[b[D]*3+z],u),e.getVertex(e.indices[b[D]*3+(z+1)%3],f),f.vsub(u,g),m.vsub(f,p);const U=p.dot(g);m.vsub(u,p);let N=p.dot(g);if(N>0&&U<0&&(m.vsub(u,p),v.copy(g),v.normalize(),N=p.dot(v),v.scale(N,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;const H=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),ne.pointToWorldFrame(i,o,p,p),p.vsub(l.position,H.rj),ne.vectorToWorldFrame(o,H.ni,H.ni),ne.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const w=l0,M=c0,P=h0,F=J_;for(let D=0,z=b.length;D!==z;D++){e.getTriangleVertices(b[D],w,M,P),e.getNormal(b[D],F),m.vsub(w,p);let U=p.dot(F);if(F.scale(U,p),m.vsub(p,p),U=p.distanceTo(m),ye.pointInTriangle(p,w,M,P)&&U<t.radius){if(d)return!0;let N=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),ne.pointToWorldFrame(i,o,p,p),p.vsub(l.position,N.rj),ne.vectorToWorldFrame(o,N.ni,N.ni),ne.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}b.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=new E,f=Z_;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const v=new E;v.copy(u),ne.pointToWorldFrame(i,o,v,u);const m=$_;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h);_.ni.copy(f);const y=K_;f.scale(m.dot(f),y),u.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const si=new E,Fi=new E,Oi=new E,X_=new E,q_=new E,Y_=new Me,j_=new Me,Z_=new E,$_=new E,K_=new E,J_=new E,Q_=new E;new E;const t0=new E,e0=new E,n0=new E,i0=new E,s0=new E,r0=new E,o0=new E,a0=new E,l0=new E,c0=new E,h0=new E,u0=new qe,d0=[],dr=new E,dc=new E,f0=new E,p0=new E,m0=new E;function g0(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=f0;s[(r+1)%i].vsub(o,a);const l=p0;a.cross(t,l);const c=m0;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const fr=new E,v0=new E,_0=new E,x0=new E,y0=[new E,new E,new E,new E,new E,new E],M0=new E,S0=new E,E0=new E,w0=new E,T0=new E,b0=new E,A0=new E,C0=new E,R0=new E,P0=new E,L0=new E,I0=new E,D0=new E,N0=new E;new E;new E;const U0=new E,F0=new E,O0=new E,B0=new E,z0=new E,V0=new E,H0=new E,k0=new E,G0=new E,W0=new E,fc=new Me,X0=new E;new E;const q0=new E,pc=new E,Y0=new E,j0=new E,Z0=new E,$0=[0],K0=new E,J0=new E;class mc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||gc(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||gc(e,h)}}}function gc(s,t){s.push((t&4294901760)>>16,t&65535)}const go=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class Q0{constructor(){this.data={keys:[]}}get(t,e){const n=go(t,e);return this.data[n]}set(t,e,n){const i=go(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=go(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class tx extends ah{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new o_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new B_,this.constraints=[],this.narrowphase=new W_(this),this.collisionMatrix=new ec,this.collisionMatrixPrevious=new ec,this.bodyOverlapKeeper=new mc,this.shapeOverlapKeeper=new mc,this.contactmaterials=[],this.contactMaterialTable=new Q0,this.defaultMaterial=new Ki("default"),this.defaultContactMaterial=new Fs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Sr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ye.ALL,n.from=t,n.to=e,n.callback=i,vo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ye.ANY,n.from=t,n.to=e,n.result=i,vo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ye.CLOSEST,n.from=t,n.to=e,n.result=i,vo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Se.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Se.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Se.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=rx,i=ox,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Mt.DYNAMIC;let u=-1/0;const f=this.constraints,g=sx;l.length();const v=l.x,m=l.y,p=l.z;let _=0;for(c&&(u=Se.now()),_=0;_!==r;_++){const D=o[_];if(D.type===d){const z=D.force,U=D.mass;z.x+=U*v,z.y+=U*m,z.z+=U*p}}for(let D=0,z=this.subsystems.length;D!==z;D++)this.subsystems[D].update();c&&(u=Se.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Se.now()-u);let y=f.length;for(_=0;_!==y;_++){const D=f[_];if(!D.collideConnected)for(let z=n.length-1;z>=0;z-=1)(D.bodyA===n[z]&&D.bodyB===i[z]||D.bodyB===n[z]&&D.bodyA===i[z])&&(n.splice(z,1),i.splice(z,1))}this.collisionMatrixTick(),c&&(u=Se.now());const x=ix,b=e.length;for(_=0;_!==b;_++)x.push(e[_]);e.length=0;const A=this.frictionEquations.length;for(_=0;_!==A;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=Se.now()-u),c&&(u=Se.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let D=0;D!==C;D++){const z=e[D],U=z.bi,N=z.bj,Y=z.si,H=z.sj;let $;if(U.material&&N.material?$=this.getContactMaterial(U.material,N.material)||this.defaultContactMaterial:$=this.defaultContactMaterial,$.friction,U.material&&N.material&&(U.material.friction>=0&&N.material.friction>=0&&U.material.friction*N.material.friction,U.material.restitution>=0&&N.material.restitution>=0&&(z.restitution=U.material.restitution*N.material.restitution)),a.addEquation(z),U.allowSleep&&U.type===Mt.DYNAMIC&&U.sleepState===Mt.SLEEPING&&N.sleepState===Mt.AWAKE&&N.type!==Mt.STATIC){const ht=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),dt=N.sleepSpeedLimit**2;ht>=dt*2&&(U.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===Mt.DYNAMIC&&N.sleepState===Mt.SLEEPING&&U.sleepState===Mt.AWAKE&&U.type!==Mt.STATIC){const ht=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),dt=U.sleepSpeedLimit**2;ht>=dt*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,N,!0),this.collisionMatrixPrevious.get(U,N)||(as.body=N,as.contact=z,U.dispatchEvent(as),as.body=U,N.dispatchEvent(as)),this.bodyOverlapKeeper.set(U.id,N.id),this.shapeOverlapKeeper.set(Y.id,H.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Se.now()-u,u=Se.now()),_=0;_!==r;_++){const D=o[_];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(y=f.length,_=0;_!==y;_++){const D=f[_];D.update();for(let z=0,U=D.equations.length;z!==U;z++){const N=D.equations[z];a.addEquation(N)}}a.solve(t,this),c&&(h.solve=Se.now()-u),a.removeAllEquations();const L=Math.pow;for(_=0;_!==r;_++){const D=o[_];if(D.type&d){const z=L(1-D.linearDamping,t),U=D.velocity;U.scale(z,U);const N=D.angularVelocity;if(N){const Y=L(1-D.angularDamping,t);N.scale(Y,N)}}}this.dispatchEvent(nx),c&&(u=Se.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(t,M,P);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Se.now()-u),this.stepnumber+=1,this.dispatchEvent(ex);let F=!0;if(this.allowSleep)for(F=!1,_=0;_!==r;_++){const D=o[_];D.sleepTick(this.time),D.sleepState!==Mt.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Tn,bn),t){for(let r=0,o=Tn.length;r<o;r+=2)ls.bodyA=this.getBodyById(Tn[r]),ls.bodyB=this.getBodyById(Tn[r+1]),this.dispatchEvent(ls);ls.bodyA=ls.bodyB=null}if(e){for(let r=0,o=bn.length;r<o;r+=2)cs.bodyA=this.getBodyById(bn[r]),cs.bodyB=this.getBodyById(bn[r+1]),this.dispatchEvent(cs);cs.bodyA=cs.bodyB=null}Tn.length=bn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Tn,bn),n){for(let r=0,o=Tn.length;r<o;r+=2){const a=this.getShapeById(Tn[r]),l=this.getShapeById(Tn[r+1]);An.shapeA=a,An.shapeB=l,a&&(An.bodyA=a.body),l&&(An.bodyB=l.body),this.dispatchEvent(An)}An.bodyA=An.bodyB=An.shapeA=An.shapeB=null}if(i){for(let r=0,o=bn.length;r<o;r+=2){const a=this.getShapeById(bn[r]),l=this.getShapeById(bn[r+1]);Cn.shapeA=a,Cn.shapeB=l,a&&(Cn.bodyA=a.body),l&&(Cn.bodyB=l.body),this.dispatchEvent(Cn)}Cn.bodyA=Cn.bodyB=Cn.shapeA=Cn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new qe;const vo=new ye,Se=globalThis.performance||{};if(!Se.now){let s=Date.now();Se.timing&&Se.timing.navigationStart&&(s=Se.timing.navigationStart),Se.now=()=>Date.now()-s}new E;const ex={type:"postStep"},nx={type:"preStep"},as={type:Mt.COLLIDE_EVENT_NAME,body:null,contact:null},ix=[],sx=[],rx=[],ox=[],Tn=[],bn=[],ls={type:"beginContact",bodyA:null,bodyB:null},cs={type:"endContact",bodyA:null,bodyB:null},An={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Cn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ps=.55,Ba=[{x:0,z:4,w:11,d:12,kind:"island"},{x:0,z:-6,w:3.6,d:8,kind:"bridge"},{x:0,z:-15,w:12,d:10,kind:"island"},{x:3,z:-24.5,w:3.5,d:9,kind:"bridge"},{x:3,z:-34,w:11,d:10,kind:"island"},{x:-.5,z:-43.5,w:3.5,d:9,kind:"bridge"},{x:-.5,z:-53,w:13,d:10,kind:"island"}],ua=[[0,4],[0,-6],[-3,-14],[3,-24],[5,-33],[-.5,-43],[-.5,-52]],da=[{x:3,z:-18},{x:-.5,z:-37}],mh=[{x:0,z:-15,length:7,speed:.65},{x:3,z:-33.5,length:6,speed:-.85}],Er={x:-.5,z:-55.5};class ax{constructor(){this.world=new tx({gravity:new E(0,-22,0)}),this.world.allowSleep=!1;const t=new Ki("ground"),e=new Ki("ball");this.world.addContactMaterial(new Fs(t,e,{friction:.25,restitution:.08,contactEquationStiffness:1e8}));for(const n of Ba){const i=new Mt({mass:0,material:t});i.addShape(new Rs(new E(n.w/2,.5,n.d/2))),i.position.set(n.x,-.5,n.z),this.world.addBody(i)}this.bars=mh.map(n=>{const i=new Mt({type:Mt.KINEMATIC,material:t});return i.addShape(new Rs(new E(n.length/2,.28,.26))),i.position.set(n.x,.65,n.z),i.angularVelocity.set(0,n.speed,0),this.world.addBody(i),i}),this.ball=new Mt({mass:1,material:e,shape:new F_(Ps),linearDamping:.45,angularDamping:.35}),this.world.addBody(this.ball),this.reset()}reset(){this.state="intro",this.elapsed=0,this.collected=new Set,this.checkpoint=-1,this.falls=0,this.simTime=0,this.respawnTimer=0,this.goalHintAt=null,this.placeBall(0,7),this.bars.forEach(t=>t.quaternion.set(0,0,0,1))}placeBall(t,e){this.ball.position.set(t,Ps+.03,e),this.ball.previousPosition.copy(this.ball.position),this.ball.interpolatedPosition.copy(this.ball.position),this.ball.velocity.setZero(),this.ball.angularVelocity.setZero(),this.ball.force.setZero(),this.ball.torque.setZero(),this.ball.quaternion.set(0,0,0,1),this.ball.aabbNeedsUpdate=!0}start(){this.state==="intro"&&(this.state="playing")}pause(){this.state==="playing"&&(this.state="paused")}resume(){this.state==="paused"&&(this.state="playing")}step(t,e={}){const n=[];if(this.state!=="playing")return n;this.elapsed+=t,this.simTime+=t,this.respawnTimer=Math.max(0,this.respawnTimer-t);let i=+!!e.right-+!!e.left,r=+!!e.down-+!!e.up;const o=Math.hypot(i,r);o&&(i/=o,r/=o);const a=Math.exp(-(e.brake?9:.28)*t);this.ball.velocity.x*=a,this.ball.velocity.z*=a;const l=e.brake?2:7,c=e.brake?9:16;this.ball.velocity.x+=i*c*t,this.ball.velocity.z+=r*c*t;const h=Math.hypot(this.ball.velocity.x,this.ball.velocity.z);h>l&&(this.ball.velocity.x*=l/h,this.ball.velocity.z*=l/h),this.world.step(t);const d=this.ball.position;if(d.y<-9){const u=this.checkpoint>=0?da[this.checkpoint]:{x:0,z:7};return this.placeBall(u.x,u.z),this.falls++,this.respawnTimer=1,n.push({type:"fall"}),n}return d.y<0||d.y>2||(ua.forEach(([u,f],g)=>{!this.collected.has(g)&&Math.hypot(d.x-u,d.z-f)<1.1&&(this.collected.add(g),n.push({type:"star",index:g}))}),da.forEach((u,f)=>{f>this.checkpoint&&Math.hypot(d.x-u.x,d.z-u.z)<1.5&&(this.checkpoint=f,n.push({type:"checkpoint",index:f}))}),Math.hypot(d.x-Er.x,d.z-Er.z)<1.3&&(this.collected.size===ua.length?(this.state="won",n.push({type:"win"})):(!this.goalHintAt||this.elapsed-this.goalHintAt>5)&&(this.goalHintAt=this.elapsed,n.push({type:"locked"})))),n}}function Cr(s){const t=Math.floor(s);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}const Xt=s=>document.getElementById(s),Qt=new ax,$e=new Set,Wn=new Set,_o=1/120;let xo=0,vc=0,_c,zi=!1,ui,Oe,Un,Ae,Gi,Wi,za=[],gh=[],Va=[],fa=[],Xn=0;try{Xn=Number(localStorage.getItem("boll-best"))||0}catch{}Xn&&(Xt("best").textContent=`PERSONBÄSTA ${Cr(Xn)} ↗`);const pa={grass:12767392,side:10662795,cream:16250075,orange:15564900,wood:15125151,dark:4941136,star:15186262},di=(s,t={})=>new kd({color:s,roughness:.78,...t}),ae=Object.fromEntries(Object.entries(pa).map(([s,t])=>[s,di(t)]));function be(s,t,e,n=Oe){const i=new pn(s,t);return i.position.set(...e),i.castShadow=!0,i.receiveShadow=!0,n.add(i),i}function Fe(s,t,e,n,i,r){return be(new Qi(s,t,e),n,i,r)}function lx(s,t,e,n){const i=new In,r=di(16382959,{flatShading:!0});[[0,0,0,2.2],[-2,-.3,0,1.6],[2,.1,.2,1.7],[.2,1,-.3,1.7]].forEach(([o,a,l,c])=>{const h=be(new xi(c,2),r,[o,a,l],i);h.scale.y=.65,h.castShadow=!1}),i.position.set(s,t,e),i.scale.setScalar(n),Oe.add(i)}function cx(s,t,e=1){const n=new In;be(new Ts(.08,.12,1,6),ae.wood,[0,.5,0],n),be(new xi(.65,1),ae.side,[0,1.35,0],n).scale.set(.8,1.3,.8),n.position.set(s,0,t),n.scale.setScalar(e),Oe.add(n)}function hx(){const s=new Tr;for(let t=0;t<10;t++){const e=t*Math.PI/5+Math.PI/2,n=t%2===0?.47:.23;t?s.lineTo(Math.cos(e)*n,Math.sin(e)*n):s.moveTo(Math.cos(e)*n,Math.sin(e)*n)}return s.closePath(),new Ia(s,{depth:.13,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:2,steps:1})}function ux(){Oe=new sd,Oe.background=new Jt(15331559),Oe.fog=new ba(15331559,.009),Un=new Ke(42,innerWidth/innerHeight,.1,220),Un.position.set(15,24,29),Ae=new Dv({antialias:!0,powerPreference:"high-performance"}),Ae.setSize(innerWidth,innerHeight),Ae.setPixelRatio(Math.min(devicePixelRatio,2)),Ae.shadowMap.enabled=!0,Ae.shadowMap.type=Mc,Ae.outputColorSpace=Xe,Ae.toneMapping=Ec,Ae.toneMappingExposure=1.05,Xt("scene").appendChild(Ae.domElement),Ae.domElement.tabIndex=0,Ae.domElement.setAttribute("aria-label","Styr bollen med piltangenter eller WASD. Mellanslag bromsar, Esc pausar."),Oe.add(new Xd(16777202,9021336,1.9));const s=new jd(16773848,2.4);s.position.set(-14,30,14),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-24,right:24,top:40,bottom:-40,near:1,far:110}),s.shadow.bias=-5e-4,s.shadow.normalBias=.035,s.target.position.set(0,0,-20),Oe.add(s,s.target),Ba.forEach((a,l)=>{if(a.kind==="island"){Fe(a.w,.7,a.d,ae.side,[a.x,-.55,a.z]),Fe(a.w+.08,.3,a.d+.08,ae.grass,[a.x,-.15,a.z]);const c=be(new Ts(Math.min(a.w,a.d)*.56,1.1,3.8,5),di(11976359,{flatShading:!0}),[a.x,-2.7,a.z]);c.rotation.y=l,Fe(.09,.035,a.d-.4,ae.cream,[a.x-a.w/2+.2,.025,a.z]),Fe(.09,.035,a.d-.4,ae.cream,[a.x+a.w/2-.2,.025,a.z]);for(const h of[-1,1])cx(a.x+h*(a.w/2-1),a.z-a.d/2+1.1,.8+l%3*.15),be(new xi(.35,0),ae.cream,[a.x+h*(a.w/2-1.2),.2,a.z+1.5]).scale.set(1,.6,.8)}else{Fe(a.w,.55,a.d,ae.wood,[a.x,-.3,a.z]);const c=Math.round(a.d/.55);for(let h=0;h<c;h++)Fe(a.w+.08,.07,.46,h%3===0?ae.cream:ae.wood,[a.x,.01,a.z-a.d/2+(h+.5)*a.d/c]);for(const h of[-1,1])Fe(.09,.12,a.d,ae.cream,[a.x+h*(a.w/2-.04),.1,a.z])}});for(let a=1;a>=-1;a-=1){const l=new Tr;l.moveTo(-.4,.2),l.lineTo(0,-.15),l.lineTo(.4,.2),l.lineTo(.4,.35),l.lineTo(0,0),l.lineTo(-.4,.35);const c=be(new Da(l),ae.cream,[0,.035,a]);c.rotation.x=-Math.PI/2}const t=be(new vs(1,.025,8,48),ae.cream,[0,.04,7]);t.rotation.x=-Math.PI/2;const e=hx();za=ua.map(([a,l])=>{const c=be(e,di(pa.star,{metalness:.3,roughness:.35}),[a,1.15,l]),h=be(new vs(.6,.018,6,40),ae.star,[a,.045,l]);return h.rotation.x=-Math.PI/2,{star:c,ring:h}}),gh=mh.map(a=>{const l=new In;return Fe(a.length,.56,.52,ae.orange,[0,0,0],l),[-1,1].forEach(c=>Fe(.22,.58,.54,ae.cream,[c*(a.length/2-.3),0,0],l)),be(new Ts(.33,.33,.8,16),ae.cream,[0,-.05,0],l),l.position.set(a.x,.65,a.z),Oe.add(l),l}),Va=da.map(a=>{const l=be(new vs(.9,.045,8,48),di(16250075),[a.x,.07,a.z]);return l.rotation.x=-Math.PI/2,Fe(.08,1.6,.08,ae.cream,[a.x+1.15,.8,a.z]),Fe(.65,.4,.03,ae.side,[a.x+1.45,1.4,a.z]),l});const n=new In;[-1,1].forEach(a=>{Fe(.2,3.5,.2,ae.cream,[a*1.5,1.75,0],n),be(new gs(.2,12,8),ae.star,[a*1.5,3.65,0],n)}),Fe(3.2,.55,.14,ae.side,[0,3.1,0],n);for(let a=-1.25;a<=1.25;a+=.5)for(let l=-.5;l<=.5;l+=.5)Fe(.5,.025,.5,(Math.round(a*2+2.5)+Math.round(l*2+1))%2?ae.cream:ae.side,[a,.03,l],n);n.position.set(Er.x,0,Er.z),Oe.add(n);const i=new In;be(new gs(Ps,40,28),di(pa.orange,{roughness:.32}),[0,0,0],i);const r=be(new gs(Ps+.002,40,12,0,Math.PI*2,Math.PI*.42,Math.PI*.16),di(16773332,{roughness:.4}),[0,0,0],i);r.rotation.z=.3,Gi=i,Oe.add(Gi),Wi=be(new Ca(.65,32),new Ta({color:4149554,transparent:!0,opacity:.16,depthWrite:!1}),[0,.06,7]),Wi.rotation.x=-Math.PI/2,Wi.castShadow=!1;const o=a=>{const l=Math.sin(a*127.1+311.7)*43758.5453;return l-Math.floor(l)};for(let a=0;a<30;a++)lx((o(a)-.5)*90,-7-o(a+40)*14,20-o(a+60)*110,.7+o(a+90)*1.6);for(let a=0;a<9;a++){const l=be(new xi(1.5+o(a+20)*2,0),ae.side,[(o(a+100)-.5)*65,-15,10-a*11]);l.scale.y=2}Mh(),Ae.render(Oe,Un),Xt("loading").hidden=!0,requestAnimationFrame(vh)}function mi(s){clearTimeout(_c),Xt("toast").textContent=s,Xt("toast").classList.add("visible"),_c=setTimeout(()=>Xt("toast").classList.remove("visible"),3200)}function ai(s,t=.12,e=.05,n=0){if(!zi||!ui)return;const i=ui.currentTime+n,r=ui.createOscillator(),o=ui.createGain();r.type="sine",r.frequency.value=s,o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(e,i+.012),o.gain.exponentialRampToValueAtTime(.001,i+t),r.connect(o),o.connect(ui.destination),r.start(i),r.stop(i+t)}function xc(s){for(let t=0;t<18;t++){const e=be(new xi(.07,0),t%2?ae.star:ae.cream,[s.x,s.y,s.z]);e.castShadow=!1,fa.push({mesh:e,velocity:new B((Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4),life:1})}}function dx(s){for(const t of s)if(t.type==="star"&&(xc(za[t.index].star.position),ai(660+Qt.collected.size*65),ai(990+Qt.collected.size*65,.18,.04,.07),Qt.collected.size===7&&mi("Alla stjärnor! Rulla genom målporten.")),t.type==="checkpoint"&&(mi("Checkpoint! Härifrån fortsätter du om du faller."),ai(520,.15),ai(780,.2,.04,.12)),t.type==="fall"&&(mi("Oj då! Tillbaka på banan. Stjärnorna är kvar."),ai(220,.3)),t.type==="locked"&&mi(`Samla ${7-Qt.collected.size} stjärn${Qt.collected.size===6?"a":"or"} till innan du går i mål.`),t.type==="win"){if(xc(Gi.position),!Xn||Qt.elapsed<Xn){Xn=Qt.elapsed;try{localStorage.setItem("boll-best",String(Xn))}catch{}Xt("best").textContent=`PERSONBÄSTA ${Cr(Xn)} ↗`}[523,659,784,1047].forEach((e,n)=>ai(e,.3,.06,n*.12)),ka("win")}}function fx(){return{up:$e.has("KeyW")||$e.has("ArrowUp")||Wn.has("up"),down:$e.has("KeyS")||$e.has("ArrowDown")||Wn.has("down"),left:$e.has("KeyA")||$e.has("ArrowLeft")||Wn.has("left"),right:$e.has("KeyD")||$e.has("ArrowRight")||Wn.has("right"),brake:$e.has("Space")||Wn.has("brake")}}function vh(s){const t=Math.min((s-(vc||s))/1e3,.05);for(vc=s,xo+=t;xo>=_o;)dx(Qt.step(_o,fx())),xo-=_o;const e=Qt.ball.position;Gi.position.copy(e),Gi.quaternion.copy(Qt.ball.quaternion),Gi.visible=Qt.respawnTimer===0||Math.floor(Qt.respawnTimer*12)%2===0,Wi.position.set(e.x,.065,e.z),Wi.visible=e.y>-1&&Ba.some(a=>Math.abs(e.x-a.x)<a.w/2&&Math.abs(e.z-a.z)<a.d/2),Wi.material.opacity=.17/Math.max(1,e.y),za.forEach(({star:a,ring:l},c)=>{a.visible=l.visible=!Qt.collected.has(c),a.rotation.y=s*.001+c,a.position.y=1.2+Math.sin(s*.002+c)*.12}),gh.forEach((a,l)=>a.quaternion.copy(Qt.bars[l].quaternion)),Va.forEach((a,l)=>a.material.color.setHex(Qt.checkpoint>=l?7903340:16250075)),fa=fa.filter(a=>(a.life-=t,a.velocity.y-=5*t,a.mesh.position.addScaledVector(a.velocity,t),a.mesh.scale.setScalar(Math.max(0,a.life)),a.life<=0?(Oe.remove(a.mesh),a.mesh.geometry.dispose(),!1):!0));const n=Qt.state==="intro",i=innerWidth<641,r=n?new B(i?12:15,i?25:26,i?25:28):new B(e.x,Math.max(0,e.y-Ps)+12,e.z+17);Un.position.lerp(r,1-Math.exp(-t*3));const o=n?new B(i?0:-9,0,i?-9:-10):new B(e.x,0,e.z-4.5);Un.lookAt(o),Xt("timer").textContent=Cr(Qt.elapsed),Xt("stars").textContent=Qt.collected.size,Xt("progress").style.height=`${Pu.clamp((7-e.z)/62.5,0,1)*100}%`,Ae.render(Oe,Un),requestAnimationFrame(vh)}function Ha(){$e.clear(),Wn.clear(),document.querySelectorAll(".active").forEach(s=>s.classList.remove("active"))}function _h(){Qt.start(),Xt("intro").classList.add("dismissed"),Xt("intro").inert=!0,Xt("app").classList.add("playing"),Xt("pause").disabled=!1,Ae?.domElement.focus({preventScroll:!0}),mi("Följ stjärnorna. Håll mellanslag för att bromsa.")}function ka(s="pause"){Ha(),Xt("dialog").hidden=!1;const t=s==="win";Xt("dialog-symbol").textContent=t?"✦":"Ⅱ",Xt("dialog-kicker").textContent=t?"SJU STJÄRNOR. ETT FINT FLOW.":"TA ETT ANDETAG",Xt("dialog-title").textContent=t?"Du nådde hela vägen!":"En liten paus.",Xt("dialog-text").textContent=t?`7 av 7 stjärnor på ${Cr(Qt.elapsed)}.
${Qt.falls===0?"Och inte ett enda fall. Snyggt!":`${Qt.falls} fall, men du gav inte upp.`}`:"Molnen finns kvar när du är redo.",Xt("resume").innerHTML=t?"En runda till <span>↗</span>":"Fortsätt rulla <span>↗</span>",Xt("restart-dialog").hidden=t,Xt("resume").focus()}function xh(){Xt("dialog").hidden=!0,Qt.resume(),Ae?.domElement.focus({preventScroll:!0})}function yh(){Qt.state==="playing"?(Qt.pause(),ka()):Qt.state==="paused"&&xh()}function Rr(){Ha(),Qt.reset(),Qt.start(),Xt("dialog").hidden=!0,Xt("intro").classList.add("dismissed"),Xt("intro").inert=!0,Xt("app").classList.add("playing"),Xt("pause").disabled=!1,Ae?.domElement.focus({preventScroll:!0}),Va.forEach(s=>s.material.color.setHex(16250075)),Un.position.set(0,12,24),mi("En ny runda. Nu rullar vi!")}function Mh(){Un.aspect=innerWidth/innerHeight,Un.updateProjectionMatrix(),Ae.setSize(innerWidth,innerHeight)}Xt("play").addEventListener("click",_h);Xt("pause").disabled=!0;Xt("pause").addEventListener("click",yh);Xt("restart").addEventListener("click",Rr);Xt("restart-dialog").addEventListener("click",Rr);Xt("resume").addEventListener("click",()=>Qt.state==="won"?Rr():xh());Xt("sound").addEventListener("click",async()=>{try{ui??=new(window.AudioContext||window.webkitAudioContext),await ui.resume(),zi=!zi,Xt("sound").setAttribute("aria-label",zi?"Stäng av ljud":"Slå på ljud"),Xt("sound-waves").setAttribute("d",zi?"M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14":"m16 9 6 6m0-6-6 6"),zi&&ai(660)}catch{mi("Ljud är inte tillgängligt i den här webbläsaren.")}});window.addEventListener("keydown",s=>{if(s.code==="Tab"&&!Xt("dialog").hidden){const t=[...Xt("dialog").querySelectorAll("button:not([hidden])")],e=t[0],n=t.at(-1);s.shiftKey&&document.activeElement===e?(s.preventDefault(),n.focus()):!s.shiftKey&&document.activeElement===n&&(s.preventDefault(),e.focus());return}s.target instanceof HTMLButtonElement&&["Space","Enter"].includes(s.code)||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&s.preventDefault(),!s.repeat&&(s.code==="Escape"&&yh(),s.code==="KeyR"&&["playing","paused","won"].includes(Qt.state)&&Rr(),s.code==="Enter"&&Qt.state==="intro"&&_h(),$e.add(s.code)))});window.addEventListener("keyup",s=>$e.delete(s.code));function Sh(){Ha(),Qt.state==="playing"&&(Qt.pause(),ka())}window.addEventListener("blur",Sh);document.addEventListener("visibilitychange",()=>{document.hidden&&Sh()});window.addEventListener("resize",()=>{Ae&&Mh()});document.querySelectorAll("[data-direction],#touch-brake").forEach(s=>{const t=s.dataset.direction||"brake";s.addEventListener("pointerdown",n=>{n.preventDefault(),s.setPointerCapture(n.pointerId),Wn.add(t),s.classList.add("active")});const e=()=>{Wn.delete(t),s.classList.remove("active")};s.addEventListener("pointerup",e),s.addEventListener("pointercancel",e),s.addEventListener("lostpointercapture",e)});try{ux()}catch(s){console.error("Kunde inte starta 3D-spelet:",s),Xt("loading").hidden=!0,Xt("error").hidden=!1}
