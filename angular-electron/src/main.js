const { app , browserWindow } = require('electron');

let win;

function createWindow(){
    win = new browserWindow({
        width:600,
        height: 600,
        backgroundColor: '#fffff',
        icon: 'file://'
    })

    win.loadUrl('file://{}/dist/index.html')

    //uncomment below to open dev tools
    //win.webContents.openDevTools()

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

