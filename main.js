const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "img/telegram.png"
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true
    })
  );

  //   Open dev tools
  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

// run the app
app.on("ready", createWindow);

// quit when all the windoes are closed

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
