const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const os = require('os');
require('dotenv').config();

if (!fs.existsSync(path.join(__dirname, process.env.BUILD_PATH + '/' + process.env.ENTRY_POINT))){
    console.error("Error, please run : npm run build")
    process.exit();
}

function puts(error, stdout, stderr) {
     console.log(stdout) 
}

if (os.type() === 'Linux') 
    exec("xdg-open public/index.html", puts); 
else if (os.type() === 'Darwin') 
    exec("open public/index.html", puts); 
else if (os.type() === 'Windows_NT') 
    exec("start public/index.html", puts);
else
   throw new Error("Unsupported OS found: " + os.type());