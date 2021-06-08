
let info= require('./centers');

const chalk = require('chalk');




const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');
const centers = require('./centers');
let participants = [];
let csv_row = {};
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
fs.createReadStream('out2.csv')
    .pipe(csv())
    .on('data', (row) => {
        if ((row["Verification"].includes('DESTINY'))) {
            console.log(chalk.cyanBright(`${row["Client_Code"]} -> Fila procesada ----------", ${row["Verification"]}`));
            // csv_row
        } else {
        // csv_row["Verification"] = '';
        rows++;
        for (let key in row) {
           
            // console.log(chalk.red('verification-->',str));

                switch (key) {

                    // case "Event_Date":
                    //     console.log("Event_Date ---->", row["Event_Date"]);
                    //     break;
                    // case "Start_Time":
                    //     console.log("Start_Time ---->", row["Start_Time"]);
                    //     break;
                    // case "Appointment_Time":
                    //     console.log("Appointment_Time ---->", row["Appointment_Time"]);
                    //     break;
                    case "Participant":
                        // console.log("Participant ---->", row["Participant"]);
                        participant.name=row["Participant"];
                        break;
                    case "Client_Code":
                        // console.log("Client_Code ---->", row["Client_Code"]);
                        participant.participantID=row["Client_Code"];
                        currentPtpID= row["Client_Code"];
                        break;
                    case "DOB":
                        // console.log("DOB ---->", row["DOB"]);
                        participant.DOB=row["DOB"];
                        break;
                    case "Sex":
                        // console.log("SEX ---->", row["Sex"]);
                        participant.gender=row["Sex"];
                        break;
                    case "Address":
                        // console.log("Address ---->", row["Address"]);
                        participant.address.push( row["Address"]);
                        break;
                    case "Phone":
                        // console.log("Phone ---->", row["Phone"]);
                        participant.phone=row["Phone"]
                        break;
                    // case "Resource_Name":
                    //     console.log("Resource_Name ---->", row["Resource_Name"]);
                    //     break;
                    case "Event_Location_Information":
                        console.log(`Row# --> ${rows}  PTPID --->${currentPtpID}   Event_Location_Information ---->, ${row["Event_Location_Information"]}
                        Verification--->${row["Verification"]}`);

                        currentCenterAddress=row["Event_Location_Information"];
                      //  let ptp = info.find(el => el.participantID === currentPtpID);
                        if (currentCenterAddress.length>0){

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
                                    found=true;
                                    if (i ==data["criteria"].length) throw BreakException;

                                }else{
                                    if(i>=3) {
                                        
                                        console.log(chalk.magentaBright(`${data["name"]}--> ${i} out of ${data["criteria"].length} matching criteria`));
                                    }else{
                                        // console.log(chalk.yellow(`${data["name"]}--> ${i} out of ${data["criteria"].length} matching criteria`));
                                    }
                                    //
                                    
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
                    }else{
                        console.log(chalk.redBright('row["Event_Location_Information"] is empty'));
                    }


                        // if (ptp){


                            // console.log(ptp["criteria"]);
                            // let address=currentCenterAddress ;

                            // ptp["criteria"].forEach(element => {
                            //     if (address.includes(element)){
                            //         i++;
                            //     }
                            //     else{
                            //         console.log(`criteria ${element} not found`);
                            //     }
    
                            // });
                            // if (i ==ptp["criteria"].length){
                            //     console.log(chalk.blue(`-------------------------------->${i} out of ${ptp["criteria"].length} matching criteria, address = ${ptp["address"]}`));
                                
                            //     participant.Event_Reason=ptp["address"];
                            // }else{
                            //     console.log(chalk.yellow(`Only ${i} out of ${ptp["criteria"].length} matching criteria`));
                            // }
                            // i=0;
                        // }else
                        // {
                        //     console.log(chalk.red('PTP not found'));
                        // }

                        break;
                    // case "Event_Location_Information":
                    //     console.log("Event_Location_Information ---->", row["Event_Location_Information"]);                    
                    //     break;
                    // case "Verification":
                    //     console.log("Verification ---->", row["Verification"]);                    
                    //     break;
                    
                }//SWITCH
     
        
        }//for
                }//DESTINY
        participants.push(participant);
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

        


    });



