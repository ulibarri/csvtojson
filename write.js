// // const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// // const csvWriter = createCsvWriter({
// //     path: 'out.csv',
// //     header: [
// //         { id: 'name', title: 'Name' },
// //         { id: 'surname', title: 'Surname' },
// //         { id: 'age', title: 'Age' },
// //         { id: 'gender', title: 'Gender' },
// //     ]
// // });

// // const data = [
// //     {
// //         name: 'John',
// //         surname: 'Snow',
// //         age: 26,
// //         gender: 'M'
// //     }, {
// //         name: 'Clair',
// //         surname: 'White',
// //         age: 33,
// //         gender: 'F',
// //     }, {
// //         name: 'Fancy',
// //         surname: 'Brown',
// //         age: 78,
// //         gender: 'F'
// //     }
// // ];

// // csvWriter
// //     .writeRecords(data)
// //     .then(() => console.log('The CSV file was written successfully'));



// const addresser = require("addresser");
// const moment = require('moment');
// var S = require('string');

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csv = require('csv-parser');
// const fs = require('fs');
// let csv_rows = [];
// let csv_row = {};
// let rows = 1;

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();



// today = mm + '/' + dd + '/' + yyyy;
// // console.log(today);

// //encabezados del csv
// csv_row["Event_Date"] = "Event Date";
// csv_row["Start_Time"] = "Start Time";
// csv_row["End_Time"] = "Appointment Time";
// csv_row["DOB"] = "DOB";
// csv_row["Sex"] = "Sex";
// csv_row["Phone"] = "Phone";
// csv_row["Event_Location_Information"] = "Event Location Information";
// csv_row["Client_Code"] = "Client Code";
// csv_row["Participant"] = "Participant";
// csv_row["Resource_Name"] = "Resource Name";
// csv_row["Event_reason"] = "Event reason";
// csv_row["temp"] = "temp";
// csv_row["address"] = "Address";
// csv_row["verification"] = "verification"
// csv_rows.push(csv_row);
// csv_row = {};

// fs.createReadStream('data4.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//         csv_row["verification"] = '';
//         for (let key in row) {
//             let str = row["Participant"];
//             if ((str.includes('Non-Participant Event')) || (str.includes('TEST'))) {
//                 // console.log("NO SE debe procesar esta fila ----------");
//                 // csv_row
//             } else {
//                 switch (key) {
//                     case "Event_Date":
//                         csv_row["Event_Date"] = row["Event_Date"];
//                         break;
//                     case "Start_Time":
//                         // console.log("Start_Time valor original ---->", row["Start_Time"]);
//                         // const nowCopy = new Date(row["Start_Time"]);
//                         // console.log("Start_Time valor tipo DATE ---->", nowCopy);
//                         csv_row["Appointment_Time"] = row["Start_Time"];
//                         // try {
//                         //     let aux = `${today} ${row["Start_Time"]}`;
//                         //     hora = new Date(aux);
//                         //     console.log("start time       ---------------------------> ", aux);
//                         //     // console.log("hora (DATE)---------------------------> ", hora);
//                         //     let then = moment(hora, 'MM-DD-YYYY hh:mm A').subtract(30, "minutes").toDate();

//                         //     let tiempo = moment(then).format('hh:mm A');
//                         //     console.log("start time -30 ------------------------->", tiempo);
//                         //     csv_row["Start_Time"] = tiempo;
//                         // } catch (error) {
//                         //     console.log("************** Error calculating Start_Date value", error);
//                         //     csv_row["verification"] = csv_row["verification"] + " Start_Time, ";
//                         // }
//                         break;
//                     case "DOB":
//                         csv_row["DOB"] = row["DOB"];
//                         break;
//                     case "Sex":
//                         csv_row["Sex"] = row["Sex"];
//                         break;
//                     case "Phone":
//                         csv_row["Phone"] = row["Phone"];
//                         break;
//                     case "Event_Location_Information":
//                         let event_location = row["Event_Location_Information"];

//                         let flag = 0;
//                         let myLocation = "";
//                         let myFinalLocation = "";
//                         myFirstDigit = event_location.match(/\d/); // will give you the first digit in the string
//                         myIndex = event_location.indexOf(myFirstDigit);
//                         if (myIndex > 0) {
//                             console.log(`aaaaaa=----> ${event_location.lenght}`)
//                             myLocation = event_location.substr(myIndex, event_location.lenght);
//                             // first part has bee removed, now the phone number
//                             flag = 1;
//                             // myZipcode = myLocation.match(/[A-Z][A-Z]\s\d{5}/); // will give you the first digit in the string
//                             myZipcode = myLocation.match(/[A-Z][A-Z]\s([0-9]{5})/);
//                             myZipIndex = myLocation.indexOf(myZipcode);

