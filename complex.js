
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



// var t = "841 Kuhn Drive Suite 201 Chula Vista CA 91914"
// var k = t.match(/CA\s([0-9]{5})/);
// console.log(k);
// return;
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

fs.createReadStream('Wed_3_16_CSV.csv')
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
                        console.log(`event_location=----> ${event_location}`)
                        //first remove phone number
                        let myPhone = event_location.match(/([0-9]{3})\-([0-9]{3})\-([0-9]{4})/);
                        // console.log(`myPhone=----> ${myPhone}`);
                        if (myPhone) {
                            // console.log(`myPhone=----> ${myPhone[0]}`);
                            let myPhoneIndex = event_location.indexOf(myPhone[0]);
                            // console.log(`MyLocation=----> ${event_location}`);
                            // console.log(`myZipIndex=----> ${myPhoneIndex}`);
                            if (myPhoneIndex > 0) {
                                console.log(`found a phone number------>`);
                                // console.log(`event location sin Phone=----> ${event_location.substr(0, (event_location.length - 13))}`);
                                // event_location = event_location.substr(0, (event_location.length - 13));
                                let cadAux = event_location.substr(0, myPhoneIndex - 1);
                                let cadAux2 = event_location.substr(myPhoneIndex + 14, event_location.length);
                                // console.log(`cadAux=----> ${cadAux}`);
                                // console.log(`cadAux2=----> ${cadAux2}`);
                                if (cadAux2) {
                                    event_location = `${cadAux} ${cadAux2}`;
                                }
                                else {
                                    event_location = cadAux;
                                }
                                // event_location = event_location.substr(myPhoneIndex, (event_location.length - 13));
                                console.log(`event location sin Phone=----> ${event_location}`);
                            } else {
                                console.log(`phone number not found------>`);
                            }
                        } else {
                            //looking for a different phone format
                            myPhone = event_location.match(/([0-9]{10})/);
                            if (myPhone) {
                                // console.log(`myPhone=----> ${myPhone[0]}`);
                                let myPhoneIndex = event_location.indexOf(myPhone[0]);
                                if (myPhoneIndex > 0) {
                                    console.log(`found a phone number------>`);
                                    // console.log(`event location sin Phone=----> ${event_location.substr(0, (event_location.length - 13))}`);
                                    // event_location = event_location.substr(0, (event_location.length - 13));
                                    let cadAux = event_location.substr(0, myPhoneIndex - 1);
                                    let cadAux2 = event_location.substr(myPhoneIndex + 11, event_location.length);
                                    // console.log(`cadAux=----> ${cadAux}`);
                                    // console.log(`cadAux2=----> ${cadAux2}`);
                                    if (cadAux2) {
                                        event_location = `${cadAux} ${cadAux2}`;
                                    }
                                    else {
                                        event_location = cadAux;
                                    }
                                    // event_location = event_location.substr(myPhoneIndex, (event_location.length - 13));
                                    console.log(`event location sin Phone=----> ${event_location}`);
                                } else {
                                    console.log(`phone number not found------>`);
                                }
                            }
                        }

                        //arreglar letras y numeros pegados
                        // var test = event_location.match(/[a-zA-Z]+|[0-9]+/g);
                        // if (test) {
                        //     event_location = test.join(' ');
                        //     console.log(`event location sin espacios=----> ${event_location}`);

                        // }

                        let flag = 0;
                        let myLocation = "";
                        let myFinalLocation = "";
                        myFirstDigit = event_location.match(/\d/); // will give you the first digit in the string
                        myIndex = event_location.indexOf(myFirstDigit);
                        if (myIndex > 0) {
                            // console.log(`aaaaaa=----> ${event_location.length}`)
                            // console.log(`Location=----> ${event_location}`)
                            myLocation = event_location.substr(myIndex, event_location.length);
                            // console.log(`MyLocation=----> ${myLocation}`);
                            // first part has bee removed
                            flag = 1;

                            // // remove zip code 9XXXX - XXXX
                            // let myExtraZipcode = myLocation.match(/(9[0-9]{4})\-([0-9]{4})/);
                            // if (myExtraZipcode) {
                            //     myExtraZipIndex = myLocation.indexOf(myExtraZipcode[0]);
                            //     let cadAux = myLocation.substr(0, myExtraZipIndex - 1);
                            //     let cadAux2 = myLocation.substr(myExtraZipIndex + 10, myLocation.length);
                            //     if (cadAux2) {
                            //         myLocation = `${cadAux} ${cadAux2}`;
                            //     }
                            //     else {
                            //         myLocation = `${cadAux}`;
                            //     }
                            //     console.log(`Location without extra zip code=----> ${myLocation}`);
                            // }

                            // //remove tradicional zip code 9XXXX
                            // myZipcode = myLocation.match(/CA\s([0-9]{5})/);
                            // if (myZipcode) {
                            //     myZipIndex = myLocation.indexOf(myZipcode[0]);
                            //     let cadAux = myLocation.substr(0, myZipIndex + 2);
                            //     let cadAux2 = myLocation.substr(myZipIndex + 8, myLocation.length);
                            //     if (cadAux2) {
                            //         myFinalLocation = `${cadAux} ${cadAux2}`;
                            //     }
                            //     else {
                            //         myFinalLocation = `${cadAux}`;
                            //     }
                            //     console.log(`myFinalLocation=----> ${myFinalLocation}`);

                            // } else {
                            //     myFinalLocation = myLocation;
                            // }


                            // myZipcode = myLocation.match(/[A-Z][A-Z]\s([0-9]{5})/); //buscamos la abreviatura del estado, un espacio y cinco numeros
                            // // console.log(`myZipcode=----> ${myZipcode}`);
                            // myZipIndex = myLocation.indexOf(myZipcode);
                            // // console.log(`myZipIndex=----> ${myZipIndex}`);
                            // myFinalLocation = myLocation.substr(0, myIndex + 8);
                            // console.log("myFinalLocation --------->", myFinalLocation);


                            // myFinalLocation = myFinalLocation.sub(/r'(?<=\d)(?=[^\d\s])|(?<=[^\d\s])(?=\d)/, ' ', myFinalLocation);
                            // var re = /[^0-9](?=[0-9])/g;
                            // var str1 = myFinalLocation;
                            // var result = str1.replace(re, '$& ');
                            // console.log("myFinalLocation --------->", result);
                            myFinalLocation = myLocation;
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
                                console.log('Event_Location_Information ******************************************************************** ', error);
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
                    // // reason = String(reason);
                    // if ((reason.includes('DIALYSIS GOING HOME')) && (flipped === false)) {
                    //     console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>${csv_row["Participant"]}  GOING HOME`)
                    //     console.log(`Event_Reason--> ${row["Event_Reason"]}`);
                    //     // console.log(`Reason =${(reason)}`);
                    //     // console.log(`Reason.LENGHT =${(reason.length)}`);

                    //     // let aux = csv_row["Event_Location_Information"];
                    //     csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                    //     // 4765 CARMEL MOUNTAIN RD SAN DIEGO, CALI
                    //        Eastlake Sleep Center 841 Kuhn Drive  Suite 201Chula Vista, CA 91914 619-623-3816
                    //        841 Kuhn Drive  Suite 201Chula Vista, CA 91914 619-623-3816
                    //     //           1         2         3         4         5         6         7         8         9         100       10        20    
                    //     // 012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                    //     // AT DIALYSIS GOING HOME FRESENIUS KIDNEY CARE LA JOLLA 4765 CARMEL MOUNTAIN RD SAN DIEGO, CALIFORNIA 92130
                    //     //                                                      0         1        2         3         4         5         6         7         8         9         100       10        20    
                    //     // @ DIALYSIS GOING HOME FRESENIUS DIALYSIS EASTLAKE 2391 BOSWELL RD, CHULA VISTA, CA 91914
                    //     let index_going = reason.indexOf('GOING HOME');
                    //     let index_glenner = reason.indexOf('AT GLENNER');
                    //     let decimal = /\d+/;
                    //     let match_d = reason.match(decimal);


                    //     if (match_d) {  //si hay un numero 
                    //         console.log(`match_d =${match_d.index}, index_glenner=${index_glenner}, index_going${index_going}`);
                    //         // console.log(`match_d =${match_d.index}`);
                    //         // console.log(`index_going${index_going}`);

                    //         if ((index_glenner > 0) && (index_going > 0) && (flipped === false)) {
                    //             let destiny_address = reason.substr(match_d.index, (reason.length - (match_d.index)));
                    //             // console.log(`destiny_address.len ${destiny_address.length}`)
                    //             // console.log("-----------", reason.length - (match_d.index))

                    //             let aux = csv_row["Address"];
                    //             csv_row["Address"] = "PICKUP AT --->" + destiny_address;
                    //             csv_row["Event_Reason"] = "DROP OFF AT -> " + aux;

                    //             console.log(`@GLENNER Address ${csv_row["Address"]}`);
                    //             console.log(`Event_Reason ${csv_row["Event_Reason"]}`);
                    //             flipped = true;

                    //         } else if ((index_going > 0) && (flipped === false)) {
                    //             let destiny_address = reason.substr(match_d.index, (reason.length - (match_d.index)));
                    //             let aux = csv_row["Address"];
                    //             csv_row["Address"] = "PICKUP AT --->" + destiny_address;
                    //             csv_row["Event_Reason"] = "DROP OFF AT -> " + aux;

                    //             console.log(`Address ${csv_row["Address"]}`);
                    //             console.log(`Event_Reason ${csv_row["Event_Reason"]}`);

                    //         }
                    //     } else {
                    //         console.log(`--------->HOUSE NUMBER NOT DETECTED `);



                    //     }
                    //     // // csv_row["Address"];
                    //     // csv_row["Address"] = 2222222
                    //     // aux;
                    //     //console.log(csv_row["Verification"]);
                    // }

                    // break;
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
                // let number = csv_row["Client_Code"].toString();
                // console.log("---->number", number);
                // if (number == 'SDP506493') {
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



