// var express = require('express');  //importamos la dependencia
// var app = express(); //declaramos una App de Express

// var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

// //primera ruta (está al nivel de la raiz /), Hello World!
// app.get('/', function (req, res) {
//     res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
// });

// //segunda ruta /api, regresa un objeto JSON
// app.get('/api', function (req, res) {
//     res.json({ firstname: 'John', lastname: 'Doe' });
// });
// //tercera ruta, recibe un parametro
// app.get('/person/:id', function (req, res) {
//     res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
// });
// app.listen(port); //levantar el server y ponerlo a la escucha




const chalk = require('chalk');
const addressParser = require('./addressParser');
// let addresParser= require('./addressParser');

let address = '6MONTH RE-ASSESSMENT ORDERS';
// console.log(`La direccion buscada es: ${address}`);
let retVal=addressParser(address);
if (retVal=='NOT FOUND'){
    console.log(chalk.redBright(retVal));
}else{
    // console.log(chalk.greenBright(`ADDRESS FOUND: ${addressParser(address)}`));
    console.log(chalk.greenBright(retVal));
}



