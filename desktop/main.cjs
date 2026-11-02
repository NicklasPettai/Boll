const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const entry = path.join(__dirname, '..', 'dist', 'index.html');
const entryUrl = pathToFileURL(entry).href;

function createWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    title: 'Boll',
    backgroundColor: '#edf2ec',
    show: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
    },
  });

  window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  window.webContents.on('will-navigate', (event, url) => {
    if (url !== entryUrl) event.preventDefault();
  });
  window.once('ready-to-show', () => window.show());
  window.loadFile(entry);
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: 'Spel',
      submenu: [
        { label: 'Helskärm', accelerator: 'F11', role: 'togglefullscreen' },
        { type: 'separator' },
        { label: 'Avsluta', accelerator: 'Alt+F4', role: 'quit' },
      ],
    },
  ]));
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
