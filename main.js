// let color="rojo";
// let talla ="M";
// let modelo = "Clasico";

// console.log("Juan tiene una playera talla " + talla + "\n de color " + color + " modelo " + modelo );
// console.log(`Juan tiene una playera 
// talla ${talla}  
// de color ${color} 
// modelo ${modelo}`);


// let funcArray = []; 
// funcArray.push(() => { 
// console.log("Function 1"); 
// }); 
// funcArray.push(() => { 
// console.log("Function 2");
// }); 
// funcArray.push(() => { 
// console.log("Function 3"); 
// }); 


// let myArray = []; 
// myArray.push(4); 
// myArray.push('una cadena'); 
// myArray.push(obj); 
// myArray.push(function () { 
// console.log("hola desde el array"); 
// }) 
// console.log(myArray); 


// const greet5 = require('./greet5');
// greet5.greet();
// greet5.run();
// greet5.jump();

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  <h1>    Hola </h1>
  </body>
  </html>`)
})

app.listen(3000)