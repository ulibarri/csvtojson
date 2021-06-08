
let info= require('./participants');

const chalk = require('chalk');




const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');
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
let currentPtpAddress="";
let ptpArray=[];
fs.createReadStream('out.csv')
    .pipe(csv())
    .on('data', (row) => {
        let str = row["Verification"];
        if ((str.includes('DESTINY'))) {
            console.log("Fila procesada ----------", str);
            // csv_row
        } else {
        // csv_row["Verification"] = '';
        for (let key in row) {
          
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
                    case "Event_Reason":
                        console.log(`PTPID --->${currentPtpID}   Event_Reason ---->, ${row["Event_Reason"]}`);
                        currentPtpAddress=row["Event_Reason"];
                        let ptp = info.find(el => el.participantID === currentPtpID);

                        let i=0;
                        if (ptp){
                            console.log(ptp["criteria"]);
                            let address=currentPtpAddress ;
                            ptp["criteria"].forEach(element => {
                                if (address.includes(element)){
                                    i++;
                                }
                                else{
                                    console.log(`criteria ${element} not found`);
                                }
    
                            });
                            if (i ==ptp["criteria"].length){
                                console.log(chalk.blue(`-------------------------------->${i} out of ${ptp["criteria"].length} matching criteria, address = ${ptp["address"]}`));
                                
                                participant.Event_Reason=ptp["address"];
                            }else{
                                console.log(chalk.yellow(`Only ${i} out of ${ptp["criteria"].length} matching criteria`));
                            }
                            i=0;
                        }else
                        {
                            console.log(chalk.red('PTP not found'));
                        }

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
        // console.log("participants : ", participants);

        // JSON.stringify(participants, null, 2);
        // let i=0;
        // participants.forEach((ptp)=>{
        //         if ((i>300) && (i<=500)){
        //             console.log(ptp,",")
        //         }
        //        i++;
        //     });
        
        


    });



