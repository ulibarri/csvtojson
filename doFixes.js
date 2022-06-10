let typos = require('./fixes');
let info= require('./centers');
const chalk = require('chalk');
const fixer=require('./typoFixer2');
// este codigo procesa Event_Location_Information

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');
const centers = require('./centers');
// const typoFixer = require('./typoFixer');
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

  

console.log(chalk.greenBright( 'S T A R T <---------------------------------------------------------------------------------------> S T A R T '));
let currentPtpID="";
let currentCenterAddress="";
let ptpArray=[];
fs.createReadStream('out4 - out4.csv')
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
                        break;
                    case "Client_Code":
                        csv_row["Client_Code"] =row["Client_Code"];
                        
                        let cad=csv_row["Client_Code"];
                        console.log(`Row# --> ${rows}`);    

                        participant.participantID=row["Client_Code"];
                        currentPtpID= row["Client_Code"];
                        expresion = /SDP[0-9]{6}/g; 
                        //buscamos numero que empiecen con la forma SDP123456
                        
                        let hallado = cad.match(expresion);
                        if (hallado){
                            // let newStr = cad.replace(expresion, " ");
                            // console.log(chalk.bgYellow( newStr));
                            console.log(chalk.yellowBright( 'Client Code ' + cad + '------->OK '));
                        }else{
                            console.log(chalk.redBright( 'Client Code ' + cad + '--------------------------------------------------------------->WRONG CLIENT CODE '));
                        }




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
                        csv_row["Address"] =row["Address"];
                        // console.log(chalk.bgMagenta(`---------------------------->${row["Address"]}`));
                        csv_row["Address"] = fixer( row["Address"]);
                        // console.log(chalk.bgMagenta(`New address ---------------->${csv_row["Address"]}`));
                        participant.address.push( row["Address"]);
                        break;
                    case "Phone":
                        csv_row["Phone"] = row["Phone"];
                        participant.phone=row["Phone"]
                        break;
                    case "Origin":
                        csv_row["Origin"] = row["Origin"];
                        // console.log(chalk.bgMagenta(`---------------------------->${row["Origin"]}`));
                        csv_row["Origin"] = fixer( row["Origin"]);
                        // console.log(chalk.bgMagenta(`New Origin ---------------->${csv_row["Origin"]}`));
                        participant.address.push( row["Origin"]);
                        break;
                    case "Destination":
                        // let vacia=false;
                        csv_row["Destination"] =row["Destination"];   
                        csv_row["Destination"] = fixer( row["Destination"]);  
                        // console.log(chalk.bgMagenta(`New Destination ---------------->${csv_row["Destination"]}`));
                        participant.address.push( row["Destination"]);
         
                        //convertimos a mayuscula
                        // cad=cad.toUpperCase();
                        //BUSCAMOS los typos
                       
                        // console.log(chalk.blueBright(`La nueva cadena es ${cad}`))


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
            path: 'out5.csv',
            header: [
                { id: 'Event_Date', title: 'Event_Date' },
                { id: 'Start_Time', title: 'Start_Time' },
                { id: 'Appointment_Time', title: 'Appointment_Time' },
                { id: 'Participant', title: 'Participant' },
                { id: 'Client_Code', title: 'Client_Code' },
                { id: 'DOB', title: 'DOB' },
                { id: 'Sex', title: 'Sex' },
                { id: 'Address', title: 'Address' },
                { id: 'Phone', title: 'Phone' },
                { id: 'Origin', title: 'Origin' },
                { id: 'Destination', title: 'Destination' }

            ]
        });



        csvWriter
            .writeRecords(csv_rows)
            .then(() => console.log('The CSV file was written successfully'));

    });

