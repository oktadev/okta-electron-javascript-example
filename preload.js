// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  login: (data) => ipcRenderer.send("user:login", data),
  getUser: async () => {
    var user = await ipcRenderer.invoke("user:get");
    return user;
  },
  logout: () => ipcRenderer.send("user:logout"),
});

ipcRenderer.on("login-failed", (event, message) => {
  document.getElementById("error-message").innerHTML = message;
});