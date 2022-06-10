
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
csv_row["Event_Date"] = "Event Date";
csv_row["Start_Time"] = "Start Time";
csv_row["Appointment_Time"] = "Appointment Time";
csv_row["DOB"] = "DOB";
csv_row["Sex"] = "Sex";
csv_row["Phone"] = "Phone";
csv_row["Event_Location_Information"] = "Event Location Information";
csv_row["Client_Code"] = "Client Code";
csv_row["Participant"] = "Participant";
csv_row["Resource_Name"] = "Resource Name";
csv_row["Event_Reason"] = "Event Reason";
csv_row["Address"] = "Address";
csv_row["Verification"] = "Verification"
csv_row["Origin"] = "Origin";
csv_row["Destination"] = "Destination";
csv_row["eli"] = "eli";
csv_row["er"] = "er";
csv_rows.push(csv_row);   //metemos el encabezado
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
fs.createReadStream('out3.csv')
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
                        // csv_row["Address"] =row["Address"];
                        if ((row["Verification"].includes('DESTINY'))) 
                        {
                            csv_row["Origin"] =row["Address"].replace('CA 9','CA, 9');
                            csv_row["Destination"] =row["Event_Reason"];

                        }
                        else{
                            csv_row["Address"] =row["Address"].replace('CA 9','CA, 9');
                            csv_row["Origin"] =row["Address"].replace('CA 9','CA, 9');

                        }
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
                        // csv_row["eli"]=    addressParser(row["Event_Location_Information"]);               
                        // if(currentPtpID.includes('SDP000514')){
                        //    console.log(chalk.yellowBright(`PTPID --->${currentPtpID}   Event_Reason ---->, ${row["Event_Reason"]} Address--->${row["Address"]}`));
                        // }
                        if ((row["Destination"].includes('Destination'))) 
                        {
                        //     // console.log(chalk.yellowBright(`PTPID ---------------------------------->${currentPtpID}   Event_Reason ---->, ${row["Event_Reason"]} Address--->${row["Address"]}`));
                            // csv_row["Destination"]= participant.address; //=row["Address"];
                            // csv_row["Origin"]=row["Event_Reason"];
                        // }
                        // else
                        // {
                            // if(currentPtpID.includes('SDP000582')){
                            //     // console.log(chalk.bgCyanBright("-------------------------------------------------------------------------------------------------------->SDP000582"));
                            //     console.log(`Row# --> ${rows}  PTPID --->${currentPtpID}   Event_Reason ---->, ${row["Event_Reason"]}
                            // Verification--->${row["Verification"]}`);
                            // }
                            // else{
                            //     console.log(`Row# --> ${rows}  PTPID --->${currentPtpID}   Event_Reason ---->, ${row["Event_Reason"]}
                            // Verification--->${row["Verification"]}`);
                            // }
                            console.log(`Row# --> ${rows}  PTPID --->${currentPtpID}   Event_Location_Information ---->, ${row["Event_Location_Information"]}
                            Verification--->${row["Verification"]}`);

                            currentCenterAddress=row["Event_Location_Information"];
                            //  let ptp = info.find(el => el.participantID === currentPtpID);
                            let found = false;
                            let i=0;
                            try {
                                centers.forEach((data, index) =>{
                                    // console.log(data.criteria);
                                    data["criteria"].forEach(element => {
                                        if (currentCenterAddress.includes(element)){
                                            i++;
                                        }
                                        else{
                                         //console.log(`criteria ${element} not found`);
                                        }
        
                                    });
                                    if (i ==data["criteria"].length){
                                        console.log(chalk.greenBright(`${data["name"]}--------->${i} out of ${data["criteria"].length} matching criteria, address = ${data["address"]}`));
                                    
                                        participant.Event_Location_Information=data["address"];


                                        csv_row["Destination"] =data["address"];
                                        // aqui sacamos el ELI
                                        csv_row["eli"] =csv_row["Destination"];    

                                        
                                        found=true;
                                        if (i ==data["criteria"].length){
                                    
                                     
                                            throw BreakException;
                                        }

                                    }else{
                                        if(i>=3) {
                                            console.log(chalk.magentaBright(`${data["name"]}--> ${i} out of ${data["criteria"].length} matching criteria`));
                                        }else{
                                            // console.log(chalk.yellow(`${data["name"]}--> ${i} out of ${data["criteria"].length} matching criteria`));
                                        }
                                        csv_row["Destination"] ="Destination not found";
                                    //    aqui sacamos el ELI
                                        csv_row["eli"] ="Destination not found";
                                    }
                                    i=0;

                                });

                                if (found=== false){
                                    console.log(chalk.redBright('---------------------------------------------> CENTER NAME NOT FOUND'));
                                }
                                found=false;
                            
                            } catch (error) {
                                // if (error !== BreakException) throw e;
                            }
                        }else{// si NO incluye DESTINATION
                            csv_row["Destination"]=row["Destination"];
                        }

                        break;
                    case "Event_Reason":
                        csv_row["Event_Reason"] = row["Event_Reason"];
                        // console.log(`Event reason=${row["Event_Reason"]}`);
                        // csv_row["er"] = addressParser(row["Event_Reason"]);               
                        break;
                    case "Verification":
                        csv_row["Verification"] = row["Verification"];                    
                        break;
                    case "er":
                        
                        break;
                    // case "Origin":
                    //     let origin = row["Origin"].toString();
                    //     origin=origin.replace('CA 9', 'CA, 9');
                    //     break;
                    // case "Origin":
                    //     if ((row["Verification"].includes('DESTINY'))) 
                    //     {
                    //         csv_row["Origin"]=row["Event_Reason"];
                    //     }else{
                    //         csv_row["Origin"]=participant.address;
                    //     }
                    //     break;
                    // case "Destination":
                    //     if ((row["Verification"].includes('DESTINY'))) 
                    //     {
                    //         csv_row["Destination"]= participant.address; //=row["Address"];
                    //     }else{
                    //         csv_row["Destination"]=row["Event_Reason"];
                    //     }
                  
                    //     break;
                    
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
            path: 'out4.csv',
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



