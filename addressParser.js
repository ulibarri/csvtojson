let typos = require('./typos');
const chalk = require('chalk');
const centers = require('./centers');
let cadPartialMatch='';
let val="";
let retVal="NOT FOUND";
module.exports=(address)=>{
    let i=0;
    console.log(chalk.greenBright(`AP is Processing: ${address}`));
    if (address.length === 0){
        
        retVal="EMPTY STRING";
        console.log(chalk.magentaBright(`Returning-------->: ${retVal}`));
        return retVal;
    }
    else{

    
    currentCenterAddress= address.toUpperCase();
    
    let found = false;
    let partialMatch =false;
    let i=0;
    // console.log(centers);
        try {
            centers.forEach((data, index) =>{
                retVal="";
            // console.log(data.criteria);
                data["criteria"].forEach(element => {   //iteramos los criterios
                if (currentCenterAddress.includes(element)){
                    i++; //por cada criterio encontrado, incrementamos el contador
                }
                else{
                }
            });
            //si el contador es igual a la cantidad de criterios => ENCONTRADO
            if (i ==data["criteria"].length){ 
                // console.log(chalk.greenBright(`${data["name"]}--------->${i} out of ${data["criteria"].length} matching criteria, address = ${data["address"]}`));                    
                // participant.Event_Reason=data["address"];
                // csv_row["Destination"] =data["address"];
                // csv_row["er"] = data["address"];
                found=true;
                // console.log(chalk.magentaBright(`--------------------------------->Encontrado: ${data.address}`));
                val=data.address;   //asignamos a val el valor del domicilio que cumple con los criterios
                if (i ==data["criteria"].length){
                    //lanzamos una excepcion para terminar la busqueda
                     throw new Error('001');
                    }
                
                }
            else
            {
                found=false; 
                // val=`NOT FOUND`;
                    if(i>0) {
                        // console.log(chalk.cyanBright(`-im in partial         ------`));
                        // console.log(chalk.magentaBright(`${data["name"]}--> ${i} out of ${data["criteria"].length} matching criteria`));
                        // console.log('i value---------------------------------------->' + i);
                        cadPartialMatch=`PARTIAL MATCH`;
                        val=`PARTIAL MATCH`;
                        partialMatch =true;
                    }else{
                        // console.log(chalk.cyanBright(`-im in not found         ------`));
                        // console.log(chalk.yellow(`${data["name"]}--> ${i} out of ${data["criteria"].length} matching criteria`));
                        val=`NOT FOUND`;
                    }
            }
            
            i=0;
            });
            
            
            found=false;   
            retVal=val;
            // console.log(chalk.cyanBright(`---------------------------------------------> ${val}`));
                  
        } catch (error) {

            if (error.message != '001') throw error;
          //  console.log('Estoy en el catch' + error);

            // if (found==false && partialMatch==true){
            //     retVal="PARTIAL MATCH";
            // }else{
            
            // if (found=== false){
            //     val=`NOT FOUND`;
            retVal=val;

            // }
        }
        // esto es afuera del catch
        // console.log(`partialMAtch=================================>${partialMatch}`)
        if (found==true){
            retVal=val;
        }else{    
        if (partialMatch=== true){
                val=cadPartialMatch;
                
            }
            else{
                val=`NOT FOUND`;
            }
            retVal=val;
        }
        // if (found){
        //     //   console.log(chalk.cyanBright(`---------------------------------------------> ${val}`));
        //     retVal=val;
            
        // }else{

        //     Object.is(i, undefined) ?  retVal='PARTIAL MATCH' :  retVal=val;
        // }

        


        console.log(chalk.cyanBright(`Returning -------------------------------------------> ${retVal}`));
    return retVal;
    }
}