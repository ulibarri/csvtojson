
const addresser = require("addresser");

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');
let csv_rows = [];
let csv_row = {};
let rows = 1;

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
csv_row["Event_reason"] = "Event reason";
csv_row["Address"] = "Address";
csv_row["Verification"] = "Verification"
csv_rows.push(csv_row);
csv_row = {};

fs.createReadStream('out.csv')
    .pipe(csv())
    .on('data', (row) => {
        csv_row["Verification"] = '';
        for (let key in row) {
            let str = row["Participant"];
            if ((str.includes('Non-Participant Event')) || (str.includes('TEST'))) {
                // console.log("NO SE debe procesar esta fila ----------");
                // csv_row
            } else {
                switch (key) {
                    case "Event_Date":
                        csv_row["Event_Date"] = row["Event_Date"];
                        break;
                    case "Start_Time":
                        csv_row["Start_Time"] = row["Start_Time"];
                    case "Appointment_Time":
                        csv_row["Appointment_Time"] = row["Appointment_Time"];
                        break;
                    case "Participant":
                        csv_row["Participant"] = row["Participant"];
                        break;
                    case "Client_Code":
                        csv_row["Client_Code"] = row["Client_Code"];
                        let number = row["Client_Code"];
                        console.log("---->number", number);
                        // if (number == 'SDP506493') {
                        //     console.log(csv_row);

                        // }
                        break;
                    case "DOB":
                        csv_row["DOB"] = row["DOB"];
                        break;
                    case "Sex":
                        csv_row["Sex"] = row["Sex"];
                        break;
                    case "Address":
                        csv_row["Address"] = row["Address"];
                        break;
                    case "Phone":
                        csv_row["Phone"] = row["Phone"];
                        break;
                    case "Resource_Name":
                        csv_row["Resource_Name"] = row["Resource_Name"];
                        break;
                    case "Event_Location_Information":
                        csv_row["Event_Location_Information"] = row["Event_Location_Information"]
                        break;
                    case "Event_Reason":
                        let temp = "";
                        let flipped = false;
                        csv_row["Event_Reason"] = row["Event_Reason"].toString().toUpperCase();
                        reason = row["Event_Reason"].toString().toUpperCase();
                        reason = reason.replace(/\s+/g, ' ').trim()

                        if ((reason.includes('AT GLENNER')) && (reason.includes('GOING HOME')) && (flipped === false)) {
                            console.log(`1`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2765 MAIN ST CHULA VISTA 91911";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT GLENNER GOING HOME PICK UP AT 2765 MAIN ST CHULA VISTA 91911`);
                            flipped = true;
                        } else if ((reason.includes('@GLENNER')) && (reason.includes('GOING HOME')) && (flipped === false)) {
                            console.log(`2`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2765 MAIN ST CHULA VISTA 91911";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT GLENNER GOING HOME PICK UP AT 2765 MAIN ST CHULA VISTA 91911`);
                            flipped = true;
                        } else if ((reason.includes('@ GLENNER')) && (reason.includes('GOING HOME')) && (flipped === false)) {
                            console.log(`3`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2765 MAIN ST CHULA VISTA 91911";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT GLENNER GOING HOME PICK UP AT 2765 MAIN ST CHULA VISTA 91911`);
                            flipped = true;
                        } else if ((reason.includes('@ GLENNER')) && (reason.includes('TAKE HOME')) && (flipped === false)) {
                            console.log(`27`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2765 MAIN ST CHULA VISTA 91911";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT GLENNER GOING HOME PICK UP AT 2765 MAIN ST CHULA VISTA 91911`);
                            flipped = true;
                        } else if ((reason.includes('AT CVC')) && (reason.includes('GOING HOME')) && (reason.includes('880')) && (flipped === false)) {
                            console.log(`4`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "880 3RD AVE CHULA VISTA 91911";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT CVC GOING HOME PICK UP AT 880 3RD AVE CHULA VISTA 91911`);
                            flipped = true;
                        } else if ((reason.includes('@ CVC')) && (reason.includes('GOING HOME')) && (reason.includes('880')) && (flipped === false)) {
                            console.log(`5`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "880 3RD AVE CHULA VISTA 91911";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT CVC GOING HOME PICK UP AT 880 3RD AVE CHULA VISTA 91911`);
                            flipped = true;
                        } else if ((reason.includes('@CVC')) && (reason.includes('GOING HOME')) && (reason.includes('880')) && (flipped === false)) {
                            console.log(`6`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "880 3RD AVE CHULA VISTA 91911";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT CVC GOING HOME PICK UP AT 880 3RD AVE CHULA VISTA 91911`);
                            flipped = true;
                        } else if ((reason.includes('@DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FMC')) && (reason.includes('3010')) && (flipped === false)) {
                            console.log(`7`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "3010 DEL SOL BLVD SAN DIEGO, CA, 92154-3475";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FMC GOING HOME PICK UP AT 3010 DEL SOL BLVD SAN DIEGO, CA, 92154-3475`);
                            flipped = true;
                        } else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FMC')) && (reason.includes('3010')) && (flipped === false)) {
                            console.log(`8`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "3010 DEL SOL BLVD SAN DIEGO, CA, 92154-3475";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FMC GOING HOME PICK UP AT 3010 DEL SOL BLVD SAN DIEGO, CA, 92154-3475`);
                            flipped = true;
                        } else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FMC')) && (reason.includes('3010')) && (flipped === false)) {
                            console.log(`9`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "3010 DEL SOL BLVD SAN DIEGO, CA, 92154-3475";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FMC GOING HOME PICK UP AT 3010 DEL SOL BLVD SAN DIEGO, CA, 92154-3475`);
                            flipped = true;
                        } else if ((reason.includes('@DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('SDDS')) && (reason.includes('2252')) && (flipped === false)) {
                            console.log(`10`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2252 VERUS STREET SAN DIEGO, CA, 92154-4707";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT SDDS GOING HOME PICK UP AT 2252 VERUS STREET SAN DIEGO, CA, 92154-4707`);
                            flipped = true;
                        } else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('SDDS')) && (reason.includes('2252')) && (flipped === false)) {
                            console.log(`11`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2252 VERUS STREET SAN DIEGO, CA, 92154-4707";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT SDDS GOING HOME PICK UP AT 2252 VERUS STREET SAN DIEGO, CA, 92154-4707`);
                            flipped = true;
                        } else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('SDDS')) && (reason.includes('2252')) && (flipped === false)) {
                            console.log(`12`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2252 VERUS STREET SAN DIEGO, CA, 92154-4707";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT SDDS GOING HOME PICK UP AT 2252 VERUS STREET SAN DIEGO, CA, 92154-4707`);
                            flipped = true;
                        } else if ((reason.includes('@DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS DIALYSIS')) && (flipped === false)) {
                            console.log(`13`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA, 91914";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS DIALYSIS GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA, 91914`);
                            flipped = true;
                        } else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS DIALYSIS')) && (flipped === false)) {
                            console.log(`14`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA, 91914";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS DIALYSIS GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA, 91914`);
                            flipped = true;
                        } else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS DIALYSIS')) && (flipped === false)) {
                            console.log(`15`);
                            console.log(`Pa5rticipant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA, 91914";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS DIALYSIS GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA, 91914`);
                            flipped = true;
                        } else if ((reason.includes('PICK UP @')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS DIALYSIS')) && (flipped === false)) {
                            console.log(`16`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA, 91914";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS DIALYSIS GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA, 91914`);
                            flipped = true;
                        } else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS')) && (reason.includes('BOSWELL')) && (flipped === false)) {
                            console.log(`21`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA, 91914";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS DIALYSIS GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA, 91914`);
                            flipped = true;
                        } else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS')) && (reason.includes('BOSWELL')) && (flipped === false)) {
                            console.log(`22`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA, 91914";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS DIALYSIS GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA, 91914`);
                            flipped = true;
                        } else if ((reason.includes('PICK UP AT')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS DIALYSIS')) && (flipped === false)) {
                            console.log(`17`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA, 91914";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS DIALYSIS GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA, 91914`);
                            flipped = true;
                        } else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('2391')) && (reason.includes('BOSWELL')) && (flipped === false)) {
                            console.log(`28`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA, 91914";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA, 91914`);
                            flipped = true;
                        } else if ((reason.includes('PICK UP @')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS KIDNEY')) && (flipped === false)) {
                            console.log(`18`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "3010 DEL SOL BLVD SAN DIEGO, CA, 92154";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS KIDNEY GOING HOME PICK UP AT 3010 DEL SOL BLVD SAN DIEGO, CA, 92154`);
                            flipped = true;
                        } else if ((reason.includes('PICK UP AT')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS KIDNEY')) && (flipped === false)) {
                            console.log(`19`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "3010 DEL SOL BLVD SAN DIEGO, CA, 92154";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->AT FRESENIUS KIDNEY GOING HOME PICK UP AT 3010 DEL SOL BLVD SAN DIEGO, CA, 92154`);
                            flipped = true;
                        }
                        else if ((reason.includes('@DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('EUCLID')) && (flipped === false)) {
                            console.log(`23`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "292 EUCLID AVE #100 SAN DIEGO, CA, 92114";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 292 EUCLID AVE #100 SAN DIEGO, CA, 92114`);
                            flipped = true;
                        }
                        else if ((reason.includes('@DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('1445')) && (flipped === false)) {
                            console.log(`24`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "1445 30TH ST SUITE A SAN DIEGO, CA, 92154";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 1445 30TH ST SUITE A SAN DIEGO, CA, 92154`);
                            flipped = true;
                        }
                        else if ((reason.includes('AT DIALYSIS')) && (reason.includes('PICK UP')) && (reason.includes('GOING HOME')) && (reason.includes('1445')) && (reason.includes('30TH')) && (flipped === false)) {
                            console.log(`45`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "1445 30TH ST SUITE A SAN DIEGO, CA, 92154";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 1445 30TH ST SUITE A SAN DIEGO, CA, 92154`);
                            flipped = true;
                        }
                        else if ((reason.includes('@DIALYSIS')) && (reason.includes('PICK UP')) && (reason.includes('GOING HOME')) && (reason.includes('1445')) && (reason.includes('30TH')) && (flipped === false)) {
                            console.log(`46`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "1445 30TH ST SUITE A SAN DIEGO, CA, 92154";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 1445 30TH ST SUITE A SAN DIEGO, CA, 92154`);
                            flipped = true;
                        }
                        else if ((reason.includes('@DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('2252')) && (reason.includes('VERUS')) && (flipped === false)) {
                            console.log(`25`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2252 VERUS ST SAN DIEGO, CA, 92154";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 2252 VERUS ST SAN DIEGO, CA, 92154`);
                            flipped = true;
                        }
                        else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('2252')) && (reason.includes('VERUS')) && (flipped === false)) {
                            console.log(`33`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "2252 VERUS ST SAN DIEGO, CA, 92154";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 2252 VERUS ST SAN DIEGO, CA, 92154`);
                            flipped = true;
                        }
                        else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('1951')) && (reason.includes('CITRACADO')) && (flipped === false)) {
                            console.log(`29`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "1951 CITRACADO PARKWY, ESCONDIDO, CA, 92029";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 1951 CITRACADO PARKWY, ESCONDIDO, CA, 92029`);
                            flipped = true;
                        }
                        else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('1951')) && (reason.includes('CITRACADO')) && (flipped === false)) {
                            console.log(`30`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "1951 CITRACADO PARKWY, ESCONDIDO, CA, 92029";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 1951 CITRACADO PARKWY, ESCONDIDO, CA, 92029`);
                            flipped = true;
                        } else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('303')) && (reason.includes('NATIONAL')) && (flipped === false)) {
                            console.log(`31`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "303 W 26TH ST NATIONAL CITY, CA, 91950";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 303 W 26TH ST NATIONAL CITY, CA, 91950`);
                            flipped = true;
                        }
                        else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('303')) && (reason.includes('NATIONAL')) && (flipped === false)) {
                            console.log(`32`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "303 W 26TH ST NATIONAL CITY, CA, 91950";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 303 W 26TH ST NATIONAL CITY, CA, 91950`);
                            flipped = true;
                        }
                        else if ((reason.includes('AT DIALYSIS')) && (reason.includes('TO HOME')) && (reason.includes('5961')) && (reason.includes('UNIVERSITY')) && (flipped === false)) {
                            console.log(`34`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115`);
                            flipped = true;
                        }
                        else if ((reason.includes('@ DIALYSIS')) && (reason.includes('TO HOME')) && (reason.includes('5961')) && (reason.includes('UNIVERSITY')) && (flipped === false)) {
                            console.log(`35`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115`);
                            flipped = true;
                        }
                        else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('5961')) && (reason.includes('UNIVERSITY')) && (flipped === false)) {
                            console.log(`36`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115`);
                            flipped = true;
                        }
                        else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('5961')) && (reason.includes('UNIVERSITY')) && (flipped === false)) {
                            console.log(`37`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115`);
                            flipped = true;
                        }
                        else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('630')) && (reason.includes('BAY')) && (flipped === false)) {
                            console.log(`38`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "630 BAY BLVD, CHULA VISTA , CA, 91910";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 630 BAY BLVD, CHULA VISTA , CA, 91910`);
                            flipped = true;
                        } else if ((reason.includes('PICK UP FROM')) && (reason.includes('DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('FRESENIUS')) && (reason.includes('BAY')) && (flipped === false)) {
                            console.log(`44`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "630 BAY BLVD, CHULA VISTA , CA, 91910";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 630 BAY BLVD, CHULA VISTA , CA, 91910`);
                            flipped = true;
                        }
                        else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('630')) && (reason.includes('BAY')) && (flipped === false)) {
                            console.log(`42`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "630 BAY BLVD, CHULA VISTA , CA, 91910";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 630 BAY BLVD, CHULA VISTA , CA, 91910`);
                            flipped = true;
                        }
                        else if ((reason.includes('@DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('630')) && (reason.includes('BAY')) && (flipped === false)) {
                            console.log(`43`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "630 BAY BLVD, CHULA VISTA , CA, 91910";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 630 BAY BLVD, CHULA VISTA , CA, 91910`);
                            flipped = true;
                        }
                        else if ((reason.includes('AT DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('4765')) && (reason.includes('CARMEL')) && (flipped === false)) {
                            console.log(`39`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "4765 CARMEL MOUNTAIN RD SAN DIEGO, CA, 92130";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 4765 CARMEL MOUNTAIN RD SAN DIEGO, CA, 92130`);
                            flipped = true;
                        }
                        else if ((reason.includes('@ DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('4765')) && (reason.includes('CARMEL')) && (flipped === false)) {
                            console.log(`40`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "4765 CARMEL MOUNTAIN RD SAN DIEGO, CA, 92130";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 4765 CARMEL MOUNTAIN RD SAN DIEGO, CA, 92130`);
                            flipped = true;
                        }
                        else if ((reason.includes('@DIALYSIS')) && (reason.includes('GOING HOME')) && (reason.includes('4765')) && (reason.includes('CARMEL')) && (flipped === false)) {
                            console.log(`41`);
                            console.log(`Participant--> ${row["Participant"]}`);
                            csv_row["Event_Reason"] = row["Address"];
                            csv_row["Address"] = "4765 CARMEL MOUNTAIN RD SAN DIEGO, CA, 92130";
                            csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                            console.log(`--------->GOING HOME PICK UP AT 4765 CARMEL MOUNTAIN RD SAN DIEGO, CA, 92130`);
                            flipped = true;
                        }
                        else if ((reason.includes('@DIALYSIS GOING HOME')) && (flipped === false)) {
                            // && (reason.includes(' GOING HOME'))
                            // console.log(`Participant--> ${row["Participant"]}`);
                            // console.log('event reaosn-->', reason);
                            console.log(`26`);
                            let event = row['Event_Location_Information'];
                            event = event.replace(/\s+/g, ' ').trim();
                            // console.log('Event_Location_Information -->', row['Event_Location_Information']);
                            // console.log('Event -->', event);
                            // console.log('event.length -->', event.length);
                            if (event.length > 0) {
                                // --------------------------------------------------------------------- buscamos en otra columna  -------------
                                if ((event.includes('2391')) && (event.includes('BOSWELL')) && (flipped === false)) {
                                    console.log(`Participant--> ${row["Participant"]}`);
                                    csv_row["Event_Reason"] = row["Address"];
                                    csv_row["Address"] = "2391 BOSWELL ROAD CHULA VISTA, CA 91914";
                                    csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                                    console.log(`---- ----->AT FMC EASTLAKE GOING HOME PICK UP AT 2391 BOSWELL ROAD CHULA VISTA, CA 91914`);
                                    flipped = true;
                                } else if ((event.includes('1445')) && (event.includes('30TH')) && (flipped === false)) {
                                    console.log(`Participant--> ${row["Participant"]}`);
                                    csv_row["Event_Reason"] = row["Address"];
                                    csv_row["Address"] = "1445 30TH ST SUITE A SAN DIEGO, CA, 92154";
                                    csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                                    console.log(`---- ----->PT GOING HOME PICK UP AT 1445 30TH ST SUITE A  SAN DIEGO, CA 92154`);
                                    flipped = true;
                                } else if ((event.includes('BAY')) && (event.includes('630')) && (flipped === false)) {
                                    console.log(`Participant--> ${row["Participant"]}`);
                                    csv_row["Event_Reason"] = row["Address"];
                                    csv_row["Address"] = "630 BAY BLVD, CHULA VISTA , CA, 91910";
                                    csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                                    console.log(`---- ----->PT GOING HOME PICK UP AT 630 BAY BLVD, CHULA VISTA , CA, 91910`);
                                    flipped = true;
                                }
                                else if ((event.includes('DEL SOL')) && (event.includes('3010')) && (flipped === false)) {
                                    console.log(`Participant--> ${row["Participant"]}`);
                                    csv_row["Event_Reason"] = row["Address"];
                                    csv_row["Address"] = "3010 DEL SOL BLVD SAN DIEGO, CA 92154";
                                    csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                                    console.log(`---- ----->PT GOING HOME PICK UP AT 3010 DEL SOL BLVD SAN DIEGO, CA 92154`);
                                    flipped = true;
                                }
                            }

                        }
                        else if ((reason.includes('DIALYSIS GOING HOME')) && (flipped === false)) {
                            console.log(`DEFAULT CONDITION`);
                            console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>${csv_row["Participant"]}  GOING HOME`)
                            console.log(`Event_Reason--> ${row["Event_Reason"]}`);

                            // 4765 CARMEL MOUNTAIN RD SAN DIEGO, CALI 
                            //          1        2         3         4         5         6         7         8         9         100       10        20    
                            // 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                            // AT DIALYSIS GOING HOME FRESENIUS KIDNEY CARE LA JOLLA 4765 CARMEL MOUNTAIN RD SAN DIEGO, CALIFORNIA 92130
                            //                                                      0         1        2         3         4         5         6         7         8         9         100       10        20    
                            // @ DIALYSIS GOING HOME FRESENIUS DIALYSIS EASTLAKE 2391 BOSWELL RD, CHULA VISTA, CA 91914
                            let index_going = reason.indexOf('GOING HOME');
                            let decimal = /\d+/;
                            let match_d = reason.match(decimal);


                            if (match_d) {  //si hay un numero 

                                if ((index_going > 0) && (flipped === false)) {
                                    let destiny_address = reason.substr(match_d.index, (reason.length - (match_d.index)));
                                    let aux = csv_row["Address"];
                                    csv_row["Address"] = "PICKUP AT --->" + destiny_address;
                                    csv_row["Event_Reason"] = "DROP OFF AT -> " + aux;

                                    console.log(`Address ${csv_row["Address"]}`);
                                    console.log(`Event_Reason ${csv_row["Event_Reason"]}`);
                                    csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";

                                }
                            } else {
                                console.log(`--------->HOUSE NUMBER NOT DETECTED +++++`);
                                /// BUSCAMOS EN LA OTRA COLUMNA
                                console.log(`48`);
                                let event = row['Event_Location_Information'];
                                event = event.replace(/\s+/g, ' ').trim();
                                // console.log('Event_Location_Information -->', row['Event_Location_Information']);
                                // console.log('Event -->', event);
                                // console.log('event.length -->', event.length);
                                if (event.length > 0) {
                                    // --------------------------------------------------------------------- buscamos en otra columna  -------------
                                    if ((event.includes('630')) && (event.includes('BAY')) && (flipped === false)) {
                                        console.log(`Participant--> ${row["Participant"]}`);
                                        csv_row["Event_Reason"] = row["Address"];
                                        csv_row["Address"] = "630 BAY BLVD, CHULA VISTA , CA, 91910";
                                        csv_row["Verification"] = csv_row["Verification"] + " DESTINY address flipped ";
                                        console.log(`---- ----->AT 630 BAY BLVD, CHULA VISTA , CA, 91910`);
                                        flipped = true;
                                    }

                                }

                                csv_row["Verification"] = csv_row["Verification"] + " no addres available ";
                            }

                        } //"no contiene DIALYSIS GOING HOME"

                        break;
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
            path: 'out2.csv',
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



