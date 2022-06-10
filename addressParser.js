let typos = require('./typos');
const chalk = require('chalk');
const centers = require('./centers');
let val="";
let retVal="NOT FOUND";
module.exports=(address)=>{
    console.log(chalk.greenBright(`AP is Processing: ${address}`));
    currentCenterAddress= address.toUpperCase();
    
    let found = false;
    let i=0;
    // console.log(centers);
        try {
            centers.forEach((data, index) =>{
                retVal="NOT FOUND";
            // console.log(data.criteria);
            data["criteria"].forEach(element => {   //iteramos los criterios
                if (currentCenterAddress.includes(element)){
                    i++;
                }
                else{
                }
            });

            if (i ==data["criteria"].length){
                // console.log(chalk.greenBright(`${data["name"]}--------->${i} out of ${data["criteria"].length} matching criteria, address = ${data["address"]}`));                    
                // participant.Event_Reason=data["address"];
                // csv_row["Destination"] =data["address"];
                // csv_row["er"] = data["address"];
                found=true;
                // console.log(chalk.magentaBright(`--------------------------------->Encontrado: ${data.address}`));
                val=data.address;
                if (i ==data["criteria"].length){

                     throw new Error('001');
                    }
                }
            else
            {found=false;        
                // if(i>=3) {
                //     console.log(chalk.magentaBright(`${data["name"]}--> ${i} out of ${data["criteria"].length} matching criteria`));
                // }else{
                //     // console.log(chalk.yellow(`${data["name"]}--> ${i} out of ${data["criteria"].length} matching criteria`));
                // }
            }
            i=0;
            });

            
            found=false;                
        } catch (error) {
            if (error.message != '001') throw error;
            //  console.log('Estoy en el catch' + error);
            
            // console.log('Found------->' + found);
            if (found){
                //   console.log(chalk.cyanBright(`---------------------------------------------> ${val}`));
                retVal=val;
                
            }else{
                val=`NOT FOUND`;
                retVal=val;
            }

            // if (found=== false){
            //     val=`NOT FOUND`;
            //     retVal=val;

            // }
        }
        console.log(chalk.cyanBright(`Returning -------------------------------------------> ${retVal}`));
    return retVal;
}