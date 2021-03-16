
// const csv = require('csv-parser');
// const fs = require('fs');
// var _ = require("underscore");
// let csv_rows = [];
// let csv_row = {};
// fs.createReadStream('data.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//         console.log(row);
//         for (let key in row) {
//             switch (key) {
//                 case "Participant":
//                     let str = row["Participant"];
//                     let n = str.indexOf('(');
//                     if (n > 0) {
//                         let substring = str.substr(n + 1, 9);
//                         // console.log(`Participant --->${str}-->${n}`);
//                         console.log(`PACE code ------->${substring}`)
//                         csv_row["PACE"] = substring;
//                     }
//                     else {
//                         console.log(`Participant :, --------------------->${str}`);
//                     }
//                     break;
//                 case "Resource_Name":
//                     let s = row["Resource_Name"];
//                     let r = /\d+/;
//                     let matches = s.match(r);
//                     console.log(matches);
//                     if (matches) {
//                         let resource = s.substr(0, matches.index);
//                         console.log(`Resource_Name:--->${resource}`);
//                         csv_row["resource"] = resource;
//                     } else {
//                         console.log(`Resource_Name:, --------------------->none or number not found ${s}`);
//                     }

//                     break;
//                 case "Address":
//                     let adddress = row["Address"].toString();

//                     let regexp = /\d+/;
//                     let na = adddress.indexOf('CA');

//                     if (na > 0) {
//                         let Zipcode = adddress.substr(na + 3, adddress.lenght);
//                         let x = adddress.match(/Bonita|San Diego|National City|Chula Vista|Spring Valley|Imperial Beach|El Cajon|San Ysidro/);
//                         csv_row["zipcode"] = Zipcode;
//                         console.log(`Address info break down -------------------------------------------------->`);


//                         for (var propName in x) {
//                             if (x.hasOwnProperty(propName)) {
//                                 // console.log("+++   propName ++++", propName)
//                                 if (propName != 'input' && propName != 'index' && propName != 'groups') {
//                                     let county = x[propName];   // or do something with it and break
//                                     console.log("+++++++", county)
//                                     if (!county) {
//                                         // county = county.toString();
//                                         // console.log(`COUNTY/city -------=++++++++++--------->${county.lenght} -- ${propName}`);
//                                     } else {
//                                         county = county.toString();
//                                         console.log(`COUNTY/city -------=++++++++++--------->${county.lenght} -- ${propName}  -- ${county} -- ${typeof (county)}`);
//                                     }

//                                 }




//                             }
//                         }
//                         // if (x) {

//                         // }// let number = adddress.match(regexp);
//                         let firstblank = adddress.indexOf(' ');
//                         let number = adddress.substr(0, adddress.indexOf(' ')); // "72"
//                         let comma = adddress.indexOf(',');
//                         let street = adddress.substr(firstblank, (comma - firstblank)); // "tocirah sneab"
//                         street = street.replace(/\s+/g, " ");
//                         console.log(`number------> ${number}`);
//                         console.log(`street------> ${street}`);

//                         //Zipcode = adddress.substr(na + 3, adddress.lenght);
//                         // zip = JSON.stringify(zip, null, 0);
//                         // console.log(`typeofZipcode ------>${typeof (Zipcode)}`);
//                         // console.log(`Zipcodelength ------>${zip.lenght}`);
//                         // console.log(`Zipcode ------>${zip.valueOf[0]}`)
//                         // console.log(`Zipcodez------> ${JSON.stringify(zip, null, 4)}`);
//                         if (Zipcode) {
//                             console.log(`Zipcode------> ${Zipcode}`)
//                         }
//                         else {
//                             console.log(`Zipcode------> none or not found`)
//                         }


//                         if (na > 0) {
//                             let state = adddress.substr(na, 2);
//                             console.log(`State------> ${state}`);
//                             // if (zipcodematch) {
//                             //     let zipcode = adddress.substr(zipcodematch.index, 5);
//                             //     console.log(`Zipcode  :, ${ zipcode }-- > ${ zipcodematch.index }`);
//                             // }
//                             // else {
//                             //     console.log(`Zipcode  :, ---------------------> none or not found`);
//                             // }
//                         }
//                         else {
//                             console.log(`State :, ---------------------> none or not CA`);
//                         }
//                     } else {
//                         console.log(`NO info ---------------------------------------------------------------------NO info`);
//                         console.log(`State :, ---------------------> none or not CA`);
//                         console.log(`Zipcode------> none or not found`);
//                         console.log(`number------> none or not found`);
//                         console.log(`street------> none or not found`);
//                     }
//                     break;
//                 // default:
//                 //     console.log("no match");
//             }


