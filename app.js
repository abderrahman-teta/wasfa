const electron = require('electron');
const url = require('url');
const path = require('path');
//const electronLocalshortcut = require('electron-localshortcut');





const {app,BrowserWindow,Menu} = electron;

let mainWindow;


app.on('ready',function(){
    mainWindow = new BrowserWindow({width: 1050, height: 800});
    mainWindow.loadURL(url.format({
            pathname: path.join(__dirname,'main.html'),
            protocol:'file:',
            slashes:true
    }));
      
    

Menu.setApplicationMenu(null); 
   
    /*let b = false;
    electronLocalshortcut.register(mainWindow, 'F12', () => {
        if(b == false){
            mainWindow.setFullScreen(true);
            b = true;
        }
        else{
            mainWindow.setFullScreen(false);
            b = false;
        }

        });*/
   mainWindow.webContents.openDevTools()
  
});





