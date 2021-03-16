
const addresser = require("addresser");
const moment = require('moment');
var S = require('string');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');
let csv_rows = [];
let csv_row = {};
let rows = 0;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();



today = mm + '/' + dd + '/' + yyyy;
// console.log(today);

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
// csv_row["Event_reason"] = "Event reason";
// csv_row["Address"] = "Address";
// csv_row["Verification"] = "Verification"
// csv_rows.push(csv_row);
// console.log(csv_row);
csv_row = {};

fs.createReadStream('data4.csv')
    .pipe(csv())
    .on('data', (row) => {
        csv_row["Verification"] = '';
        for (let key in row) {
            let str = row["Participant"];
            if ((str.includes('Non-Participant Event')) || (str.includes('TEST'))) {
                console.log("NO SE puede procesar esta fila ----------", str);
                // csv_row
            } else {
                switch (key) {

                    case "Event_Date":
                        csv_row["Event_Date"] = row["Event_Date"];
                        // console.log("Event_Date ---->", row["Event_Date"]);
                        break;
                    case "Start_Time":
                        // console.log("Start_Time valor original ---->", row["Start_Time"]);
                        // const nowCopy = new Date(row["Start_Time"]);
                        // console.log("Start_Time valor tipo DATE ---->", nowCopy);
                        csv_row["Appointment_Time"] = row["Start_Time"];
                        try {
                            let aux = `${today} ${row["Start_Time"]}`;
                            hora = new Date(aux);
                            // console.log("start time       ---------------------------> ", aux);
                            // console.log("hora (DATE)---------------------------> ", hora);
                            let then = moment(hora, 'MM-DD-YYYY hh:mm A').subtract(30, "minutes").toDate();

                            let tiempo = moment(then).format('hh:mm A');
                            // console.log("start time -30 ------------------------->", tiempo);
                            csv_row["Start_Time"] = tiempo;
                        } catch (error) {
                            console.log("************** Error calculating Start_Date value", error);
                            csv_row["Verification"] = csv_row["Verification"] + " Start_Time, ";
                        }
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
                        let event_location = row["Event_Location_Information"];

                        let flag = 0;
                        let myLocation = "";
                        let myFinalLocation = "";
                        myFirstDigit = event_location.match(/\d/); // will give you the first digit in the string
                        myIndex = event_location.indexOf(myFirstDigit);
                        if (myIndex > 0) {
                            // console.log(`aaaaaa=----> ${event_location.length}`)
                            console.log(`Location=----> ${event_location}`)
                            myLocation = event_location.substr(myIndex, event_location.length);

                            // first part has bee removed, now the phone number
                            flag = 1;
                            // myZipcode = myLocation.match(/[A-Z][A-Z]\s\d{5}/); // will give you the first digit in the string
                            myZipcode = myLocation.match(/[A-Z][A-Z]\s([0-9]{5})/); //buscamos la abreviatura del estado, un espacio y cinco numeros
                            let myPhone = myLocation.match(/^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/);
                            //        Eastlake Sleep Center 841 Kuhn Drive  Suite 201Chula Vista, CA 91914 619-623-3816
                            //        841 Kuhn Drive  Suite 201Chula Vista, CA 91914 619-623-3816
                            //     //           1         2         3         4         5         6         7         8         9         100       10        20    
                            //     // 012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890

                            if (myPhone) {
                                console.log(`myPhone=----> ${myPhone[0]}`);
                                myZipIndex = myLocation.indexOf(myPhone[0]);
                                console.log(`MyLocation=----> ${myLocation}`);
                                console.log(`myZipIndex=----> ${myZipIndex}`);

                                if (myZipIndex > 0) {
                                    console.log(`found a phone number------>`);
                                    console.log(`event location sin Phone=----> ${myLocation.substr(0, (myLocation.length - 13))}`);
                                }

                            }



                            myFinalLocation = myLocation.substr(0, myIndex + 8);
                            // console.log("myFinalLocation --------->", myFinalLocation);

                            try {
                                //parseamos ladireccion para dejarla sin informacion basura
                                let finalBreakdown = addresser.parseAddress(myFinalLocation);
                                // console.log(finalBreakdown);
                                if (!finalBreakdown.addressLine2) {
                                    csv_row["Event_Location_Information"] = (`${finalBreakdown.addressLine1},${finalBreakdown.placeName},${finalBreakdown.stateAbbreviation} ${finalBreakdown.zipCode}`).toUpperCase();

                                }
                                else {
                                    csv_row["Event_Location_Information"] = (`${finalBreakdown.addressLine1},${finalBreakdown.addressLine2},${finalBreakdown.placeName},${finalBreakdown.stateAbbreviation} ${finalBreakdown.zipCode}`).toUpperCase();

                                }

                            } catch (error) {
                                console.log('Event_Location_Information***************', error);
                                console.log('Event_Location', myFinalLocation);
                                csv_row["Event_Location_Information"] = (myLocation).toUpperCase();
                                csv_row["Verification"] = csv_row["Verification"] + " event_location, ";

                            }


                        } else {

                            // console.log("myLocation --------->", myLocation);
                            console.log('Event_Location_Information -------------------->NO event_location detected');
                            // console.log("Verificacion antes = ", csv_row["Verification"]);
                            if (flag == 1) {
                                csv_row["Event_Location_Information"] = myLocation.toUpperCase();
                            }
                            else {
                                csv_row["Event_Location_Information"] = event_location.toUpperCase();
                            }

                            csv_row["Verification"] = csv_row["Verification"] + " event_location, ";
                            // console.log("Verificacion despues= ", csv_row["Verification"]);

                        }


                        break;
                    case "Participant":
                        let str = row["Participant"];
                        // if (str.includes('Non-Participant Event')) {
                        //     console.log("NO SE debe procesar esta fila ----------");

                        // }
                        let n = str.indexOf('(');
                        if (n > 0) {
                            let substring = str.substr(n + 1, 9);
                            csv_row["Client_Code"] = substring;
                            csv_row["Participant"] = str.substr(0, n - 1);
                        }
                        else {
                            // console.log(`Participant :, --------------------->${str}`);
                            console.log(`Client code:, ------------------>client code not found`);
                            // console.log("Verificacion antes = ", csv_row["Verification"]);
                            csv_row["Verification"] = csv_row["Verification"] + " client code/participant's name ";
                            // console.log("Verificacion despues= ", csv_row["Verification"]);
                        }
                        break;
                    case "Resource_Name":
                        let s = row["Resource_Name"];
                        // console.log("Resource_Name longitud --------->", s.toString().length);
                        let r = /\d+/;
                        let matches = s.match(r);
                        // console.log(matches);
                        if (matches) {
                            let resource = s.substr(0, matches.index);
                            // console.log(`Resource_Name:--->${resource}`);
                            csv_row["Resource_Name"] = resource;
                        } else {
                            // console.log(`Resource_Name:, -------------------->resource name not found ${s}`);
                            // console.log("Verificacion antes = ", csv_row["Verification"]);
                            csv_row["Resource_Name"] = row["Resource_Name"];
                            csv_row["Verification"] = csv_row["Verification"] + " resource name ";
                            // console.log("Verificacion despues= ", csv_row["Verification"]);

                        }

                        break;
                    case "Address":

                        let adddress = row["Address"].toString();
                        // console.log(`Original value ------> ${adddress}`);
                        // console.log(adddress.toString().length)

                        // try {
                        //     csv_row["Address"] = `${breakdown.addressLine1},${breakdown.addressLine2},${breakdown.placeName},${breakdown.stateAbbreviation},${breakdown.zipCode}`;
                        //     console.log("----------", csv_row["Address"]);
                        // } catch (error) {

                        // }
                        if (!adddress) {
                            console.log('Address ------------------->NO address detected');
                            // console.log("Verificacion antes = ", csv_row["Verification"]);
                            csv_row["Address"] = 'no address detected';
                            csv_row["Verification"] = csv_row["Verification"] + " address, ";
                            // console.log("Verificacion despues= ", csv_row["Verification"]);
                        }
                        else {
                            try {
                                let breakdown = addresser.parseAddress(adddress);
                                // console.log(breakdown);
                                if (!breakdown.addressLine2) {
                                    csv_row["Address"] = (`${breakdown.addressLine1},${breakdown.placeName},${breakdown.stateAbbreviation} ${breakdown.zipCode}`).toUpperCase();

                                }
                                else {
                                    csv_row["Address"] = (`${breakdown.addressLine1},${breakdown.addressLine2},${breakdown.placeName},${breakdown.stateAbbreviation} ${breakdown.zipCode}`).toUpperCase();

                                }

                            } catch (error) {
                                console.log('****************', error)
                            }

                        }
                        break;
                    case "Event_Reason":
                        // let flipped = false;
                        csv_row["Event_Reason"] = row["Event_Reason"].toString().toUpperCase();

                }
            }
        }//for
        // console.log("condit------------>", csv_row.Participant == undefined);
        if (csv_row.Participant == undefined) {
            csv_row = {};
            // console.log("condit");
        }
        else {
            if (csv_row.Participant.length > 0) {
                // console.log("condit");
                //} else {
                // if (message.length > 0) {
                //     csv_row["Verification"] = 'Verify one of the following: ';
                //     console.log(message);
                // }
                // else {
                //     csv_row["Verification"] = '';
                // }
                let number = csv_row["Client_Code"].toString();
                // console.log("---->number", number);
                // if (number == 'SDP358605') {
                //     console.log(csv_row);
                // }

                csv_rows.push(csv_row);
                rows++;
                message = "";
                // console.log(`Row :  ${rows} condicion ------->${csv_row.Participant == undefined} ------->${csv_row.Participant}`);
                console.log(`Row :  ${rows}`);

            }
        }
        // csv_rows.push(csv_row);
        csv_row = {};

    })
    .on('end', () => {
        console.log("Total Rows : ", rows);
        console.log('CSV file successfully processed');
        // console.log("**********************************************************", csv_rows);
        const csvWriter = createCsvWriter({
            path: 'out.csv',
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
                { id: 'Verification', title: 'Verification' }

            ]
        });



        csvWriter
            .writeRecords(csv_rows)
            .then(() => console.log('The CSV file was written successfully'));
    });