//             // csv_rows.push(csv_row);
//         }


//         console.log("********", csv_rows);
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed');
//     });


// // const express = require('express');
// // const app = express();

// // app.get('/', (req, res) => res.send('Hello World!'));

// // app.listen(3000, () => console.log('Example app listening on port 3000!'));

// // const express = require('express')
// // const app = express()

// // app.get('/', function (req, res) {
// //   res.send('Hello World')
// // })

// // app.listen(3000, () => console.log('Example app listening on port 3000!'))


const addresser = require("addresser");
const moment = require('moment');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs2 = require('fs');
let csv_rows = [];
let csv_row = {};
let rows = 1;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();



today = mm + '/' + dd + '/' + yyyy;
// console.log(today);


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
// csv_row["address"] = "Address";
// csv_row["verification"] = "verification"
// csv_rows.push(csv_row);
// csv_row = {};

// fs.createReadStream('data4.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//         // console.log(row);

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
//                         try {
//                             let aux = `${today} ${row["End_Time"]}`;
//                             hora = new Date(aux);
//                             // console.log("aux        ---------------------------> ", aux);
//                             // console.log("hora (DATE)---------------------------> ", hora);
//                             let then = moment(hora, 'MM-DD-YYYY hh:mm A').subtract(30, "minutes").toDate();
//                             // let thenCad = then.toString();

//                             // console.log("thencad --->", thenCad);
//                             // let hourIndex = thenCad.indexOf('T');
//                             // let hour = thenCad.substring(hourIndex, 5);

//                             // console.log("End_Time valor menos 30 min ---->", then);
//                             let tiempo = moment(then).format('hh:mm A');
//                             // console.log("Tiempo ------------------------->", tiempo);
//                             csv_row["Start_Time"] = tiempo;
//                         } catch (error) {
//                             console.log("************** Error calculating Start_Date value", error);
//                         }


//                         break;
//                     case "End_Time":
//                         csv_row["End_Time"] = row["End_Time"];
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
//                                 console.log('*************************Event_Location_Information***********************', error)
//                                 csv_row["Event_Location_Information"] = (myLocation).toUpperCase();
//                                 csv_row["verification"] = csv_row["verification"] + " event_location, ";

//                             }


//                         } else {

//                             // console.log("myLocation --------->", myLocation);
//                             console.log('Event_Location_Information ------------------------------>NO event_location detected');
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
//                             console.log(`Client code:, --------------------->client code not found`);
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
//                             console.log('Address ------------------------------>NO address detected');
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
//                                 console.log('************************************************', error)
//                             }

//                         }
//                         break;
//                     // case "Event_Reason":
//                     //     let reason = row["Event_Reason"].toString();
//                     //     if ((reason.includes('DIALYSIS GOING HOME'))) {
//                     //         console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>${csv_row["Participant"]} @DIALYSIS GOING HOME`)
//                     //         let aux = csv_row["Event_Location_Information"];

//                     //         csv_row["Event_Location_Information"] = 1111111
//                     //         // csv_row["address"];
//                     //         csv_row["address"] = 2222222
//                     //         // aux;
//                     //     }

//                     //     break;
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
//                 { id: 'End_Time', title: 'Appointment_Time' },
//                 { id: 'Participant', title: 'Participant' },
//                 { id: 'Client_Code', title: 'Client_Code' },
//                 { id: 'DOB', title: 'DOB' },
//                 { id: 'Sex', title: 'Sex' },
//                 { id: 'address', title: 'address' },
//                 { id: 'Phone', title: 'Phone' },
//                 { id: 'Resource_Name', title: 'Resource_Name' },
//                 { id: 'Event_Location_Information', title: 'Event_Location_Information' },
//                 { id: 'verification', title: 'verification' }

//             ]
//         });



