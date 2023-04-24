let typos = require('./typos');
let info= require('./centers');
const chalk = require('chalk');
const fixer=require('./typoFixer');
// este codigo procesa Event_Location_Information

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');
const centers = require('./centers');
const typoFixer = require('./typoFixer');
let csv_rows=[];
let participants = [];
let csv_row = {};

csv_row = {};

let rows = 0;
csv_row = {};
let participant=

{
    name: '',
    participantID: '',
    address: [],
    category: null,
    wc: false,
    blind: false,
    deaf: false,
    phone: '',
    mobilePhone:'',
    gender: '',
    DOB: '',
    criteria:['22','22','22'],
    currentIndex:0,
    fullAddress:{
        address:"",
        address1:"",
        city:"",
        state:"",
        zipcode:""
    },
    fullName:{
        firstName: "",
        lastName:"",
        middleName:""
    }
  }

  


let currentPtpID="";
let currentCenterAddress="";
let ptpArray=[];
fs.createReadStream('Manifest 04.25.23  - Manifest 04.25.23 .csv')
    .pipe(csv())
    .on('data', (row) => {
        // rows++;
        
        for (let key in row) {

                switch (key) {

                    case "Event_Date":
                        csv_row["Event_Date"]= row["Event_Date"];
                        break;
                    case "Start_Time":
                        csv_row["Start_Time"]=row["Start_Time"];
                        break;
                    case "Appointment_Time":
                        csv_row["Appointment_Time"] =row["Appointment_Time"];
                        break;
                    case "Participant":
                        csv_row["Participant"] =row["Participant"];
                        participant.name=row["Participant"];
                        if(participant.name.indexOf ('SDP564748')>0){
                            console.log(chalk.bgBlueBright(`--------------------------------->SDP564748`));
                        }
                        break;
                    case "Client_Code":
                        //en esta version del archivo, esta columna NO EXISTE
                        csv_row["Client_Code"] =row["Client_Code"];
                        participant.participantID=row["Client_Code"];
                        currentPtpID= row["Client_Code"];
                        // console.log(chalk.bgBlueBright(`New address --------------------------------------------->${currentPtpID}`));
                        // if (currentPtpID=='SDP564748'){
                        //     console.log(chalk.bgBlueBright(`New address --------------------------------------------->SDP564748`));
                        // }
                        break;
                    case "DOB":
                        csv_row["DOB"] = row["DOB"];
                        participant.DOB=row["DOB"];
                        break;
                    case "Sex":
                        csv_row["Sex"] = row["Sex"];
                        participant.gender=row["Sex"];
                        break;
                    case "Address":
                        // csv_row["Address"] =row["Address"];
                        
                        console.log(chalk.bgMagenta(`---------------------------->${row["Address"]}`));
                        csv_row["Address"] = fixer( row["Address"]);
                        console.log(chalk.bgMagenta(`New address ---------------->${csv_row["Address"]}`));

                        participant.address.push( row["Address"]);
                        break;
                    case "Phone":
                        
                        csv_row["Phone"] = row["Phone"];
                        participant.phone=row["Phone"]
                        break;
                    case "Resource_Name":
                        csv_row["Resource_Name"] = row["Resource_Name"];
                        break;
                    case "Event_Location_Information":
                        let vacia=false;
                        csv_row["Event_Location_Information"] =row["Event_Location_Information"];     
                        
                        let cad =   csv_row["Event_Location_Information"];             
                        //convertimos a mayuscula
                        cad=cad.toUpperCase();
                        //BUSCAMOS los typos
                       
                        let newStr = "";
                        console.log(`Row# --> ${rows}  Event_Location_Information ---->, ${cad}`);    
                        typos.forEach(function (arrayItem) {
                            if (cad.search(arrayItem.typo) != -1) {
                                console.log(chalk.redBright(`------->contains ${arrayItem.typo}`));
                                newStr= cad.replace(arrayItem.typo,arrayItem.replacement);
                                // console.log(chalk.greenBright(`New cad ${cad}`));
                                cad=newStr;
                              }

                        });
                        
                        // REMOVEMOS LOS NUMEROS DE TELEFONO
                        
                        expresion = /[0-9]{3}(-|\s)[0-9]{3}-[0-9]{4}/g; 
                        //buscamos numero que empiecen con la forma 619-422-1471
                        
                        hallado = cad.match(expresion);
                        if (hallado){
                            let newStr = cad.replace(expresion, " ");
                            // console.log(chalk.bgYellow( newStr));
                            console.log(chalk.yellowBright( '------->contains ' + hallado));
                            cad=newStr;
                        }

                        
                        expresion =/\([0-9]{3}\)(-|\s)[0-9]{3}-[0-9]{4}/g;
                        //buscamos numero que empiecen con la forma (619) 422-1471
                        hallado = cad.match(expresion);
                        if (hallado){
                            let newStr = cad.replace(expresion, " ");
                            // console.log(chalk.bgGreen( newStr))
                            console.log(chalk.yellowBright( '------->contains ' + hallado));
                            cad=newStr;
                        }
                        //  cad= cad.replace("P#"," ");

                        console.log(chalk.blueBright(`La nueva cadena es ${cad}`))
                        csv_row["Event_Location_Information"] =cad;

                        break;
                    case "Event_Reason":

                        csv_row["Event_Reason"] = row["Event_Reason"];
                        let cad2 =   csv_row["Event_Reason"];
                    
                        
                        if (cad2)
                        {
                            //convertimos a mayuscula
                            cad2=cad2.toUpperCase();
                            //BUSCAMOS los typos
                            let newStr2 = "";
                            console.log(`Row# --> ${rows}  Event_Reason ---->, ${cad2}`);    
                            typos.forEach(function (arrayItem) {
                                if (cad2.search(arrayItem.typo) != -1) {
                                    console.log(chalk.redBright(`------->contains ${arrayItem.typo}`));
                                    newStr2= cad2.replace(arrayItem.typo,arrayItem.replacement);
                                    // console.log(chalk.greenBright(`New cad ${cad}`));
                                    cad2=newStr2;
                                }

                            });
                        
                            // REMOVEMOS LOS NUMEROS DE TELEFONO
                        
                            expresion = /[0-9]{3}(-|\s)[0-9]{3}-[0-9]{4}/g; 
                            //buscamos numero que empiecen con la forma 619-422-1471
                        
                            hallado = cad2.match(expresion);
                            if (hallado){
                                let newStr3 = cad2.replace(expresion, " ");
                                // console.log(chalk.bgYellow( newStr));
                                console.log(chalk.yellowBright( '------->contains ' + hallado));
                                cad2=newStr3;
                            }

                        
                            expresion =/\([0-9]{3}\)(-|\s)[0-9]{3}-[0-9]{4}/g;
                            //buscamos numero que empiecen con la forma (619) 422-1471
                            hallado = cad2.match(expresion);
                            if (hallado){
                                let newStr4 = cad2.replace(expresion, " ");
                                // console.log(chalk.bgGreen( newStr))
                                console.log(chalk.yellowBright( '------->contains ' + hallado));
                                cad2=newStr4;
                            }
                        //  cad= cad.replace("P#"," ");

                            console.log(chalk.blueBright(`La nueva cadena es ${cad2}`))
                            csv_row["Event_Reason"] =cad2;
                        }
                        break;
                    
                    
                }//SWITCH
     
        
        }//for
        
        participants.push(participant);
        csv_rows.push(csv_row);
        csv_row = {};
        rows++;
        participant= {
            name: '',
            participantID: '',
            address: [],
            category: null,
            wc: false,
            blind: false,
            deaf: false,
            phone: '',
            mobilePhone:'',
            gender: '',
            DOB: '',
            criteria:['22','22','22'],
            currentIndex:0,
            fullAddress:{
                address:"",
                address1:"",
                city:"",
                state:"",
                zipcode:""
            },
            fullName:{
                firstName: "",
                lastName:"",
                middleName:""
            }
          }

       

    })
    .on('end', () => {

        console.log("Total Rows : ", rows);
        console.log('CSV file successfully processed');

        const csvWriter = createCsvWriter({
            path: 'out9.csv',
            header: [
                { id: 'Event_Date', title: 'Event_Date' },
                { id: 'Start_Time', title: 'Start_Time' },
                { id: 'Participant', title: 'Participant' },
                { id: 'DOB', title: 'DOB' },
                { id: 'Sex', title: 'Sex' },
                { id: 'Address', title: 'Address' },
                { id: 'Phone', title: 'Phone' },
                { id: 'Event_Reason', title: 'Event_Reason' },
                { id: 'Event_Location_Information', title: 'Event_Location_Information' },
                { id: 'Resource_Name', title: 'Resource_Name' }

            ]
        });



        csvWriter
            .writeRecords(csv_rows)
            .then(() => console.log('The CSV file was written successfully'));

    });

