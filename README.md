# Boll

Ett litet 3D-äventyr bland molnen. Styr en boll över svävande öar, samla alla sju stjärnor och rulla genom målporten. Roterande hinder, smala broar och checkpoints hjälper till att göra vägen dit till en utmaning.

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
| Mellanslag | Bromsa |
| Esc | Pausa / fortsätt |
| R | Börja om hela banan |

På pekskärm visas riktningsknappar och broms när spelet startar. Stjärnor behålls efter fall och bollen återvänder till senaste checkpoint. Samla alla sju innan du går i mål. Rekordtid sparas lokalt i webbläsaren. Ljud aktiveras med högtalarknappen.

## Bygg och verifiera

```sh
npm test
npm run build
npm run preview
```

Webbläsartester för rendering, spelstart, stjärninsamling, paus, omstart och pekstyrning:

```sh
# I molnmiljön finns Chromium på /usr/bin/chromium.
# Ange CHROMIUM_PATH om Chromium ligger någon annanstans.
npm run test:e2e
```

Webbläsaren behöver WebGL. Molnmiljöns tester använder mjukvarurendering i Chromium. Spelregler, bana och fysik finns i `src/game.js`; grafik och gränssnitt finns i `src/main.js` och `src/style.css`.

## Windows-app (.exe)

Den portabla versionen för **64-bitars Windows 10/11** finns efter paketering i
`release/Boll-0.1.0-Windows-x64.exe`. Kopiera filen till datorn och dubbelklicka.
Ingen installation, Node.js, separat webbserver eller internetanslutning behövs.
Första starten kan ta en stund eftersom appen packar upp sina resurser i en tillfällig katalog.
Rekordtiden sparas i användarens lokala appdata mellan starter.

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
