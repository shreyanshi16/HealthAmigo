const {win, BrowserWindow, app, Tray} = require('electron');
const path = require('path');
const { electron } = require('process');

function createWindow(){
    const win = new BrowserWindow({
        width: 300,
        height: 100,
        backgroundColor:"white",
        webPreferences:{
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })
    win.loadFile('index.html');
    win.maximize().setAlwaysOnTop(true,'pop-up-menu');
    const iconPath = path.join(__dirname, 'cloud_fun.ico');
    let tray = new Tray(iconPath);
    tray.setHighlightMode('always');
}

require('electron-reload')(__dirname,{
    electron: path.join(__dirname,'node_modules','.bin','electron')
})
app.whenReady().then(createWindow)


app.on('window-all-closed',()=>{
    if(process.platform !== 'drawin'){
        app.quit();
    }
})   
