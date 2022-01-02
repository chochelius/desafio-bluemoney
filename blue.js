const https = require("https");
const fs = require("fs");
const url = "https://mindicador.cl/api";

const params = process.argv.slice(2);
let nombre = params[0];
let extension = params[1];
let indicador = params[2];
let cantidad = Number(params[3]);

let datRec = {};

https
 .get(url, (resp) => {
 let data = "";
 resp.on("data", (chunk) => {
 data += chunk;
 });
 resp.on("end", () => {
 datRec = JSON.parse(data);
 const valor = datRec[indicador].valor;
 console.log(
    `
    A la fecha: ${new Date()}
    Fue realizada cotización con los siguientes datos:
    Cantidad de pesos a convertir: ${cantidad} pesos
    Convertido a "${indicador}" da un total de:
    ${Math.trunc(cantidad / valor)}
    `,
 );
 fs.writeFile(
    nombre + "." + extension,
    `
    A la fecha: ${new Date()}
    Fue realizada cotización con los siguientes datos:
    Cantidad de pesos a convertir: ${cantidad} pesos
    Convertido a "${indicador}" da un total de:
    ${Math.trunc(cantidad / valor)}
    `,
    "utf8",
    () => {}
  );
 });
 })
 .on("error", (err) => console.error(err.message));




 
