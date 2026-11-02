# Boll

Ett litet 3D-äventyr bland molnen med automatiskt genererade banor. Styr en boll över svävande öar, samla banans stjärnor och rulla genom målporten. Varje ny omgång får en ny sträckning med varierande öar, vinklade broar och roterande hinder.

Spela webbversionen på **https://nicklaspettai.github.io/Boll/**.

## Kom igång

Kräver Node.js 20.19+ eller 22.12+ (testat med Node.js 24).

```sh
npm ci
npm run dev
```

Öppna adressen som Vite visar. All 3D-grafik skapas lokalt med Three.js; fysiken körs med cannon-es. Inga konton, API-nycklar eller externa bildresurser behövs.

## Styrning

| Tangent | Funktion |
| --- | --- |
| Piltangenter / WASD | Rulla |
| Mellanslag | Hoppa |
| Shift | Bromsa |
| Esc | Pausa / fortsätt |
| R | Generera en ny bana på samma bannummer |

Ovanifrånvyn är standard och använder den ursprungliga styrningen: upp/W rullar framåt längs banan och höger/D åt höger. Öppna **Inställningar** med kugghjulet eller från pausmenyn och kryssa i **Tredjeperson** för kameran bakifrån. Kameravalet sparas i webbläsaren. Du kan byta under en omgång; spelet pausar medan menyn är öppen.

I tredjeperson följer kameran bollen bakifrån och svänger mjukt efter färdriktningen. När du väljer en ny riktning styr du i förhållande till kameran; håll kvar tangenten för att fortsätta åt samma håll. Kameran behåller en stabil horisont när bollen rullar och hoppar.

På pekskärm visas riktningsknappar, **Hoppa** och **Bromsa** när spelet startar. Bollen måste ha kontakt med en yta för att hoppa, och en nedhållen hoppknapp ger ett hopp. Släpp och tryck igen för nästa hopp efter landning. Hopp kan användas för att ta sig över de roterande hindren.

Pausmenyn har också knappen **Generera en ny bana**. Stjärnor och banans utformning behålls efter fall och bollen återvänder till senaste checkpoint. Samla alla stjärnor innan du går i mål; antalet visas i spelstatusen. Ljud aktiveras med högtalarknappen.

## Genererade banor

- En ny slumpad bana skapas vid omladdning, med R eller via pausmenyn.
- När du når mål skapar **Nästa bana** en ny bana och ökar bannumret.
- Banorna har 4–6 öar och 7–11 stjärnor. Senare banor blir något längre och broarna lite smalare, med fasta gränser för svårighetsgraden.
- Broarna överlappar öarna och det finns en sammanhängande väg runt varje hinders svepyta. Stjärnor och checkpoints ligger längs den säkra vägen.
- Längsta resan (antal klarade banor i en omgång) sparas lokalt. Tider från olika slumpbanor jämförs inte som rekord.

Generatorn finns i `src/level.js`. Varje bana har ett slumpfrö så att fel kan reproduceras med exempelvis `new Game({ seed: 'exempel', number: 3 })`. Testerna kontrollerar geometrin hos 2 000 banor och kör 32 olika banor genom fysikmotorn med vanlig riktningsstyrning hela vägen till mål.

## Bygg och verifiera

```sh
npm test
npm run build
npm run preview
```

Webbläsartester för rendering, spelstart, stjärninsamling, paus, nya banor, övergång till nästa bana och pekstyrning:

```sh
# I molnmiljön finns Chromium på /usr/bin/chromium.
# Ange CHROMIUM_PATH om Chromium ligger någon annanstans.
npm run test:e2e
```

Webbläsaren behöver WebGL. Molnmiljöns tester använder mjukvarurendering i Chromium. Spelregler, bana och fysik finns i `src/game.js`; grafik och gränssnitt finns i `src/main.js` och `src/style.css`.

## Windows-app (.exe)

Den portabla versionen för **64-bitars Windows 10/11** finns efter paketering i
`release/Boll-0.5.0-Windows-x64.exe`. Kopiera filen till datorn och dubbelklicka.
Ingen installation, Node.js, separat webbserver eller internetanslutning behövs.
Första starten kan ta en stund eftersom appen packar upp sina resurser i en tillfällig katalog.
Längsta resan sparas i användarens lokala appdata mellan starter.

F11 växlar helskärm och Alt+F4 avslutar. Övrig styrning är samma som i webbversionen.
Appen är inte digitalt signerad; Windows kan därför visa en varning om okänd utgivare.

Bygg en ny exe från källkoden:

```sh
npm ci
npm run build:windows
```

Paketeringen använder Electron och electron-builder. Bygget hämtar officiella
Windows- och NSIS-resurser och kräver internet. Själva spelet körs sedan offline.
Windows-exe kan även byggas från Linux; certifikat för kodsignering är inte konfigurerat.

### Ladda ner via GitHub Actions

När källkoden och `.github/workflows/windows.yml` finns på GitHub kan Windows-appen
byggas och laddas ner därifrån:

1. Öppna repositoryts flik **Actions** och välj **Bygg Boll för Windows**.
2. Starta med **Run workflow**, eller öppna en automatisk körning efter en push.
3. När körningen lyckats, ladda ner **Boll-Windows-x64** under **Artifacts**.
4. Packa upp zip-filen och dubbelklicka på exe-filen.

Du behöver vara inloggad på GitHub för att ladda ner artefakten. Nedladdningen
sparas i 14 dagar; byggflödet kan köras igen när en ny nedladdning behövs.

Kör desktopversionen under utveckling med `npm run desktop`.
Efter `npm run build` testar `npm run test:desktop` appens lokala filinläsning och spelande
utan nätverksanslutning. På Linux kräver det en grafisk session eller virtuell bildskärm.
