// main.js

const { app, BrowserWindow } = require("electron");
const path = require("path");
const OktaAuth = require("@okta/okta-auth-js").OktaAuth;

const { ipcMain } = require("electron");

let mainWindow;
let user;

var config = {
  // Required config
  issuer: "https://dev-332742.okta.com/oauth2/default",

  // Required for login flow using getWithRedirect()
  clientId: "0oaa012fi4YN4MMMK357",
};

var authClient = new OktaAuth(config);

ipcMain.on("request-login", (event, data) => {
  authClient
    .signInWithCredentials(data)
    .then(function (res) {
      console.log(res);
      user = res.user;
      openHome();
    })
    .catch(function (err) {
      console.log(err);
      event.reply("login-failed", err.errorSummary);
    });
});

ipcMain.handle("user:get", (event) => {
  return user;
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
}

function openIndex() {
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

function openHome() {
  mainWindow.loadFile("home.html");
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  openIndex();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
