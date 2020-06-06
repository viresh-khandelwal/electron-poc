const { app , BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

let win;

function createWindow(){
    win = new BrowserWindow({
        width:600,
        height: 600,
        backgroundColor: '#fffff',
        icon: `${__dirname}\\dist\\assets\\logo.png`
    })



    //win.loadURL(`e:\\electron-poc\\electron-poc\\angular-electron\\dist\\index.html`)
    win.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/index.html`),
          protocol: "file:",
          slashes: true
        })
    );

    //uncomment below to open dev tools
    win.webContents.openDevTools()

    //event when the window is closed
    win.on('closed',function(){
        win = null;
    })
}

app.on('ready', createWindow);


app.on('window-all-closed',function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', function(){
    if(win=== null){
        createWindow();
    }
})

