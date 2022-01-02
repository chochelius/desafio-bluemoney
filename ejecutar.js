const ChildProcess = require("child_process");
const params = process.argv.slice(2);
let nombre = params[0];
let extension = params[1];
let indicador = params[2];
let cantidad = Number(params[3]);

function ejecutar() {
    return new Promise((resolve, reject) => {
    ChildProcess.exec(`node blue.js ${nombre} ${extension} ${indicador} ${cantidad}`, (err, result) => {
    if (err) {
    reject("ocurrió un error");
    };
    console.log(result);
    });
    });
   };

ejecutar();

   