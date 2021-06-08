

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
    criteria:['22','22','22','22'],
    category: null,
    wc: false,
    blind: false,
    deaf: false,
    phone: '',
    mobilePhone:'',
    gender: '',
    DOB: '',
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
    // {   
    //     name: "",
    //     participantID: "",
    //     address: [],
    //     category: null,
    //     wc: false,
    //     blind: false,
    //     deaf: false,
    //     phone:"",
    //     gender: "",
    //     criteria: ["11","22","33"]
    // };


let ptpArray=[];
fs.createReadStream('out.csv')
    .pipe(csv())
    .on('data', (row) => {
        // csv_row["Verification"] = '';
        for (let key in row) {
            // let str = row["Participant"];
            // if ((str.includes('DESTINY'))) {
            //     console.log("Fila procesada ----------", str);
            //     // csv_row
            // } else {
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
                    // case "Event_Reason":
                    //     console.log("Event_Reason ---->", row["Event_Reason"]);
                    //     break;
                    // case "Event_Location_Information":
                    //     console.log("Event_Location_Information ---->", row["Event_Location_Information"]);                    
                    //     break;
                    // case "Verification":
                    //     console.log("Verification ---->", row["Verification"]);                    
                    //     break;
                    
                }
            // }
        }//for

        participants.push(participant);
        csv_row = {};
        rows++;
        participant= {
            name: '',
            participantID: '',
            address: [],
            criteria:['22','22','22','22'],
            category: null,
            wc: false,
            blind: false,
            deaf: false,
            phone: '',
            mobilePhone:'',
            gender: '',
            DOB: '',
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
        //     {   
        //     name: "",
        //     participantID: "",
        //     address: [],
        //     category: null,
        //     wc: false,
        //     blind: false,
        //     deaf: false,
        //     phone:"",
        //     gender: "",
        //     criteria: ["11","22","33"]
        // };


       

    })
    .on('end', () => {
        // console.log("participants : ", participants);

        // JSON.stringify(participants, null, 2);
        let limInf=301;
        let limSup=400;
        console.log(chalk.yellow(`************* Printing participants from index ${limInf} to ${limSup}, Total = ${participants.length}`));
        let i=0;
        participants.forEach((ptp)=>{
                if ((i>=limInf) && (i<=limSup)){
                    console.log(ptp,",")
                }
               i++;
            });
            console.log("participants : ", participants.length);
        


    });





