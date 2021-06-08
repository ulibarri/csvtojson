
const addresser = require("addresser");
const moment = require('moment');
const chalk = require('chalk');
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

fs.createReadStream('June 9 CSV - June 9 CSV.csv')
    .pipe(csv())
    .on('data', (row) => {
        csv_row["Verification"] = '';
        for (let key in row) {
            let str = row["Participant"];
            if ((str.includes('Non-Participant Event')) || (str.includes('TEST,'))) {
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
                        //restamos 15 minutos al Start_Time
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
                            console.log(chalk.redBright("************** Error calculating Start_Date value", error));
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
                        event_location=event_location.replace(/  +/g, ' ');//"remove multiple blank spaces"
                        console.log(`event_location=----> ${event_location}`)
                        //first remove phone number


                        if (event_location.includes("SONUS 07")){
                            console.log('-------------------------------------------------------------------------------------------> ENCONTRE UN SONUS 07 ')
                            console.log(event_location);
                            event_location= "310 3RD AVE, 2ND FLOOR, Ste. B-21 CHULA VISTA, CA 91910-396";//event_location.replace("SONUS 07", "");
                            console.log('-------------------------------------------------------------------------------------------> NUEVA LOCATION')
                            console.log(event_location);
                            
                        }

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

                           
                            myFinalLocation = myLocation;
                            try {
                                //parseamos ladireccion para dejarla sin informacion basura
                                let finalBreakdown = addresser.parseAddress(myFinalLocation);
                                // console.log(finalBreakdown);
                                if (!finalBreakdown.addressLine2) {
                                    csv_row["Event_Location_Information"] = (`${finalBreakdown.addressLine1},${finalBreakdown.placeName},${finalBreakdown.stateAbbreviation} ${finalBreakdown.zipCode}`).toUpperCase();
                                    csv_row["Destination"] = (`${finalBreakdown.addressLine1},${finalBreakdown.placeName},${finalBreakdown.stateAbbreviation} ${finalBreakdown.zipCode}`).toUpperCase();

                                }
                                else {
                                    csv_row["Event_Location_Information"] = (`${finalBreakdown.addressLine1},${finalBreakdown.addressLine2},${finalBreakdown.placeName},${finalBreakdown.stateAbbreviation} ${finalBreakdown.zipCode}`).toUpperCase();
                                    csv_row["Destination"] = (`${finalBreakdown.addressLine1},${finalBreakdown.addressLine2},${finalBreakdown.placeName},${finalBreakdown.stateAbbreviation} ${finalBreakdown.zipCode}`).toUpperCase();

                                }

                            } catch (error) {
                                console.log(chalk.redBright('Event_Location_Information ******************************************************************** ', error));
                                console.log('Event_Location', myFinalLocation);
                                csv_row["Event_Location_Information"] = (myLocation).toUpperCase();
                                csv_row["Destination"] = (myLocation).toUpperCase();
                                csv_row["Verification"] = csv_row["Verification"] + " event_location, ";

                            }


                        } else {

                            // console.log("myLocation --------->", myLocation);
                            console.log('Event_Location_Information -------------------->NO event_location detected');
                            // console.log("Verificacion antes = ", csv_row["Verification"]);
                            if (flag == 1) {
                                csv_row["Event_Location_Information"] = myLocation.toUpperCase();
                                csv_row["Destination"] = myLocation.toUpperCase();
                            }
                            else {
                                csv_row["Event_Location_Information"] = event_location.toUpperCase();
                                csv_row["Destination"] = event_location.toUpperCase();
                            }

                            csv_row["Verification"] = csv_row["Verification"] + " event_location, ";
                            // console.log("Verificacion despues= ", csv_row["Verification"]);

                        }
                        

                        break;
                    case "Participant":
                        /****************** SEPARAMOS EL CODIGO DEL CLIENTE  */
                        let str = row["Participant"];
                        str = str.replace(/  +/g, ' ');//"remove multiple blank spaces"
                        // if (str.includes('Non-Participant Event')) {
                        //     console.log("NO SE debe procesar esta fila ----------");

                        // }
                        let n = str.indexOf('(');
                        if (n > 0) {
                            let substring = str.substr(n + 1, 9);
                            csv_row["Client_Code"] = substring;
                            csv_row["Participant"] = str.substr(0, n - 1);
                            console.log(chalk.green(`Participant ->${csv_row["Participant"]} Code->${csv_row["Client_Code"]}`));
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
                        s=s.replace(/  +/g, ' ');//"remove multiple blank spaces"
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
                        //****************** HACEMOS UN PARSEO DE LA DIRECCION PARA IDENTIDFICAR SUS ELEMENTOS */
                        let address = row["Address"].toString();
                        address=address.replace(/  +/g, ' ');//"remove multiple blank spaces"
                        // if (address.includes('Via las Palmas')){
                        //     console.log('aqui esta', address);
                        // }
                        //****************** REMOVEMOS DOBLES COMAS */
                        let  coma = address.search(",,");
                        if (coma>0){
                            console.log('-------------------------------------------------------------------------------------------> ENCONTRE UNA DOBLE COMA')
                            console.log(address);
                            address= address.replace(",,", ",");
                            console.log('-------------------------------------------------------------------------------------------> NUEVA ADDRESS')
                            console.log(address);
                            
                        }
                        // console.log(`Original value ------> ${adddress}`);
                        // console.log(adddress.toString().length)

                        // try {
                        //     csv_row["Address"] = `${breakdown.addressLine1},${breakdown.addressLine2},${breakdown.placeName},${breakdown.stateAbbreviation},${breakdown.zipCode}`;
                        //     console.log("----------", csv_row["Address"]);
                        // } catch (error) {

                        // }
                        if (!address) {
                            console.log(chalk.redBright('Address ---------------------------------------->Empty field'));
                            // console.log("Verificacion antes = ", csv_row["Verification"]);
                            csv_row["Address"] = 'no address detected';
                            csv_row["Verification"] = csv_row["Verification"] + " address, ";
                            // console.log("Verificacion despues= ", csv_row["Verification"]);
                        }
                        else {
                            try {
                                let breakdown = addresser.parseAddress(address);
                                // console.log(breakdown);
                                if (!breakdown.addressLine2) {
                                    csv_row["Address"] = (`${breakdown.addressLine1},${breakdown.placeName},${breakdown.stateAbbreviation} ${breakdown.zipCode}`).toUpperCase();
                                    csv_row["Origin"] = (`${breakdown.addressLine1},${breakdown.placeName},${breakdown.stateAbbreviation} ${breakdown.zipCode}`).toUpperCase();

                                }
                                else {
                                    csv_row["Address"] = (`${breakdown.addressLine1},${breakdown.addressLine2},${breakdown.placeName},${breakdown.stateAbbreviation} ${breakdown.zipCode}`).toUpperCase();
                                    csv_row["Origin"] = (`${breakdown.addressLine1},${breakdown.addressLine2},${breakdown.placeName},${breakdown.stateAbbreviation} ${breakdown.zipCode}`).toUpperCase();

                                }

                            } catch (error) {
                                console.log(chalk.redBright('***********************************************'), error)
                                csv_row["Address"] = address;
                                csv_row["Origin"] = 'ERROR PARSING ADDRESS';
                            }

                        }
                        break;
                    case "Event_Reason":
                        // let flipped = false;
                        csv_row["Event_Reason"] = row["Event_Reason"].toString().toUpperCase();
                        csv_row["Event_Reason"]=csv_row["Event_Reason"].replace(/  +/g, ' ');//"remove multiple blank spaces"
                    

                    
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
                { id: 'Verification', title: 'Verification' },
                { id: 'Origin', title: 'Origin' },
                { id: 'Destination', title: 'Destination' }

            ]
        });



        csvWriter
            .writeRecords(csv_rows)
            .then(() => console.log('The CSV file was written successfully'));
    });



