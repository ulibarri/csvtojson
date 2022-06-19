
let info= require('./centers');

const chalk = require('chalk');
const addressParser = require('./addressParser');


// este codigo procesa Event_Location_Information

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');
const centers = require('./centers');
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
fs.createReadStream('out6.csv')
    .pipe(csv())
    .on('data', (row) => {
        //  rows++;
        if ((row["Verification"].includes('DESTINY'))) {
            console.log(chalk.cyanBright(`${row["Client_Code"]} -> Fila procesada ----------", ${row["Verification"]}`));
            // csv_row
        } //else 
        // { }//DESTINY
  
        
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
                        console.log("Client_Code->",row["Client_Code"])    
                        csv_row["Client_Code"] =row["Client_Code"];
                        participant.participantID=row["Client_Code"];
                        currentPtpID= row["Client_Code"];
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
                        csv_row["Event_Location_Information"] =row["Event_Location_Information"]; 
                        
                        let data_eli=row["Event_Location_Information"];
                        // console.log("Event_Location_Information->",data_eli) 
                        let res_eli =   addressParser(data_eli);   
                        csv_row["eli"] = res_eli;              
                        break;
                    case "Event_Reason":
                        csv_row["Event_Reason"] = row["Event_Reason"];
                        let data_er=row["Event_Reason"];
                        // console.log("Event_Reason->",data_er)
                        let res_er =   addressParser(data_er);
                        csv_row["er"] = res_er;

                        break;
                    case "Verification":
                        let originContent = new String(row["Origin"]);
                        let destinationContent = new String(row["Destination"]);
                        let erContent = new String(row["er"]);
                        let eliContent = new String(row["eli"]);
                        let addressContent = new String(row["Address"]);
                        let dnf = new String("Destination not found");
                        let nad = new String("no address detected");
                        let emptyString = new String("EMPTY STRING");
                        let partialMatch = new String("PARTIAL MATCH");
                        let notFound = new String("NOT FOUND");

                        if ((JSON.stringify(originContent) === JSON.stringify(dnf))||(JSON.stringify(destinationContent) === JSON.stringify(dnf)||(JSON.stringify(addressContent) === JSON.stringify(nad)))){
                            console.log(chalk.bgRed(`===================ROJO`));
                            csv_row["Verification"]  ="ROJO"
                        }else if ((JSON.stringify(erContent) === JSON.stringify(eliContent)  ))
                        {
                            console.log(chalk.bgGreen(`===================VERDE`));
                            csv_row["Verification"]  ="TODO BIEN";
                        }else if (((JSON.stringify(erContent)!=JSON.stringify(partialMatch))&&(JSON.stringify(erContent)!=JSON.stringify(notFound)))&&(JSON.stringify(eliContent)===JSON.stringify(emptyString)))
                        {
                            console.log(chalk.bgGreen(`===================VERDE`));
                            csv_row["Verification"]  ="TODO BIEN";
                        }else if (((JSON.stringify(eliContent)!=JSON.stringify(partialMatch))&&(JSON.stringify(eliContent)!=JSON.stringify(notFound)))&&(JSON.stringify(erContent)===JSON.stringify(emptyString)))
                        {
                            console.log(chalk.bgGreen(`===================VERDE`));
                            csv_row["Verification"]  ="TODO BIEN";
                        }else if (((JSON.stringify(erContent)!=JSON.stringify(partialMatch))&&(JSON.stringify(erContent)!=JSON.stringify(emptyString)))&&(JSON.stringify(eliContent)===JSON.stringify(notFound)))
                        {
                            console.log(chalk.bgGreen(`===================VERDE`));
                            csv_row["Verification"]  ="TODO BIEN";
                        }else if (((JSON.stringify(eliContent)!=JSON.stringify(partialMatch))&&(JSON.stringify(eliContent)!=JSON.stringify(emptyString)))&&(JSON.stringify(erContent)===JSON.stringify(notFound)))
                        {
                            console.log(chalk.bgGreen(`===================VERDE`));
                            csv_row["Verification"]  ="TODO BIEN";
                        }
                        // 
                        // else if (((JSON.stringify(erContent)===JSON.stringify(emptyString))||(JSON.stringify(eliContent)===JSON.stringify(emptyString))) && ((JSON.stringify(erContent)!=JSON.stringify(partialMatch)) && (JSON.stringify(erContent)!=JSON.stringify(notFound)) ) ){
                        //     console.log(chalk.bgRed(`===================VERDE`));
                        //     csv_row["Verification"]  ="TODO BIEN";
                        // }
                        // else if (((JSON.stringify(erContent)===JSON.stringify(emptyString))||(JSON.stringify(eliContent)===JSON.stringify(emptyString))) && ((JSON.stringify(eliContent)!=JSON.stringify(partialMatch)) && (JSON.stringify(eliContent)!=JSON.stringify(notFound))) ){
                        //     console.log(chalk.bgRed(`===================VERDE`));
                        //     csv_row["Verification"]  ="TODO BIEN";
                        // }

                        // else if ((JSON.stringify(erContent) === JSON.stringify(emptyString)) && (JSON.stringify(eliContent) === JSON.stringify(emptyString)))
                        //     {
                        //         console.log(chalk.bgRed(`===================ROJO`));
                        //         csv_row["Verification"]  ="ROJO"
                        //         // let isEquel = JSON.stringify(originContent) === JSON.stringify(destinationContent);
                        //         // console.log(`isEquel=${isEquel}`);                 
                        //         // csv_row["Verification"]  =isEquel
                        //     }else if ((JSON.stringify(erContent) === JSON.stringify(partialMatch)) || (JSON.stringify(eliContent) === JSON.stringify(partialMatch)))
                        //         {
                        //             console.log(chalk.bgYellow(`===================AMARILLO`));
                        //             csv_row["Verification"]  ="REVISAME"
                        //         }else if (((JSON.stringify(erContent) === JSON.stringify(notFound)) || (JSON.stringify(eliContent) === JSON.stringify(notFound)) ))
                        //         {
                        //             console.log(chalk.bgGreen(`===================VERDE`));
                        //             csv_row["Verification"]  ="TODO BIEN"
                        //         }else if ((JSON.stringify(erContent) === JSON.stringify(eliContent)  ))
                        //         {
                        //             console.log(chalk.bgGreen(`===================VERDE`));
                        //             csv_row["Verification"]  ="TODO BIEN"
                        //         }

                        
                            
                        
                        break;
                    case "er":
                          
                        break;
                    case "eli":
                         
                        break;
                    case "Origin":
                        csv_row["Origin"]=row["Origin"];      
              
                        break;
       
                    case "Destination":
                        csv_row["Destination"]=row["Destination"];      
           
                        break;
                    
                }//SWITCH
     
        
        }//for
        
        participants.push(participant);
        csv_rows.push(csv_row);
        csv_row = {};
        console.log(`Row number---->${rows}`)
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
            path: 'out7.csv',
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
                { id: 'Resource_Name', title: 'Resource_Name' },
                { id: 'Event_Reason', title: 'Event_Reason' },
                { id: 'Event_Location_Information', title: 'Event_Location_Information' },
                { id: 'Verification', title: 'Verification' },
                { id: 'Origin', title: 'Origin' },
                { id: 'Destination', title: 'Destination' },
                { id: 'eli', title: 'eli' },
                { id: 'er', title: 'er' }


            ]
        });



        csvWriter
            .writeRecords(csv_rows)
            .then(() => console.log('The CSV file was written successfully'));

    });