//                             myFinalLocation = myLocation.substr(0, myIndex + 8);
//                             // console.log("myFinalLocation --------->", myFinalLocation);
//                             try {
//                                 let finalBreakdown = addresser.parseAddress(myFinalLocation);
//                                 // console.log(finalBreakdown);
//                                 if (!finalBreakdown.addressLine2) {
//                                     csv_row["Event_Location_Information"] = (`${finalBreakdown.addressLine1},${finalBreakdown.placeName},${finalBreakdown.stateAbbreviation} ${finalBreakdown.zipCode}`).toUpperCase();

//                                 }
//                                 else {
//                                     csv_row["Event_Location_Information"] = (`${finalBreakdown.addressLine1},${finalBreakdown.addressLine2},${finalBreakdown.placeName},${finalBreakdown.stateAbbreviation} ${finalBreakdown.zipCode}`).toUpperCase();

//                                 }

//                             } catch (error) {
//                                 console.log('Event_Location_Information***************', error)
//                                 csv_row["Event_Location_Information"] = (myLocation).toUpperCase();
//                                 csv_row["verification"] = csv_row["verification"] + " event_location, ";

//                             }


//                         } else {

//                             // console.log("myLocation --------->", myLocation);
//                             console.log('Event_Location_Information -------------------->NO event_location detected');
//                             // console.log("Verificacion antes = ", csv_row["verification"]);
//                             if (flag == 1) {
//                                 csv_row["Event_Location_Information"] = myLocation.toUpperCase();
//                             }
//                             else {
//                                 csv_row["Event_Location_Information"] = event_location.toUpperCase();
//                             }

//                             csv_row["verification"] = csv_row["verification"] + " event_location, ";
//                             // console.log("Verificacion despues= ", csv_row["verification"]);

//                         }


//                         break;
//                     case "Participant":
//                         let str = row["Participant"];
//                         // if (str.includes('Non-Participant Event')) {
//                         //     console.log("NO SE debe procesar esta fila ----------");

//                         // }
//                         let n = str.indexOf('(');
//                         if (n > 0) {
//                             let substring = str.substr(n + 1, 9);
//                             csv_row["Client_Code"] = substring;
//                             csv_row["Participant"] = str.substr(0, n - 1);
//                         }
//                         else {
//                             // console.log(`Participant :, --------------------->${str}`);
//                             console.log(`Client code:, ------------------>client code not found`);
//                             // console.log("Verificacion antes = ", csv_row["verification"]);
//                             csv_row["verification"] = csv_row["verification"] + " client code/participant's name ";
//                             // console.log("Verificacion despues= ", csv_row["verification"]);
//                         }
//                         break;
//                     case "Resource_Name":
//                         let s = row["Resource_Name"];
//                         // console.log("Resource_Name longitud --------->", s.toString().lenght);
//                         let r = /\d+/;
//                         let matches = s.match(r);
//                         // console.log(matches);
//                         if (matches) {
//                             let resource = s.substr(0, matches.index);
//                             // console.log(`Resource_Name:--->${resource}`);
//                             csv_row["Resource_Name"] = resource;
//                         } else {
//                             // console.log(`Resource_Name:, -------------------->resource name not found ${s}`);
//                             // console.log("Verificacion antes = ", csv_row["verification"]);
//                             csv_row["Resource_Name"] = row["Resource_Name"];
//                             csv_row["verification"] = csv_row["verification"] + " resource name ";
//                             // console.log("Verificacion despues= ", csv_row["verification"]);

//                         }

//                         break;
//                     case "Address":

//                         let adddress = row["Address"].toString();
//                         // console.log(`Original value ------> ${adddress}`);
//                         // console.log(adddress.toString().lenght)

//                         // try {
//                         //     csv_row["address"] = `${breakdown.addressLine1},${breakdown.addressLine2},${breakdown.placeName},${breakdown.stateAbbreviation},${breakdown.zipCode}`;
//                         //     console.log("----------", csv_row["address"]);
//                         // } catch (error) {

//                         // }
//                         if (!adddress) {
//                             console.log('Address ------------------->NO address detected');
//                             // console.log("Verificacion antes = ", csv_row["verification"]);
//                             csv_row["address"] = 'no address detected';
//                             csv_row["verification"] = csv_row["verification"] + " address, ";
//                             // console.log("Verificacion despues= ", csv_row["verification"]);


//                         }
//                         else {
//                             try {
//                                 let breakdown = addresser.parseAddress(adddress);
//                                 // console.log(breakdown);
//                                 if (!breakdown.addressLine2) {
//                                     csv_row["address"] = (`${breakdown.addressLine1},${breakdown.placeName},${breakdown.stateAbbreviation} ${breakdown.zipCode}`).toUpperCase();

//                                 }
//                                 else {
//                                     csv_row["address"] = (`${breakdown.addressLine1},${breakdown.addressLine2},${breakdown.placeName},${breakdown.stateAbbreviation} ${breakdown.zipCode}`).toUpperCase();

