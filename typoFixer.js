let typos = require('./typos');
let chalk = require('chalk')
module.exports=(address)=>{
    address= address.toUpperCase();
    typos.forEach(function (arrayItem) {
        // console.log(chalk.blue(`------->string  ${address}`));
            newStr= address.replace(arrayItem.typo,arrayItem.replacement);
        if (address.search(arrayItem.typo) != -1) {
            console.log(chalk.greenBright(`------->contains ${arrayItem.typo}`));
            newStr= address.replace(arrayItem.typo,arrayItem.replacement);
            address=newStr;
          }

    });
    return address;
}