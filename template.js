
let nombre ='Carlos';
let apellido = 'Ulibarri';





let persona = {
    name: 'value',
    nombre:'Carlos',
    apellido: 'Ulibarri',
    edad: 45,
    colonia: 'centro',
    saluda: function(){console.log('hola')},
    domicilio:{
        calle: 'madero',
        numExt:20,
        cp : 28010,
        imprimeCalle: function(){console.log(`Tu calle es ${this.calle}`)}
    }
}

// let obj={};

// let num =4.5;







console.log(`Hola mi nomnbre es ${persona.nombre}
mi apellido es ${persona.apellido} mi edad es ${4.5 *10}`);



console.log(`Colonia: ${persona.colonia}`)