//                                 }

//                             } catch (error) {
//                                 console.log('****************', error)
//                             }

//                         }
//                         break;
//                     case "Event_Reason":
//                         // var reason = new String("aaaaaaaa");
//                         // console.log(`reason=======================${reason}`);
//                         // console.log(`typeOf ======================${typeof (reason)}`);
//                         // console.log(`aaaaaaaa.toString().lenght===${reason.toString().lenght}`);
//                         // console.log(`aaaaaaaa.Slenght=============${S(reason).lenght}`);
//                         // console.log(`aaaa.lenght==================${reason.lenght}`);

//                         reason = row["Event_Reason"];
//                         // let newReason = `ttt ${reason}`;
//                         let newReason = row["Event_Reason"].toString().toUpperCase();
//                         newReason = `ttt ${reason}`;
//                         // newReason = newReason + reason.toString();\
//                         console.log(`typeOf newReason==============${typeof (newReason)}`);
//                         console.log(`newReason=====================${newReason}`);
//                         console.log(`newReason.toString().lenght===${newReason.toString().lenght}`);
//                         console.log(`newReason.lenght==============${newReason.lenght}`);
//                         console.log(`S(newReason).include('home')==${S(newReason).includes('home')}`);
//                         // reason = String(reason);
//                         if ((reason.includes('GOING HOME'))) {
//                             console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>${csv_row["Participant"]}  GOING HOME`)
//                             // let aux = csv_row["Event_Location_Information"];
//                             csv_row["verification"] = csv_row["verification"] + " GOING HOME ";
//                             csv_row["Event_Reason"] = row["Event_Reason"];
//                             let index_going = reason.indexOf('GOING HOME');
//                             let decimal = /\d+/;
//                             let match_d = reason.match(decimal);

//                             console.log(`index_going${index_going}`);
//                             console.log(((match_d) && (index_going > 0)));
//                             if ((match_d) && (index_going > 0)) {
//                                 console.log(`match_d =${match_d.index}`);
//                                 console.log(`Len =${reason.lenght}`);
//                                 console.log(`typeOf =${typeof (reason)}`);

//                                 console.log(` Len-Index =${reason.lenght}-${match_d.index}`);

//                                 // let destiny_address = reason.substr(match_d.index, (reason.lenght - index_going));
//                                 let destiny_address = reason.substr(match_d.index, (reason.lenght - match_d.index));

//                                 csv_row["temp"] = destiny_address;
//                                 console.log(`destiny_address ${reason}`)
//                             }

//                             // // csv_row["address"];
//                             // csv_row["address"] = 2222222
//                             // aux;
//                             //console.log(csv_row["verification"]);
//                         }

//                         break;
//                 }
//             }
//         }
//         // console.log("condit------------>", csv_row.Participant == undefined);
//         if (csv_row.Participant == undefined) {
//             csv_row = {};
//             // console.log("condit");
//         }
//         else {
//             if (csv_row.Participant.lenght > 0) {

//             } else {
//                 // if (message.lenght > 0) {
//                 //     csv_row["verification"] = 'Verify one of the following: ';
//                 //     console.log(message);
//                 // }
//                 // else {
//                 //     csv_row["verification"] = '';
//                 // }


//                 csv_rows.push(csv_row);
//                 rows++;
//                 message = "";
//                 // console.log(`Row :  ${rows} condicion ------->${csv_row.Participant == undefined} ------->${csv_row.Participant}`);
//                 console.log(`Row :  ${rows}`);

//             }
//         }
//         // csv_rows.push(csv_row);
//         csv_row = {};

//     })
//     .on('end', () => {
//         console.log("Total Rows : ", rows);
//         console.log('CSV file successfully processed');
//         // console.log("**********************************************************", csv_rows);
//         const csvWriter = createCsvWriter({
//             path: 'out.csv',
//             header: [
//                 { id: 'Event_Date', title: 'Event_Date' },
//                 { id: 'Start_Time', title: 'Start_Time' },
//                 { id: 'Appointment_Time', title: 'Appointment_Time' },
//                 { id: 'Participant', title: 'Participant' },
//                 { id: 'Client_Code', title: 'Client_Code' },
//                 { id: 'DOB', title: 'DOB' },
//                 { id: 'Sex', title: 'Sex' },
//                 { id: 'address', title: 'address' },
//                 { id: 'Phone', title: 'Phone' },
//                 { id: 'Resource_Name', title: 'Resource_Name' },
//                 { id: 'Event_Reason', title: 'Event_Reason' },
//                 { id: 'temp', title: 'temp' },
//                 { id: 'Event_Location_Information', title: 'Event_Location_Information' },
//                 { id: 'verification', title: 'verification' }

//             ]
//         });



//         csvWriter
//             .writeRecords(csv_rows)
//             .then(() => console.log('The CSV file was written successfully'));
//     });



