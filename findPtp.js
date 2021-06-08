const chalk = require('chalk')
const { MongoClient } = require("mongodb");

let ptpArray=[];
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://admin:admin@beducluster.eiuzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect({useNewUrlParser: true});
    const database = client.db("CFS");
    const ptps = database.collection("participants");
    // Query for a movie that has the title 'The Room'
    const query = { };
    const options = {
      // sort matched documents in descending order by rating
      sort: { currentIndex: -1 },
      fields: { _id: 0 }
      // Include only the `title` and `imdb` fields in the returned document
      //projection: { _id: 0, criteria: 1, name: 1 },
    };
    const ptp = await ptps.find(query, options).forEach((ptp)=>{ptpArray.push(ptp)});
    // since this method returns the matched document, not a cursor, print it directly
    // if (ptp){
    //   console.log(ptp);
    // }
    //   else{
    //     run = 'not found';
    //   ""
    //
    let limInf=601;
    let limSup=750;
    console.log(chalk.yellow(`************* Printing participants from index ${limInf} to ${limSup}, Total = ${ptpArray.length}`));
       
    // console.log(`PArticipantes en el array ------->${ptpArray.length}`)
    let i=0;
    ptpArray.forEach((ptp)=>{
            if ((i>=limInf) && (i<=limSup)){
                console.log(ptp);
                console.log(',');
            }
           i++;
        });
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// module.exports=run;




// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("CFS");
//   dbo.collection("participants").find({participantID: 'SDP000547'}),(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csv = require('csv-parser');
// const fs = require('fs');
// let participants = [];
// let csv_row = {};
// let rows = 0;
// csv_row = {};
// let participant=

// {
//     name: '',
//     participantID: '',
//     address: [],
//     category: null,
//     wc: false,
//     blind: false,
//     deaf: false,
//     phone: '',
//     mobilePhone:'',
//     gender: '',
//     DOB: '',
//     critera:['22','22','22'],
//     currentIndex:0,
//     fullAddress:{
//         address:"",
//         address1:"",
//         city:"",
//         state:"",
//         zipcode:""
//     },
//     fullName:{
//         firstName: "",
//         lastName:"",
//         middleName:""
//     }
//   }
//     // {   
//     //     name: "",
//     //     participantID: "",
//     //     address: [],
//     //     category: null,
//     //     wc: false,
//     //     blind: false,
//     //     deaf: false,
//     //     phone:"",
//     //     gender: "",
//     //     criteria: ["11","22","33"]
//     // };


// let ptpArray=[];
// fs.createReadStream('out2.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//         // csv_row["Verification"] = '';
//         for (let key in row) {
//             // let str = row["Participant"];
//             // if ((str.includes('DESTINY'))) {
//             //     console.log("Fila procesada ----------", str);
//             //     // csv_row
//             // } else {
//                 switch (key) {

//                     // case "Event_Date":
//                     //     console.log("Event_Date ---->", row["Event_Date"]);
//                     //     break;
//                     // case "Start_Time":
//                     //     console.log("Start_Time ---->", row["Start_Time"]);
//                     //     break;
//                     // case "Appointment_Time":
//                     //     console.log("Appointment_Time ---->", row["Appointment_Time"]);
//                     //     break;
//                     case "Participant":
//                         // console.log("Participant ---->", row["Participant"]);
//                         participant.name=row["Participant"];
//                         break;
//                     case "Client_Code":
//                         // console.log("Client_Code ---->", row["Client_Code"]);
//                         participant.participantID=row["Client_Code"];
//                         break;
//                     case "DOB":
//                         // console.log("DOB ---->", row["DOB"]);
//                         participant.DOB=row["DOB"];
//                         break;
//                     case "Sex":
//                         // console.log("SEX ---->", row["Sex"]);
//                         participant.gender=row["Sex"];
//                         break;
//                     case "Address":
//                         // console.log("Address ---->", row["Address"]);
//                         participant.address.push( row["Address"]);
//                         break;
//                     case "Phone":
//                         // console.log("Phone ---->", row["Phone"]);
//                         participant.phone=row["Phone"]
//                         break;
//                     // case "Resource_Name":
//                     //     console.log("Resource_Name ---->", row["Resource_Name"]);
//                     //     break;
//                     // case "Event_Reason":
//                     //     console.log("Event_Reason ---->", row["Event_Reason"]);
//                     //     break;
//                     // case "Event_Location_Information":
//                     //     console.log("Event_Location_Information ---->", row["Event_Location_Information"]);                    
//                     //     break;
//                     // case "Verification":
//                     //     console.log("Verification ---->", row["Verification"]);                    
//                     //     break;
                    
//                 }
//             // }
//         }//for

//         participants.push(participant);
//         csv_row = {};
//         rows++;
//         participant= {
//             name: '',
//             participantID: '',
//             address: [],
//             category: null,
//             wc: false,
//             blind: false,
//             deaf: false,
//             phone: '',
//             mobilePhone:'',
//             gender: '',
//             DOB: '',
//             critera:['22','22','22'],
//             currentIndex:0,
//             fullAddress:{
//                 address:"",
//                 address1:"",
//                 city:"",
//                 state:"",
//                 zipcode:""
//             },
//             fullName:{
//                 firstName: "",
//                 lastName:"",
//                 middleName:""
//             }
//           }



       

//     })
//     .on('end', () => {
 
//         let i=0;
//         participants.forEach((ptp)=>{
//                 if ((i>300) && (i<=500)){
//                     console.log(ptp,",")
//                 }
//                i++;
//             });
        


//     });



