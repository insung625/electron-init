const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld("api", {
    noti: (message) => {
            ipcRenderer.send('notify', message);
    },
});