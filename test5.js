
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
//encabezados del csv
// csv_row["Event_Date"] = "Event Date";
// csv_row["Start_Time"] = "Start Time";
// csv_row["Appointment_Time"] = "Appointment Time";
// csv_row["DOB"] = "DOB";
// csv_row["Sex"] = "Sex";
// csv_row["Phone"] = "Phone";
// csv_row["Event_Location_Information"] = "Event Location Information";
// csv_row["Client_Code"] = "Client Code";
// csv_row["Participant"] = "Participant";
// csv_row["Resource_Name"] = "Resource Name";
// csv_row["Event_Reason"] = "Event Reason";
// csv_row["Address"] = "Address";
// csv_row["Verification"] = "Verification"
// csv_row["Origin"] = "Origin";
// csv_row["Destination"] = "Destination";
// csv_row["eli"] = "eli";
// csv_row["er"] = "er";
// csv_rows.push(csv_row);   //metemos el encabezado
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
fs.createReadStream('out4.csv')
    .pipe(csv())
    .on('data', (row) => {
        // rows++;
        if ((row["Verification"].includes('DESTINY'))) {
            console.log(chalk.cyanBright(`${row["Client_Code"]} -> Fila procesada ----------", ${row["Verification"]}`));
            // csv_row
        } //else 
        // { }//DESTINY
        // csv_row["Verification"] = '';
        
        for (let key in row) {
           
            // console.log(chalk.red('verification-->',str));

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
                        csv_row["Verification"] = row["Verification"];                    
                        break;
                    case "er":
                          
                        break;
                    case "eli":
                         
                        break;
                    case "Origin":
                        csv_row["Origin"]=row["Origin"];      
                    //     let origin = row["Origin"].toString();
                    //     origin=origin.replace('CA 9', 'CA, 9');
                        break;
                    // case "Origin":
                    //     if ((row["Verification"].includes('DESTINY'))) 
                    //     {
                    //         csv_row["Origin"]=row["Event_Reason"];
                    //     }else{
                    //         csv_row["Origin"]=participant.address;
                    //     }
                    //     break;
                    case "Destination":
                        csv_row["Destination"]=row["Destination"];      
                    //     if ((row["Verification"].includes('DESTINY'))) 
                    //     {
                    //         csv_row["Destination"]= participant.address; //=row["Address"];
                    //     }else{
                    //         csv_row["Destination"]=row["Event_Reason"];
                    //     }
                  
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
            path: 'out6.csv',
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