//         csvWriter
//             .writeRecords(csv_rows)
//             .then(() => console.log('The CSV file was written successfully'));
//     });





csv_rows = [];
csv_row = {};
rows = 1;

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();



// today = mm + '/' + dd + '/' + yyyy;
// // console.log(today);

//=======================================================================================
csv_row["Event_Date"] = "Event Date";
csv_row["Start_Time"] = "Start Time";
csv_row["Appointment Time"] = "Appointment Time";
csv_row["DOB"] = "DOB";
csv_row["Sex"] = "Sex";
csv_row["Phone"] = "Phone";
csv_row["Event_Location_Information"] = "Event Location Information";
csv_row["Client_Code"] = "Client Code";
csv_row["Participant"] = "Participant";
csv_row["Resource_Name"] = "Resource Name";
csv_row["address"] = "Address";
csv_row["verification"] = "verification"
csv_rows.push(csv_row);
csv_row = {};

fs2.createReadStream('out.csv')
    .pipe(csv())
    .on('data', (row) => {
        for (let key in row) {

            switch (key) {
                case "Event_Date":
                    csv_row["Event_Date"] = row["Event_Date"];
                    break;
                case "Start_Time":
                    csv_row["Start_Time"] = row["Start_Time"];
                    break;
                case "Appointment Time":
                    csv_row["Appointment Time"] = row["Appointment Time"];
                    break;
                case "DOB":
                    csv_row["DOB"] = row["DOB"];
                    break;
                case "Sex":
                    csv_row["Sex"] = row["Sex"];
                    break;
                case "Phone":
                    csv_row["Phone"] = row["Phone"];
                    break;
                case "Event_Location_Information":
                    csv_row["Event_Location_Information"] = row["Event_Location_Information"];
                    break;
                case "Participant":
                    csv_row["Participant"] = row["Participant"];
                    break;
                case "Client_Code":
                    csv_row["Client_Code"] = row["Client_Code"];
                    break;
                case "Resource_Name":
                    csv_row["Resource_Name"] = row["Resource_Name"];
                    break;
                case "Address":

                    csv_row["address"] = row["Address"];

                    break;
                case "Event_Reason":
                    let reason = row["Event_Reason"].toString();
                    if ((reason.includes('GOING HOME'))) {
                        console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>${csv_row["Participant"]} @DIALYSIS GOING HOME`)
                        let aux = csv_row["Event_Location_Information"];

                        csv_row["Event_Location_Information"] = 11111111111
                        // csv_row["address"];
                        csv_row["address"] = 222222222222
                        // aux;
                    }

                    break;
                case "verification":
                    csv_row["verification"] = row["verification"];
                    break;
            }

        }
        // console.log("condit------------>", csv_row.Participant == undefined);
        if (csv_row.Participant == undefined) {
            csv_row = {};
            // console.log("condit");
        }
        else {
            if (csv_row.Participant.lenght > 0) {

            } else {

                csv_rows.push(csv_row);
                rows++;
                message = "";
                // console.log(`Row :  ${rows} condicion ------->${csv_row.Participant == undefined} ------->${csv_row.Participant}`);
                console.log(`Row :  ${rows}`);

            }
        }
        csv_row = {};

    })
    .on('end', () => {
        console.log("Total Rows : ", rows);
        console.log('CSV file successfully processed');
        // console.log("**********************************************************", csv_rows);
        const csvWriter2 = createCsvWriter({
            path: 'out2.csv',
            header: [
                { id: 'Event_Date', title: 'Event_Date' },
                { id: 'Start_Time', title: 'Start_Time' },
                { id: 'Appointment Time', title: 'Appointment_Time' },
                { id: 'Participant', title: 'Participant' },
                { id: 'Client_Code', title: 'Client_Code' },
                { id: 'DOB', title: 'DOB' },
                { id: 'Sex', title: 'Sex' },
                { id: 'address', title: 'address' },
                { id: 'Phone', title: 'Phone' },
                { id: 'Resource_Name', title: 'Resource_Name' },
                { id: 'Event_Location_Information', title: 'Event_Location_Information' },
                { id: 'verification', title: 'verification' }

            ]
        });



        csvWriter2
            .writeRecords(csv_rows)
            .then(() => console.log('The CSV file was written successfully'));
    });


