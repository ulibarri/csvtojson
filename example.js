let constants = require('./constants');
// let greeting='Hola desde el module revealing pattern';
// let greet = ()=>{
//     console.log(greeting);
// }
// let greet2 = ()=>{
//     console.log(greeting);
// }
// let persona= {
//     name: 'carlos',
//     edad: 45
// };
// module.exports={
//     greet:greet,
//     greet2:greet2,
//     greeting:greeting,
//     persona
// }


















let persona= {
    name: 'carlos',
    edad: 45,
    apellido: 'Ulibarri',
    saluda : function(){console.log('Saludando');}
};

let events= {
    saluda : function(){console.log('Saludando');},
    brinca : function(){console.log('Brincando');},
    canta : function(){console.log('Cantando');}

};

// console.log(persona.name);
// let key='saluda'
// console.log(persona[key]());


// let myArray=[];
// myArray.push(4);
// myArray.push('hola soy una cadena');
// myArray.push(persona);
// myArray.push(function(){console.log('hola desde la funcion')});

// console.log(myArray);

// let funcArray=[];
// funcArray.push(function(){console.log('hola desde la funcion 1')});
// funcArray.push(function(){console.log('hola desde la funcion 2')});
// funcArray.push(function(){console.log('hola desde la funcion 3')});
// funcArray.push(function(){console.log('hola desde la funcion 4')});

// console.log(funcArray);


// funcArray.forEach((item)=>{
//     item();
// })

// console.log(constants.events.RUN);
// console.log('run');


// const generator = require("moxname");

// for (i=0;i<=50;i++)
//      console.log(generator.getFirstName('male', 30));
//     //  console.log(generator.getLastName(30));
     
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World, this is the root route')
});
app.get('/message', function (req, res) {
    res.send('Hello World, this is the message route')
  });
  app.get('/prueba', function (req, res) {
    res.send('<!DOCTYPE html><html><head></head> <body> <p>Este es contenido HTML</p> </body> </html>');
  });
  


// app.post();
// app.put();
// app.delete();
 
app.listen(3000);