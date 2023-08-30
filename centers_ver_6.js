let centers=[
    {   
        name: "DAVITA COLLEGE",
        address: "6535 UNIVERSITY AVE, SAN DIEGO, CA, 92115",
        abbrev: "DAVITA COLLEGE",
        category: "DIALYSIS",
        phone: "619-287-8796",
        criteria: ['6535','UNIVERSITY','DIEGO','92115'],
        funding_source:[0]
    },
    { 
        name: "FMC RANCHO",
        address: "11031 VIA FRONTERA, SUITE  C, SAN DIEGO, CA, 92127",
        abbrev: null,
        category: 'DIALYSIS',
        phone: '800-881- 5101',
        criteria: ['11031','VIA','FRONTERA','SUITE  C','DIEGO','92127'],
        funding_source:[0]
    },
    {   
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "292 EUCLID AVE, SUITE  210, SAN DIEGO, CA, 92114",
        abbrev: null ,
        category: "CARDIOLOGY",
        phone: null,
        criteria: ['292 EU','EUCLID AV','DIEGO','92114', '210'],
        funding_source:[0]
    },
    {   
        name: "DIGESTIVE DISEASE ASSOCIATES",
        address: "292 EUCLID AVE, SUITE  115-IU, SAN DIEGO, CA, 92114",
        abbrev: null ,
        category: "CARDIOLOGY",
        phone: null,
        criteria: ['292 EU','CLID AV','DIEGO','92114', '115'],
        funding_source:[0]
    },
    {   
        name: "DAVITA EUCLID",
        address: "292 EUCLID AVE, SAN DIEGO, CA, 92114",
        abbrev: "DAVITA S.D. EAST" ,
        category: "DIALYSIS",
        phone: "619-262-7225",
        criteria: ['292 EU','EUCLID AV','DIEGO','92114'],
        funding_source:[0]
    },
    {   
        name: "DAVITA SAN MARCOS",
        address: "2135 MONTIEL RD, SAN MARCOS, CA, 92069",
        abbrev: "DAVITA SAN MARCOS" ,
        category: "DIALYSIS",
        phone: null,
        criteria: ['2135','MONTIEL R','MARCOS','92069'],
        funding_source:[0]
    },
    {   
        name: "DAVITA SAN DIEGO SOUTH",
        address: "995 GATEWAY CENTER WAY, SAN DIEGO, CA, 92102",
        abbrev: "DAVITA S.D.S",
        category: "DIALYSIS",
        phone:"619",
        criteria: ['995','GATEWAY','R W','DIEGO','92102'],
        funding_source:[0]

    },
    {   
        name: "DAVITA SAN YSIDRO",
        address: "1445 30TH ST, SAN DIEGO, CA, 92154",
        abbrev: "DAVITA S.Y.",
        category: "DIALYSIS",
        phone:"619-262-1960",
        criteria: ['1445','30TH','DIEGO','92154'],
        funding_source:[0]
    },
    {   
        name: "DSI CHULA VISTA",
        address: "1181 BROADWAY SUITE 5, CHULA VISTA, CA, 91911",
        abbrev: "DSI C.V.",
        category: "DIALYSIS",
        phone:"619-213-1922",
        criteria: ['1181','BROADWAY','5','CHULA','91911'],
        funding_source:[0]
    },
    {   
        name: "FMC COLLEGE",
        address: "5961 UNIVERSITY AVE, SUITE 317, SAN DIEGO, CA, 92115",
        abbrev: "FMC COLLEGE",
        category: "DIALYSIS",
        phone: "619-286-0821",
        criteria: ['5961','UNIVERSITY AV','317','DIEGO','92115'],
        funding_source:[0]
    },
    {   
        name: "FMC COLLEGE",
        address: "5961 UNIVERSITY AVE, SAN DIEGO, CA, 92115",
        abbrev: "FMC COLLEGE",
        category: "DIALYSIS",
        phone: "619-286-0821",
        criteria: ['5961','UNIVERSITY AV','DIEGO','92115'],
        funding_source:[0]
    },
    {   
        name: "FMC CHULA VISTA SOUTH",
        address: "2252 VERUS ST, SAN DIEGO, CA, 92154",
        abbrev: "FMC CVS",
        category: "DIALYSIS",
        phone: "619-429-9201",
        criteria: ['2252','VERUS','DIEGO','92154'],
        funding_source:[0]
    },
    {   
        name: "FMC EAST COUNTY",
        address: "570 N 2ND ST, EL CAJON, CA, 92021",
        abbrev: "FMC E.C.",
        category: "DIALYSIS",
        phone: "619-588-7500",
        criteria: ['570','2ND','CAJON','92021'],
        funding_source:[0]
    },
    {   
        name: "FMC BALBOA EASTLAKE",
        address: "2391 BOSWELL RD, CHULA VISTA, CA, 91914",
        abbrev: "FMC EASTLAKE",
        category: "DIALYSIS",
        phone:"619-397-0939",
        criteria: ['2391','BOSWELL','CHULA','91914'],
        funding_source:[0]
    },
    {   
        name: "FMC GATEWAY EAST",
        address: "720 GATEWAY CENTER DR SUITE  B, SAN DIEGO, CA, 92102",
        abbrev: "FMC GE",
        category: "DIALYSIS",
        phone:"619-264-4100",
        criteria: ['720','GATEWAY CENTER',' B','DIEGO','92102'],
        funding_source:[0]
    },
    {   
        name: "FMC HILLCREST",
        address: "3960 3RD AVE, SAN DIEGO, CA, 92103",
        abbrev: "FMC HILL",
        category: "DIALYSIS",
        phone: "619-299-3900",
        criteria: ['3960','3RD','DIEGO','92103'],
        funding_source:[0]
    },
    {   
        name: "FMC KEARNEY MESA",
        address: "7927 OSTROW ST SUITE A, SAN DIEGO, CA, 92111",
        abbrev: "FMC K.M.",
        category: "DIALYSIS",
        phone:"858-571-0232",
        criteria: ['7927','OSTROW',' A','DIEGO','92111'],
        funding_source:[0]
    },
    {   
        name: "FMC LA MESA",
        address: "5995 SEVERIN DR, LA MESA, CA, 91942",
        abbrev: "FMC L.M.",
        category: "DIALYSIS",
        phone:"619-462-9992",
        criteria: ['5995','SEVERIN','MESA','91942'],
        funding_source:[0]
    },
    {   
        name: "FMC MARINA BAY",
        address: "630 BAY BLVD SUITE  101, CHULA VISTA, CA, 91910",
        abbrev: "FMC M.B.",
        category: "DIALYSIS",
        phone:"619-420-6725",
        criteria: ['630','BAY','101','CHULA','91910'],
        funding_source:[0]
    },
    {   
        name: "FMC NATIONAL CITY",
        address: "303 W 26TH ST, NATIONAL CITY, CA, 91950",
        abbrev: "FMC N.C.",
        category: "DIALYSIS",
        phone:"619-474-8151",
        criteria: ['303 W','26TH','NATIONAL','91950'],
        funding_source:[0]
    },
    {   
        name: "FMC PARADISE VALLEY",
        address: "6919 PARADISE VALLEY RD, SAN DIEGO, CA, 92139",
        abbrev: "FMC P.V.",
        category: "DIALYSIS",
        phone:"619-475-2872",
        criteria: ['6919','PARADISE','DIEGO','92139'],
        funding_source:[0]
    },
    {   
        name: "FMC RAVEN",
        address: "499 RAVEN ST, SAN DIEGO, CA, 92102",
        abbrev: "FMC RAVEN",
        category: "DIALYSIS",
        phone:"619-263-1518",
        criteria: ['499','RAVEN','DIEGO','92102'],
        funding_source:[0]
    },
    {   
        name: "FMC SAN YSIDRO",
        address: "3010 DEL SOL BLVD, SAN DIEGO, CA, 92154",
        abbrev: "FMC S.Y.",
        category: "DIALYSIS",
        phone:"619-429-9690",
        criteria: ['3010','DEL SOL','DIEGO','92154'],
        funding_source:[0]
    },
    {   
        name: "RAI FLETCHER PARKWAY",
        address: "858 FLETCHER PKWY, EL CAJON, CA, 92020",
        abbrev: "RAI F.P.",
        category: "DIALYSIS",
        phone:"619-442-4122",
        criteria: ['858','FLETCHER','CAJON','92020'],
        funding_source:[0]
    },
    {   
        name: "RAI SAN DIEGO",
        address: "7007 MISSION GORGE RD, SAN DIEGO, CA, 92120" ,
        abbrev: "RAI S.D.",
        category: "DIALYSIS",
        phone:"619-229-1070",
        criteria: ['7007','MISSION','DIEGO','92120'],
        funding_source:[0]
    },
    {   
        name: "U.S. RENAL CARE",
        address: "2084 OTAY LAKES RD SUITE 101, CHULA VISTA, CA, 91915",
        abbrev: "U.S. RC",
        category: "DIALYSIS",
        phone:"619-397-0262",
        criteria: ['2084','OTAY LAKES','CHULA','91915'],
        funding_source:[0]
    },
    {   
        name: "MEDIC",
        address: "2295 OTAY LAKES RD, CHULA VISTA, CA, 91915",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2295','OTAY LAKES','CHULA','91915'],
        funding_source:[0]
    },
    {   
        name: "UCSD CARDILOGY",
        address: "200 WEST ARBOR DR, SUITE 310, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: "CARDILOGY",
        phone:null,
        criteria: ['200','ARBOR D','DIEGO','92103','310'],
        funding_source:[0]
    },
    {   
        name: "UCSD CARDILOGY",
        address: "200 WEST ARBOR DR, SUITE 344, SAN DIEGO, CA, 92103",
        reference:'200 WEST ARBOR DR,3RD FLOOR, SUITE 344, SAN DIEGO, CA, 92103',
        abbrev: null,
        category: "CARDILOGY",
        phone:null,
        criteria: ['200','ARBOR D','DIEGO','92103','344'],
        funding_source:[0]
    },
    {
        name: "UCSD HILLCREST",
        address: '200 WEST ARBOR DR, SUITE 1, SAN DIEGO, CA, 92103',
        reference:'200 WEST ARBOR DR,3RD FLOOR, SUITE 1, SAN DIEGO, CA, 92101-2030',
        abbrev: null,
        category: "ER",
        phone: null,
        criteria: ['200 W','ARBOR','3RD','SUITE 1', "DIEGO", '92103'],
        funding_source:[0]
    },
    {
        name: "UCSD HILLCREST",
        address: "200 WEST ARBOR DR, SUITE 1, SAN DIEGO, CA, 92103",
        reference:'200 WEST ARBOR DR,3RD FLOOR, STE 1, SAN DIEGO, CA, 92101-2030',
        abbrev: null,
        category: "ER",
        phone: null,
        criteria: ['200 W','ARBOR','3RD','SUITE 1', "DIEGO", "92103"],
        funding_source:[0] 
    }, 
    {
        name: "UCSD HILLCREST NEUROLOGY",
        address: "200 WEST ARBOR, SUITE 1B, SAN DIEGO, CA, 92103",
        reference:'200 WEST ARBOR, 3RD FLOOR, 1B, SAN DIEGO, CA, 92103',
        abbrev: null,
        category: "NEUROLOGY",
        phone: null,
        criteria: ['200 W','ARBOR', 'DIEGO','92103', '1B'],
        funding_source:[0]
    },      
    {
        name: "DR. JASON WOO UROLOGY",
        address: "200 WEST ARBOR DR, SUITE 4, SAN DIEGO, CA, 92103",
        reference:'200 WEST ARBOR DR,3RD FLOOR, STE 4, SAN DIEGO, CA, 92103',
        abbrev: null,
        category: "UROLOGY",
        phone: '858 657-7876',
        criteria: ['200 W','ARBOR', 'DIEGO','92103', ' 4'],
        funding_source:[0]
    },
    {   
        name: "UCSD",
        address: "200 WEST ARBOR DR, SUITE 201, SAN DIEGO, CA, 92103",
        reference:'200 WEST ARBOR DR, LOW LEVEL STE 201, SAN DIEGO, CA, 92103',
        abbrev: "UCSD ORTHOPEDICS",
        category: "ORTHOPEDICS",
        phone:"858-657-8200",
        criteria: ['200 W','ARBOR D','201','DIEGO','92103'],
        funding_source:[0]
    },
    {   
        name: "UCSD",
        address: "200 WEST ARBOR DR, SUITE 411, SAN DIEGO, CA, 92103",
        reference:'200 W ARBOR DR, BASEMENT LEVEL, SUITE 210,SOUTH WING, SAN DIEGO, CA, 92103',
        abbrev: null,
        category: null,
        phone:'858-657-8590',
        criteria: ['200 W','ARBOR','411','DIEGO','92103'],
        funding_source:[0]
    },
    {   
        name: "UCSD",
        address: "200 WEST ARBOR DR, SUITE 210, SAN DIEGO, CA, 92103",
        reference:'200 W ARBOR DR, BASEMENT LEVEL, SUITE 210,SOUTH WING, SAN DIEGO, CA, 92103',
        abbrev: null,
        category: null,
        phone:'858-657-8590',
        criteria: ['200 W','ARBOR',' 210','DIEGO','92103'],
        funding_source:[0]
    },
    {   
        name: "UCSD ORTHOPEDICS",
        address: "200 WEST ARBOR DR SUITE 2, SAN DIEGO, CA, 92103",
        abbrev: "UCSD ORTHOPEDICS",
        category: "ORTHOPEDICS",
        phone:"858-657-8200",
        criteria: ['200 W','ARBOR','DIEGO','92103','SUITE 2'],
        funding_source:[0]
    },
    {   
        name: "HILLCREST UCSD",
        address: "200 WEST ARBOR DR, SAN DIEGO, CA, 92103",
        abbrev: "UCSD",
        category: "",
        phone:"619-543-5646",
        criteria: ['200 W','ARBOR D','DIEGO','92103'],
        funding_source:[0]
    },
    {
        name: "INTERNAL MEDECINE PULMONARY CLINIC",
        address: "227 CHURCH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "PULMONARY",
        phone: null,
        criteria: ['227','CHURCH A','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "PROFESSIONAL CORPORATION",
        address: "353 CHURCH AVE, SUITE A, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-8883',
        criteria: ['353','CHURCH A','SUITE A','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "CHULA VISTA PODIATRY GROUP",
        address: "276 CHURCH AVE, SUITE A, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-427-0311',
        criteria: ['276','CHURCH A','SUITE A','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "DR. MANUEL PUIG-LLANO",
        address: "276 CHURCH AVE SUITE E, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-7290',
        criteria: ['276','CHURCH A','SUITE E','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "DR. MANUEL PUIG-LLANO",
        address: "276 CHURCH AVE SUITE E, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-7290',
        criteria: ['276','CHURCH A','SUITE E','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "MEDIC",
        address: "276 CHURCH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['276','CHURCH A','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "EASTLAKE SLEEP CENTER",
        address: "841 KUHN DR , SUITE 201, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: "SLEEP",
        phone: '619-623-3816',
        criteria: ['841','KUHN D','201','CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY PULMONARY",
        address: "841 KUHN DR, SUITE 200, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: "PULMONARY",
        phone: '619-623-3816',
        criteria: ['841','KUHN D','200','CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY PULMONARY",
        address: "841 KUHN DR, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: "PULMONARY",
        phone: '619-623-3816',
        criteria: ['841','KUHN D','CHULA','91917'],
        funding_source:[0]
    },
    {
        name: "SOUTHBAY FAMILY HEALTH & DENTAL CENTER",
        address: "340 E 8TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: "DENTAL",
        phone: '619-434-3200',
        criteria: ['340 E','8TH','NATIONAL','91950'],
        funding_source:[0,1]
    },
    {
        name: "SOUTH BAY URGENT CARE",
        address: "1628 PALM AVE, SAN DIEGO, CA, 92154",
        abbrev: null,
        category: "RADIOLOGY",
        phone: '619-591-9999',
        criteria: ['1628','PALM','DIEGO','92154'],
        funding_source:[0]
    },
    {
        name: "CASTILLEJOS EYE INSTITUTE OPHTHALMOLOGY",
        address: "342 F ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "OPHTHALMOLOGY",
        phone: null,
        criteria: ['342','F','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "CHULA VISTA PERIODONTICS",
        address: "345 F ST, SUITE 240, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "PERIODONTICS",
        phone: null,
        criteria: ['345 F',' ST','240','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "345 F ST, SUITE 100, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-427-3481',
        criteria: ['345 F',' ST','100','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "CVTS MEDICAL GROUP, INC",
        address: "345 F ST, SUITE 200, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-421-1111',
        criteria: ['345 F',' ST','200','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "2765 MAIN ST, SUITE A, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "ALZHEIMER",
        phone: '619-420-1703',
        criteria: ['2765','MAIN ST','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "335 SAXONY RD, ENCINITAS, CA 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['335','SAXONY RD', 'ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "3686 4TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3686','4TH AV', 'DIEGO','92103'],
        funding_source:[0]
    },
    {
        name: "SENIOR DAY CENTER CHULA VISTA - C.V CENTER",
        address: "880 3RD AVE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "SENIOR CARE",
        phone: '619-205-4585',
        criteria: ['880','3RD','CHULA','91911'],
        funding_source:[0,1]
    },
    {
        name: "IHS RADIOLOGY - CHULA VISTA GATEWAY BUILDING",
        address: "333 H ST, SUITE 1095, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "RADIOLOGY",
        phone: '866-558-4320',
        criteria: ['333 H','1095','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "IHS RADIOLOGY",
        address: "333 H ST, SUITE 1005, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "RADIOLOGY",
        phone: null,
        criteria: ['333 H','1005','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SAN YSIDRO HEALTH URGENT CARE",
        address: "333 H ST, SUITE 2080, CHULA VISTA, CA, 91910 ",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['333 H','2080','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SOUTHERN CALIFORNIA GI & LIVER CENTERS",
        address: "333 H ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['333 H','H ST','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SAN YSIDRO HEALTH CENTER- SAN DIEGO PACE",
        address: "3364 BEYER BLVD,SUITE 102, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: "PACE",
        phone: null,
        criteria: ['3364','BEYER B', '102','92173', 'DIEGO'],
        funding_source:[0,1]
    },
    {
        name: "UCSD MOORE CANCER CENTER ONCOLOGY OCEAN CLINIC",
        address: "3855 HEALTH SCIENCES DR, LA JOLLA, CA, 92037",
        reference:"3855 HEALTH SCIENCES DR, 1ST FLOOR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: "ONCOLOGY",
        phone: '858-822-6100',
        criteria: ['3855','HEALTH SCIENCES','JOLLA','92037'],
        funding_source:[0]
    },
    {
        name: "HEAD AND NECK SURGERY SPECIALIST",
        address: "3855 HEALTH SCIENCES DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: "SURGERY",
        phone: '858-822-6197',
        criteria: ['3855','HEALTH','SCIENCES','JOLLA', "92037"],
        funding_source:[0]
    },
    {
        name: "SONUS HEARING CARE PROFESSIONALS",
        address: "310 3RD AVE, SUITE  B21A, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "HEARING",
        phone: null,
        criteria: ['310','3RD','21A','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "HEARING AID IMPRESSIONS- SONUS 07",
        address: "310 3RD AVE, SUITE  B21, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "HEARING",
        phone: null,
        criteria: ['310','3RD','21','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "HEARING AID IMPRESSIONS- SONUS 07",
        address: "310 3RD AVE, SUITE  C11, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "HEARING",
        phone: null,
        criteria: ['310','3RD A','11','CHULA', '91910'],
        funding_source:[0]
    },
    {
        name: "SONUS 07",
        address: "310 3RD AVE, SUITE  B12, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "HEARING",
        phone: null,
        criteria: ['310','3RD A','B12','CHULA', '91910'],
        funding_source:[0]
    },
    {
        name: "PUJA CHITKARA MD, RHEUMATOLOGY",
        address: "765 MEDICAL CENTER CT, SUITE 216, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "RHEUMATOLOGY",
        phone: '619-623-3000',
        criteria: ['765','MEDICAL C','216', 'CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "765 MEDICAL CENTER CT, SUITE 211, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-616-2100',
        criteria: ['765','MEDICAL C','211', 'CHULA','91911'],
        funding_source:[0]
    },   
    {
        name: "SHARP CHULA VISTA",
        address: "765 MEDICAL CENTER CT, SUITE 205, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['765','MEDICAL C','205', 'COURT','91911'],
        funding_source:[0]
    },
    {
        name: "EAR, NOSE, & THROAT ASSOCIATES OF SAN DIEGO",
        address: "765 MEDICAL CENTER CT, SUITE 210, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-482-0565',
        criteria: ['765','MEDICAL C','210', 'CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO IMAGING MEDICAL GROUP - SHARP CHULA VISTA",
        address: "765 MEDICAL CENTER CT, SUITE 100, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "IMAGING",
        phone: '619-397-6577',
        criteria: ['765','MEDICAL C','100', 'CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SHARP CHULA VISTA",
        address: "765 MEDICAL CENTER CT, SUITE 200, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-502-5935',
        criteria: ['765','MEDICAL C','200', 'CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO IMAGING MEDICAL GROUP - SHARP CHULA VISTA",
        address: "765 MEDICAL CENTER CT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "IMAGING",
        phone: null,
        criteria: ['765','MEDICAL C','R C', 'CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "KAFRI HEART & VASCULAR",
        address: "328 HIGHLAND AVE, SUITE 200, EL CAJON, CA, 92020",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-930-9404',
        criteria: ['328','HIGHLAND','200','CAJON','92021'],
        funding_source:[0]
    },
    {
        name: "KAFRI HEART & VASCULAR, HASSAN KAFRI, MD",
        address: "429 BROADWAY, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-434-0204',
        criteria: ['429','BROADWAY','91910','CHULA'],
        funding_source:[0]
    },
    {
        name: "SYNOVATION MEDICAL GROUP",
        address: "340 4TH AVE, SUITE  19, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','4TH AV',' 19','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "BALBOA NEPHROLOGY",
        address: "340 4TH AVE , SUITE 4, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "NEPHROLOGY",
        phone: null,
        criteria: ['340','4TH AV',' 4','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "FRESENIUS DIALYSIS",
        address: "340 4TH AVE , SUITE 18, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','4TH AV',' 18','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO COASTAL ENDOCRINOLOGY",
        address: "340 4TH AVE, SUITE 7A, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ENDOCRINOLOGY",
        phone: '619-691-0388',
        criteria: ['340','4TH AV','7A','CHULA','91910'],
                funding_source:[0]
    },
    {
        name: "CARDIOLOGY",
        address: "340 4TH AVE, SUITE  11, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '',
        criteria: ['340','FOURTH A','11','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "480 4TH AVE, SUITE  101, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','FOURTH','101','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "ONCOLOGY DR. ITURBE",
        address: "480 4TH AVE , SUITE 409, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ONCOLOGY",
        phone: '619-425-2080',
        criteria: ['480','4TH','409','CHULA','91910'],
        funding_source:[0]
    },
    {  
        name: "WILLIAM EVES, MD",
        address: "480 4TH AVE, SUITE 307, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-426-3240',
        criteria: ['480','4TH',' 307','CHULA','91910'],
        funding_source:[0]
    },
    {  
        name: "SDPMG JOHNSON, MARK",
        address: "480 4TH AVE, SUITE 506, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-0313',
        criteria: ['480','4TH',' 506','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "480 4TH AVE, SUITE 501, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ORTHOPEDIC",
        phone: '619-425-9510',
        criteria: ['480','4TH','501','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "CC/MV GUSTAVO MONDRAGON, MD ",
        address: "480 4TH AVE, SUITE 500 CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-656-5252',
        criteria: ['480','4TH','500','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "THE EYE INSTITUTE OF CALIFORNIA",
        address: "480 4TH AVE, SUITE 201, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "OFTHALMOLOGY",
        phone: '619-427-3355',
        criteria: ['480','4TH A','201','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "DR.DUQUE",
        address: "480 4TH AVE, SUITE 4004, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','4TH A','4004','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SCRIPPS MERCY HOSPITAL CHULA VISTA",
        address: "480 4TH AVE SUITE 316 CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','4TH A','316','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY SURGICAL ASSOCIATES",
        address: "480 4TH AVE, SUITE 404, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','FOURTH A','404','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "480 4TH AVE, SUITE 12, CHULA VISTA , CA, 91910 ",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','4TH AV','12','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY SURGICAL ASSOCIATES ",
        address: "480 4TH AVE, CHULA VISTA , CA, 91910 ",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','FOURTH AV','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "610 EUCLID AVE, SUITE 301, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: "PODOLOGY",
        phone: '619-427-3481',
        criteria: ['610','EUCLID A','301','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "610 EUCLID AVE, SUITE 201, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['610','EUCLID A','201','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "AMBULATORY SURGICAL CENTER/Euclid Endoscopy Center",
        address: "286 EUCLID AVE, SUITE 109, SAN DIEGO, CA, 92114",
        abbrev: null,
        category: "SURGERY",
        phone: '619-266-3332',
        criteria: ['286','EUCLID A','109','DIEGO','92114'],
        funding_source:[0,1]
    },
    {
        name: "EUCLID FAMILY COUNSELING CENTER/Euclid Endoscopy Center",
        address: "286 EUCLID AVE, SUITE 302, SAN DIEGO, CA, 92114",
        abbrev: null,
        category: "COUNSELING",
        phone: '619-662-4100',
        criteria: ['286','EUCLID A','302','DIEGO','92114'],
        funding_source:[0,1]
    },
    {
        name: "CHULA VISTA MEDICAL PLAZA",
        address: "678 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "URGENT CARE",
        phone: '619-662-4100',
        criteria: ['678','3RD AV','CHULA','91910'],
        funding_source:[0,1]
    },
    {
        name: "JOHN VIDEEN, MD",
        address: "752 MEDICAL CENTER COURT, SUITE 302, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "NEPHROLOGY",
        phone: '619-421-3361',
        criteria: ['752','MEDICAL C','302','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SHARP CHULA VISTA REHAB",
        address: "752 MEDICAL CENTER COURT, SUITE 303, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "REHAB",
        phone: '619-591-7900',
        criteria: ['752','MEDICAL C','303','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SHARP CHULA VISTA REHAB",
        address: "752 MEDICAL CENTER COURT, SUITE 207, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "REHAB",
        phone: '619-591-7900',
        criteria: ['752','MEDICAL C','207','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "BALBOA NEPHROLOGY--SHARP HOSPITAL",
        address: "752 MEDICAL CENTER COURT, SUITE 301, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "NEPHROLOGY",
        phone: '619-421-3361',
        criteria: ['752','MEDICAL C','301','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SHARP CHULA VISTA",
        address: "752 MEDICAL CENTER COURT, SUITE 200, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "REHAB",
        phone: '619-591-7900',
        criteria: ['752','MEDICAL C','200','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SHARP CHULA VISTA",
        address: "752 MEDICAL CENTER COURT, SUITE 101, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['752','MEDICAL C','101','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SHARP CHULA VISTA",
        address: "752 MEDICAL CENTER COURT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "REHAB",
        phone: '619-591-7900',
        criteria: ['752','MEDICAL C','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "UCSD UROLOGY",
        address: "321 E ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "UROLOGY",
        phone: null,
        criteria: ['321 E','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "CALIFORNIA RETINA ASSOCIATES",
        address: "835 THIRD AVE, SUITE A, CHULA VISTA , CA, 91911",
        abbrev: null,
        category: "OPHTHALMOLOGY",
        phone: '619-425-7755',
        criteria: ['835','THIRD','SUITE A','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SURGERY CENTER OF CALIFORNIA",
        address: "835 THIRD AVE SUITE B/C CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['835','THIRD',' B','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "CALIFORNIA RETINA ASSOCIATES",
        address: "835 3RD AVE, SUITE C, CHULA VISTA , CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['835','THIRD',' C','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SAN YSIDRO HEALTH EL CAJON",
        address: "875 EL CAJON BLVD, EL CAJON, CA, 92020",
        abbrev: null,
        category: "SAN YSIDRO HEALTH",
        phone: '619-662-4100',
        criteria: ['875','CAJON','BLVD','92020'],
        funding_source:[0]
    },
    {
        name: "DR.MENDEL",
        address: "4168 FRONT ST, SUITE 106, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: "PULMONARY",
        phone: null,
        criteria: ['4168','FRONT S','106','DIEGO', '92103'],
        funding_source:[0]
    },
    {
        name: "HILLCREST - ON CAMPUS - OUTPATIENT HOSPITAL",
        address: "4168 FRONT ST, SUITE 4, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4168','FRONT S',' 4','DIEGO','92173'],
        funding_source:[0]
    }, 
    {
        name: "UCSD PULMONARY/UC SAN DIEGO HEALTH MEDICAL OFFICES SOUTH",
        address: "4168 FRONT ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-543-5840',
        criteria: ['4168','FRONT S','DIEGO','92103'],
        funding_source:[0]
    },
    {
        name: "DENTAL SYHC",
        address: "4004 BEYER BLVD, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: "DENTAL",
        phone: '619-662-4100',
        criteria: ['4004','BEYER','YSIDRO','92173'],
        funding_source:[0,1]
    },
    {
        name: "SOUTH BAY WOUND CARE",
        address: "1111 BROADWAY AVE, SUITE 305, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "VASCULAR",
        phone: '619-567-7007',
        criteria: ['1111','BROADWAY A','305','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY WOUND CARE",
        address: "1111 BROADWAY AVE, SUITE 104, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "VASCULAR",
        phone: '619-567-7007',
        criteria: ['1111','BROADWAY','104','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "HEART & WELLNES",
        address: "750 MEDICAL CENTER CT , SUITE 3, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-434-428',
        criteria: ['750','MEDICAL C',' 3','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SDPMG ONCOLOGY",
        address: "750 MEDICAL CENTER COURT, SUITE 9, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'ONCOLOGY',
        phone: '619-421-6922',
        criteria: ['750','MEDICAL C','SUITE 9','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "UROLOGY DR SEVILLA",
        address: "750 MEDICAL CENTER CT SUITE 14, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'UROLOGY',
        phone: null,
        criteria: ['750','MEDICAL C',' 14','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "750 MEDICAL CENTER CT, SUITE 101, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['750','MEDICAL C','101','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "750 MEDICAL CENTER COURT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['750','MEDICAL C','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO ACCESS CARE/SOUTHERN CALIFORNIA VEIN CARE",
        address: "995 GATEWAY CENTER WAY, SUITE 207, SAN DIEGO, CA, 92102",
        abbrev: null,
        category: 'VASCULAR',
        phone: '619-263-9729',
        criteria: ['995','GATEWAY C','207','DIEGO','92102'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "995 GATEWAY CENTER WAY, SUITESUITE  209, SAN DIEGO , CA, 92102",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['995','GATEWAY C','209','DIEGO','92102'],
        funding_source:[0]
    },    
    {
        name: "UROLOGY",
        address: "3444 KEARNY VILLA RD, SUITE 202, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'UROLOGY',
        phone: '858-429-7646',
        criteria: ['3444','KEARNY','VILLA R','DIEGO','92123','202'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "3444 KEARNEY VILLA ROAD, SUITE 400, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3444','KEARNY','VILLA R','DIEGO','92123','400'],
        funding_source:[0]
    },
    {
        name: "DR. VAPNEK: GENESIS HEALTHCARE UROLOGY KEARNY MESA",
        address: "3444 KEARNY VILLA RD, SUITE 20, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'UROLOGY',
        phone: '858-429-7646',
        criteria: ['3444','KEARNY','VILLA R','SD','92123','20'],
        funding_source:[0]
    },
    {
        name: "SYNERGY ORTHOPEDIC SPECIALISTS MEDICAL GROUP",
        address: "3444 KEARNY VILLA RD, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'ORTHOPEDIC',
        phone: '619-421-3400',
        criteria: ['3444','KEARNY','VILLA R','DIEGO','92123'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO VASCULAR ACCESS CENTER",
        address: "6402 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: 'VASCULAR',
        phone: '619-582-4490',
        criteria: ['6402','CAJON B','DIEGO','92115'],
        funding_source:[0]
    },
    {
        name: "SOUTH COUNTY HEMATOLOGY & ONCOLOGY, KENNETH JOHNSON, MD",
        address: "769 MEDICAL CENTER CT, SUITE 202, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'HEMATOLOGY & ONCOLOGY',
        phone: '619-482-8430',
        criteria: ['769','MEDICAL C','202','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "MEDIC",
        address: "769 MEDICAL CENTER CT,CHULA VISTA,CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['769','MEDICAL C','CHULA','91911','R C'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO ARTHRITIS MEDICAL CLINIC",
        address: "3633 CAMINO DEL RIO SOUTH, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: 'ARTHRITIS',
        phone: '619-287-9730',
        criteria: ['3633','CAMINO','RIO','DIEGO','92108'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO FAMILY DERMATOLOGY",
        address: "655 EUCLID AVE, SUITE 401, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-267-8303',
        criteria: ['655','EUCLID A','401','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "BALBOA NEPHROLOGY",
        address: "655 EUCLID AVE, SUITE 303, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'NEPHROLOGY',
        phone: '619-267-8303',
        criteria: ['655','EUCLID A','303','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "CARDIOLOGY OF SOUTHERN CALIFORNIA",
        address: "655 SOUTH EUCLID AVE, SUITE 304, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-267-8303',
        criteria: ['655 S','EUCLID AV','304','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "HEIDRUN GOLLOGLY, MD",
        address: "655 SOUTH EUCLID AVE, SUITE  302, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['655 S','EUCLID AV','302','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "655 EUCLID AVE, SUITE 206, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['655','EUCLID AV','206','NATIONAL','91950'],
        funding_source:[0] 
    },
    {
        name: "SAN DIEGO FAMILY DERMATOLOGY",
        address: "655 EUCLID AVE , SUITE 301, NATIONAL CITY , CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['655','EUCLID AV','301','NATIONAL','91950'],
        funding_source:[0] 
    },
    {
        name: "BALBOA NEPHROLOGY MEDICAL GROUP",
        address: "655 EUCLID AVE ,NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['655','EUCLID AV','NATIONAL','91950'],
        funding_source:[0] 
    },
    {
        name: "IMAGING HEALTHCARE SPECIALISTS IHS - ALVARADO COURT",
        address: "6386 ALVARADO COURT, SUITE 121, SAN DIEGO, CA, 92120",
        abbrev: null,
        category: 'IMAGING',
        phone: '866-558-4320',
        criteria: ['6386','ALVARADO C','121','DIEGO','92120'],
        funding_source:[0]
    },
    {
        name: "HEART AND WELLNESS",
        address: "502 EUCLID AVE, SUITE 302, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'IMAGING',
        phone: '619-434-4288',
        criteria: ['502','EUCLID A',' 302','3RD','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "HEART AND WELLNESS",
        address: "502 EUCLID AVE, SUITE 104, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'IMAGING',
        phone: '619-434-4288',
        criteria: ['502','EUCLID A','104','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "HEART AND WELLNESS",
        address: "502 EUCLID AVE, SUITE 102, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['502','EUCLID A','102','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "NANCY LY, MD",
        address: "502 EUCLID AVE, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['502','EUCLID A','NATIONAL','91950'],
        funding_source:[0]
    },
    {
        name: "DTR. HOUSE",
        address: "3987 BATEMAN AVE, EXT 2120, SAN DIEGO, CA, 92154",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3987','BATEMAN A','2120','DIEGO','92154'],
        funding_source:[0]
    },
    {
        name: "CARDIOVASCULAR INSTITUTE",
        address: "300 SOUTH PIERCE ST, SUITE 201, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: '619-668-4700',
        criteria: ['300 S','PIERCE','201','CAJON','92020'],
        funding_source:[0]
    },
    {
        name: "CARDIOVASCULAR INSTITUTE",
        address: "300 SOUTH PIERCE ST, SUITE 102, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['300 S','PIERCE','102','CAJON','92020'],
        funding_source:[0]
    },
    {
        name: "KING CHAVES HEALTH CENTER",
        address: "950 EUCLID AVE, SAN DIEGO, CA, 92114",
        abbrev: null,
        category: null,
        phone: '619-662-4100',
        criteria: ['950','EUCLID A','DIEGO','92114'],
        funding_source:[0,1]
    },
    {
        name: "COASTAL MEDICAL & COSMETIC DERMATOLOGY INC.",
        address: "890 EASTLAKE PARKWAY, SUITE 102, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-754-6869',
        criteria: ['890','EASTLAKE P','102','CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "CARDIOLOGY",
        address: "890 EASTLAKE PARKWAY, SUITE 205, CHULA VISTA, CA, 91914 ",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-482-0300',
        criteria: ['890','EASTLAKE P','205','CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "COASTAL MEDICAL & COSMETIC DERMATOLOGY INC.",
        address: "890 EASTLAKE PARKWAY, SUITE 202, CHULA VISTA, CA, 91914 ",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-754-6869',
        criteria: ['890','EASTLAKE P','202','CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "IHS RADIOLOGY - HILLCREST",
        address: "150 W WASHINGTON ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '866-558-4320',
        criteria: ['150 W','WASHINGTON S','DIEGO','92103'],
        funding_source:[0]
    },
    {
        name: "SOUTHERN CALIFORNIA GI & LIVER CENTER",
        address: "256 LANDIS AVE, SUITE 202, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-332-1221',
        criteria: ['256','LANDIS A','202','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "ALBERT SHARF, MD",
        address: "1240 BROADWAY, SUITE 210, EL CAJON, CA, 92021",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-470-7700',
        criteria: ['1240','BROADWAY','210','CAJON','92021'],
        funding_source:[0]
    },
    {
        name: "NEUROLOGY GRISOLIA JAMES",
        address: "4033 3RD AVE, SUITE 410, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-294-9292',
        criteria: ['4033','THIRD A','410','DIEGO','92103'],
        funding_source:[0]
    },
    {
        name: "SUDHIR MALIK, APMC",
        address: "4033 3RD AVE, SUITE 420, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-294-9292',
        criteria: ['4033','THIRD A','420','DIEGO','92103'],
        funding_source:[0]
    },
    {
        name: "SCRIPPS HEALTH CLINIC",
        address: "4033 3RD AVE, SUITE 210, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-297-5600',
        criteria: ['4033','3RD A','210','DIEGO','92103'],
        funding_source:[0]
    },
    {
        name: "DIGESTIVE DISEASE ASSOCIATES INC.",
        address: "2732 NAVAJO ROAD, SUITE 100, EL CAJON, CA, 92020",
        abbrev: null,
        category: 'COLONOSCOPY',
        phone: '619-598-0448',
        criteria: ['2732','NAVAJO R','100','CAJON','92020'],
        funding_source:[0]
    },
    {
        name: "GASTROENTEROLOGY",
        address: "2732 NAVAJO RD, SUITE 200, EL CAJON, CA, 92020",
        abbrev: null,
        category: 'GASTROENTEROLOGY',
        phone: '619-332-3281',
        criteria: ['2732','NAVAJO R','200','CAJON','92020'],
        funding_source:[0]
    },
    {
        name: "CALIFORNIA RETINA ASSOCIATES",
        address: "1520 EAST PLZ BLVD, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: '619-425-7755',
        criteria: ['1520 E','NATIONAL','91950', ' P'],
        funding_source:[0]
    },
    {
        name: "CLEAR VISION OPTOMETRY",
        address: "440 4TH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'OPTOMETRY',
        phone: '619-427-2020',
        criteria: ['440','4TH','CHULA', '91910'],
        funding_source:[0]
    },
    {
        name: "ROSA NAVARRO, MD",
        address: "2452 FENTON ST , SUITE 101, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: '619-600-5309',
        criteria: ['2452','FENTON ST','101', 'CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "ROSA NAVARRO, MD",
        address: "2452 FENTON ST , SUITE 102, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2452','FENTON ST','102', 'CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "2452 FENTON ST , SUITE 203, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2452','FENTON ST','203', 'CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "MICHAEL VERDOLIN, MD",
        address: "2452 FENTON ST , SUITE 205, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2452','FENTON ST','205', 'CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "BIONICS ORTHOTICS & PROSTHETICS",
        address: "3737 MORAGA AVE, SUITE B-107, SAN DIEGO , CA, 92117",
        abbrev: null,
        category: 'ORTHOTICS & PROSTHETICS',
        phone: '858-270-9972',
        criteria: ['3737','MORAGA AV','B-107', 'DIEGO','92117'],
        funding_source:[0]
    },
    {
        name: "BIONICS ORTHOTICS & PROSTHETICS",
        address: "3737 MORAGA AVE, SUITE A 206, SAN DIEGO , CA, 92117",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3737','MORAGA AV','206', 'DIEGO','92117'],
        funding_source:[0]
    },
    {
        name: "BIONICS ORTHOTICS & PROSTHETICS",
        address: "3737 MORAGA AVE, SAN DIEGO , CA, 92117",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3737','MORAGA A', 'DIEGO','92117'],
        funding_source:[0]
    },
    {
        name: "SURGERY CENTER OF SAN DIEGO",
        address: "3434 MIDWAY DR, SUITE 1008, SAN DIEGO, CA, 92110",
        abbrev: null,
        category: 'SURGERY',
        phone: '858-750-4800',
        criteria: ['3434','MIDWAY D','1008', 'DIEGO','92110'],
        funding_source:[0]
    },
    {
        name: "SURGERY CENTER OF SAN DIEGO",
        address: "3434 MIDWAY DR, SUITE 2001, SAN DIEGO, CA, 92110",
        abbrev: null,
        category: 'SURGERY',
        phone: '858-750-4800',
        criteria: ['3434','MIDWAY D','2001', 'DIEGO','92110'],
        funding_source:[0]
    },
    {
        name: "DR.RICHARDSON",
        address: "3434 MIDWAY DR, SUITE 2004, SAN DIEGO, CA, 92110",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3434','MIDWAY D','2004', 'DIEGO','92110'],
        funding_source:[0]
    },
    {
        name: "CALIFORNIA ORTHOPEDIC INSTITUTE MEDICAL ASSOC., INC",
        address: "7485 MISSION VALLEY RD, SUITE 104 A, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: 'ORTHOPEDIC',
        phone: '619-291-8930',
        criteria: ['7485','MISSION V','VALLEY R', '104 A','DIEGO','92108'],
        funding_source:[0]
    },
    {
        name: "CALIFORNIA ORTHOPEDIC INSTITUTE MEDICAL ASSOC. INC.",
        address: "7485 MISSION VALLEY RD, SUITE 103, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: null,
        phone: '619-297-8930',
        criteria: ['7485','MISSION V','VALLEY R', '103','92108', 'DIEGO'],
        funding_source:[0]
    },
    {
        name: "SOUTHERN CALIFORNIA LIVER AND GI CENTER",
        address: "303 H ST, SUITE 103, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'LIVER',
        phone: '619-291-8930',
        criteria: ['303 H','H ST','103', 'CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SOUTHERN CALIFORNIA LIVER AND GI CENTER",
        address: "303 H ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'LIVER',
        phone: '619-522-0933',
        criteria: ['303 H','H ST', 'CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SCRIPPS MEMORIAL HOSPITAL",
        address: "435 H ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'COLONOSCOPY',
        phone: null,
        criteria: ['435 H','H ST', 'CHULA','91910'],
        funding_source:[0]

    },
    {
        name: "ENDOSCOPY ALFA SURGERY CENTER",
        address: "400 E ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'ENDOSCOPY',
        phone: null,
        criteria: ['400','E ST', 'CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "DESTA DIGESTIVE DISEASES CV",
        address: "296 H ST, SUITE 301, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'DIGESTIVE',
        phone: '619-266-3332',
        criteria: ['296 H','H ST', '301','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "DESTA DIGESTIVE DISEASES CV",
        address: "296 H ST, SUITE 303, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'DIGESTIVE',
        phone: '619-266-3332',
        criteria: ['296 H','H ST', '303','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "UROGRAM",
        address: "8860 GROSSMONT CENTER DR, LA MESA, CA, 91942",
        abbrev: null,
        category: 'UROLOGY',
        phone: null,
        criteria: ['8860','GROSSMONT C', ' DR','MESA','91942'],
        funding_source:[0]
    },
    {
        name: "DR ROKAY KAMYAR",
        address: "8860 CENTER DR, SUITE 330, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-460-4055',
        criteria: ['8860','R D', ' C','MESA','91942', '330'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "8860 CENTER DR, SUITE  400, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8860','R D', 'CENTER','MESA','91942', '400'],
        funding_source:[0]
    },
    {
        name: "NOT AVAILABLE",
        address: "8860 CENTER DR, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8860','R D', 'CENTER','MESA','91942'],
        funding_source:[0]
    },
    {
        name: "ALFA SURGICAL CENTER",
        address: "256 LANDIS AVE, SUITE 100, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'SURGERY',
        phone: '619-621-2622',
        criteria: ['256','LANDIS A', '100','CHULA','91910'],
        funding_source:[0]
    },
    {
        name: "SHARP CHULA VISTA",
        address: "751 MEDICAL CENTER COURT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-502-5935',
        criteria: ['751','MEDICAL C', 'CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "SHARP OPHTHALMOLOGISTS",
        address: "8851 CENTER DR, SUITE 406, LA MESA, CA, 91942",
        abbrev: null,
        category: 'OPHTHALMOLOGY',
        phone: '619-425-7755',
        criteria: ['8851','CENTER D', '406','MESA','91942'],
        funding_source:[0]
    },
    {
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "8851 CENTER DR, SUITE 601, LA MESA, CA, 91942",
        abbrev: null,
        category: 'ORTHOPEDIC',
        phone: '619-441-9811',
        criteria: ['8851','CENTER D', '601','MESA','91942'],
        funding_source:[0]
    },    
    {
        name: "GENESIS HEALTHCARE PARTNERS LA MESA",
        address: "8851 CENTER DR, SUITE 501, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-697-2456',
        criteria: ['8851','CENTER D', '501','MESA','91942'],
        funding_source:[0]
    },
    {
        name: "EAST COUNTY NEUROLOGY ASSOCIATES, INC.",
        address: "8851 CENTER DR, SUITE 307, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-337-7900',
        criteria: ['8851','CENTER D', '307','MESA','91942'],
        funding_source:[0]
    },
    {
        name: "US OF THE HEART & F/U",
        address: "8851 CENTER DR, SUITE 304, LA MESA, CA, 91942",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-687-0557',
        criteria: ['8851','CENTER D', '304','MESA','91942'],
        funding_source:[0]
    }, 
    {
        name: "NOT AVAILABLE",
        address: "8851 CENTER DR, SUITE 600, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-740-5731',
        criteria: ['8851','CENTER D', '600','MESA','91942'],
        funding_source:[0]
    },
    {
        name: "AMERICAN EYE ASSOCIATES",
        address: "8851 CENTER DR, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-425-775',
        criteria: ['8851','CENTER D','MESA','91942'],
        funding_source:[0]
    },
    { 
        name: "DENTAL GROUP PALOMAR",
        address: "664 PALOMAR ST, SUITE 1103, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'DENTAL',
        phone: null,
        criteria: ['664','PALOMAR S', '1103','CHULA','91911'],
        funding_source:[0]
    },
    {
        name: "NEUROLOGY",
        address: "4033 3RD AVE, SUITE 410, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-297-1155',
        criteria: ['4033','3RD A','410','DIEGO','92103'],
        funding_source:[0]
    },
    {
        name: "COMMUNITY HEIGHTS FAMILY MEDICINE",
        address: "4690 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4690','CAJON B','DIEGO','92115'],
        funding_source:[0,1]
    },
    {
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "1625 E MAIN ST, SUITE 201, EL CAJON, CA, 92021",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['1625 E','MAIN S','CAJON',' 201','92021'],
        funding_source:[0]
    },
    {
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "1625 E MAIN ST, SUITE 100, EL CAJON, CA, 92021",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['1625 E','MAIN S','CAJON','100','92021'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO SPINE & SPORT",
        address: "1625 E MAIN ST, SUITE 104, EL CAJON, CA, 92021",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['1625 E','MAIN S','CAJON','104','92021'],
        funding_source:[0]
    },
    {
        name: "SONUS 07",
        address: "5565 GROSSMONT CENTER DR, SUITE 3-444, LA MESA, CA, 91942",
        abbrev: null,
        category: 'HEARING',
        phone: '619-464-3353',
        criteria: ['5565','GROSSMONT','CENTER D','444', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "SONUS 07",
        address: "5565 GROSSMONT CENTER DR, SUITE 101, LA MESA, CA, 91942",
        abbrev: null,
        category: 'HEARING',
        phone: '619-464-3353',
        criteria: ['5565','GROSSMONT','CENTER D','101', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "SONUS 07",
        address: "5565 GROSSMONT CENTER DR, SUITE 154, LA MESA, CA, 91942",
        abbrev: null,
        category: 'HEARING',
        phone: '619-464-3353',
        criteria: ['5565','GROSSMONT','R D','154', 'MESA', '91942'],
        funding_source:[0]
    },  
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "5565 GROSSMONT CENTER DR, SUITE 510, LA MESA, CA, 91942",
        abbrev: null,
        category: 'PODIATRY',
        phone: '619-303-7130',
        criteria: ['5565','GROSSMONT','R D',' 3','510', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "EYE ASSOCIATES OF SAN DIEGO & ACUITY EYE GROUP",
        address: "5565 GROSSMONT CENTER DR, SUITE 551, LA MESA, CA, 91942",
        abbrev: null,
        category: 'PODIATRY',
        phone: '619-303-7130',
        criteria: ['5565','GROSSMONT C','R D','551', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "SONUS",
        address: "5565 GROSSMONT CENTER DR, SUITE 463, LA MESA, CA,91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5565','GROSSMONT C','R D','463', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "GROSSMONT SURGICAL ASSOCIATES",
        address: "5565 GROSSMONT CENTER DR, SUITE 221, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5565','GROSSMONT C','R D','221', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "ORTHO - DR. STEVEN ALLSING",
        address: "5565 GROSSMONT CENTER DR, SUITE 1-112, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5565','GROSSMONT C','R D','112', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "GASTROENTEROLOGIST",
        address: "5565 GROSSMONT CENTER DR, SUITE 1-227, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5565','GROSSMONT C','R D','227', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "JERRY M. FABRIKANT",
        address: "5565 GROSSMONT CENTER DR, SUITE 353, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5565','GROSSMONT C','R D','353', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "GROSSMONT SLEEP STUDY CENTER",
        address: "5525 GROSSMONT CENTER DR, SUITE 609, LA MESA, CA, 91942",
        reference:null,
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5525','GROSSMONT C','R D','609', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "5565 GROSSMONT CENTER DR, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5565','GROSSMONT C','R D', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "GROSSMONT CENTER",
        address: "5525 GROSSMONT CENTER DR, LA MESA, CA, 91942",
        reference:null,
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5525','GROSSMONT C','R D', 'MESA', '91942'],
        funding_source:[0]
    },
    {
        name: "SAN DIEGO FAMILY DERMATOLOGY",
        address: "292 AVOCADO AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: ' 619-579-5115',
        criteria: ['292','AVOCADO A','CAJON','92020'],
        funding_source:[0]
    },
    {  
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DR, SUITE 1300, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: 'UROLOGY',
        phone: null,
        criteria: ['9400','CAMPUS','POINT D','1300','JOLLA','200'],
        funding_source:[0]
    },
    {  
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DR, SUITE 200, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: 'UROLOGY',
        phone: null,
        criteria: ['9400','CAMPUS','POINT D','92093','JOLLA','200'],
        funding_source:[0]
    },
    {  
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DR, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858 657-8200',
        criteria: ['9400','CAMPUS','POINT D','92037','JOLLA'],
        funding_source:[0]
    },
    {  
        name: "UC SAN DIEGO",
        address: "9300 CAMPUS POINT DR, SUITE 1-001, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '619-543-1998',
        criteria: ['9300','CAMPUS','POINT D','92037','SUITE 1','001','JOLLA'],
        funding_source:[0]
    },
    {  
        name: "UC SAN DIEGO",
        address: "9300 CAMPUS POINT DR, SUITE 1-300, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9300','CAMPUS','POINT D','92039','SUITE 1','300','JOLLA'],
        funding_source:[0]
    },
    {  
        name: "UC SAN DIEGO",
        address: "9300 CAMPUS POINT DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '619-543-1998',
        criteria: ['9300','CAMPUS','POINT D','92037','JOLLA'],
        funding_source:[0]
    },
    { 
        name: "GYNECOLOGY-MATERNAL & CHILD HEALTH CENTER",
        address: "4050 BEYER BOULEVARD, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: 'ADVANCE IMAGING',
        phone: '619-662-4100',
        criteria: ['4050','BEYER B','YSIDRO','92173'],
        funding_source:[0,1]
    },
    { 
        name: "GRIMALDI CENTER",
        address: "450 4TH AVE, SUITE 312, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'AESTHETICS',
        phone: '619-420-0201',
        criteria: ['450','FOURTH A','312','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS MERCY REHABILITATION SERVICES",
        address: "450 4TH AVE, SUITE 212, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-862-6652',
        criteria: ['450','4TH AV','212','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NEUROLOGY CVA- THE NEURON CLINIC",
        address: "450 4TH AVE, SUITE 215, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-862-6652',
        criteria: ['450','4TH AV','215','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NEUROLOGY ROBERTO GRATIANNE, MD",
        address: "450 4TH AVE, SUITE 214, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['450','FOURTH AV','214','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NEUROLOGY ROBERTO GRATIANNE, MD",
        address: "450 4TH AVE, SUITE 401, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['450','4TH AV','401','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NEUROLOGY ROBERTO GRATIANNE, MD",
        address: "450 4TH AVE, SUITE 200, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['450','FOURTH AV','200','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "9350 CAMPUS POINT DR, SUITE D1, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','D1','DIEGO','92037'],
        funding_source:[0]
    },
    { 
        name: "KIKAWA- UCSD",
        address: "9350 CAMPUS POINT DR, SUITE 1A, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: null,
        criteria: ['9350','CAMPUS D','1A','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "9350 CAMPUS POINT DR, SUITE LLC, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','LLC','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "UCSD DEPT. OF NEUROLOGY",
        address: "9350 CAMPUS POINT DR, SUITE 2A, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','2A','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "UCSD DEPT. OF NEUROLOGY",
        address: "9350 CAMPUS POINT DR, SUITE 2C, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','2C','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "9350 CAMPUS POINT DR, SUITE A, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858 657-8590',
        criteria: ['9350','CAMPUS','POINT D',' A','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "9350 CAMPUS POINT DR, SUITE D, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','E D','JOLLA','92903'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "9350 CAMPUS POINT DR, SUITE 2B1, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','2B1','JOLLA','92057'],
        funding_source:[0]
    },
    { 
        name: "SHILEY EYE INSTITUTE",
        address: "9350 CAMPUS POINT DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858 657-6905',
        criteria: ['9350','CAMPUS','POINT D','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "UCSD-HILLCREST EYE CLINIC OPTOMETRY",
        address: "4060 4TH AVE, SUITE 610, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'OPTOMETRY',
        phone: null,
        criteria: ['4060','4TH AV','610','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "UROLOGY HILLCREST",
        address: "4060 4TH AVE, SUITE 310, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'UROLOGY',
        phone: '619-297-4707',
        criteria: ['4060','4TH A','310','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "4060 4TH AVE, SUITE 630, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'UROLOGY',
        phone: '619-297-4707',
        criteria: ['4060','FOURTH A','630','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "4060 4TH AVE, SUITE 508, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4060','FOURTH A','508','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "DR. GEORGE ZORN- BARIATRICS",
        address: "4060 4TH AVE, SUITE 330, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-298-9931',
        criteria: ['4060','4TH AV','330','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO ORTHOPAEDIC ASSOCIATES MEDICAL GROUP INC.",
        address: "4060 4TH AVE, SUITE 700, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-299-8500',
        criteria: ['4060','4TH AV','700','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "UC SAN DIEGO HEALTH EYE CARE",
        address: "4060 4TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4060','4TH AV','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "MEDIC",
        address: "587 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['587','THIRD A','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "4520 EXECUTIVE DR, SUITE 32, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4520','EXECUTIVE D','32','DIEGO','92921'],
        funding_source:[0]
    },
    { 
        name: "UCSD UROGYNECOLOGY/UROLOGY, DR. ALBO",
        address: "4520 EXECUTIVE DR, SUITE 360, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: 'UROGYNECOLOGY',
        phone: '858-657-8745',
        criteria: ['4520','EXECUTIVE D','360','DIEGO','92921'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "4520 EXECUTIVE DR, SUITE 1, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4520','EXECUTIVE D','SUITE 1','DIEGO','92121'],
        funding_source:[0]
    }, 
    { 
        name: "PULMONARY UCSD",
        address: "4520 EXECUTIVE DR, SUITE 2, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4520','EXECUTIVE D','SUITE 2','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "UCSD PULMONARY AND SLEEP CLINIC",
        address: "4520 EXECUTIVE DR, SUITE P2, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4520','EXECUTIVE D','P2','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "UCSD PULMONARY AND SLEEP CLINIC",
        address: "4520 EXECUTIVE DR, SUITE T2, SAN DIEGO, CA, 92921",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4520','EXECUTIVE D','T2','DIEGO','92921'],
        funding_source:[0]
    },
    { 
        name: "AMBULATORY SURGICAL CENTER",
        address: "4520 EXECUTIVE DR, SUITE 111, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-657-8860',
        criteria: ['4520','EXECUTIVE DR','111', 'JOLLA','92121'],
        funding_source:[0]
    },
    { 
        name: "UROGYNECOLOGY UCSD",
        address: "4520 EXECUTIVE DR, SAN DIEGO, CA, 921211",
        abbrev: null,
        category: null,
        phone: '858-657-7000',
        criteria: ['4520','EXECUTIVE DR', 'JOLLA','92121'],
        funding_source:[0]
    },
    { 
        name: "MEDIC",
        address: "8008 FROST ST, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8008','FROST S','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "8008 FROST ST, SUITE 100A, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8008','FROST S','DIEGO','92123', '100'],
        funding_source:[0]
    },
    { 
        name: "DR NAYAK",
        address: "501 WASHINGTON ST, SUITE 502, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-297-0014',
        criteria: ['501','WASHINGTON S','502','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS COASTAL MEDICAL CENTER HILLCREST",
        address: "501 WASHINGTON ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['501','WASHINGTON S','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SHILEY EYE INSTITUTE UCSD",
        address: "9415 CAMPUS POINT DR, LA JOLLA, CA, 92093",
        abbrev: null,
        category: null,
        phone: '858-534-6290',
        criteria: ['9415','CAMPUS','POINT D','JOLLA', '92093'],
        funding_source:[0]
    },
    { 
        name: "ENDOSCOPY CENTER OF CHULA VISTA",
        address: "681 3RD AVE, SUITE  B 1015, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'ENDOSCOPY',
        phone: '619-425-2150',
        criteria: ['681','3RD A',' B','1015', 'CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "ENDOSCOPY CENTER OF CHULA VISTA",
        address: "681 3RD AVE, SUITE  B, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'ENDOSCOPY',
        phone: '619-425-2150',
        criteria: ['681','THIRD A',' B', 'CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - POWAY",
        address: "12620 MONTE VISTA ROAD, SUITE  A, POWAY, CA, 92064",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '865-658-6500',
        criteria: ['12620','MONTE','VISTA R',' A', 'POWAY','92064'],
        funding_source:[0]
    },
    { 
        name: "ALEX MERCANDETTI, MD",
        address: "3965 5TH AVE, SUITE 430, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3965','FIFTH A','430', 'DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "RADIATION THERAPY",
        address: "3366 5TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3366','5TH A','DIEGO', '92103'],
        funding_source:[0]
    },
    { 
        name: "UCSD CARDIOLOGY",
        address: "9434 MEDICAL CENTER DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9434','MEDICAL','CENTER D', 'JOLLA','92093'],
        funding_source:[0]
    },
    { 
        name: "S&L MEDICAL GROUP",
        address: "4660 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: '619-516-0097',
        criteria: ['4660','CAJON B','EL', 'DIEGO','92115'],
        funding_source:[0]
    },
    { 
        name: "DENTAL CORPORATION",
        address: "860 JAMACHA RD, SUITE 201, EL CAJON, CA, 92019",
        abbrev: null,
        category: null,
        phone: '619-593-3000',
        criteria: ['860','JAMACHA R','201', 'CAJON','92019'],
        funding_source:[0]
    },
    { 
        name: "DENTAL CORPORATION",
        address: "860 JAMACHA RD, SUITE 201, EL CAJON, CA, 92019",
        abbrev: null,
        category: null,
        phone: '619-593-3000',
        criteria: ['860','JAMACHA R','201', 'CAJON','92019'],
        funding_source:[0]
    },
    { 
        name: "SHARF ALBERT",
        address: "1845 EAST 12TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['1845 E','12 ST','NATIONAL', '91950'],
        funding_source:[0]
    },
    { 
        name: "SLEEP DATA",
        address: "1415 RIDGEBACK RD, SUITE 1, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'SLEEP',
        phone: null,
        criteria: ['1415','RIDGEBACK R',' 1', 'CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO RETINA ASSOCIATES",
        address: "7695 CARDINAL CT, SUITE 100, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'OFTHALMOLOGY',
        phone: '858-609-7100',
        criteria: ['7695','CARDINAL C','100', 'DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "UCSD CARDIOLOGY DEPARTMENT",
        address: "330 LEWIS ST, SUITE 301, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['330','LEWIS S','DIEGO', '92103','301'],
        funding_source:[0]
    },
    { 
        name: "UCSD RADIOLOGY DEPARTMENT",
        address: "330 LEWIS ST, SUITE 202, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['202','LEWIS S','DIEGO', '92103','330'],
        funding_source:[0]
    },
    { 
        name: "UCSD SAN DIEGO HEALTH",
        address: "330 LEWIS ST, SAN DIEGO, CA, 92103", 
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['330','LEWIS S','DIEGO', '92103'],
        funding_source:[0]
    },
    { 
        name: "DENTAL",
        address: "246 F ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-420-3311',
        criteria: ['246','F ST','CHULA', '91910'],
        funding_source:[0]
    },
    { 
        name: "DR. SARJAN PATEL",
        address: "450 FLETCHER PARKWAY, SUITE 112, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: '619-440-5400',
        criteria: ['450','FLETCHER P','112', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "OPHTHALMOLOGY",
        address: "450 FLETCHER PARKWAY, SUITE 302, EL CAJON, CA, 92020",
        abbrev: null,
        category: 'OPHTHALMOLOGY',
        phone: null,
        criteria: ['450','FLETCHER P','302', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "SARJAN PATEL, MD",
        address: "450 FLETCHER PARKWAY, EL CAJON, CA, 92020",
        abbrev: null,
        category: 'OPHTHALMOLOGY',
        phone: null,
        criteria: ['450','FLETCHER P', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "480 N MAGNOLIA AVE, SUITE 103, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480 N','MAGNOLIA AV', '103','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "480 N MAGNOLIA AVE, UNIT 3, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480 N','MAGNOLIA AV', 'UNIT 3','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "SOUTHERN CALIFORNIA GI & LIVER CENTERS",
        address: "463 N MAGNOLIA AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: '619-900-6958',
        criteria: ['463 N','MAGNOLIA AV', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "MAGNOLIA SURGERY CENTER",
        address: "463 N MAGNOLIA AVE, SUITE B, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['463 N','MAGNOLIA AV'," B", 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "MAGNOLIA SURGERY CENTER",
        address: "463 N MAGNOLIA AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['463','MAGNOLIA AVE','CAJON', '92020'],
        funding_source:[0]
    },
    { 
        name: "ADVANCED PODIATRY INSTITUTE",
        address: "590 S MAGNOLIA AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['590 S','MAGNOLIA AV','CAJON','92020'],
        funding_source:[0]
    },   
    { 
        name: "NOT AVAILABLE",
        address: "230 PROSPECT PL, SUITE 250, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['230','PROSPECT P','250', 'CORONADO','92118'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "230 PROSPECT PL, SUITE 230, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['230','PROSPECT P','SUITE 230', 'CORONADO','92118'],
        funding_source:[0]
    },
    { 
        name: "SHARP CORONADO HOSPITAL",
        address: "250 PROSPECT PL, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: '619-522-3600',
        criteria: ['250','PROSPECT P', 'CORONADO','92118'],
        funding_source:[0]
    }, 
    { 
        name: "SHARP COMMUNITY MEDICAL GROUP",
        address: "131 ORANGE AVE, SUITE 101B, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: '619-522-0399',
        criteria: ['131','ORANGE AV','101B', 'CORONADO','92118'],
        funding_source:[0]
    },
    { 
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "9333 GENESEE AVE, SUITE 350 A, SAN DIEGO , CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-455-6460',
        criteria: ['9333','GENESEE AV','350 A','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "9333 GENESEE AVE, SUITE 350 B, SAN DIEGO , CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-455-6460',
        criteria: ['9333','GENESEE AV','350', ' B','DIEGO','92121'],
        funding_source:[0]
    },    
    { 
        name: "DR. MIKE SHIEH/ UROLOGY",
        address: "9333 GENESEE AVE, SUITE 240, SAN DIEGO , CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-657-7876',
        criteria: ['9333','GENESEE AV','240','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "UCSD ONCOLOGY",
        address: "9333 GENESEE AVE, SUITE 320, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-822-6100',
        criteria: ['9333','GENESEE AV','320','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "UCSD ONCOLOGY",
        address: "9333 GENESEE AVE, SUITE 310, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9333','GENESEE AV','310','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "DR. DOWNING, KRISTOPHER",
        address: "9834 GENESEE AVE, SUITE 228, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858-824-1703',
        criteria: ['9834','GENESEE AV','228','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "BALBOA NEPHROLOGY",
        address: "9834 GENESEE AVE, SUITE 312, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEPHROLOGY',
        phone: '858-558-8150',
        criteria: ['9834','GENESEE AV','312','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "LA JOLLA LASER VISION & EYE CENTER & ACUITY EYE",
        address: "9850 GENESEE AVE, SUITE 310,LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9850','GENESEE AV','310','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "MEDICAL & COSMETIC DERMATOLOGY INC. ",
        address: "9850 GENESEE AVE, SUITE 850, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858-657-0267',
        criteria: ['9850','GENESEE AV',' 850','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS AMBULATORY SURGERY CENTER",
        address: "9850 GENESEE AVE, SUITE 100, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9850','GENESEE AV','100','DIEGO','92037'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS AMBULATORY SURGERY CENTER",
        address: "9850 GENESEE AVE, SUITE 100, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9850','GENESEE AV','100','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "9850 GENESEE AVE, SUITE 440, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9850','GENESEE AV','440','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "DAVID COHEN",
        address: "9850 GENESEE AVE, SUITE 940, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9850','GENESEE AV','940','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "DIABETES & ENDOCRINE SPECIALIST-ENDOCRINOLOGY",
        address: "9850 GENESEE AVE, SUITE 470, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9850','GENESEE AV','470','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "XIMED MEDICAL GROUP",
        address: "9850 GENESEE AVE, SUITE 770, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9850','GENESEE AV','770','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP",
        address: "9333 GENESEE AVE, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9333','GENESEE AV','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS MEMORIAL HOSPITAL LA JOLLA",
        address: "9888 GENESEE AVE, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9888','GENESEE AV','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS MEMORIAL HOSPITAL LA JOLLA",
        address: "9898 GENESEE AVE, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'ENDOCRINOLOGY',
        phone: null,
        criteria: ['9898','GENESEE AV','JOLLA', '92037'],
        funding_source:[0]
    },
    { 
        name: "ALBERT LE HUAN",
        address: "5507 EL CAJON BLVD, SUITE C, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: '619-582-1448',
        criteria: ['5507','CAJON B','SUITE C','DIEGO','92115'],
        funding_source:[0]
    },
    { 
        name: "SHEREV, DIMITR",
        address: "1380 EL CAJON BLVD, SUITE 100, EL CAJON, 92020",
        abbrev: null,
        category: null,
        phone: '619-582-1448',
        criteria: ['1380','CAJON B','100','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1380 EL CAJON BLVD, EL CAJON, 92020",
        abbrev: null,
        category: null,
        phone: '619-582-1448',
        criteria: ['1380','CAJON B','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "UCSD NEUROLOGICAL INSTITUTE",
        address: "4510 EXECUTIVE DR, SUITE 325, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '858 657-8540',
        criteria: ['4510','EXECUTIVE D','325','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "UCSD VASCULAR DEPARTMENT",
        address: "4510 EXECUTIVE DR, SUITE 215, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-657-1805',
        criteria: ['4510','EXECUTIVE D','215','DIEGO','92121'],
        funding_source:[0]
    },    
    { 
        name: "UCSD LIVER TRANSPLANT OFFICE",
        address: "4510 EXECUTIVE DR, SUITE P7, LA JOLLA, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-657-7000',
        criteria: ['4510','EXECUTIVE D','P7','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "UCSD HEPATOLOGY",
        address: "4510 EXECUTIVE DR, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '858 657-8540',
        criteria: ['4510','EXECUTIVE DR','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "DR HODGES - PSYCH ASSOCIATES",
        address: "549 ORANGE AVE, CORONADO, CA, 92118",
        abbrev: null,
        category: 'PSYCHOLOGY',
        phone: '619-996-3195',
        criteria: ['549','ORANGE AV','CORONADO','92118'],
        funding_source:[0]
    },
    { 
        name: "NEUROLOGY UCSD-MEMORY DISORDER CLINIC",
        address: "9444 MEDICAL CENTER DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '858-657-8540',
        criteria: ['9444','MEDICAL','R D','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "SY DENTAL COMPREHENSIVE HEALTH CENTER OCEAN VIEW",
        address: "3177 OCEAN VIEW BLVD, SAN DIEGO, CA, 92113",
        abbrev: null,
        category: 'DENTAL',
        phone: null,
        criteria: ['3177','OCEAN','VIEW B','DIEGO','92113'],
        funding_source:[0,1]
    },
    { 
        name: "FRIENDSHIP MANOR",
        address: "902 EUCLID AVE, NATIONAL CITY, CA ,91950",
        abbrev: null,
        category: null,
        phone: '619-791-7700',
        criteria: ['902','EUCLID A','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "DR. RODOLFO ARCOBEDO",
        address: "786 3RD AVE , SUITE B, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-425-0797',
        criteria: ['786','3RD AV',' B','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "DR. ASA MORTON",
        address: "3939 3RD AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-243-0663',
        criteria: ['3939','3RD AV','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "550 WASHINGTON ST , SUITE 641, SAN DIEGO , CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['550','WASHINGTON ST','641','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS MERCY SURGERY PAVILION",
        address: "550 WASHINGTON ST, SUITE 101, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-686-3670',
        criteria: ['550','WASHINGTON ST','101','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS SPECIALTY CLINIC",
        address: "550 WASHINGTON ST, SUITE 801, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['550','WASHINGTON ST','801','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS SPECIALTY CLINIC",
        address: "550 WASHINGTON ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['550','WASHINGTON ST','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "DR. PATEL",
        address: "2240 E PLAZA BLVD SUITE F, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2240','PLAZA B','F','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "2240 E PLAZA BLVD, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2240 E','PLAZA B','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "IHS - US",
        address: "2427 TRANSPORTATION AVE, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2427','TRANS','AV','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1615 SWEETWATER RD, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1615','SWEETWATER','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "PODIATRY",
        address: "5129 GARFIELD ST, LA MESA, CA, 91941",
        abbrev: null,
        category: 'PODIATRY',
        phone: null,
        criteria: ['5129','GARFIELD ST','MESA','91941'],
        funding_source:[0]
    },
    { 
        name: "SONUS HEARING CARE PROFESSIONALS",
        address: "1767 E MAIN ST, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1767 E','MAIN ST','CAJON','92021'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "2999 HEALTH CENTER DR, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2999','HEALTH C','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "YURI LAVENSKI NUTRIOLOGIST",
        address: "3075 HEALTH CENTER DR. SAN DIEGO , CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-939-5105',
        criteria: ['3075','HEALTH CE','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "8901 ACTIVITY RD, SAN DIEGO, CA, 92126",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8901','ACTIVITY R','DIEGO','92126'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "3638 UNIVERSITY AVE, SUITE 221, RIVERSIDE, CA, 92501",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3638','UNIVERSITY AV','221','RIVERSIDE','92501'],
        funding_source:[0]
    },
    { 
        name: "SYNERGY ORTHOPEDIC SPECIALISTS",
        address: "4910 DIRECTORS PLACE, SUITE 350, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-346-7171',
        criteria: ['4910','DIRECTORS PL','350','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "4910 DIRECTORS PLACE, SUITE 250, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-346-7171',
        criteria: ['4910','DIRECTORS PL','250','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "4910 DIRECTORS PLACE, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-346-7171',
        criteria: ['4910','DIRECTORS PL','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "2315 OTAY LAKES ROAD, SUITE 306, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2315','OTAY LA','ES R','306','CHULA','91914'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOOGY",
        address: "1000 VALE TERRACE DR, VISTA, CA, 92084",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1000','VALE','TERRACE','VISTA','92084'],
        funding_source:[0]
    },
    { 
        name: "UCSD RADIATION ONCOLOGY",
        address: "3960 HEALTH SCIENCE DR, SUITE 865, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858-822-6040',
        criteria: ['3960','HEALTH','SCIENCES D','865','JOLLA','92093'],
        funding_source:[0]
    },
    { 
        name: "UC SAN DIEGO HEALTH",
        address: "3960 HEALTH SCIENCES DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3960','HEALTH','SCIENCES D','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "499 5TH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['499','5TH A','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "624 EL CAJON BLVD, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['624','EL CAJON B','92020'],
        funding_source:[0]
    },
    { 
        name: "NORTH COUNTY DAY CENTER",
        address: "2095 WEST VISTA WAY, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: '619-205-4585',
        criteria: ['2095','WEST VISTA','A W','92083'],
        funding_source:[0]
    },
    { 
        name: "SURGERY CENTER",
        address: "8881 FLETCHER PARKWAY, SUITE 100, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8881','FLETCHER P','100','MESA','91942'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "1200 GARDEN VIEW ROAD, SUITE 110, ENCINITAS, CA, 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1200','GARDEN','VIEW R','110','ENCINITAS','92024'],
        funding_source:[0]
    },
    {
        name: "UCSD",
        address: "1200 GARDEN VIEW ROAD, ENCINITAS, CA, 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1200','GARDEN','VIEW R','ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - LOGAN HEIGHTS",
        address: "1809 NATIONAL AVE, SUITE  2104, SAN DIEGO, CA, 92113",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1809','NATIONAL AV','2104','DIEGO','92113'],
        funding_source:[0]
    },
    { 
        name: "QUEST DIAGNOSTICS",
        address: "902 SYCAMORE AVE SUITE  201, VISTA, CA, 92081",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['902','SYCAMORE AV','201','VISTA','92081'],
        funding_source:[0]
    },
    { 
        name: "QUEST DIAGNOSTICS",
        address: "902 SYCAMORE AVE, VISTA, CA, 92081",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['902','SYCAMORE AV','VISTA','92081'],
        funding_source:[0]
    },
    { 
        name: "SS VASCULAR SURGERY & ENDOVASCULAR THERAPY",
        address: "387 N ESCONDIDO BLVD,ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['387 N','ESCONDIDO B','ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY",
        address: "3939 RUFFIN RD, SUITE 102, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: null,
        criteria: ['3939','RUFFIN R','102','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY",
        address: "3939 RUFFIN RD, SUITE 100, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: null,
        criteria: ['3939','RUFFIN R','100','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "LABCORP",
        address: "374 H ST, SUITE 103, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['374','H S','103','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS MERCY HOSPITAL SAN DIEGO",
        address: "4077 5TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '619-294-8111',
        criteria: ['4077','FIFTH AV','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SAN YSIDRO HEALTH PARADISE HILLS",
        address: "2400 E 8TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2400 E','8TH ST','NATIONAL','91950'],
        funding_source:[0,1]
    },
    { 
        name: "NOT AVAILABLE",
        address: "754 MEDICAL CENTER CT, SUITE 301, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C','301','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "MARIUSZ W. WYSOCZANSKI/RAUL OVIEDO",
        address: "754 MEDICAL CENTER CT, SUITE 101, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C','101','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "STEVEN ROUGH/MD",
        address: "754 MEDICAL CENTER CT, SUITE 206, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C','206','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "CARDIOLOGY, DR.OVIEDO",
        address: "754 MEDICAL CENTER CT, SUITE 10, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C',' 10','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "CARDIOLOGY, DR.OVIEDO",
        address: "754 MEDICAL CENTER CT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO IMAGING",
        address: "755 MEDICAL CENTER CT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'IMAGING',
        phone: '619-397-6577',
        criteria: ['755','MEDICAL C','R C','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO SPINE & SPORT",
        address: "1020 TIERRA DEL REY, SUITE A-1, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-7104',
        criteria: ['1020','TIERRA','REY','A-1','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1061 TIERRA DEL REY, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1061','TIERRA','REY','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "CASTLE MANOR",
        address: "541 SOUTH V AVE, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: '619-791-7900',
        criteria: ['541 S','V AV','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "955 LANE AVE, STE 200, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['955','LANE AV','200','CHULA','91914'],
        funding_source:[0]
    },
    {
        name: "OTAY LAKES SURGERY CENTER",
        address: "955 LANE AVE, STE 100, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['955','LANE AV','100','CHULA','91914'],
        funding_source:[0]
    },
    { 
        name: "TOWN CENTER DENTISTRY",
        address: "11968 BERNARDO PLAZA DR, SAN DIEGO, CA, 92128",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['11968','BERNARDO','PLAZA DR','DIEGO','92128'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "477 N EL CAMINO REAL,SUITE 300, ENCINITAS, CA, 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['477 N','CAMINO','REAL','300','ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - ENCINITAS",
        address: "477 N EL CAMINO REAL,SUITE 102, ENCINITAS, CA, 92024",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '866-558-4320',
        criteria: ['477 N','CAMINO','REAL','102','ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - ENCINITAS",
        address: "477 N EL CAMINO REAL,SUITE 204, ENCINITAS, CA, 92024",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '866-558-4320',
        criteria: ['477 N','CAMINO','REAL','204','ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - ENCINITAS",
        address: "477 N EL CAMINO REAL,SUITE C202, ENCINITAS, CA, 92024",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: null,
        criteria: ['477 N','CAMINO','REAL','202 ','ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "231 H ST, APT B, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['231 H','B','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "GROSSMONT HOSPITAL-SHARP",
        address: "5555 GROSSMONT CENTER DR, LA MESA, CA, 91942-3019",
        abbrev: null,
        category: null,
        phone: '858-939-3947',
        criteria: ['5555','GROSSMONT','R D','MESA','91942'],
        funding_source:[0]
    },
    { 
        name: "UCSD GENERAL CARDIO CLINIC",
        address: "4138 FRONT ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4138','FRONT ST','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "BALBOA NEPHROLOGY SDPMG",
        address: "8010 FROST ST, SUITE 510, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-279-4221',
        criteria: ['8010','FROST ST','510','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "KEITH JACKSON, MD",
        address: "8010 FROST ST, SUITE 100, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-650-5073',
        criteria: ['8010','FROST ST','100','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "ORTHO DR. TONKS",
        address: "8010 FROST ST, SUITE 604, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'ORTHO',
        phone: '619 576-9901',
        criteria: ['8010','FROST S','604','DIEGO', '92123'],
        funding_source:[0]
    },
    { 
        name: "BALBOA NEPHROLOGY--FROST ST-SAN DIEGO",
        address: "8010 FROST ST, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'ORTHO',
        phone: '619 576-9901',
        criteria: ['8010','FROST S','DIEGO', '92123'],
        funding_source:[0]
    },    
    {
        name: "SHARP MEMORIAL HOSPITAL",
        address: "7901 FROST ST, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-939-5611',
        criteria: ['7901','FROST S','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "SHARP MRI CENTER",
        address: "7910 FROST ST, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-715-0465',
        criteria: ['7910','FROST ST','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "NEPHRO DR. ALEXANDER BULLEN ",
        address: "959 LANE AVE, BLDG B,CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['959','LANE AV','BLDG B','CHULA','91914'],
        funding_source:[0]
    },
    { 
        name: "NEPHROLOGY",
        address: "959 LANE AVE BLDG D CHULA VISTA, CA 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['959','LANE AV',' D','CHULA','91914'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - LA JOLLA",
        address: "4150 REGENTS PARK ROW, SUITE 195, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4150','GENTS PAR','195','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - LA JOLLA",
        address: "4150 REGENTS PARK ROW, SUITE  345, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4150','GENTS PAR','345','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "DR. YOO, KEVIN",
        address: "4150 REGENTS PARK ROW, SUITE 325, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4150 R','GENTS PAR','325','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "DR. YOO, KEVIN",
        address: "4150 REGENTS PARK ROW, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4150 R','GENTS PAR','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "SOUTHBAY FAMILY HEALTH & DENTAL CENTER",
        address: "330 E 8TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: '619-434-3200',
        criteria: ['330 E','8TH ST','NATIONAL','91950'],
        funding_source:[0,1]
    },
    { 
        name: "CALIFORNIA HEAD AND NECK SPECIALISTS",
        address: "39755 DATE ST, SUITE 105, MURRIETA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '951-461-0770',
        criteria: ['39755','DATE ST','105','MURRIETA','91910'],
        funding_source:[0]
    },
    { 
        name: "DENTAL NEIGHBORHOOD HEALTH",
        address: "425 N DATE ST, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['425 N','DATE ST','ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "PARKWAY AQUATIC CENTER",
        address: "385 PARK WAY, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-409-1985',
        criteria: ['385 P','WAY','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "UCSD ALLERGY",
        address: "8899 UNIVERSITY CENTER LN, SUITE  230, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: 'ALLERGY',
        phone: null,
        criteria: ['8899 U','SITY C','230','DIEGO','92122'],
        funding_source:[0]
    },
    { 
        name: "UCSD ENT",
        address: "8899 UNIVERSITY CENTER LN, SUITE 240, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8899 U','SITY C','240','DIEGO','92122'],
        funding_source:[0]
    },
    { 
        name: "UCSD ENT",
        address: "8899 UNIVERSITY CENTER LN, SUITE 350, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8899 U','SITY C','350','DIEGO','92122'],
        funding_source:[0]
    },
    { 
        name: "ALLERGIES-UC SAN DIEGO HEALTH",
        address: "8899 UNIVERSITY CENTER LN, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8899 U','SITY C','DIEGO','92122'],
        funding_source:[0]
    },
    { 
        name: "HILLCREST HEIGHTS",
        address: "4033 6TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-297-4086',
        criteria: ['4033','6TH AV','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "NCHS OCEANSIDE HEALTH CENTER TRUE CARE",
        address: "605 CROUCH ST, SUITE C, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: '760-736-6767',
        criteria: ['605','CROUCH ST',"TE C", 'OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "NCHS OCEANSIDE HEALTH CENTER TRUE CARE",
        address: "605 CROUCH ST, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: '760-736-6767',
        criteria: ['605','CROUCH ST','OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "OPHTHALMOLOGY ALLIANCE RETINA CONSULTANTS",
        address: "8262 UNIVERSITY AVE, LA MESA, CA, 91942",
        abbrev: null,
        category: 'OPHTHALMOLOGY',
        phone: '619-668-0045',
        criteria: ['8262','UNIVERSITY AV','MESA','91942'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "23113 VIEJAS GRADE RD, DESCANSO, CA, 91916",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['23113','VIEJAS G','DESCANSO','91916'],
        funding_source:[0]
    },
    { 
        name: "SONUS",
        address: "9340 CLAIREMONT MESA BLVD, SUITE  D, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9340','CLAIREMONT','MESA B',' D','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "DR CHANG - DERMATOLOGY",
        address: "2456 E ST, SAN DIEGO, CA, 92102",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2456','E ST','DIEGO','92102'],
        funding_source:[0]
    },
    { 
        name: "THE WEST COAST EYE CARE & ACUITY EYE GROUP",
        address: "6945 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: '619-697-4600',
        criteria: ['6945','EL CAJON B','DIEGO','92115'],
        funding_source:[0]
    },
    { 
        name: "ENDODONTIST DR. FREER",
        address: "273 CHURCH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-426-2250',
        criteria: ['273','CHURCH AV','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "SOCIAL SECURITY OFFICE LOCATION",
        address: "1333 FRONT ST, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1333','FRONT ST','DIEGO','92101'],
        funding_source:[0]
    },
    { 
        name: "OXFORD PODIATRY",
        address: "336 OXFORD ST, UNIT 104, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'PODIATRY',
        phone: '619-567-3556',
        criteria: ['336','OXFORD ST','104','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "GENESIS UROLOGY-RANCHO BERNARDO",
        address: "11770 BERNARDO PLAZA CT, SUITE 270, SAN DIEGO, CA, 92128",
        abbrev: null,
        category: 'UROLOGY',
        phone: '858-485-0554',
        criteria: ['11770','BERNARDO','PLAZA C','270','DIEGO','92128'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "463 CORTE MARIA AVE. CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['463','CORTE MA','A AV','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "ADVANCED THERAPY SERVICES",
        address: "2648 MAIN ST, SUITE BC, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-575-2192',
        criteria: ['2648','MAIN ST','BC','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "HOSPITAL OF LA MESA LLC",
        address: "8665 LA MESA BLVD, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-361-4056',
        criteria: ['8665','MESA B','MESA','91942'],
        funding_source:[0]
    },
    { 
        name: "UCSD UC SAN DIEGO HEALTH PSYCHIATRY",
        address: "16918 DOVE CANYON RD, SUITE 100,SAN DIEGO, CA, 92127",
        abbrev: null,
        category: null,
        phone: '858-207-0938',
        criteria: ['16918','DOVE C','100','DIEGO','92127'],
        funding_source:[0]
    },
    { 
        name: "SEASIDE FOOT AND ANKLE",
        address: "855 3RD AVE, SUITE 1100, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'PODIATRY',
        phone: null,
        criteria: ['855','3RD AV','1100','CHULA','91911'],
        funding_source:[0,1]
    },
    { 
        name: "ONCOLOGY",
        address: "855 3RD AVE, SUITE 3330, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'ONCOLOGY',
        phone: null,
        criteria: ['855','3RD AV','3330','CHULA','91911'],
        funding_source:[0,1]
    },
    { 
        name: "PODIATRY",
        address: "855 3RD AVE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'PODIATRY',
        phone: null,
        criteria: ['855','THIRD AV','CHULA','91911'],
        funding_source:[0,1]
    },
    { 
        name: "SEAGATE MEDICAL GROUP",
        address: "1835 EL CAJON BLVD, SUITE B, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-220-0018',
        criteria: ['1835','CAJON B','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "DISABILITY HELP CENTER",
        address: "1833 4TH AVE, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1833','FOURTH AV','DIEGO','92101'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - OCEANSIDE",
        address: "3601 VISTA WAY, SUITE 101, OCEANSIDE, CA, 92056",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3601','VISTA W','101','OCEANSIDE','92056'],
        funding_source:[0]
    },
    { 
        name: "IHS RADIOLOGY - OCEANSIDE",
        address: "3601 VISTA WAY, SUITE 104, OCEANSIDE, CA, 92056",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3601','VISTA W','104','OCEANSIDE','92056'],
        funding_source:[0]
    },
    { 
        name: "SYNOVATION MEDICAL GROUP: MISSION VALLEY",
        address: "7525 METROPOLITAN DR, SUITE 302, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: null,
        phone: '619-325-1161',
        criteria: ['7525','METROPOLITAN DR','302','DIEGO','92108'],
        funding_source:[0]
    },
    { 
        name: "SYNOVATION MEDICAL GROUP: POWAY",
        address: "15708 POMERADO ROAD, SUITE N-207, POWAY, CA, 92064",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['15708','POMERADO R','207','POWAY','92067'],
        funding_source:[0]
    },
    { 
        name: "SYNOVATION MEDICAL GROUP: POWAY",
        address: "15708 POMERADO ROAD, SUITE N-205, POWAY, CA, 92064",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['15708','POMERADO R','205','POWAY','92064'],
        funding_source:[0]
    },
    { 
        name: "SEASIDE FOOT & ANCKLE",
        address: "15706 POMERADO RD, SUITE 102, POWAY, CA ,92064",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['15706','POMERADO R','102','POWAY','92064'],
        funding_source:[0]
    },
    { 
        name: "QUEST DIAGNOSTICS LABS",
        address: "15725 POMERADO RD, SUITE  208, POWAY, CA, 92064",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['15725','POMERADO R','208','POWAY', '92064'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "15525 POMERADO RD, SUITE  A1, POWAY, CA, 92064",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['15525','POMERADO R','A1','POWAY', '92064'],
        funding_source:[0]
    },
    { 
        name: "CALIFORNIA HEAD AND NECK SPECIALISTS",
        address: "5405 OBERLIN DR, SAN DIEGO, CA, 92121",
        reference:'5405 OBERLIN DR 2ND FLOOR SAN DIEGO,CA 92121',
        abbrev: null,
        category: null,
        phone: '858-909-0770',
        criteria: ['5405','OBERLIN DR','DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1415 D AVE, APT 509, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1415','D AV','509','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "LAB QUEST",
        address: "488 E VALLEY PKWY, SUITE 314, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['488 E','VALLEY','Y P','314','ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "SOUTHERN CALIFORNIA GI & LIVER CENTERS",
        address: "488 E VALLEY PKWY, SUITE 313, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['488 E','VALLEY','Y P','313','ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "488 E VALLEY PKWY, SUITE 107, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['488 E','VALLEY','Y P','107','ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "BETTER NIGHT",
        address: "488 E VALLEY PKWY, SUITE 105, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['488 E','VALLEY','Y P','105','ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "SLEEP DATA",
        address: "5471 KEARNY VILLA ROAD, SUITE 200, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5471','KEARNY','VILLA R','200','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "VILLA SERENA HOTEL",
        address: "771 EL CAJON BLVD, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['771','EL CAJON B','92020'],
        funding_source:[0]
    },
    { 
        name: "UCSD GYNECOLOGY",
        address: "6030 VILLAGE WAY, SUITE 200, SAN DIEGO, CA, 92130",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6030','VILLAGE W','200', 'DIEGO','92130'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "585 SATURN BLVD,SUITE A, SAN DIEGO, CA, 92154",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['585','SATURN B','SUITE A','DIEGO','92154'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1620 ALPINE BLVD,SUITE 117, ALPINE, CA, 91901",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1620','ALPINE B','117','ALPINE','91901'],
        funding_source:[0,1]
    },
    { 
        name: "CHIROPRACTOR. ALPINE FAMILY MEDICINE",
        address: "1620 ALPINE BLVD, SUITE 110, ALPINE, CA, 91901",
        abbrev: null,
        category: null,
        phone: '619-445-2687',
        criteria: ['1620','ALPINE B','110','ALPINE','91901'],
        funding_source:[0,1]
    },
    { 
        name: "SYNOVATION MEDICAL GROUP",
        address: "6010 HIDDEN VALLEY RD, SUITE 110, CARLSBAD, CA, 92011",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6010','HIDDEN V','Y R','110','CARLSBAD','92011'],
        funding_source:[0]
    },
    { 
        name: "HUMERUS & L FOREARM MRI",
        address: "8929 UNIVERSITY CENTER LANE, SUITE 101, SAN DIEGO, CA, 92122",
        reference:'8929 UNIVERSITY CENTER LANE,  SUITE 101, 1ST FLOOR ,SAN DIEGO, CA, 92122',
        abbrev: null,
        category: null,
        phone: '858-657-1200',
        criteria: ['8929','UNIVERSITY C','101','DIEGO','92122'],
        funding_source:[0]
    },
    { 
        name: "CAREER CENTER",
        address: "151 VAN HOUTEN AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: '858-657-1200',
        criteria: ['151','VAN HOU','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "RADIOLOGY",
        address: "2323 RUFFIN ROAD, SUITE 102, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2323','RUFFIN R','102','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "690 S MOLLISON AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['690 S','MOLLISON AV','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "3840 43RD ST, SAN DIEGO, CA, 92105",
        abbrev: null,
        category: null,
        phone: '619-310-6945',
        criteria: ['3840','43RD','DIEGO','92105'],
        funding_source:[0]
    },
    { 
        name: "MARIUSZ W. WYSOCZANSKI, MD",
        address: "757 MEDICAL CENTER CT, SUITE 101, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-434-4288',
        criteria: ['757','MEDICAL C','R C','101', 'CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO IMAGING",
        address: "757 MEDICAL CENTER CT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['757','MEDICAL C','R C', 'CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "SAN YSIDRO HEALTH SANTEE FAMILY MEDICINE",
        address: "120 TOWN CENTER PKWY, SANTEE, CA, 92071",
        abbrev: null,
        category: null,
        phone: '619-662-4100',
        criteria: ['120','TOWN C','R P','SANTEE', '92071'],
        funding_source:[0,1]
    },
    { 
        name: "AIDS- SONUS",
        address: "6367 ALVARADO CT, SUITE 101, SAN DIEGO, CA, 92120",
        abbrev: null,
        category: null,
        phone: '619-583-7002',
        criteria: ['6367','ALVARADO C','101','DIEGO', '92120'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO DERMATOLOGY AND COSMETIC SURGERY, INC.",
        address: "6367 ALVARADO COURT, SUITE 107, SAN DIEGO, CA, 92120",
        abbrev: null,
        category: null,
        phone: '619-583-7002',
        criteria: ['6367','ALVARADO C','107','DIEGO', '92120'],
        funding_source:[0]
    },
    { 
        name: "MOUNTAIN HEALTH FAM MED DENTAL",
        address: "1388 BUCKMAN SPRINGS RD, CAMPO, CA, 91906",
        abbrev: null,
        category: null,
        phone: '619-478-5311',
        criteria: ['1388','BUCKMAN','SPRINGS R','CAMPO', '91906'],
        funding_source:[0,1]
    },
    { 
        name: "CARDIOLOGY",
        address: "764 MEDICAL CENTER COURT, SUITE 101, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-434-4288',
        criteria: ['764','MEDICAL C','R C','101', 'CHULA', '91911'],
        funding_source:[0]
    },
    { 
        name: "WEST COAST EYE CARE & ACUITY EYE GROUP - CLAIREMONT",
        address: "4344 CONVOY ST, SUITE C-2, SAN DIEGO, CA, 92111",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4344','CONVOY ST','C-2','DIEGO', '92111'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "563 TELEGRAPH CANYON RD, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-397-0294',
        criteria: ['563','TELEGRAPH C','N R','CHULA', '91910'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "745 E ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['745','E S','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "CALIFORNIA HEAD AND NECK SPECIALISTS",
        address: "577 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-426-5181',
        criteria: ['577','3RD A','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1235 GREENFIELD DR, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1235','GREENFIELD D','CAJON','92021'],
        funding_source:[0]
    },
    { 
        name: "API BEHAVIORAL HEALTH",
        address: "7050 PARKWAY DR, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['7050','PARKWAY D','MESA', '91942'],
        funding_source:[0]
    },
    { 
        name: "SOUTHERN CALIFORNIA GI & LIVER CENTERS",
        address: "131 ORANGE AVE, SUITE 101, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: '619-731-0239',
        criteria: ['131','ORANGE AV','101', 'CORONADO', '92118'],
        funding_source:[0]
    },
    { 
        name: "DR BRODERICK - LA JOLLA UTC MALL 33",
        address: "4303 LA JOLLA VILLAGE DR, SUITE 2110, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4303','VILLAGE','E D', '2110', 'DIEGO','92122'],
        funding_source:[0]
    },
    { 
        name: "DR BRODERICK - LA JOLLA UTC MALL",
        address: "4303 LA JOLLA VILLAGE DR, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4303','VILLAGE','E D', 'JOLLA','92122'],
        funding_source:[0]
    },
    { 
        name: "DR BRODERICK - LA JOLLA UTC MALL",
        address: "4303 LA JOLLA VILLAGE DR, SUITE 2110, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4303','VILLAGE', '2110', 'JOLLA','92122'],
        funding_source:[0]
    },
    { 
        name: "NEUROLOGY HYPOPLASTIC RIGHT VERTEBRAL ARTERY - UCSD",
        address: "16950 VIA TAZON, SAN DIEGO, CA, 92127",
        abbrev: null,
        category: null,
        phone: '858-657-8540',
        criteria: ['16950','VIA TAZON',  'DIEGO','92127'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "4303 LA JOLLA VIA DR, SUITE 2110, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: null,
        phone: '619-543-6886',
        criteria: ['4303','JOLLA VIA D',  '2110','DIEGO', '92122'],
        funding_source:[0]
    },
    { 
        name: "CALIFORNIA RETINA ASSOCIATES, LP/AMERICAN EYE ASSOCIATES",
        address: "231 W MAIN ST, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['231','W MAIN','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "UCSD-GYNECOLOGY",
        address: "8910 VILLA LA JOLLA DR, SUITE 200, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858-657-8737',
        criteria: ['8910','VILLA','JOLLA DR','200','DIEGO', '92037'],
        funding_source:[0]
    },
    { 
        name: "PHILLIP DICKINSON, MD",
        address: "8554 LA MESA BLVD, LA MESA, CA, 91941",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8554','MESA B','LA MESA','91941'],
        funding_source:[0]
    },
    { 
        name: "DENTAL",
        address: "4696 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: '619-662-4100',
        criteria: ['4696','CAJON BLVD','DIEGO','92115'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1452 SOUTH LA BRUCHERIE RD, SUITE A, EL CENTRO, CA 92243",
        abbrev: null,
        category: null,
        phone: '619-662-4100',
        criteria: ['1452 S','BRUCHERIE','CENTRO','92243'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1471 CUYAMACA, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1471','CUYAMACA','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "REDDY SUMANA, MD",
        address: "9456 CUYAMACA ST, SUITE 102,SANTEE, CA, 92071",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9456','CUYAMACA S','102','SANTEE', '92071'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO SPINE & SPORT",
        address: "8790 CUYAMACA ST, SUITE A SANTEE, CA, 92071",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8790','CUYAMACA S','SUITE A','SANTEE', '92071'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "510 E WASHINGTON AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['510 E','WASHINGTON AV','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "UCSD HOSPITAL",
        address: "9334 MEDICAL CENTER DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9334','MEDICAL','L C','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "ALEX MERCANDETTI",
        address: "2655 CAMINO DEL RIO NORTH, SUITE 120, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2655','CAMINO D','RIO','120','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "ALEX MERCANDETTI",
        address: "2655 CAMINO DEL RIO NORTH, SUITE 304, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2655','CAMINO D','RIO','304','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "3517 CAMINO DEL RIO SOUTH, SUITE 302, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3517','CAMINO D','RIO S','302','DIEGO','92108'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "887 EL CAJON BLVD, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['887','EL CAJON B','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "ORTHOPEDICS",
        address: "3750 CONVOY ST, SUITE 116, SAN DIEGO, CA, 92111",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3750','CONVOY S','116','DIEGO', '92111'],
        funding_source:[0]
    },
    { 
        name: "UCSD GYN",
        address: "3750 CONVOY ST, SUITE 312, SAN DIEGO, CA, 92111",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3750','CONVOY S','312','DIEGO', '92111'],
        funding_source:[0]
    },
    { 
        name: "PHYSICAL THERAPY",
        address: "255 N ELM ST, SUITE 202, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: '442-277-4142',
        criteria: ['255 N','ELM ST','202','ESCONDIDO', '92025'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "303 H ST, SUITE 103, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['303','H ST','103', 'CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NORTH COUNTY SURGICAL ASSOCIATES IN SAN MARCOS",
        address: "838 NORDAHL RD, SUITE  270, SAN MARCOS, CA, 92069",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['838','NORDAHL R','270','MARCOS','92069'],
        funding_source:[0]
    },
    { 
        name: "CARE SAN MARCOS",
        address: "838 NORDAHL RD, SUITE 300, SAN MARCOS, CA, 92069",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['838','NORDAHL R','300', 'MARCOS','92069'],
        funding_source:[0]
    },
    { 
        name: "CARE SAN MARCOS",
        address: "838 NORDAHL RD, SUITE 200, SAN MARCOS, CA, 92069",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['838','NORDAHL R','200', 'MARCOS','92069'],
        funding_source:[0]
    },
    { 
        name: "NORTH COUNTY SURGICAL ASSOCIATES IN SAN MARCOS",
        address: "838 NORDAHL RD, SAN MARCOS, CA, 92069",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['838','NORDAHL R','MARCOS','92069'],
        funding_source:[0]
    },
    { 
        name: "SYH ESCONDIDO FAMILY MEDICINE DENTAL",
        address: "704 EAST GRAND AVE, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['704 E','GRAND A','ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "DR. KAUFER",
        address: "3604 BEYER BLVD, APT 34-104, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3604','BEYER B','104','YSIDRO','92173'],
        funding_source:[0]
    },
    { 
        name: "PACE VISTA",
        address: "1840 WEST DR, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1840','W DR','VISTA','92083'],
        funding_source:[0]
    },
    { 
        name: "PACE VISTA",
        address: "1840 WEST VISTA WAY, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1840','WEST VISTA','WAY','VISTA','92083'],
        funding_source:[0]
    },
    { 
        name: "ALLERGY SPECIALIST",
        address: "3955 FIFTH AVE, SUITE 430, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3955','FIFTH AV','430','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS HOME HEALTH CARE SERVICES",
        address: "4311 THIRD AVE, SUITE B, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-452-7000',
        criteria: ['4311','THIRD AV','SUITE B','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "UCSD RADIOLOGY IMAGING HILLCREST",
        address: "408 DICKINSON ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['408','DICKINSON ST','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "PAIN MANAGEMENT",
        address: "1955 CITRACADO PARKWAY, SUITE 203, ESCONDIDO, CA, 92029",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1955','CITRACADO P','203','ESCONDIDO','92029'],
        funding_source:[0]
    },
    { 
        name: "PALOMAR HEALTH MEDICAL",
        address: "1955 CITRACADO PARKWAY, SUITE 200, ESCONDIDO, CA, 92029",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1955','CITRACADO P','200','ESCONDIDO','92029'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO SYNOVATION",
        address: "1955 CITRACADO PARKWY, SUITE  100, ESCONDIDO, CA, 92029",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1955','CITRACADO P','100','ESCONDIDO','92029'],
        funding_source:[0]
    },
    { 
        name: "PALOMAR INFUSION CENTER",
        address: "2125 CITRACADO PARKWY, ESCONDIDO, CA, 92029",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2125','CITRACADO P','ESCONDIDO','92029'],
        funding_source:[0]
    },
    { 
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "955 BOARDWALK, SUITE 100, SAN MARCOS, CA, 92078",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['955','BOARDWALK','100','MARCOS','92078'],
        funding_source:[0]
    },
    { 
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "955 BOARDWALK, SAN MARCOS, CA, 92078",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['955','BOARDWALK','MARCOS','92078'],
        funding_source:[0]
    },
    { 
        name: "PLASTIC SURGERY-WOUND CLINIC",
        address: "2542 2ND AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2542','2ND AV','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS CLINIC TORREY PINES",
        address: "10710 NORTH TORREY PINES ROAD, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['10710 N','TORREY PI','ES R','JOLLA', '92037'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS ORGAN AND CELL TRANSPLANTATION",
        address: "10666 N TORREY PINES RD, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['10666 N','TORREY PI','ES R','JOLLA', '92037'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "3022 45TH ST, SAN DIEGO, CA, 92105",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3022','45TH S','DIEGO', '92105'],
        funding_source:[0]
    },
    { 
        name: "SOUTH BAY POST ACUTE CARE",
        address: "553 F ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['553','F ST','CHULA', '91910'],
        funding_source:[0]
    },
    { 
        name: "MARK KHAN MD",
        address: "9430 MEDICAL CENTER DR,LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9430','MEDICAL C','R D', 'JOLLA', '92037'],
        funding_source:[0]
    },
    { 
        name: "SEASIDE FOOT AND ANKLE",
        address: "215 S HICKORY ST, SUITE 118, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['215 S','HICKORY','118', 'ESCONDIDO', '92025'],
        funding_source:[0]
    },
    { 
        name: "SEASIDE FOOT AND ANKLE",
        address: "215 S HICKORY ST, SUITE 116, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['215 S','HICKORY','116', 'ESCONDIDO', '92025'],
        funding_source:[0]
    },
    { 
        name: "PSYD EMPOWER PSYCHOLOGICAL SERVICES",
        address: "3111 CAMINO DEL RIO N, SUITE  400, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3111','CAMINO','RIO','400', 'DIEGO', '92108'],
        funding_source:[0]
    },
    { 
        name: "ALBERT SHARF",
        address: "1679 E MAIN ST, SUITE 101, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1679 E','MAIN S','101','CAJON', '92021'],
        funding_source:[0]
    },
    { 
        name: "ALBERT SHARF",
        address: "1679 E MAIN ST, SUITE 100, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1679 E','MAIN S','100','CAJON', '92020'],
        funding_source:[0]
    },
    { 
        name: "ALBERT SHARF",
        address: "1679 E MAIN ST, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1679 E','MAIN S','CAJON', '92021'],
        funding_source:[0]
    },
    { 
        name: "HANGER CLINIC",
        address: "895 3RD AVE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['895','3RD AV','CHULA', '91911'],
        funding_source:[0]
    },
    { 
        name: "HANGER CLINIC",
        address: "895 3RD AVE, CHULA VISTA, SUITE 2, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['895','THIRD AV','CHULA','SUITE 2', '91911'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO REGIONAL CENTER",
        address: "4355 RUFFIN ROAD, SUITE 200, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4355','RUFFIN R','200', 'DIEGO', '92123'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "636 GUAVA AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['636','GUAVA AV','CHULA', '91910'],
        funding_source:[0]
    },
    { 
        name: "SY PHFC",
        address: "2400 E 4TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2400 E','FOURTH','NATIONAL', '91950'],
        funding_source:[0]
    },
    { 
        name: "SY PHFC",
        address: "2400 E 4TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2400 E','4TH','NATIONAL', '91950'],
        funding_source:[0]
    },
    { 
        name: "SMILECARE DENTAL GROUP",
        address: "1242 E MAIN ST, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1242 E','MAIN ST','CAJON', '92021'],
        funding_source:[0]
    },
    { 
        name: "SUPERIOR COURT SOUTH COUNTY DIVISION",
        address: "500 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['500','3RD A','CHULA', '91910'],
        funding_source:[0]
    },
    { 
        name: "IHS**| DR. LI",
        address: "4820 EXECUTIVE DR, SUITE P2, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4820','EXECUTIVE DR','P2', 'DIEGO','92121'],
        funding_source:[0]
    },
    { 
        name: "SONUS 330",
        address: "330 W FELICITA AVE, SUITE  A4, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['330 W','FELICITA A','A4', 'ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "JAIBAJI PLASTIC SURGERY",
        address: "1001 B AVE, SUITE  108, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1001','B AV','108', 'CORONADO','92118'],
        funding_source:[0]
    },
    { 
        name: "CHULA VISTA - CALIFORNIA DMV",
        address: "30 N GLOVER AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['30 N','GLOVER AV','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "3434 KEARNY VILLA RD SUITE, #202, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3434','KEARNY VILLA','A R','202','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "PROSTHETIC",
        address: "7863 LA MESA BLVD, SUITE 100, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['7863','LA MESA B','100','MESA','91942'],
        funding_source:[0]
    },
    { 
        name: "KOLBERG OCULAR PRODUCTS",
        address: "9663 TIERRA GRANDE ST, SUITE 201, SAN DIEGO, CA, 92126",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9663','TIERRA GR','201','DIEGO','92126'],
        funding_source:[0]
    },
    { 
        name: "KOLBERG OCULAR PRODUCTS",
        address: "9663 TIERRA GRANDE ST,SAN DIEGO, CA, 92126",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9663','TIERRA GR','DIEGO','92126'],
        funding_source:[0]
    },
    { 
        name: "SOCIAL SECURITY OFFICE",
        address: "626 L ST, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['626','L ST','VISTA','91911'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE 9000",
        address: "9000 WAKARUSA ST, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9000','WAKARUSA ST','MESA','91942'],
        funding_source:[0]
    },
    { 
        name: "HANGER PROSTHETIC",
        address: "1968 VIA CENTRE, SUITE  A, VISTA, CA, 92081",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1968','VIA CEN',' A','VISTA','92081'],
        funding_source:[0]
    },
    { 
        name: "RICHARD MAYER, MD",
        address: "6699 ALVARADO RD, SUITE 2308, SAN DIEGO, CA, 92120",
        abbrev: null,
        category: null,
        phone: '619-462-9010',
        criteria: ['6699','ALVARADO R','2308','DIEGO','92120'],
        funding_source:[0]
    },
    { 
        name: "BORIS KHAMISHON, MD",
        address: "6699 ALVARADO RD, SUITE 2301, SAN DIEGO, CA, 92120",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6699','ALVARADO R','2301','DIEGO','92120'],
        funding_source:[0]
    },
    { 
        name: "BORIS KHAMISHON, MD",
        address: "6699 ALVARADO RD, SUITE 301, SAN DIEGO, CA, 92120",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6699','ALVARADO R','301','DIEGO','92120'],
        funding_source:[0]
    },
    { 
        name: "DENTAL COSMETIC DENTISTRY CENTER OF SAN DIEGO",
        address: "940 B ST, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['940','B ST','DIEGO','92101'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "3960 NORMAL ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3960','NORMAL S','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "PRECISION MEDICINE - OTAY FAMILY HEALTH CENTER",
        address: "1637 3RD AVE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1637','3RD AV','CHULA','91911'],
        funding_source:[0,1]
    },
    { 
        name: "SYNOVATION MEDICAL GROUP ESCONDIDO",
        address: "1340 WEST VALLEY PARKWAY, SUITE 201, ESCONDIDO, CA, 92029",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1340 W','VALLEY P','201','ESCONDIDO', '92029'],
        funding_source:[0]
    },
    { 
        name: "WELLS FARGO BANK",
        address: "7080 BROADWAY, LEMON GROVE, CA, 91945",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['7080 B','BROADWAY','LEMON','91945'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS MEMORIAL HOSPITAL ENCINITAS",
        address: "354 SANTA FE DR, ENCINITAS, CA, 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['354','SANTA FE','FE D','ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "UROLOGY",
        address: "320 SANTA FE DR, SUITE 108, ENCINITAS, CA, 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['320','SANTA FE','FE D','108','ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "UROLOGY",
        address: "320 SANTA FE DR, SUITE 104, ENCINITAS, CA, 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['320','SANTA FE','FE D','104','ENCINITAS','92424'],
        funding_source:[0]
    },
    { 
        name: "LIVER SPECIALIST",
        address: "971 LANE AVE, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['971','LANE AV','CHULA','91914'],
        funding_source:[0]
    },
    { 
        name: "HEART & WELLNESS CENTER",
        address: "302 EUCLID AVE, SUITE  104,  CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['302','EUCLID AV','104','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "635 C ST, SUITE  502, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['635','C ST','502','DIEGO','92101'],
        funding_source:[0]
    },
    { 
        name: "TRUCARE DENTAL",
        address: "2216 S EL CAMINO REAL, SUITE 122, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2216','CAMINO REAL','122','OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "TRUCARE DENTAL",
        address: "2216 S EL CAMINO REAL, SUITE 121, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2216 S','CAMINO REAL','121','OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "TRUCARE DENTAL",
        address: "2216 S EL CAMINO REAL, SUITE 122, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2216 S','CAMINO REAL','122','OCEANSIDE','92026'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "2335 VISTA WAY, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2335','VISTA W','OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "CARDIOLOGY",
        address: "1545 E 12TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1545 E','12TH ST','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO SPINE & SPORT",
        address: "1626 SWEETWATER RD, SUITE A, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1626 SW','SWEETWATER R','SUITE A','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "PARKWAY WELLNESS CENTER",
        address: "700 N JOHNSON AVE, SUITE M, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['700 N','JOHNSON AV',' M','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "PARKWAY WELLNESS CENTER",
        address: "700 N JOHNSON AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['700 N','JOHNSON AV','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "TRUE CARE SAN MARCOS",
        address: "150 VALPREDA RD, SAN MARCOS, CA, 92069",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['150 V','VALPREDA R','MARCOS','92069'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO COASTAL ENDOCRINOLOGY",
        address: "530 LOMAS SANTA FE DR , SUITE B SOLANA BEACH, CA, 92075",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['530','LOMAS SANTA', 'FE DR','SOLANA','92075'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO FAMILY DERMATOLOGY",
        address: "655 EUCLID AVE, SUITE  401, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['655','EUCLID AV', '401','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "DENTAL",
        address: "619 CROUCH ST, SUITE 100, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['619','CROUCH S', '100','OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "PSYCHAIATRIST",
        address: "619 CROUCH ST, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['619','CROUCH S','OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "PHYSICAL THERAPY ESCONDIDO",
        address: "2420 VISTA WAY, SUITE 215, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2420','VISTA W', '215','OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "HUNTINGTON MANOR",
        address: "14755 BUDWIN LN, APT 4, POWAY, CA, 92064",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['14755','BUDWIN L', '#4','POWAY','92064'],
        funding_source:[0]
    },
    { 
        name: "DENTAL PERFECT SMILE",
        address: "4710 RUFFNER ST, SAN DIEGO, CA, 92111",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4710', 'RUFFNER S','DIEGO','92111'],
        funding_source:[0]
    },
    { 
        name: "SYHC CVMP ",
        address: "678 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['678', '3RD AV','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "SARJAN PATEL, MD",
        address: "7339 EL CAJON BLVD SUITE JK, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['7339', 'CAJON B','JK','MESA','91942'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "105 DURIAN ST, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['105','DURIAN S','VISTA','92083'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "105 DURIAN ST, SUITE B, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['105','DURIAN S','VISTA','92084','SUITE B' ],
        funding_source:[0]
    },
    { 
        name: "MCALISTER INSTITUTE",
        address: "1180 3RD AVE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1180','THIRD A','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "THE EYE INSTITUTE OF CALIFORNIA",
        address: "311 DEL MAR AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['311','DEL MAR A','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "FRESENIUS KIDNEY CARE",
        address: "570 N SECOND ST, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['570 N','SECOND ST','CAJON','92021'],
        funding_source:[0]
    },
    { 
        name: "KEARNY MESA OFFICE ",
        address: "8505 AERO DR, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8505','AERO DR','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "PASSPORT",
        address: "13961 CAMPO RD, JAMUL, CA, 91935",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['13961','CAMPO R','JAMUL','91935'],
        funding_source:[0]
    },
    { 
        name: "DERMATOLOGY DR STAIN",
        address: "340 4TH AVE, SUITE 14, CHULA VISTA CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['340','4TH A','14','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "SUN & SEA MANOR",
        address: "740 7TH ST, IMPERIAL BEACH, CA, 91932",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['740','7TH ST','IMPERIAL','91932'],
        funding_source:[0]
    },
    { 
        name: "UCSD SULPIZIO CARDIOVASCULAR CENTER",
        address: "434 S MEDICAL CENTER DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['434 S','MEDICAL C','R D','JOLLA','92037'],
        funding_source:[0]
    },
    { 
        name: "DMV",
        address: "6111 BUSINESS CENTER CT, SAN DIEGO, CA, 92154",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6111','BUSINESS C','R C','DIEGO','92154'],
        funding_source:[0]
    },
    { 
        name: "BALBOA NEPHROLOGY",
        address: "3300 VISTA WAY, SUITE B, OCEANSIDE, CA, 92056",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3300','VISTA W',' B','OCEANSIDE','92056'],
        funding_source:[0]
    },
    { 
        name: "BALBOA NEPHROLOGY",
        address: "3300 VISTA WAY, OCEANSIDE, CA, 92056",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3300','VISTA W','OCEANSIDE','92056'],
        funding_source:[0]
    },
    { 
        name: "SY DENTAL San Diego Childrens Dental Clinic",
        address: "8110 BIRMINGHAM WAY, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8110','BIRMINGHAM W','DIEGO','92123'],
        funding_source:[0,1]
    },
    { 
        name: "NOT AVAILABLE",
        address: "529 ROLLING HILLS RD, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['529','ROLLING','HILLS R', 'VISTA','92083'],
        funding_source:[0]
    },
    { 
        name: "PACIFIC PAIN MEDICINE CONSULTANTS",
        address: "3998 VISTA WAY, SUITE 108, OCEANSIDE, CA, 92056",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3998','VISTA W','108', 'OCEANSIDE','92056'],
        funding_source:[0]
    },
    { 
        name: "DENTAL",
        address: "4700 N RIVER RD, OCEANSIDE, CA, 92057",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4700 N','RIVER R','OCEANSIDE', '92057'],
        funding_source:[0]
    },
    { 
        name: "SS VASCULAR SURGERY & ENDOVASCULAR THERAPY",
        address: "1045 E PENNSYLVANIA AVE, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1045 E','PENNSYLVANIA AV','ESCONDIDO', '92025'],
        funding_source:[0]
    },
    { 
        name: "PODIATRY",
        address: "1666 PRECISION PARK LANE, SAN DIEGO, CA, 92173",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1666','PRECISION P','K L', 'YSIDRO','92173'],
        funding_source:[0]
    },
    { 
        name: "ALFA SURGERY CENTER",
        address: "440 E ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['440 E','CHULA','91910','E S'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "350 DICKINSON ST, SUITE 325, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['350','DICKINSON S','325','DIEGO','92103'],
        funding_source:[0]
    },
    { 
        name: "DERMATOLOGY",
        address: "12395 EL CAMINO REAL, SUITE 207, SAN DIEGO, CA, 92130",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: null,
        criteria: ['12395','CAMINO REA','207','DIEGO','92130'],
        funding_source:[0]
    },
    { 
        name: "DERMATOLOGY",
        address: "12395 EL CAMINO REAL, SUITE 200, SAN DIEGO, CA, 92130",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['12395','CAMINO REA','200','DIEGO','92130'],
        funding_source:[0]
    },
    { 
        name: "Pain Management",
        address: "3969 4TH AVE, SUITE 208, CHULA VISTA, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3969','FOURTH AV','208','CHULA','92103'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "220 S 1ST ST, EL CAJON, CA, 92019",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['220','1ST ST','CAJON','92019'],
        funding_source:[0]
    },
    { 
        name: "DR. KEVIN YOO",
        address: "2100 5TH AVE, SUITE 200, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2100','FIFTH AV','200','DIEGO','92101'],
        funding_source:[0]
    },
    { 
        name: "TRUECARE",
        address: "2210 MESA DR, SUITE 5, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2210','MESA DR',' 5','OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "AUDIOLOGY HEARING SONUS",
        address: "1820 MARRON RD, SUITE 102, CARLSBAD, CA, 92008",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1820','MARRON R','102','CARLSBAD','92008'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO CENTER FOR THE BLIND",
        address: "5922 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5922','EL CAJON B','DIEGO','92115'],
        funding_source:[0]
    },
    { 
        name: "VETERANS AFFAIRS MEDICAL CENTER",
        address: "3350 LA JOLLA VILLAGE DR, SAN DIEGO, CA, 92161",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3350 LA','JOLLA VI','DIEGO','92161'],
        funding_source:[0]
    },
    { 
        name: "TRUECARE ",
        address: "3220 MISSION AVE SUITE 1, OCEANSIDE, CA, 92058",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3220','MISSION AV','SUITE 1','OCEANSIDE','92058'],
        funding_source:[0]
    },
    { 
        name: "PRESTERA EYE MEDICAL GROUP",
        address: "100 N RANCHO SANTA FE RD, SUITE  126, SAN MARCOS, CA, 92069",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['100 N','RANCHO','SANTA FE','126','MARCOS','92069'],
        funding_source:[0]
    },
    { 
        name: "SPRUCE MEDICAL MANAGEMENT",
        address: "365 S RANCHO SANTA FE RD, SUITE 103, SAN MARCOS, CA, 92078",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['365 S','RANCHO','SANTA FE','103','MARCOS','92078'],
        funding_source:[0]
    },
    { 
        name: "CHASE BANK",
        address: "1133 AVOCADO BLVD, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1133','AVOCADO B','CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "HALL OF JUSTICE - SUPERIOR COURT OF CALIFORNIA",
        address: "330 W BROADWAY, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['330 W','BROADWAY','DIEGO','92101'],
        funding_source:[0]
    },
    { 
        name: "DIMITRI A. SHEREV MD (CARDIOLOGY)",
        address: "3156 VISTA WAY, SUITE 100, OCEANSIDE, CA, 92056",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3156','VISTA W','100','OCEANSIDE','92056'],
        funding_source:[0]
    },
    { 
        name: "SS VASCULAR SURGERY & ENDOVASCULAR THERAPY",
        address: "6719 ALVARADO RD, SUITE 303, SAN DIEGO, CA 92120",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6719','ALVARADO R','303','DIEGO','92120'],
        funding_source:[0]
    },
    { 
        name: "SLEEP DATA",
        address: "11415 RIDGEBACK ROAD, SUITE #1, CHULA VISTA, CA, 91901",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['11415','RIDGEBACK R','CHULA','91901'],
        funding_source:[0]
    },
    { 
        name: "ALVARADO HOSPITAL MEDICAL CENTER",
        address: "6655 ALVARADO RD, SAN DIEGO, CA, 92120",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6655','ALVARADO R','DIEGO','92120'],
        funding_source:[0]
    },
    { 
        name: "US CITIZENSHIP AND IMMIGRATION SERVICES",
        address: "1325 FRONT ST, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1325','FRONT ST','DIEGO','92101'],
        funding_source:[0]
    },
    { 
        name: "COASTAL PULMONARY COASTAL PULMONARY",
        address: "2067 W VISTA WAY, SUITE 160, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2067 W','VISTA W','160','VISTA','92083'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "2067 W VISTA WAY, SUITE 120, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2067 W','VISTA W','120','VISTA','92083'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "865 3RD AVE, SUITE 133, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['865','3RD AV','133','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "SD SPINE & SPORT- CENTRE MEDICAL PLAZA",
        address: "865 3RD AVE, SUITE 105, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['865','THIRD AV','105','CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "RITVIK MEHTA MD",
        address: "2390 FARADAY AVE, CARLSBAD, CA, 92008",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2390','ARADAY AV','CARLSBAD','92008'],
        funding_source:[0]
    },
    { 
        name: "PALOMAR MEDICAL CENTER",
        address: "2185 CITRACADO PARKWAY, ESCONDIDO, CA, 92029",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2185','CITRACADO P','ESCONDIDO','92029'],
        funding_source:[0]
    },
    { 
        name: "HSING COASTAL PULMONARY ASSOCIATES",
        address: "326 SANTA FE DR, SUITE 100 ENCINITAS, CA, 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['326','SANTA FE DR','100','ENCINITAS','92024'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "631 E GRAND AVE, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['631 E','GRAND AV','ESCONDIDO','92025'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "3131 BERGER AVE, SUITE 200, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3131','BERGER AV','200','DIEGO', '92123'],
        funding_source:[0]
    },
    { 
        name: "SPINE & SPORT PHYSICAL THERAPY CLINIC BONITA",
        address: "180 OTAY LAKES RD, SUITE 105, BONITA, CA, 91902",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['180 OTAY','LAKES R','105','BONITA'],
        funding_source:[0]
    },
    { 
        name: "CENTRAL COURTHOUSE/SUPERIOR COURT OF CALIFORNIA",
        address: "1100 UNION ST, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1100','UNION ST','DIEGO', '92101'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "255 NORTH ASH ST, ESCONDIDO, CA, 92027",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['255 N','ASH ST','ESCONDIDO', '92027'],
        funding_source:[0,1]
    },
    { 
        name: "HANGER CLINIC",
        address: "7720 CARDINAL COURT, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['7720 C','CARDINAL C','DIEGO', '92123'],
        funding_source:[0]
    },
    { 
        name: "CHASE BANK",
        address: "4440 WIGHTMAN ST, SUITE  100, SAN DIEGO, CA, 92105",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4440','WIGHTMAN S','100', 'DIEGO','92105'],
        funding_source:[0]
    },
    { 
        name: "GK DERMATOLOGY OF SD",
        address: "330 S MAGNOLIA AVE, SUITE  203, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['330 S','MAGNOLIA AV','203', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "CARDIOLOGY DR. ALBERT SHARF",
        address: "845 E 12TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['845 E','12TH S','NATIONAL','91950'],
        funding_source:[0]
    },
    { 
        name: "CARDIOLOGY DR KAFRI HASSAN",
        address: "459 4TH AVE, SUITE 215, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['459 F','TH AV','215','CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "VA BRANCH MEDICAL CLINIC",
        address: "8875 AERO DR, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8875','AERO D','DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "SHILEY EYE INSTITUTE AT UC SAN DIEGO HEALTH",
        address: "9315 CAMPUS POINT DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9315','CAMPUS P','T DR','JOLLA', '92093'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "5570 OVERLAND AVE, SUITE 101, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5570','OVERLAND AV','101','DIEGO', '92123'],
        funding_source:[0]
    },
    { 
        name: "UROLOGICAL SPECIALIST",
        address: "3907 WARING ROAD, SUITE 4, OCEANSIDE, CA, 92056",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3907','WARING R',' 4','OCEANSIDE', '92056'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS HOSPITAL",
        address: "499 H ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['499','H ST','CHULA', '91910'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "6061 BANBURY ST, SAN DIEGO, CA, 92139",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6061','BANBURY ST','DIEGO', '92139'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "8808 BALBOA AVE, SUITE  250, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8808','BALBOA AV','250', 'DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "BANK OF AMERICA",
        address: "801 3RD AVE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['801','3RD AV','CHULA', '91911'],
        funding_source:[0]
    },
    { 
        name: "MORRIS EYE GROUP",
        address: "1930 VIA CENTRE, VISTA, CA, 92081",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1930','VIA CENTRE','VISTA', '92083'],
        funding_source:[0]
    },
    { 
        name: "OCEANSIDE VA CLINIC",
        address: "1300 RANCHO DEL ORO RD, OCEANSIDE, CA, 92056",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1300','RANCHO DEL ORO RD','OCEANSIDE', '92056'],
        funding_source:[0]
    },
    { 
        name: "ALVARADO PARKWAY INSTITUTE",
        address: "215 WEST MADISON AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['215','WEST MADISON AVE','CAJON', '92020'],
        funding_source:[0]
    },
    { 
        name: "INTERFAITH COMMUNITY SERVICES",
        address: "550 W WASHINGTON AVE, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['550','WASHINGTON AV','ESCONDIDO', '92025'],
        funding_source:[0]
    },
    { 
        name: "PARK BLVD ORAL",
        address: "4067 PARK BLVD, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4067','PARK B','DIEGO', '92103'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "728 EAST VALLEY PARKWAY, ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['728','EAST VALLEY','PARKWAY', 'ESCONDIDO', '92025'],
        funding_source:[0]
    },
    { 
        name: "EYE CARE OF SAN DIEGO",
        address: "700 W EL NORTE PKWY, ESCONDIDO, CA, 92026",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['700 W','EL NORTE','E P', 'ESCONDIDO', '92026'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS HOSPITAL",
        address: "449 H ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['449','H ST','CHULA', '91910'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE ",
        address: "1865 HOTEL CIRCLE SOUTH, SUITE 453, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1865','HOTEL CIRC','453', 'DIEGO','92108'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE ",
        address: "1865 HOTEL CIRCLE SOUTH, SUITE 529, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1865','HOTEL CIRC','529', 'DIEGO','92108'],
        funding_source:[0]
    },
    { 
        name: "CARDIOLOGY ALBERT SHARF, MD",
        address: "1834 E 12TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1834 E','12TH ST','NATIONAL', '91950'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "3950 CAMPUS POINT DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3950','CAMPUS P','POINT D', 'JOLLA', '92037'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "17123 MATINAL RD, SAN DIEGO, CA, 92127 ",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['17123','MATINAL R','DIEGO', '92127'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1154 E MAIN ST, SUITE 106, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1154','E MAIN S','106', 'CAJON','92021'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "826 STARBOARD ST, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['826','STARBOARD ST', 'CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "SHARP REES-STEALY MURPHY CANYON",
        address: "9610 GRANITE RIDGE DR, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9610','GRANITE', 'RIDGE D','DIEGO', '92123'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "453 NORTH MAGNOLIA AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['453 N','MAGNOLIA AV', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "3444 KERNY VILLA RD, SUITE 400, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3444','KERNY VILLA R', '400','DIEGO', '92123'],
        funding_source:[0]
    },
    { 
        name: "UCSD PSYCHIATRY",
        address: "8950 VILLA LA JOLLA DR, SUITE C 101, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8950','VILLA LA', 'LLA DR','101', 'JOLLA', '92037'],
        funding_source:[0]
    },
    { 
        name: "MISMO DERMATOLOGY AND WOUND CARE",
        address: "6280 JACKSON DR, SUITE 9, SAN DIEGO, CA, 92119",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['6280','JACKSON DR', ' 9','DIEGO', '92119'],
        funding_source:[0]
    },
    { 
        name: "UCSD",
        address: "4169 FRONT ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4169','FRONT ST','DIEGO', '92103'],
        funding_source:[0]
    },
    { 
        name: "SCRIPPS MEDICAL CENTER JEFFERSON",
        address: "2205 VISTA WAY, SUITE 210, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2205','VISTA WAY','210', 'OCEANSIDE','92054'],
        funding_source:[0]
    },
    { 
        name: "CARDIOLOGY",
        address: "2131 3RD AVE, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2131','3RD AV','DIEGO', '92101'],
        funding_source:[0]
    },
    { 
        name: "ILF",
        address: "5752 MICHAEL ST, SAN DIEGO, CA, 92105",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5752','MICHAEL ST', 'DIEGO', '92105'],
        funding_source:[0]
    },
    { 
        name: "DMV",
        address: "1450 GRAVES AVE, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1450','GRAVES AV', 'CAJON', '92021'],
        funding_source:[0]
    },
    { 
        name: "JAMES KIM, MD",
        address: "5358 JACKSON DR, SUITE 1, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5358','JACKSON DR', 'SUITE 1', 'MESA', '91942'],
        funding_source:[0]
    },
    { 
        name: "CARDIOLOGIST",
        address: "2130 CITRACADO PARKWAY, SUITE 220, ESCONDIDO, CA, 92029",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2130','CITRACADO PARKWAY', '220', 'ESCONDIDO', '92029'],
        funding_source:[0]
    },
    { 
        name: "VISTA COMMUNITY-PODIATRY ",
        address: "134 GRAPEVINE RD, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['134','GRAPEVINE R', 'VISTA', '92083'],
        funding_source:[0]
    },
    { 
        name: "UCSD NEPHROLOGY DEPARTMENT",
        address: "4180 FRONT ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4180','FRONT S', 'DIEGO', '92103'],
        funding_source:[0]
    },
    { 
        name: "TRUECARE WEST SAN MARCOS QUICKCARE",
        address: "1595 GRAND AVE, SUITE 100 SAN MARCOS, CA 92078",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1595','GRAND AV', '100', 'MARCOS','92078'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "1697 DONAX AVE, SAN DIEGO, CA, 92154",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1697','DONAX AV', 'DIEGO','92154'],
        funding_source:[0]
    },
    { 
        name: "SHARP CHULA VISTA",
        address: "751 MEDICAL CENTER CT, CHULA VISTA, CA 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['751','MEDICAL CEN', 'CHULA','91911'],
        funding_source:[0]
    },
    { 
        name: "SAN YSIDRO HEALTH CENTER-MENTAL HEALTH",
        address: "1275 30TH ST, SAN DIEGO, CA, 92102",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1275','30TH ST', 'DIEGO','92154'],
        funding_source:[0]
    },
    { 
        name: "PHYSICAL THERAPY",
        address: "137 S LAS POSAS RD, SUITE  254, SAN MARCOS, CA, 92078",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['137 S','LAS POSAS R', '254','MARCOS','92078'],
        funding_source:[0]
    },
    { 
        name: "CHULA VISTA VA CLINIC",
        address: "353 H ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['353','H ST', 'CHULA','91910'],
        funding_source:[0]
    },
    { 
        name: "ORTHOPEDIC - CHRISTOPHER L SHERMAN",
        address: "7625 MESA COLLEGE DR, SUITE 310 A, SAN DIEGO, CA, 92111",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['7625','MESA COLLEGE D', '310','DIEGO', '92111'],
        funding_source:[0]
    },
    { 
        name: "PACIFIC HYPERBARIC",
        address: "826 STARBOARD ST, CHULA VISTA, CA 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['826','STARBOARD ST', 'CHULA','91914'],
        funding_source:[0]
    },
    { 
        name: "APPLIED PSYCHOLOGY SERVICES",
        address: "2515 CAMINO DEL RIO, SUITE 114, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2515','CAMINO DEL RIO', '114','DIEGO','92108'],
        funding_source:[0]
    },
    { 
        name: "EC PACE",
        address: "1125 PEACH AVE, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1125','PEACH AVE', 'CAJON','92021'],
        funding_source:[0]
    },
    { 
        name: "SAN DIEGO BLOOD BANK",
        address: "776 ARNELE AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['776','ARNELE AVE', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "MAGNOLIA ADULT DAY HEALTH CARE CENTER",
        address: "490 NORTH MAGNOLIA AVE EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['490 N','MAGNOLIA AVE', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "MAGNOLIA ADULT DAY HEALTH CARE CENTER",
        address: "490 NORTH MAGNOLIA AVE EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['490','MAGNOLIA AVE', 'CAJON','92020'],
        funding_source:[0]
    },
    { 
        name: "NOT AVAILABLE",
        address: "5722 WINCHESTER ST, SAN DIEGO, CA, 92139",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5722','WINCHESTER ST', 'DIEGO','92139'],
        funding_source:[0]
    },
    { 
        name: "SHARP MESA VISTA HOSPITAL",
        address: "7850 VISTA HILL AVE SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['7850','VISTA HILL AV', 'DIEGO','92123'],
        funding_source:[0]
    },
    { 
        name: "MI CLINICA AT NORTHGATE",
        address: "1058 3RD AVE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1058','3RD AVE', 'CHULA','91911'],
        funding_source:[0,1]
    },
    { 
        name: "NATIONAL CITY FAMILY CLINIC",
        address: "1136 D AVE, NATIONAL CITY,CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1136','D AV','NATIONAL','92173'],
        funding_source:[0,1]
    },
    { 
        name: "SAN YSIDRO HEATLH DR DOMINGUEZ",
        address: "505 N MOLLISON AV, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['505 N','MOLLISON AV','CAJON','92021'],
        funding_source:[0,1]
    },
    { 
        name: "CMSS",
        address: "436 S MAGNOLIA AV, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['436 S','MAGNOLIA AV','CAJON','92020'],
        funding_source:[0,1]
    },
    { 
        name: "25TH ST FAMILY MEDICINE",
        address: "316 25TH ST, SAN DIEGO, CA, 92102",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['316','25TH ST','DIEGO','92102'],
        funding_source:[0,1]
    }
    
    

    
    
    
]

module.exports= centers;
