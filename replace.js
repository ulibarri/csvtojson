// var multiSpacesString="Rosa Navarro, MD 2452 Fenton Street  #101Chula Vista, CA 91914";
// var singleSpacesString=multiSpacesString.replace(/  +/g, ' ');//"I have some big spaces."

// console.log(multiSpacesString);
// console.log(singleSpacesString);


const chalk = require('chalk');
things = new Object();

things.thing = new Array();


let info=require('./output');
console.log('info=',info.length);
info.forEach((ptp)=>{
    things.thing.push(ptp);
});


things.thing = things.thing.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.participantID === thing.participantID
  ))
)
// console.log('things=',things.thing.length);


let limInf=101;
let limSup=205;
console.log(chalk.yellow(`************* Printing participants from index ${limInf} to ${limSup}, Total = ${things.thing.length}`));
let i=0;       
things.thing.forEach((ptp)=>{
    if ((i>=limInf) && (i<=limSup)){
        console.log(ptp);
        console.log(',');
    }
   i++;
});