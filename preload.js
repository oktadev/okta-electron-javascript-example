// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  requestLogin: (data) => ipcRenderer.send("request-login", data),
  getUser: async  () => {
    var user =  await ipcRenderer.invoke("user:get");
    return user;
  },
});

ipcRenderer.on("login-failed", (event, message) => {
  document.getElementById("error-message").innerHTML = message;
});

ipcRenderer.on("user:received", (event, user) => {
  window.electron.user = user;
});

window.addEventListener("DOMContentLoaded", () => {
  console.log(this);
});
