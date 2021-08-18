let centers=[
    {   
        name: "DAVITA COLLEGE",
        address: "6535 UNIVERSITY AVENUE, SAN DIEGO, CA, 92115",
        abbrev: "DAVITA COLLEGE",
        category: "DIALYSIS",
        phone: "619-287-8796",
        criteria: ['6535','UNIVERSITY','DIEGO','92115']
    },
    {   
        name: "DAVITA EUCLID",
        address: "292 EUCLID AVENUE, SAN DIEGO, CA, 92114",
        abbrev: "DAVITA S.D. EAST" ,
        category: "DIALYSIS",
        phone: "619-262-7225",
        criteria: ['292 EU','EUCLID AV','DIEGO','92114']
    },
    {   
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "292 EUCLID AVE, # 210, SAN DIEGO, CA, 92114",
        abbrev: null ,
        category: "CARDIOLOGY",
        phone: null,
        criteria: ['292 EU','EUCLID AV','DIEGO','92114', '210']
    },
    {   
        name: "DIGESTIVE DISEASE ASSOCIATES",
        address: "292 EUCLID AVE, STE 115-IU, SAN DIEGO, CA, 92114",
        abbrev: null ,
        category: "CARDIOLOGY",
        phone: null,
        criteria: ['292 EU','CLID AV','DIEGO','92114', '115']
    },
  
    {   
        name: "DAVITA SAN DIEGO SOUTH",
        address: "995 GATEWAY CENTER WAY, SAN DIEGO, CA, 92102",
        abbrev: "DAVITA S.D.S",
        category: "DIALYSIS",
        phone:"619",
        criteria: ['292','EUCLID','DIEGO','92114']

    },
    {   
        name: "DAVITA SAN YSIDRO",
        address: "1445 30TH ST, SAN DIEGO, CA, 92154",
        abbrev: "DAVITA S.Y.",
        category: "DIALYSIS",
        phone:"619-262-1960",
        criteria: ['1445','30TH','DIEGO','92154']
    },
    {   
        name: "DSI CHULA VISTA",
        address: "1181 BROADWAY #5, CHULA VISTA, CA, 91911",
        abbrev: "DSI C.V.",
        category: "DIALYSIS",
        phone:"619-213-1922",
        criteria: ['1181','BROADWAY','5','CHULA','91911']
    },
    {   
        name: "FMC COLLEGE",
        address: "5961 UNIVERSITY AVENUE, SUITE 317, SAN DIEGO, CA, 92115",
        abbrev: "FMC COLLEGE",
        category: "DIALYSIS",
        phone: "619-286-0821",
        criteria: ['5961','UNIVERSITY','317','DIEGO','92115']
    },
    {   
        name: "FMC CHULAVISTA SOUTH",
        address: "2252 VERUS ST., SAN DIEGO, CA, 92154",
        abbrev: "FMC CVS",
        category: "DIALYSIS",
        phone: "619-429-9201",
        criteria: ['2252','VERUS','DIEGO','92154']
    },
    {   
        name: "FMC EAST COUNTY",
        address: "570 N. 2ND ST. #7715, EL CAJON, CA, 92021",
        abbrev: "FMC E.C.",
        category: "DIALYSIS",
        phone: "619-588-7500",
        criteria: ['570','2ND','7715','CAJON','92021']
    },
    {   
        name: "FMC BALBOA EASTLAKE",
        address: "2391 BOSWELL ROAD, CHULA VISTA, CA, 91914",
        abbrev: "FMC EASTLAKE",
        category: "DIALYSIS",
        phone:"619-397-0939",
        criteria: ['2391','BOSWELL','CHULA','91914']
    },
    {   
        name: "FMC GATEWAY EAST",
        address: "720 GATEWAY CENTER DR STE B, SAN DIEGO, CA, 92102",
        abbrev: "FMC GE",
        category: "DIALYSIS",
        phone:"619-264-4100",
        criteria: ['720','GATEWAY CENTER',' B','DIEGO','92102']
    },
    {   
        name: "FMC GATEWAY EAST",
        address: "720 GATEWAY CENTER DR STE B, SAN DIEGO, CA, 92192",
        abbrev: "FMC GE",
        category: "DIALYSIS",
        phone:"619-264-4100",
        criteria: ['720','GATEWAY DR',' B','DIEGO','92192']
    },
    {   
        name: "FMC HILLCREST",
        address: "3960 3RD AVE, SAN DIEGO, CA, 92103",
        abbrev: "FMC HILL",
        category: "DIALYSIS",
        phone: "619-299-3900",
        criteria: ['3960','3RD','DIEGO','92103']
    },
    {   
        name: "FMC HILLCREST",
        address: "3960 3RD AVE, SAN DIEGO, CA, 92103",
        abbrev: "FMC HILL",
        category: "DIALYSIS",
        phone: "619-299-3900",
        criteria: ['3960','THIRD','DIEGO','92103']
    },
    {   
        name: "FMC KEARNEY MESA",
        address: "7927 OSTROW ST SUITE A, SAN DIEGO, CA, 92111",
        abbrev: "FMC K.M.",
        category: "DIALYSIS",
        phone:"858-571-0232",
        criteria: ['7927','OSTROW',' A','DIEGO','92111']
    },
    {   
        name: "FMC LA MESA",
        address: "5995 SEVERIN DR, LA MESA, CA, 91942",
        abbrev: "FMC L.M.",
        category: "DIALYSIS",
        phone:"619-462-9992",
        criteria: ['5995','SEVERIN','MESA','91942']
    },
    {   
        name: "FMC MARINA BAY",
        address: "630 BAY BLVD STE 101, CHULA VISTA, CA, 91910",
        abbrev: "FMC M.B.",
        category: "DIALYSIS",
        phone:"619-420-6725",
        criteria: ['630','BAY','101','CHULA','91910']
    },
    {   
        name: "FMC MARINA BAY",
        address: "630 BAY BLVD STE 101, CHULA VISTA, CA, 91910",
        abbrev: "FMC M.B.",
        category: "DIALYSIS",
        phone:"619-420-6725",
        criteria: ['630','BAY','CHULA','91910']
    },
    {   
        name: "FMC MARINA BAY",
        address: "630 BAY BLVD STE 101, CHULA VISTA, CA, 91910",
        abbrev: "FMC M.B.",
        category: "DIALYSIS",
        phone:"619-420-6725",
        criteria: ['630','BAY B','91910', '101']
    },
    {   
        name: "FMC NATIONAL CITY",
        address: "303 W 26TH ST, NATIONAL CITY, CA, 91950",
        abbrev: "FMC N.C.",
        category: "DIALYSIS",
        phone:"619-474-8151",
        criteria: ['303 W','26TH','NATIONAL','91950']
    },
    {   
        name: "FMC PARADISE VALLEY",
        address: "6919 PARADISE VALLEY RD, SAN DIEGO, CA, 92139",
        abbrev: "FMC P.V.",
        category: "DIALYSIS",
        phone:"619-475-2872",
        criteria: ['6919','PARADISE','DIEGO','92139']
    },
    {   
        name: "FMC RAVEN",
        address: "499 RAVEN ST, SAN DIEGO, CA, 92102",
        abbrev: "FMC RAVEN",
        category: "DIALYSIS",
        phone:"619-263-1518",
        criteria: ['499','RAVEN','DIEGO','92102']
    },
    {   
        name: "FMC SAN YSIDRO",
        address: "3010 DEL SOL BLVD, SAN DIEGO, CA, 92154",
        abbrev: "FMC S.Y.",
        category: "DIALYSIS",
        phone:"619-429-9690",
        criteria: ['3010','DEL SOL','DIEGO','92154']
    },
    {   
        name: "FMC SAN YSIDRO",
        address: "3010 DEL SOL BLVD, SAN DIEGO, CA, 92154",
        abbrev: "FMC S.Y.",
        category: "DIALYSIS",
        phone:"619-429-9690",
        criteria: ['3010','DEL SOL','YSIDRO','92154']
    },
    {   
        name: "RAI FLETCHER PARKWAY",
        address: "858 FLETCHER PKWY, EL CAJON, CA, 92020",
        abbrev: "RAI F.P.",
        category: "DIALYSIS",
        phone:"619-442-4122",
        criteria: ['858','FLETCHER','CAJON','92020']
    },
    {   
        name: "RAI SAN DIEGO",
        address: "7007 MISSION GORGE RD, SAN DIEGO, CA, 92120" ,
        abbrev: "RAI S.D.",
        category: "DIALYSIS",
        phone:"619-229-1070",
        criteria: ['7007','MISSION','DIEGO','92120']
    },
    {   
        name: "U.S. RENAL CARE",
        address: "2084 OTAY LAKES RD #101, CHULA VISTA, CA, 91915",
        abbrev: "U.S. RC",
        category: "DIALYSIS",
        phone:"619-397-0262",
        criteria: ['2084','OTAY LAKES','CHULA','91915']
    },
    {   
        name: "MEDIC",
        address: "2295 OTAY LAKES RD, CHULA VISTA, CA, 91915",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2295','OTAY LAKES','CHULA','91915']
    },
    {   
        name: "UCSD ORTHOPEDICS",
        address: "200 WEST ARBOR DRIVE SUITE 2, SAN DIEGO, CA, 92103",
        abbrev: "UCSD ORTHOPEDICS",
        category: "ORTHOPEDICS",
        phone:"858-657-8200",
        criteria: ['200','WEST','ARBOR','DIEGO','92103','SUITE 2']
    },
    {   
        name: "UCSD ORTHOPEDICS",
        address: "200 WEST ARBOR DRIVE SUITE 2, SAN DIEGO, CA, 92103",
        abbrev: "UCSD ORTHOPEDICS",
        category: "ORTHOPEDICS",
        phone:"858-657-8200",
        criteria: ['200','WEST','ARBOR','DIEGO','92103','STE 2']
    },
    {   
        name: "UCSD ORTHOPEDICS",
        address: "200 WEST ARBOR DRIVE SUITE 2, SAN DIEGO, CA, 92103",
        abbrev: "UCSD ORTHOPEDICS",
        category: "ORTHOPEDICS",
        phone:"858-657-8200",
        criteria: ['200','WEST','ARBOR','DIEGO','92103','#2']
    },
    {
        name: "UCSD HILLCREST",
        address: '200 WEST ARBOR DRIVE,STE. 1, SAN DIEGO, CA, 92101-2030',
        reference:'200 WEST ARBOR DRIVE,3RD FLOOR, STE. 1, SAN DIEGO, CA, 92101-2030',
        abbrev: null,
        category: "ER",
        phone: null,
        criteria: ['200 W','ARBOR','3RD','#1', "DIEGO"]
    },
    {
        name: "UCSD HILLCREST",
        address: "200 WEST ARBOR DRIVE,3RD FLOOR, STE. 1, SAN DIEGO, CA, 92101-2030",
        abbrev: null,
        category: "ER",
        phone: null,
        criteria: ['200 W','ARBOR','3RD','STE 1', "DIEGO"] 
    },
    {
        name: "UCSD HILLCREST",
        address: "200 WEST ARBOR DRIVE,3RD FLOOR, STE. 1, SAN DIEGO, CA, 92101-2030",
        abbrev: null,
        category: "ER",
        phone: null,
        criteria: ['200 W','ARBOR','3RD','SUITE 1', "DIEGO"] 
    },
    {
        name: "UCSD HILLCREST",
        address: "200 WEST ARBOR DRIVE,3RD FLOOR, STE. 1, SAN DIEGO, CA, 92101-2030",
        abbrev: null,
        category: "ER",
        phone: null,
        criteria: ['200 W','ARBOR', 'DIEGO','92101', 'STE. 1', 'THIRD']
    },    
    {
        name: "DR. JASON WOO UROLOGY",
        address: "200 WEST ARBOR DRIVE,3RD FLOOR, STE. 4, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: "UROLOGY",
        phone: '858 657-7876',
        criteria: ['200 W','ARBOR', 'DIEGO','92103', '4', '3RD']
    },
    {   
        name: "UCSD",
        address: "200 WEST ARBOR DRIVE, LOW LEVEL STE. 201, SAN DIEGO, CA, 92103",
        abbrev: "UCSD ORTHOPEDICS",
        category: "ORTHOPEDICS",
        phone:"858-657-8200",
        criteria: ['200','ARBOR D','WEST','ARBOR','201','DIEGO','92103']
    },
    {   
        name: "HILLCREST UCSD",
        address: "200 WEST ARBOR DRIVE, SAN DIEGO, CA, 92103",
        abbrev: "UCSD",
        category: "",
        phone:"619-543-5646",
        criteria: ['200 W','ARBOR D','DIEGO','92103']
    },
    {   
        name: "HILLCREST UCSD",
        address: "200 WEST ARBOR DRIVE, SAN DIEGO, CA, 92101-2030",
        abbrev: "UCSD",
        category: "",
        phone:"619-543-5646",
        criteria: ['200 W','ARBOR D','DIEGO','92101']
    }, 
    {
        name: "INTERNAL MEDECINE PULMONARY CLINIC",
        address: "227 CHURCH AVENUE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "PULMONARY",
        phone: null,
        criteria: ['227','CHURCH A','CHULA','91910']
    },
    {
        name: "PROFESSIONAL CORPORATION",
        address: "353 CHURCH AVENUE, SUITE A, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-8883',
        criteria: ['353','CHURCH A','SUITE A','CHULA','91910']
    },
    {
        name: "CHULA VISTA PODIATRY GROUP",
        address: "276 CHURCH AVENUE, SUITE A, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-427-0311',
        criteria: ['276','CHURCH A','SUITE A','CHULA','91910']
    },
    {
        name: "DR. MANUEL PUIG-LLANO",
        address: "276 CHURCH AVENUE SUITE E, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-7290',
        criteria: ['276','CHURCH A','SUITE E','CHULA','91910']
    },
    {
        name: "MEDIC",
        address: "276 CHURCH AVE,CHULA VISTA,CA 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['276','CHURCH A','CHULA','91910']
    },
    {
        name: "DR. MANUEL PUIG-LLANO",
        address: "276 CHURCH AVENUE SUITE E, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-7290',
        criteria: ['276','CHURCH A','#E','CHULA','91910']
    },
    
    {
        name: "EASTLAKE SLEEP CENTER",
        address: "841 KUHN DRIVE , SUITE 201, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: "SLEEP",
        phone: '619-623-3816',
        criteria: ['841','KUHN D','201','CHULA','91914']
    },
    {
        name: "SOUTH BAY PULMONARY",
        address: "841 KUHN DR, SUITE 200, CHULA VISTA, CA, 91914-4523",
        abbrev: null,
        category: "PULMONARY",
        phone: '619-623-3816',
        criteria: ['841','KUHN D','200','CHULA','91914']
    }
     
    ,
    {
        name: "SOUTHBAY FAMILY HEALTH & DENTAL CENTER",
        address: "340 E 8TH STREET, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: "DENTAL",
        phone: '619-434-3200',
        criteria: ['340 E','8TH','NATIONAL','91950']
    }
    ,
    {
        name: "SOUTH BAY URGENT CARE",
        address: "1628 PALM AVENUE, SAN DIEGO, CA, 92154",
        abbrev: null,
        category: "RADIOLOGY",
        phone: '619-591-9999',
        criteria: ['1628','PALM','DIEGO','92154']
    },
    {
        name: "CASTILLEJOS EYE INSTITUTE OPHTHALMOLOGY",
        address: "342 F ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "OPHTHALMOLOGY",
        phone: null,
        criteria: ['342','F','CHULA','91910']
    },
    {
        name: "CHULA VISTA PERIODONTICS",
        address: "345 F ST, SUITE 240, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "PERIODONTICS",
        phone: null,
        criteria: ['345 F','ST','240','CHULA','91910']
    },
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "345 F STREET, STE. 100, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-427-3481',
        criteria: ['345 F','ST','100','CHULA','91910']
    },
    {
        name: "CVTS MEDICAL GROUP, INC",
        address: "345 F STREET, SUITE 200, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-421-1111',
        criteria: ['345 F','ST','200','CHULA','91910']
    },
    {
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "2765 MAIN STREET, SUITE A, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "ALZHEIMER",
        phone: '619-420-1703',
        criteria: ['2765','MAIN ST','CHULA','91911']
    },
    {
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "2765 MAIN STREET, SUITE A, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "ALZHEIMER",
        phone: '619-420-1703',
        criteria: ['2765','MAIN ST','CV','91911']
    },
    {
        name: "SENIOR DAY CENTER CHULA VISTA - C.V CENTER",
        address: "880 3RD AVENUE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "SENIOR CARE",
        phone: '619-205-4585',
        criteria: ['880','THIRD','CHULA','91911']
    },
    {
        name: "SENIOR DAY CENTER CHULA VISTA - C.V CENTER",
        address: "880 3RD AVENUE, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "SENIOR CARE",
        phone: '619-205-4585',
        criteria: ['880','3RD','CHULA','91911']
    },
    {
        name: "IHS RADIOLOGY - CHULA VISTA GATEWAY BUILDING",
        address: "333 H STREET, SUITE 1095, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "RADIOLOGY",
        phone: '866-558-4320',
        criteria: ['333 H','1095','CHULA','91910']
    },
    {
        name: "IHS RADIOLOGY",
        address: "333 H STREET, SUITE 1005, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "RADIOLOGY",
        phone: null,
        criteria: ['333 H','1005','CHULA','91910']
    }
    ,
    {
        name: "SAN YSIDRO HEALTH CENTER - SAN DIEGO PACE",
        address: "3364 BEYER BLVD, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: "PACE",
        phone: null,
        criteria: ['3364','BEYER B','YSIDRO']
    },
    {
        name: "SAN YSIDRO HEALTH CENTER- SAN DIEGO PACE",
        address: "3364 BEYER BLVD, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: "PACE",
        phone: null,
        criteria: ['3364','BEYER B', '92173']
    } 
    ,
    {
        name: "SAN YSIDRO HEALTH CENTER- SAN DIEGO PACE",
        address: "3364 BEYER BLVD, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: "PACE",
        phone: null,
        criteria: ['PACE','BEYER B', '92173', 'DIEGO', 'YSIDRO']
    }
    ,
    {
        name: "UCSD MOORE CANCER CENTER ONCOLOGY OCEAN CLINIC",
        address: "3855 HEALTH SCIENCES DR, LA JOLLA, CA, 92093",
        reference:"33855 HEALTH SCIENCES DR, 1ST FLOOR, LA JOLLA, CA, 92093",
        abbrev: null,
        category: "ONCOLOGY",
        phone: '858-822-6100',
        criteria: ['3855','HEALTH SCIENCES','JOLLA','92093']
    } ,
    {
        name: "HEARING AID IMPRESSIONS- SONUS 07",
        address: "310 THIRD AVE, STE B21, CHULA VISTA, CA, 91910-3965",
        reference:"310 THIRD AVE, STE C11, 3RD FLOOR, CHULA VISTA, CA, 91910-3965",
        abbrev: null,
        category: "HEARING",
        phone: null,
        criteria: ['310','THIRD','21','CHULA', '2ND','91910']
    } ,
    {
        name: "HEARING AID IMPRESSIONS- SONUS 07",
        address: "310 THIRD AVE, STE B21, CHULA VISTA, CA, 91910-3965",
        reference:"310 THIRD AVE, STE C11, 3RD FLOOR, CHULA VISTA, CA, 91910-3965",
        abbrev: null,
        category: "HEARING",
        phone: null,
        criteria: ['310','3RD','21','CHULA', '2ND','91910']
    },
    {
        name: "SONUS 07",
        address: "310 THIRD AVE, STE C11, CHULA VISTA, CA, 91910-3965",
        reference:"310 THIRD AVE, STE C11, 3RD FLOOR, CHULA VISTA, CA, 91910-3965",
        abbrev: null,
        category: "HEARING",
        phone: null,
        criteria: ['310','3RD A','11','CHULA', '91910']
    },
    ,
    {
        name: "SONUS 07",
        address: "310 THIRD AVE, STE C11, CHULA VISTA, CA, 91910-3965",
        reference:"310 THIRD AVE, STE C11, 3RD FLOOR, CHULA VISTA, CA, 91910-3965",
        abbrev: null,
        category: "HEARING",
        phone: null,
        criteria: ['310','THIRD A','11','CHULA', '91910']
    },
    {
        name: "HEAD AND NECK SURGERY SPECIALIST",
        address: "3855 HEALTH SCIENCES DRIVE, LA JOLLA, CA, 92037",
        abbrev: null,
        category: "SURGERY",
        phone: '858-822-6197',
        criteria: ['3855','HEALTH','SCIENCES','JOLLA', "92037"]
    },

    {
        name: "PUJA CHITKARA MD, RHEUMATOLOGY",
        address: "765 MEDICAL CENTER COURT, SUITE 216, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "RHEUMATOLOGY",
        phone: '619-623-3000',
        criteria: ['765','MEDICAL C','216', 'CHULA','91911']
    },
    {
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "765 MEDICAL CENTER COURT, SUITE 211, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-616-2100',
        criteria: ['765','MEDICAL C','211', 'CHULA','91911']
    },   
    {
        name: "SHARP CHULA VISTA",
        address: "765 MEDICAL CENTER COURT, 2ND FLOOR, SUITE 205,CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['765','MEDICAL C','205', 'COURT']
    },
    {
        name: "EAR, NOSE, & THROAT ASSOCIATES OF SAN DIEGO",
        address: "765 MEDICAL CENTER COURT, SUITE 210, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-482-0565',
        criteria: ['765','MEDICAL C','210', 'CHULA','91911']
    },
    {
        name: "SAN DIEGO IMAGING MEDICAL GROUP",
        address: "765 MEDICAL CENTER CT, SUITE 100, CHULA VISTA, CA 91911-6617",
        abbrev: null,
        category: "IMAGING",
        phone: '619-397-6577',
        criteria: ['765','MEDICAL C','100', 'CHULA','91911']
    },
    {
        name: "SAN DIEGO IMAGING MEDICAL GROUP - SHARP CHULA VISTA",
        address: "765 MEDICAL CENTER CT, SUITE #205,  2ND FLOOR, CHULA VISTA, CA, 91911-6600",
        abbrev: null,
        category: "IMAGING",
        phone: '619-502-5935',
        criteria: ['765','MEDICAL C','205', 'CHULA','91911']
    },
    {
        name: "SHARP CHULA VISTA",
        address: "765 MEDICAL CENTER CT, SUITE 200, CHULA VISTA, CA, 91911-6600",
        reference:'765 MEDICAL CENTER CT, SUITE 200,  2ND FLOOR, CHULA VISTA, CA, 91911-6600',
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['765','MEDICAL C','200', 'CHULA','91911']
    },
    {
        name: "SAN DIEGO IMAGING MEDICAL GROUP - SHARP CHULA VISTA",
        address: "765 MEDICAL CENTER CT, CHULA VISTA, CA, 91911-6600",
        abbrev: null,
        category: "IMAGING",
        phone: null,
        criteria: ['765','MEDICAL C','R C', 'CHULA','91911']
    },

    {
        name: "KAFRI HEART & VASCULAR",
        address: "328 HIGHLAND AVENUE, SUITE 200 EL CAJON, CA, 92021",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-930-9404',
        criteria: ['328','HIGHLAND','200','CAJON','92021']
    },
    {
        name: "KAFRI HEART & VASCULAR, HASSAN KAFRI, MD",
        address: "429 BROADWAY, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-434-0204',
        criteria: ['429','BROADWAY','91910','CHULA']
    },
    {
        name: "KAFRI HEART & VASCULAR, HASSAN KAFRI, MD",
        address: "429 BROADWAY, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-434-0204',
        criteria: ['429','BROADWAY','CHULA']
    },
    {
        name: "SYNOVATION MEDICAL GROUP",
        address: "340 4TH AVE, STE 19, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','4TH AV',' 19','CHULA','91910']
    },
    {
        name: "SYNOVATION MEDICAL GROUP",
        address: "340 4TH AVE, STE 19, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','FOURTH AV',' 19','CHULA','91910']
    },    
    {
        name: "SYNOVATION MEDICAL GROUP",
        address: "340 4TH AVE, STE 19, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','FOURTH AV','#19','CHULA','91910']
    },   
    {
        name: "SYNOVATION MEDICAL GROUP",
        address: "340 4TH AVE, STE 19, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','4TH AV','#19','CHULA','91910']
    },  
    {
        name: "SYNOVATION MEDICAL GROUP",
        address: "340 4TH AVE, STE 19, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-761-5308',
        criteria: ['340','4TH AV',' 19','CHULA','91911']
    },  
    {
        name: "SYNOVATION MEDICAL GROUP",
        address: "340 4TH AVE, STE 19, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-761-5308',
        criteria: ['340','FOURTH AV',' 19','CHULA','91911']
    },  
    {
        name: "BALBOA NEPHROLOGY",
        address: "340 4TH AVENUE , SUITE 4, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','FOURTH A',' 4','CHULA','91910']
    },
    {
        name: "BALBOA NEPHROLOGY",
        address: "340 4TH AVENUE , SUITE 4, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','4TH A',' 4','CHULA','91910']
    },
    {
        name: "FRESENIUS DIALYSIS",
        address: "340 4TH AVENUE , SUITE 18, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-761-5308',
        criteria: ['340','4TH A','18','CHULA','91910']
    },
    {
        name: "SAN DIEGO COASTAL ENDOCRINOLOGY",
        address: "340 4TH AVE, SUITE 7A, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ENDOCRINOLOGY",
        phone: '619-691-0388',
        criteria: ['340','4TH A','7A','CHULA','91910']
    },
    {
        name: "SAN DIEGO COASTAL ENDOCRINOLOGY",
        address: "340 4TH AVE, SUITE 7A, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ENDOCRINOLOGY",
        phone: '619-691-0388',
        criteria: ['340','FOURTH A','7A','CHULA','91910']
    },
    {
        name: "ONCOLOGY DR. ITURBE",
        address: "480 4TH AVE , SUITE 409, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ONCOLOGY",
        phone: '619-425-2080',
        criteria: ['480','FOURTH','409','CHULA','91910']
    },
    {
        name: "ONCOLOGY DR. ITURBE",
        address: "480 4TH AVE , SUITE 409, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ONCOLOGY",
        phone: '619-425-2080',
        criteria: ['480','4TH','409','CHULA','91910']
    },
    {  
        name: "WILLIAM EVES, MD",
        address: "480 4TH AVENUE, SUITE 307, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-426-3240',
        criteria: ['480','4TH',' 307','CHULA','91910']
    },
    {  
        name: "WILLIAM EVES, MD",
        address: "480 4TH AVENUE, SUITE 307, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-426-3240',
        criteria: ['480','FOURTH',' 307','CHULA','91910']
    },
    {  
        name: "NOT AVAILABLE",
        address: "480 4TH AVENUE, SUITE 307, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-426-3240',
        criteria: ['480','FOURTH','307','CHULA','91911']
    },
    {  
        name: "NOT AVAILABLE",
        address: "480 4TH AVENUE, SUITE 307, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-426-3240',
        criteria: ['480','4TH','307','CHULA','91911']
    },
    {  
        name: "SDPMG JOHNSON, MARK",
        address: "480 4TH AVENUE, SUITE 506, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-0313',
        criteria: ['480','4TH',' 506','CHULA','91910']
    },
    {  
        name: "SDPMG JOHNSON, MARK",
        address: "480 4TH AVENUE, SUITE 506, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-0313',
        criteria: ['480','FOURTH',' 506','CHULA','91910']
    },
    {
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "480 4TH AVE, SUITE 501, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ORTHOPEDIC",
        phone: '619-425-9510',
        criteria: ['480','FOURTH','501','CHULA','91910']
    },
    {
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "480 4TH AVE, SUITE 501, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "ORTHOPEDIC",
        phone: '619-425-9510',
        criteria: ['480','4TH','501','CHULA','91910']
    },
    {
        name: "THE EYE INSTITUTE OF CALIFORNIA",
        address: "480 4TH AVENUE, SUITE 201, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "OFTHALMOLOGY",
        phone: '619-427-3355',
        criteria: ['480','4TH A','201','CHULA','91910']
    },
    {
        name: "THE EYE INSTITUTE OF CALIFORNIA",
        address: "480 4TH AVENUE, SUITE 201, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "OFTHALMOLOGY",
        phone: '619-427-3355',
        criteria: ['480','FOURTH A','201','CHULA','91910']
    },
    {
        name: "NOT AVAILABLE",
        address: "480 4TH AVENUE, SUITE 4004, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','FOURTH A','4004','CHULA','91910']
    },
    {
        name: "NOT AVAILABLE",
        address: "480 4TH AVENUE, SUITE 4004, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','4TH A','4004','CHULA','91910']
    },
    {
        name: "DR.DUQUE",
        address: "480 4TH AVENUE, SUITE 4004, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','4TH A','4004','CHULA','91910']
    },
    {
        name: "SCRIPPS MERCY HOSPITAL CHULA VISTA",
        address: "480 4TH AVENUE SUITE 316 CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','4TH A','316','CHULA','91910']
    },
    {
        name: "SCRIPPS MERCY HOSPITAL CHULA VISTA",
        address: "480 4TH AVENUE SUITE 316 CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','FOURTH A','316','CHULA','91910']
    },
    {
        name: "SOUTH BAY SURGICAL ASSOCIATES",
        address: "480 4TH AVENUE, SUITE 404, CHULA VISTA, CA, 91910-4410",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','FOURTH A','404','CHULA','91910']
    },
    {
        name: "SOUTH BAY SURGICAL ASSOCIATES",
        address: "480 4TH AVENUE, SUITE 404, CHULA VISTA, CA, 91910-4410",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','4TH A','404','CHULA','91910']
    },
    {
        name: "NOT AVAILABLE",
        address: "480 4TH AVENUE, SUITE 12, CHULA VISTA , CA, 91910 ",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','4TH AV','12','CHULA','91910']
    },
    {
        name: "NOT AVAILABLE",
        address: "480 4TH AVENUE, SUITE 12, CHULA VISTA , CA, 91910 ",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['480','FOURTH AV','12','CHULA','91910']
    },
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "610 EUCLID AVE, SUITE 301, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: "PODOLOGY",
        phone: '619-427-3481',
        criteria: ['610','EUCLID A','301','NATIONAL','91950']
    },
    {
        name: "AMBULATORY SURGICAL CENTER",
        address: "286 EUCLID AVENUE, SUITE 109, SAN DIEGO, CA, 92114",
        abbrev: null,
        category: "SURGERY",
        phone: '619-266-3332',
        criteria: ['286','EUCLID A','109','DIEGO','92114']
    },
    {
        name: "EUCLID FAMILY COUNSELING CENTER",
        address: "286 EUCLID AVENUE, SUITE 302, SAN DIEGO, CA, 92114",
        abbrev: null,
        category: "COUNSELING",
        phone: '619-662-4100',
        criteria: ['286','EUCLID A','302','DIEGO','92114']
    },
    {
        name: "CHULA VISTA MEDICAL PLAZA",
        address: "678 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "URGENT CARE",
        phone: '619-662-4100',
        criteria: ['678','3RD AV','CHULA','91910']
    },
    {
        name: "CHULA VISTA MEDICAL PLAZA",
        address: "678 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "URGENT CARE",
        phone: '619-662-4100',
        criteria: ['678','THIRD AV','CHULA','91910']
    },
    {
        name: "CHULA VISTA MEDICAL PLAZA",
        address: "678 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "URGENT CARE",
        phone: '619-662-4100',
        criteria: ['678','3RD AV','CHULA','91911']
    },
    {
        name: "CHULA VISTA MEDICAL PLAZA",
        address: "678 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "URGENT CARE",
        phone: '619-662-4100',
        criteria: ['678','THIRD AV','CHULA','91911']
    },

    {
        name: "JOHN VIDEEN, MD",
        address: "752 MEDICAL CENTER COURT, SUITE 302, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "NEPHROLOGY",
        phone: '619-421-3361',
        criteria: ['752','MEDICAL C','302','CHULA','91911']
    },
    {
        name: "SHARP CHULA VISTA REHAB",
        address: "752 MEDICAL CENTER COURT, SUITE 303, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "REHAB",
        phone: '619-591-7900',
        criteria: ['752','MEDICAL C','303','CHULA','91911']
    },
    {
        name: "SHARP CHULA VISTA REHAB",
        address: "752 MEDICAL CENTER COURT, SUITE 207, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "REHAB",
        phone: '619-591-7900',
        criteria: ['752','MEDICAL C','207','CHULA','91911']
    },
    {
        name: "SHARP CHULA VISTA",
        address: "752 MEDICAL CENTER COURT, SUITE 200, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "REHAB",
        phone: '619-591-7900',
        criteria: ['752','MEDICAL C','200','CHULA','91911']
    },
    {
        name: "VITALI AIZIN, MD",
        address: "321 E STREET, STE A, CHULA VISTA, CA, 91910-2667",
        abbrev: null,
        category: "CARDIOLOGY",
        phone: '619-573-4779',
        criteria: ['321 E',' A','CHULA','91910']
    },
    {
        name: "UCSD UROLOGY",
        address: "321 E ST, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: "UROLOGY",
        phone: null,
        criteria: ['321 E','CHULA','91910']
    },
    {
        name: "CALIFORNIA RETINA ASSOCIATES",
        address: "835 THIRD AVE, SUITE A, CHULA VISTA , CA, 91911",
        abbrev: null,
        category: "OPHTHALMOLOGY",
        phone: '619-425-7755',
        criteria: ['835','THIRD',' A','CHULA','91911']
    },
    {
        name: "CALIFORNIA RETINA ASSOCIATES",
        address: "835 3RD AVE, SUITE A, CHULA VISTA , CA, 91911",
        abbrev: null,
        category: "OPHTHALMOLOGY",
        phone: '619-425-7755',
        criteria: ['835','3RD',' A','CHULA','91911']
    },
    {
        name: "SAN YSIDRO HEALTH EL CAJON",
        address: "875 EL CAJON BLVD, EL CAJON, CA, 92020",
        abbrev: null,
        category: "SAN YSIDRO HEALTH",
        phone: '619-662-4100',
        criteria: ['875','CAJON','BLVD','92020']
    },
    {
        name: "SAN YSIDRO HEALTH EL CAJON",
        address: "875 EL CAJON BLVD, EL CAJON, CA, 92020",
        abbrev: null,
        category: "SAN YSIDRO HEALTH",
        phone: '619-662-4100',
        criteria: ['875','CAJON','BLVD']
    },
    {
        name: "UC SAN DIEGO HEALTH MEDICAL OFFICES SOUTH",
        address: "4168 FRONT STREET, SAN DIEGO, CA, 92103-2030",
        reference:"",
        abbrev: null,
        category: "MEDICAL",
        phone: '619-543-6222',
        criteria: ['4168','FRONT S','DIEGO','92103']
    },
    {
        name: "DR.MENDEL",
        address: "4168 FRONT STREET, SUITE 106, SAN DIEGO,CA,9210",
        abbrev: null,
        category: "PULMONARY",
        phone: null,
        criteria: ['4168','FRONT S','106','DIEGO', '9210']
    },
    {
        name: "HILLCREST - ON CAMPUS - OUTPATIENT HOSPITAL",
        address: "4168 FRONT STREET, SUITE 4, SAN DIEGO, CA,92173",
        reference:"4168 FRONT STREET 2ND FLOOR SUITE 4 SAN DIEGO, CA,92173",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4168','FRONT S',' 4','DIEGO','92173']
    },
    {
        name: "DENTAL SYHC",
        address: "4004 BEYER BLVD, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: "DENTAL",
        phone: '619-662-4100',
        criteria: ['4004','BEYER','YSIDRO','92173']
    },
    {
        name: "SS VASCULAR SURGERY & ENDOVASCULAR THERAPY",
        address: "1111 BROADWAY AVENUE, SUITE 305, CHULA VISTA , CA, 91911",
        abbrev: null,
        category: "VASCULAR",
        phone: '619-567-7007',
        criteria: ['1111','BROADWAY A','305','CHULA','91911']
    },
    {
        name: "DR. RAUL OVIEDO / MARIUSZ W. WYSOCZANSKI, MD",
        address: "750 MEDICAL CENTER CT , SUITE 3, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-434-428',
        criteria: ['750','MEDICAL C',' 3','CHULA','91910']
    },
    {
        name: "HEART & WELLNESS",
        address: "750 MEDICAL CENTER CT , SUITE 3, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-434-428',
        criteria: ['750','MEDICAL C','R C',' 3','CHULA','91911']
    },
    {
        name: "SDPMG ONCOLOGY",
        address: "750 MEDICAL CENTER COURT, SUITE 9, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'ONCOLOGY',
        phone: '619-421-6922',
        criteria: ['750','MEDICAL C','SUITE 9','CHULA','91911']
    },
    {
        name: "UROLOGY DR SEVILLA",
        address: "750 MEDICAL CENTER CT SUITE 14, CHULA VISTA, CA 91911",
        abbrev: null,
        category: 'UROLOGY',
        phone: null,
        criteria: ['750','MEDICAL C',' 14','CHULA','91911']
    },
    {
        name: "SAN DIEGO ACCESS CARE/SOUTHERN CALIFORNIA VEIN CARE",
        address: "995 GATEWAY CENTER WAY, SUITE# 207, SAN DIEGO, CA, 92102",
        abbrev: null,
        category: 'VASCULAR',
        phone: '619-263-9729',
        criteria: ['995','GATEWAY C','207','DIEGO','92102']
    },
    {
        name: "NOT AVAILABLE",
        address: "995 GATEWAY CENTER WAY, SUITE# 209, SAN DIEGO , CA, 92102",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['995','GATEWAY C','209','DIEGO','92102']
    },
    
    {
        name: "UROLOGY",
        address: "3444 KEARNY VILLA RD, SUITE # 202, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'UROLOGY',
        phone: '858-429-7646',
        criteria: ['3444','KEARNY','VILLA R','DIEGO','92123','202']
    },
    {
        name: "SYNERGY ORTHOPEDIC SPECIALISTS MEDICAL GROUP",
        address: "3444 KEARNY VILLA RD, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'ORTHOPEDIC',
        phone: '619-421-3400',
        criteria: ['3444','KEARNY','VILLA R','DIEGO','92123']
    },
    {
        name: "DR. VAPNEK: GENESIS HEALTHCARE UROLOGY KEARNY MESA",
        address: "3444 KEARNY VILLA RD, SUITE 20, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'UROLOGY',
        phone: '858-429-7646',
        criteria: ['3444','KEARNY','VILLA R','SD','92123','20']
    },
    {
        name: "SAN DIEGO VASCULAR ACCESS CENTER",
        address: "6402 EL CAJON BLVD, SUITE 100, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: 'VASCULAR',
        phone: '619-582-4490',
        criteria: ['6402','CAJON B','100','DIEGO','92115']
    },
    {
        name: "SAN DIEGO VASCULAR ACCESS CENTER",
        address: "6402 EL CAJON BLVD STE 102 SAN DIEGO, CA, 92115-2645",
        abbrev: null,
        category: 'VASCULAR',
        phone: '619-582-4490',
        criteria: ['6402','CAJON B','102','DIEGO','92115']
    },
    
    {
        name: "SOUTH COUNTY HEMATOLOGY & ONCOLOGY, KENNETH JOHNSON, MD",
        address: "769 MEDICAL CENTER CT, SUITE 202, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'HEMATOLOGY & ONCOLOGY',
        phone: '619-482-8430',
        criteria: ['769','MEDICAL C','202','CHULA','91911']
    },
    {
        name: "MEDIC",
        address: "769 MEDICAL CENTER CT,CHULA VISTA,CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['769','MEDICAL C','CHULA','91911','R C']
    },
    {
        name: "SAN DIEGO ARTHRITIS MEDICAL CLINIC",
        address: "3633 CAMINO DEL RIO SOUTH, SUITE 300, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: 'ARTHRITIS',
        phone: '619-287-9730',
        criteria: ['3633','CAMINO','RIO','300','DIEGO','92108']
    },
    {
        name: "SAN DIEGO FAMILY DERMATOLOGY",
        address: "655 EUCLID AVE, SUITE 401, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-267-8303',
        criteria: ['655','EUCLID A','401','NATIONAL','91950']
    },
    {
        name: "BALBOA NEPHROLOGY",
        address: "655 EUCLID AVE, #303, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'NEPHROLOGY',
        phone: '619-267-8303',
        criteria: ['655','EUCLID A','303','NATIONAL','91950']
    },
    {
        name: "CARDIOLOGY OF SOUTHERN CALIFORNIA",
        address: "655 SOUTH EUCLID AVENUE, SUITE 304, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-267-8303',
        criteria: ['655 S','EUCLID AV','304','NATIONAL','91950']
        
    },
    {
        name: "NOT AVAILABLE",
        address: "655 EUCLID AVENUE, SUITE 206, NATIONAL CITY, CA, 91950 ",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['655','EUCLID AV','206','NATIONAL','91950']
        
    },

    
    {
        name: "HEIDRUN GOLLOGLY, MD",
        address: "655 SOUTH EUCLID AVE STE 302 NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['655 S','EUCLID AV','302','NATIONAL','91950']
        
    },
    {
        name: "IMAGING HEALTHCARE SPECIALISTS IHS - ALVARADO COURT",
        address: "6386 ALVARADO COURT, SUITE 121, SAN DIEGO, CA, 92120",
        abbrev: null,
        category: 'IMAGING',
        phone: '866-558-4320',
        criteria: ['6386','ALVARADO C','121','DIEGO','92120']
    },
    {
        name: "HEART AND WELLNESS",
        address: "502 EUCLID AVE, SUITE 302, 3RD FLOOR, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'IMAGING',
        phone: '619-434-4288',
        criteria: ['502','EUCLID A',' 302','3RD','NATIONAL','91950']
    },
    {
        name: "HEART AND WELLNESS",
        address: "502 EUCLID AVE, SUITE 302, 3RD FLOOR, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'IMAGING',
        phone: '619-434-4288',
        criteria: ['502','EUCLID A',' 302','THIRD','NATIONAL','91950']
    },
    {
        name: "HEART AND WELLNESS",
        address: "502 EUCLID AVE, SUITE 302, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'IMAGING',
        phone: '619-434-4288',
        criteria: ['502','EUCLID A',' 302','NATIONAL','91950']
    },
    {
        name: "HEART AND WELLNESS",
        address: "502 EUCLID AVE, SUITE 104, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'IMAGING',
        phone: '619-434-4288',
        criteria: ['502','EUCLID A','104','NATIONAL','91950']
    },
    {
        name: "SHARP MEMORIAL HOSPITAL",
        address: "7901 FROST ST, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-939-5611',
        criteria: ['7901','FROST S','DIEGO','92123']
    },
    {
        name: "DTR. HOUSE",
        address: "3987 BATEMAN AVENUE EXT 2120, SAN DIEGO, CA, 92154",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3987','BATEMAN A','2120','DIEGO','92154']
    },
    {
        name: "CARDIOVASCULAR INSTITUTE",
        address: "300 S. PIERCE ST, SUITE 201, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: '619-668-4700',
        criteria: ['300 S','PIERCE','201','CAJON','92020']
    },
    {
        name: "CARDIOVASCULAR INSTITUTE",
        address: "300 SOUTH PIERCE ST, SUITE 102, EL CAJON, CA 92020-4124",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['300 S','PIERCE','102','CAJON','92020']
    },
    {
        name: "CARDIOVASCULAR INSTITUTE",
        address: "300 SOUTH PIERCE ST, SUITE 102, EL CAJON, CA 92020-4124",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['300 S','PIERCE ST','CAJON','92020']
    },
    {
        name: "DENTAL KCH",
        address: "950 EUCLID AVE, SAN DIEGO, CA, 92114",
        abbrev: null,
        category: null,
        phone: '619-662-4100',
        criteria: ['950 EU','EUCLID A','DIEGO','92114']
    },
    {
        name: "KING CHAVES HEALTH CENTER",
        address: "950 S EUCLID AVE, SAN DIEGO, CA, 92114",
        abbrev: null,
        category: null,
        phone: '619-662-4100',
        criteria: ['950 S','EUCLID A','DIEGO','92114']
    },
    {
        name: "COASTAL MEDICAL & COSMETIC DERMATOLOGY INC.",
        address: "890 EASTLAKE PARKWAY, SUITE 102, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-754-6869',
        criteria: ['890','EASTLAKE P','102','CHULA','91914']
    },
    {
        name: "CARDIOLOGY",
        address: "890 EASTLAKE PARKWAY, SUITE 205, CHULA VISTA, CA, 91914 ",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-482-0300',
        criteria: ['890','EASTLAKE P','205','CHULA','91914']
    },
    {
        name: "COASTAL MEDICAL & COSMETIC DERMATOLOGY INC.",
        address: "890 EASTLAKE PARKWAY, SUITE 202, CHULA VISTA, CA, 91914 ",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-754-6869',
        criteria: ['890','EASTLAKE P','202','CHULA','91914']
    },
    {
        name: "IHS RADIOLOGY - HILLCREST",
        address: "150 W WASHINGTON ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '866-558-4320',
        criteria: ['150 W','WASHINGTON S','DIEGO','92103']
    },
    {
        name: "SOUTHERN CALIFORNIA GI & LIVER CENTER",
        address: "256 LANDIS AVENUE, SUITE 202, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-332-1221',
        criteria: ['256','LANDIS A','202','CHULA','91910']
    },
    {
        name: "ALBERT SHARF, MD",
        address: "1240 BROADWAY, SUITE 210, EL CAJON, CA, 92021",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-470-7700',
        criteria: ['1240','BROADWAY','210','CAJON','92021']
    },
    {
        name: "NEUROLOGY GRISOLIA JAMES",
        address: "4033 3RD AVENUE, SUITE 410, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-294-9292',
        criteria: ['4033','THIRD A','410','DIEGO','92103']
    },
    {
        name: "NEUROLOGY GRISOLIA JAMES",
        address: "4033 3RD AVENUE, SUITE 410, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-294-9292',
        criteria: ['4033','3RD A','410','DIEGO','92103']
    },
    {
        name: "SUDHIR MALIK, APMC",
        address: "4033 3RD AVENUE, SUITE 420, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-294-9292',
        criteria: ['4033','THIRD A','420','DIEGO','92103']
    },
    {
        name: "SUDHIR MALIK, APMC",
        address: "4033 3RD AVENUE, SUITE 420, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-294-9292',
        criteria: ['4033','3RD A','420','DIEGO','92103']
    },
    {
        name: "SUDHIR MALIK, APMC",
        address: "4033 3RD AVENUE, SUITE 420, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-294-9292',
        criteria: ['4033','THIRD A','402','DIEGO','92103']
    },
    {
        name: "SUDHIR MALIK, APMC",
        address: "4033 3RD AVENUE, SUITE 420, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-294-9292',
        criteria: ['4033','3RD A','402','DIEGO','92103']
    },
    {
        name: "SCRIPPS HEALTH CLINIC",
        address: "4033 3RD AVE, SUITE 210, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-297-5600',
        criteria: ['4033','3RD A','210','DIEGO','92103']
    },
    {
        name: "SCRIPPS HEALTH CLINIC",
        address: "4033 3RD AVE, SUITE 210, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-297-5600',
        criteria: ['4033','THIRD A','210','DIEGO','92103']
    },
    {
        name: "DIGESTIVE DISEASE ASSOCIATES INC.",
        address: "2732 NAVAJO ROAD, SUITE 100, EL CAJON, CA, 92020",
        abbrev: null,
        category: 'COLONOSCOPY',
        phone: '619-598-0448',
        criteria: ['2732','NAVAJO R','100','CAJON','92020']
    },
    {
        name: "GASTROENTEROLOGY",
        address: "2732 NAVAJO RD, SUITE 200, EL CAJON, CA, 92020",
        abbrev: null,
        category: 'GASTROENTEROLOGY',
        phone: '619-332-3281',
        criteria: ['2732','NAVAJO R','200','CAJON','92020']
    },
    {
        name: "CALIFORNIA RETINA ASSOCIATES",
        address: "1520 EAST PLZ BLVD, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: '619-425-7755',
        criteria: ['1520 E','NATIONAL','91950', ' P']
    },
    {
        name: "CLEAR VISION OPTOMETRY",
        address: "440 4TH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'OPTOMETRY',
        phone: '619-427-2020',
        criteria: ['440','4TH','CHULA', '91910']
    },
    {
        name: "CLEAR VISION OPTOMETRY",
        address: "440 4TH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'OPTOMETRY',
        phone: '619-427-2020',
        criteria: ['440','FOURTH','CHULA', '91910']
    },
    {
        name: "ROSA NAVARRO, MD",
        address: "2452 FENTON ST , #101, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: '619-600-5309',
        criteria: ['2452','FENTON S','101', 'CHULA','91914']
    },
    {
        name: "NOT AVAILABLE",
        address: "2452 FENTON STREET , #203 CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2452','FENTON S','203', 'CHULA','91914']
    },
    
    {
        name: "BIONICS ORTHOTICS & PROSTHETICS",
        address: "3737 MORAGA AVE, SUITE B-107, SAN DIEGO , CA, 92117",
        abbrev: null,
        category: 'ORTHOTICS & PROSTHETICS',
        phone: '858-270-9972',
        criteria: ['3737','MORAGA A','B-107', 'DIEGO','92117']
    },
    
    {
        name: "SURGERY CENTER OF SAN DIEGO",
        address: "3434 MIDWAY DR, SUITE 1008, SAN DIEGO, CA, 92110",
        abbrev: null,
        category: 'SURGERY',
        phone: '858-750-4800',
        criteria: ['3434','MIDWAY D','1008', 'DIEGO','92110']
    },
    {
        name: "SURGERY CENTER OF SAN DIEGO",
        address: "3434 MIDWAY DR, SUITE 2001, SAN DIEGO, CA ,92110",
        abbrev: null,
        category: 'SURGERY',
        phone: '858-750-4800',
        criteria: ['3434','MIDWAY D','2001', 'DIEGO','92110']
    },
    {
        name: "DR.RICHARDSON",
        address: "3434 MIDWAY DR, SUITE 2004, SAN DIEGO, CA, 92110",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3434','MIDWAY D','2004', 'DIEGO','92110']
    },
    {
        name: "DR.RICHARDSON",
        address: "3434 MIDWAY DR, SUITE 204, SAN DIEGO, CA, 92110",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3434','MIDWAY D','204', 'DIEGO','92110']
    },
    {
        name: "CALIFORNIA ORTHOPEDIC INSTITUTE MEDICAL ASSOC., INC",
        address: "7485 MISSION VALLEY RD, SUITE 104 A, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: 'ORTHOPEDIC',
        phone: '619-291-8930',
        criteria: ['7485','MISSION V','VALLEY R', '104 A','DIEGO','92108']
    },
    {
        name: "CALIFORNIA ORTHOPEDIC INSTITUTE MEDICAL ASSOC. INC.",
        address: "7485 MISSION VALLEY RD, SUITE 104 A, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: 'ORTHOPEDIC',
        phone: '619-291-8930',
        criteria: ['7485','MISSION V','VALLEY R', '104 A','92108']
    },
    ,
    {
        name: "CALIFORNIA ORTHOPEDIC INSTITUTE MEDICAL ASSOC. INC.",
        address: "7485 MISSION VALLEY RD, SUITE 104 A, SAN DIEGO, CA, 92108",
        abbrev: null,
        category: 'ORTHOPEDIC',
        phone: '619-291-8930',
        criteria: ['7485','MISSION V','VALLEY R', '104A','92108']
    },
    {
        name: "SOUTHERN CALIFORNIA LIVER AND GI CENTER",
        address: "303 H STREET, SUITE 103, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'LIVER',
        phone: '619-291-8930',
        criteria: ['303 H','H ST','103', 'CHULA','91910']
    },
    {
        name: "COLONOSCOPY",
        address: "435 H ST, CHULA VISTA, CA, 91910-4307",
        abbrev: null,
        category: 'COLONOSCOPY',
        phone: null,
        criteria: ['435 H','H ST', 'CHULA','91910']
    },
    {
        name: "ENDOSCOPY ALFA SURGERY CENTER",
        address: "400 E STREET, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'ENDOSCOPY',
        phone: null,
        criteria: ['400','E ST', 'CHULA','91910']
    },
    { 
        name: "ENDOSCOPY ALFA SURGERY CENTER",
        address: "400 E ST, CHULA VISTA, CA 91910",
        abbrev: null,
        category: 'ENDOSCOPY',
        phone: null,
        criteria: ['400 E','CHULA','91910']
    },
    {
        name: "ALFA SURGERY CENTER",
        address: "400 E STREET CHULA VISTA CA 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['400','E ST', 'CHULA','91911']
    },
    {
        name: "DESTA DIGESTIVE DISEASES CV",
        address: "296 H ST, SUITE 301, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'DIGESTIVE',
        phone: '619-266-3332',
        criteria: ['296 H','H ST', '301','CHULA','91910']
    },
    {
        name: "UROGRAM",
        address: "8860 GROSSMONT CENTER DRIVE, LA MESA, CA, 91942",
        abbrev: null,
        category: 'UROLOGY',
        phone: null,
        criteria: ['8860','GROSSMONT C', ' DR','MESA','91942']
    },
    {
        name: "ALFA SURGICAL CENTER",
        address: "256 LANDIS AVENUE, SUITE 100, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'SURGERY',
        phone: '619-621-2622',
        criteria: ['256','LANDIS A', '100','CHULA','91910']
    },
    {
        name: "SHARP CHULA VISTA",
        address: "751 MEDICAL CENTER COURT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-502-5935',
        criteria: ['751','MEDICAL C', 'CHULA','91911']
    },
    {
        name: "SHARP OPHTHALMOLOGISTS",
        address: "8851 CENTER DR,SUITE 406, LA MESA, CA, 91942",
        abbrev: null,
        category: 'OPHTHALMOLOGY',
        phone: '619-425-7755',
        criteria: ['8851','CENTER D', '406','MESA','91942']
    },
    {
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "8851 CENTER DRIVE, SUITE 601, LA MESA, CA, 91942",
        abbrev: null,
        category: 'ORTHOPEDIC',
        phone: '619-441-9811',
        criteria: ['8851','CENTER D', '601','MESA','91942']
    },    
    {
        name: "GENESIS HEALTHCARE PARTNERS LA MESA",
        address: "8851 CENTER DR, SUITE 501, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-697-2456',
        criteria: ['8851','CENTER D', '501','MESA','91942']
    },
    {
        name: "EAST COUNTY NEUROLOGY ASSOCIATES, INC.",
        address: "8851 CENTER DRIVE, SUITE 307, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-337-7900',
        criteria: ['8851','CENTER D', '307','MESA','91942']
    },
    {
        name: "US OF THE HEART & F/U",
        address: "8851 CENTER DRIVE, SUITE 304, LA MESA, CA, 91942",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-687-0557',
        criteria: ['8851','CENTER D', '304','MESA','91942']
    }, 
    {
        name: "NOT AVAILABLE",
        address: "8851 CENTER DRIVE, SUITE 600, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: '619-740-5731',
        criteria: ['8851','CENTER D', '600','MESA','91942']
    },
    
    { 
        name: "DENTAL GROUP PALOMAR",
        address: "664 PALOMAR ST, #1103, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'DENTAL',
        phone: null,
        criteria: ['664','PALOMAR S', '1103','CHULA','91911']
    },
    {
        name: "NEUROLOGY",
        address: "4033 3RD AVE, #410, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-297-1155',
        criteria: ['4033','3RD A','410','DIEGO','92103']
    },
    {
        name: "NEUROLOGY",
        address: "4033 3RD AVE, #410, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '619-297-1155',
        criteria: ['4033','THIRD A','410','DIEGO','92103']
    },
    {
        name: "COMMUNITY HEIGHTS FAMILY MEDICINE",
        address: "4690 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: 'ACUPUNCTURE',
        phone: null,
        criteria: ['4690','CAJON B','DIEGO','92115']
    },
    {
        name: "CARDIOVASCULAR INSTITUTE OF SAN DIEGO",
        address: "1625 E MAIN ST, SUITE 201, EL CAJON, CA, 92021",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['1625 E','MAIN S','CAJON',' 201','92021']
    },
    {
        name: "SONUS 07",
        address: "5565 GROSSMONT CENTER DRIVE, BUILDING 3, SUITE 101,LA MESA, CA, 91942",
        abbrev: null,
        category: 'HEARING',
        phone: '619-464-3353',
        criteria: ['5565','GROSSMONT','CENTER D',' 3','101', 'MESA', '91942']
    }
    ,
    {
        name: "SONUS 07",
        address: "5565 GROSSMONT CENTER DRIVE, BUILDING 3, SUITE 101,LA MESA, CA, 91942",
        abbrev: null,
        category: 'HEARING',
        phone: '619-464-3353',
        criteria: ['5565','GROSSMONT','R D',' 3','154', 'MESA', '91942']
    },    
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "5565 GROSSMONT CENTER DRIVE, BUILDING 3, SUITE 510, LA MESA, CA, 91942",
        abbrev: null,
        category: 'PODIATRY',
        phone: '619-303-7130',
        criteria: ['5565','GROSSMONT','R D',' 3','510', 'MESA', '91942']
    },
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "5565 GROSSMONT CENTER DRIVE, SUITE 510, LA MESA, CA, 91942",
        abbrev: null,
        category: 'PODIATRY',
        phone: '619-303-7130',
        criteria: ['5565','GROSSMONT','R D','510', 'MESA', '91942']
    },
    {
        name: "SOUTH BAY FOOT AND ANKLE",
        address: "5565 GROSSMONT CENTER DRIVE, SUITE 510, LA MESA, CA, 91942",
        abbrev: null,
        category: 'PODIATRY',
        phone: '619-303-7130',
        criteria: ['5565','GROSSMONT','T B','510', 'MESA', '91942']
    },
    {
        name: "EYE ASSOCIATES OF SAN DIEGO & ACUITY EYE GROUP",
        address: "5565 GROSSMONT CENTER DR, BUILDING 3, SUITE 551, LA MESA, CA,91942",
        abbrev: null,
        category: 'PODIATRY',
        phone: '619-303-7130',
        criteria: ['5565','GROSSMONT C','R D','551', 'MESA', '91942']
    },
    {
        name: "SONUS",
        address: "5565 GROSSMONT CENTER DR, BUILDING 3, SUITE 463, LA MESA, CA,91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['5565','GROSSMONT C','R D','463', 'MESA', '91942']
    },
    {
        name: "SAN DIEGO FAMILY DERMATOLOGY",
        address: "292 AVOCADO AVENUE, EL CAJON, CA, 92020",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: ' 619-579-5115',
        criteria: ['292','AVOCADO A','CAJON','92020']
    },
    {  
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DRIVE, SUITE 200, LA JOLLA, CA, 92093",
        abbrev: null,
        category: 'UROLOGY',
        phone: null,
        criteria: ['9400','CAMPUS','POINT D','92093','JOLLA','200']
    },
    {  
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DRIVE, 2ND FLOOR, LA JOLLA , CA, 92037",
        abbrev: null,
        category: null,
        phone: '858 657-8200',
        criteria: ['9400','CAMPUS','POINT D','92037','JOLLA','2ND','FLOOR']
    },
    {  
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DRIVE, 2ND FLOOR, LA JOLLA , CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9400','CAMPUS','PT','DR','92037','JOLLA','2ND','FLOOR']
    },
    { 
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DRIVE, 1ST FLOOR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'ADVANCE IMAGING',
        phone: '619-543-3405',
        criteria: ['9400','CAMPUS','POINT D','92037','JOLLA','1ST', 'FLOOR']
    },
    { 
        name: "UCSD",
        address: "9400 CAMPUS POINT DRIVE, SAN DIEGO, CA 92037",
        abbrev: null,
        reference: "9400 CAMPUS POINT DRIVE, 1ST FLOOR RADIOLOGY, SAN DIEGO, CA, 92037",
        category: null,
        phone: null,
        criteria: ['9400','CAMPUS','POINT D','92037','DIEGO','1ST', 'FLOOR']
    },
    { 
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DRIVE, 3RD FLOOR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'ONCOLOGY',
        phone: '619-543-6980',
        criteria: ['9400','CAMPUS','POINT D','92037','JOLLA','3RD','FLOOR']
    },
    { 
        name: "UC SAN DIEGO",
        address: "9400 CAMPUS POINT DRIVE, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9400','CAMPUS','POINT D','92037','JOLLA']
    },
    {  
        name: "UC SAN DIEGO",
        address: "9300 CAMPUS POINT DRIVE, 1ST FLOOR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '619-543-1998',
        criteria: ['9300','CAMPUS','POINT D','92037','JOLLA','1ST']
    } ,
    {  
        name: "UC SAN DIEGO",
        address: "9300 CAMPUS POINT DRIVE, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '619-543-1998',
        criteria: ['9300','CAMPUS','POINT D','92037','JOLLA']
    } ,
    { 
        name: "GYNECOLOGY-MATERNAL & CHILD HEALTH CENTER",
        address: "4050 BEYER BOULEVARD, SAN YSIDRO, CA, 92173",
        abbrev: null,
        category: 'ADVANCE IMAGING',
        phone: '619-662-4100',
        criteria: ['4050','BEYER B','YSIDRO','92173']
    },
    { 
        name: "FRESENIUS MEDICAL CARE - DIALYSIS CLINICS",
        address: "11031 VIA FRONTERA, STE C, SAN DIEGO, CA, 92127",
        abbrev: null,
        category: 'DIALYSIS',
        phone: '800-881- 5101',
        criteria: ['11031','VIA','FRONTERA','STE C','DIEGO','92127']
    },
    { 
        name: "GRIMALDI CENTER",
        address: "450 4TH AVE, SUITE 312, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'AESTHETICS',
        phone: '619-420-0201',
        criteria: ['450','FOURTH A','312','CHULA','91910']
    },
    { 
        name: "GRIMALDI CENTER",
        address: "450 4TH AVE, SUITE 312, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'AESTHETICS',
        phone: '619-420-0201',
        criteria: ['450','4TH A','312','CHULA','91910']
    },
    { 
        name: "KIKAWA- UCSD",
        address: "9350 CAMPUS POINT DRIVE, STE 1A, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: null,
        criteria: ['9350','CAMPUS D','1A','JOLLA','92037']
    },
    { 
        name: "NOT AVAILABLE",
        address: "9350 CAMPUS POINT DR, SUITE LLC, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','LLC','JOLLA','92037']
    },
    { 
        name: "UCSD DEPT. OF NEUROLOGY",
        address: "9350 CAMPUS POINT DRIVE, STE 2A, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','2A','JOLLA','92037']
    },
    { 
        name: "UCSD",
        address: "9350 CAMPUS POINT DRIVE, LOWER LEVEL, SUITE A, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858 657-8590',
        criteria: ['9350','CAMPUS','POINT D',' A','JOLLA','92037']
    },
    { 
        name: "UCSD",
        address: "9350 CAMPUS POINT DRIVE, LOWER LEVEL, SUITE A, LA JOLLA, CA, 92903",
        abbrev: null,
        category: null,
        phone: '858 657-8590',
        criteria: ['9350','CAMPUS','POINT D',' A','JOLLA','92903']
    },
    { 
        name: "UCSD",
        address: "9350 CAMPUS POINT DRIVE, LOWER LEVEL, SUITE D, LA JOLLA, CA, 92903",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','E D','JOLLA','92903']
    },
    { 
        name: "UCSD",
        address: "9350 CAMPUS POINT DRIVE, LOWER LEVEL, SUITE D, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9350','CAMPUS','POINT D','E D','DIEGO','92121']
    },
    { 
        name: "SHILEY EYE INSTITUTE",
        address: "9350 CAMPUS POINT DRIVE, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858 657-6905',
        criteria: ['9350','CAMPUS','POINT D','JOLLA','92037']
    },
    { 
        name: "SHILEY EYE INSTITUTE",
        address: "9350 CAMPUS POINT DRIVE, LA JOLLA, CA, 92093",
        abbrev: null,
        category: null,
        phone: '858 657-6905',
        criteria: ['9350','CAMPUS','POINT D','JOLLA','92093']
    },
    { 
        name: "UROLOGY HILLCREST",
        address: "4060 4TH AVE, SUITE #310, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'UROLOGY',
        phone: '619-297-4707',
        criteria: ['4060','4TH A','310','DIEGO','92103']
    },
    { 
        name: "UROLOGY HILLCREST",
        address: "4060 4TH AVE, SUITE #310, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'UROLOGY',
        phone: '619-297-4707',
        criteria: ['4060','FOURTH A','310','DIEGO','92103']
    },
    { 
        name: "NOT AVAILABLE",
        address: "4060 4TH AVE, #630, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'UROLOGY',
        phone: '619-297-4707',
        criteria: ['4060','FOURTH A','630','DIEGO','92103']
    },
    { 
        name: "NOT AVAILABLE",
        address: "4060 4TH AVENUE, SUITE 508, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4060','FOURTH A','508','DIEGO','92103']
    },
    
    { 
        name: "NOT AVAILABLE",
        address: "4060 4TH AVE, #630, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'UROLOGY',
        phone: '619-297-4707',
        criteria: ['4060','4TH A','630','DIEGO','92103']
    },
    { 
        name: "MEDIC",
        address: "587 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['587','THIRD A','CHULA','91910']
    },
    { 
        name: "MEDIC",
        address: "587 3RD AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['587','3RD A','CHULA','91910']
    },
    { 
        name: "MEDIC",
        address: "4520 EXECUTIVE DR, SUITE 306, SAN DIEGO, CA, 92921",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4520','EXECUTIVE D','306','DIEGO','92921']
    },
    { 
        name: "NOT AVAILABLE",
        address: "4520 EXECUTIVE DR, SUITE 1, SAN DIEGO, CA, 92921",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4520','EXECUTIVE D',' 1','DIEGO','92121']
    }, 
    { 
        name: "UCSD PULMONARY AND SLEEP CLINIC",
        address: "4520 EXECUTIVE DRIVE, SUITE P2 SAN DIEGO, CA 92121",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4520','EXECUTIVE D','P2','DIEGO','92121']
    },
    { 
        name: "UCSD UROGYNECOLOGY",
        address: "4520 EXECUTIVE DR, SUITE 360, SAN DIEGO, CA, 92921",
        abbrev: null,
        category: 'UROGYNECOLOGY',
        phone: '858-657-8745',
        criteria: ['4520','EXECUTIVE D','360','DIEGO','92921']
    },
    { 
        name: "UROLOGY, DR. ALBO",
        address: "4520 EXECUTIVE DR, SUITE 360, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: 'UROLOGY',
        phone: null,
        criteria: ['4520','EXECUTIVE D','360','DIEGO','92121']
    },
    { 
        name: "AMBULATORY SURGICAL CENTER",
        address: "4520 EXECUTIVE DRIVE, SUITE 111, LA JOLLA, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-657-8860',
        criteria: ['4520','EXECUTIVE DR','111', 'JOLLA','92121']
    },
    { 
        name: "UROGYNECOLOGY UCSD",
        address: "4520 EXECUTIVE DRIVE, LA JOLLA, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-657-7000',
        criteria: ['4520','EXECUTIVE DR', 'JOLLA','92121']
    },
    { 
        name: "MEDIC",
        address: "8008 FROST ST, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8008','FROST S','DIEGO','92123']
    },
    { 
        name: "SCRIPPS COASTAL MEDICAL CENTER HILLCREST",
        address: "501 WASHINGTON ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['501','WASHINGTON S','DIEGO','92103']
    },
    { 
        name: "SHILEY EYE INSTITUTE UCSD",
        address: "9415 CAMPUS POINT DR, LA JOLLA, CA, 92093",
        abbrev: null,
        category: null,
        phone: '858-534-6290',
        criteria: ['9415','CAMPUS','POINT D','JOLLA', '92093']
    },
    { 
        name: "ENDOSCOPY CENTER OF CHULA VISTA",
        address: "681 3RD AVE, STE B, 1015, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'ENDOSCOPY',
        phone: '619-425-2150',
        criteria: ['681','3RD A',' B','1015', 'CHULA','91910']
    },
    { 
        name: "ENDOSCOPY CENTER OF CHULA VISTA",
        address: "681 3RD AVE, STE B, 1015, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'ENDOSCOPY',
        phone: '619-425-2150',
        criteria: ['681','THIRD A',' B','1015', 'CHULA','91910']
    },
    { 
        name: "IHS RADIOLOGY - POWAY",
        address: "12620 MONTE VISTA ROAD, STE A, POWAY, CA, 92064",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '865-658-6500',
        criteria: ['12620','MONTE','VISTA R',' A', 'POWAY','92064']
    },
    { 
        name: "ALEX MERCANDETTI, MD",
        address: "3965 5TH AVE, SUITE 430, SAN DIEGO, CA, 92103 ",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3965','FIFTH A','430', 'DIEGO','92103']
    },
    { 
        name: "ALEX MERCANDETTI, MD",
        address: "3965 5TH AVE, SUITE 430, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3965','5TH A','430', 'DIEGO','92103']
    },
    { 
        name: "RADIATION THERAPY",
        address: "3366 5TH AVENUE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3366','5TH A','DIEGO', '92103']
    },
    { 
        name: "RADIATION THERAPY",
        address: "3366 5TH AVENUE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3366','FIFTH A','DIEGO', '92103']
    },
    { 
        name: "UCSD CARDIOLOGY",
        address: "9434 MEDICAL CENTER DR, LA JOLLA, CA, 92093",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9434','MEDICAL','CENTER D', 'JOLLA','92093']
    },
    { 
        name: "UCSD CARDIOLOGY",
        address: "9434 MEDICAL CENTER DR, LA JOLLA, CA, 92093",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9434','MEDICAL C', 'R D','JOLLA','92037']
    },
    { 
        name: "UCSD CARDIOLOGY",
        address: "9434 MEDICAL CENTER DR, LA JOLLA, CA, 92093",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9434','MEDICAL C', 'R D','JOYA','92037']
    },
    { 
        name: "S&L MEDICAL GROUP",
        address: "4660 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: '619-516-0097',
        criteria: ['4660','CAJON B','EL', 'DIEGO','92115']
    },
    { 
        name: "DENTAL CORPORATION",
        address: "860 JAMACHA RD, SUITE 201, EL CAJON, CA, 92019",
        abbrev: null,
        category: null,
        phone: '619-593-3000',
        criteria: ['860','JAMACHA R','201', 'CAJON','92019']
    },
    { 
        name: "DENTAL CORPORATION",
        address: "860 JAMACHA RD, SUITE 201, EL CAJON, CA, 92019",
        abbrev: null,
        category: null,
        phone: '619-593-3000',
        criteria: ['860','JAMACHA R','201', 'CAJON','92019']
    },
    { 
        name: "SHARF ALBERT",
        address: "1845 EAST 12TH STREET, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['1845 E','12 ST','NATIONAL', '91950']
    },
    { 
        name: "SHARF ALBERT",
        address: "1845 EAST 12TH STREET, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['1845 E','12TH S','NATIONAL', '91950']
    },
    { 
        name: "SLEEP DATA",
        address: "1415 RIDGEBACK RD, SUITE 1, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'SLEEP',
        phone: null,
        criteria: ['1415','RIDGEBACK R',' 1', 'CHULA','91910']
    },
    { 
        name: "SAN DIEGO RETINA ASSOCIATES",
        address: "7695 CARDINAL CT, # 100, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'OFTHALMOLOGY',
        phone: '858-609-7100',
        criteria: ['7695','CARDINAL C','100', 'DIEGO','92123']
    },
    { 
        name: "UCSD",
        address: "330 LEWIS ST, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '858-657-7000',
        criteria: ['330','LEWIS S','DIEGO', '92103']
    },
    { 
        name: "UCSD CARDIOLOGY DEPARTMENT",
        address: "330 LEWIS ST, SUITE 301, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: null,
        criteria: ['330','LEWIS S','DIEGO', '92103','301']
    },
    { 
        name: "DENTAL",
        address: "246 F STREET, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-420-3311',
        criteria: ['246','F ST','CHULA', '91910']
    },
    { 
        name: "DR. SARJAN PATEL",
        address: "450 FLETCHER PARKWAY, SUITE 112, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: '619-440-5400',
        criteria: ['450','FLETCHER P','112', 'CAJON','92020']
    },
    { 
        name: "SOUTHERN CALIFORNIA GI & LIVER CENTERS",
        address: "463 NORTH MAGNOLIA AVENUE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: '619-900-6958',
        criteria: ['463 N','MAGNOLIA AV', 'CAJON','92020']
    },
    { 
        name: "SHARP CORONADO HOSPITAL",
        address: "250 PROSPECT PLACE, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: '619-522-3600',
        criteria: ['250','PROSPECT P', 'CORONADO','92118']
    },    
    { 
        name: "NOT AVAILABLE",
        address: "230 PROSPECT PL., SUITE 250, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['230','PROSPECT P','250', 'CORONADO','92118']
    },
    
    { 
        name: "SHARP COMMUNITY MEDICAL GROUP",
        address: "131 ORANGE AVE, SUITE 101B, CORONADO, CA, 92118",
        abbrev: null,
        category: null,
        phone: '619-522-0399',
        criteria: ['131','ORANGE AV','101B', 'CORONADO','92118']
    },

    { 
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "9333 GENESEE AVE, SUITE 350 A, 3RD FLOOR, SAN DIEGO , CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-455-6460',
        criteria: ['9333','GENESEE AV','350 A','DIEGO','92121']
    },
    { 
        name: "GIRARD ORTHOPEDIC SURGEONS MEDICAL GROUP, INC.",
        address: "9333 GENESEE AVE, SUITE 350 B, 3RD FLOOR, SAN DIEGO , CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-455-6460',
        criteria: ['9333','GENESEE AV','350', ' B','DIEGO','92121']
    },    
    { 
        name: "DR. MIKE SHIEH/ UROLOGY",
        address: "9333 GENESEE AVE, SUITE 240, SAN DIEGO , CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-657-7876',
        criteria: ['9333','GENESEE AV','240','DIEGO','92121']
    },
    { 
        name: "UCSD ONCOLOGY",
        address: "9333 GENESEE AVENUE, SUITE 320, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-822-6100',
        criteria: ['9333','GENESEE AV','320','DIEGO','92121']
    }, 
    { 
        name: "DR. DOWNING, KRISTOPHER",
        address: "9834 GENESEE AVE, SUITE 228, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: '858-824-1703',
        criteria: ['9834','GENESEE AV','228','JOLLA','92037']
    },
    { 
        name: "BALBOA NEPHROLOGY",
        address: "9834 GENESEE AVENUE, SUITE 312, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEPHROLOGY',
        phone: '858-558-8150',
        criteria: ['9834','GENESEE AV','312','JOLLA','92037']
    },
    { 
        name: "ALBERT LE HUAN",
        address: "5507 EL CAJON BLVD, SUITE C, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: '619-582-1448',
        criteria: ['5507','CAJON B','SUITE C', ' B','DIEGO','92115']
    }
    ,
    { 
        name: "SHEREV, DIMITR",
        address: "1380 EL CAJON BLVD, SUITE 100, EL CAJON, 92020",
        abbrev: null,
        category: null,
        phone: '619-582-1448',
        criteria: ['1380','CAJON B','100','CAJON','92020']
    },
    { 
        name: "UCSD NEUROLOGICAL INST.",
        address: "4510 EXECUTIVE DRIVE, STE 325, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '858 657-8540',
        criteria: ['4510','EXECUTIVE D','325','DIEGO','92121']
    },
    { 
        name: "NOT AVAILABLE",
        address: "4510 EXECUTIVE DRIVE, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '858 657-8540',
        criteria: ['4510','EXECUTIVE DR','DIEGO','92121']
    },
    { 
        name: "UCSD VASCULAR DEPARTMENT",
        address: "4510 EXECUTIVE DRIVE, SUITE 215, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-657-1805',
        criteria: ['4510','EXECUTIVE D','215','DIEGO','92121']
    },
    
    { 
        name: "DR HODGES - PSYCH ASSOCIATES",
        address: "549 ORANGE AVE, CORONADO, CA, 92118",
        abbrev: null,
        category: 'PSYCHOLOGY',
        phone: '619-996-3195',
        criteria: ['549','ORANGE AV','CORONADO','92118']
    },
    { 
        name: "NEUROLOGY UCSD-MEMORY DISORDER CLINIC",
        address: "9444 MEDICAL CENTER DRIVE, 1ST FLOOR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'NEUROLOGY',
        phone: '858-657-8540',
        criteria: ['9444','MEDICAL','R D','1S','JOLLA','92037']
    },
    { 
        name: "SY DENTAL COMPREHENSIVE HEALTH CENTER OCEAN VIEW",
        address: "3177 OCEAN VIEW BLVD, SAN DIEGO, CA, 92113",
        abbrev: null,
        category: 'DENTAL',
        phone: null,
        criteria: ['3177','OCEAN','VIEW B','DIEGO','92113']
    },
    { 
        name: "FRIENDSHIP MANOR",
        address: "902 EUCLID AVE, NATIONAL CITY, CA ,91950",
        abbrev: null,
        category: null,
        phone: '619-791-7700',
        criteria: ['902','EUCLID A','NATIONAL','91950']
    },
    { 
        name: "DR. RODOLFO ARCOBEDO",
        address: "786 3RD AVE , SUITE B, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-425-0797',
        criteria: ['786','THIRD AV',' B','CHULA','91911']
    },
    { 
        name: "DR. RODOLFO ARCOBEDO",
        address: "786 3RD AVE , SUITE B, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-425-0797',
        criteria: ['786','3RD AV',' B','CHULA','91911']
    },
    { 
        name: "DR. RODOLFO ARCOBEDO",
        address: "786 3RD AVE , SUITE B, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-425-0797',
        criteria: ['786','THIRD AV',' B','CHULA','91910']
    },
    { 
        name: "DR. ASA MORTON",
        address: "3939 3RD AVE, SAN DIEGO CA 92103",
        abbrev: null,
        category: null,
        phone: '619-243-0663',
        criteria: ['3939','3RD AV','DIEGO','92103']
    },
    { 
        name: "DR. ASA MORTON",
        address: "3939 3RD AVE, SAN DIEGO CA 92103",
        abbrev: null,
        category: null,
        phone: '619-243-0663',
        criteria: ['3939','THIRD AV','DIEGO','92103']
    },
    { 
        name: "NOT AVAILABLE",
        address: "550 WASHINGTON ST , #641, SAN DIEGO , CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['550','WASHINGTON ST','641','DIEGO','92103']
    },
    { 
        name: "NOT AVAILABLE",
        address: "2240 PLAZA BLVD SUITE FG, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2240','PLAZA B','FG','NATIONAL','91950']
    },
    { 
        name: "NOT AVAILABLE",
        address: "2240 E PLAZA BLVD, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2240 E','PLAZA B','NATIONAL','91950']
    },
    { 
        name: "NOT AVAILABLE",
        address: "2427 TRANSPORTATION AVE, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2427','TRANS','AV','NATIONAL','91950']
    },
    { 
        name: "NOT AVAILABLE",
        address: "1615 SWEETWATER RD, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1615','SWEETWATER','NATIONAL','91950']
    },
    { 
        name: "PODIATRY",
        address: "5129 GARFIELD STREET, LA MESA, CA, 91941",
        abbrev: null,
        category: 'PODIATRY',
        phone: null,
        criteria: ['5129','GARFIELD ST','MESA','91941']
    },
    { 
        name: "NOT AVAILABLE",
        address: "1767 E MAIN ST, EL CAJON, CA, 92021",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1767 E','MAIN ST','CAJON','92021']
    },
    { 
        name: "NOT AVAILABLE",
        address: "2999 HEALTH CENTER DR, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2999','HEALTH C','DIEGO','92123']
    },
    { 
        name: "YURI LAVENSKI NUTRIOLOGIST",
        address: "3075 HEALTH CENTER DR. SAN DIEGO , CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-939-5105',
        criteria: ['3075','HEALTH CE','DIEGO','92123']
    },
    
    { 
        name: "NOT AVAILABLE",
        address: "8901 ACTIVITY RD, SAN DIEGO, CA, 92126",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8901','ACTIVITY R','DIEGO','92126']
    },
    { 
        name: "NOT AVAILABLE",
        address: "3638 UNIVERSITY AVENUE, SUITE 221, RIVERSIDE, CA, 92501",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3638','UNIVERSITY AV','221','RIVERSIDE','92501']
    }
    ,
    { 
        name: "SYNERGY ORTHOPEDIC SPECIALISTS",
        address: "4910 DIRECTORS PLACE, SUITE #350, SAN DIEGO, CA, 92121",
        abbrev: null,
        category: null,
        phone: '858-346-7171',
        criteria: ['4910','DIRECTORS PL','350','DIEGO','92121']
    },
    { 
        name: "NOT AVAILABLE",
        address: "2315 OTAY LAKES ROAD, #306, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2315','OTAY LA','ES R','306','CHULA','91914']
    },
    { 
        name: "IHS RADIOOGY",
        address: "1000 VALE TERRACE DR, VISTA, CA, 92084",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1000','VALE','TERRACE','VISTA','92084']
    },
    { 
        name: "PET/CT CENTER AT UC SAN DIEGO HEALTH",
        address: "3960 HEALTH SCIENCES DR, LA JOLLA, CA, 92093",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3960','HEALTH','SCIENCES D','JOLLA','92093']
    },  { 
        name: "PET/CT CENTER AT UC SAN DIEGO HEALTH",
        address: "3960 HEALTH SCIENCES DR, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['3960','HEALTH','SCIENCES D','JOLLA','92037']
    },
    { 
        name: "NOT AVAILABLE",
        address: "499 5TH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['499','5TH A','CHULA','91910']
    },
    { 
        name: "NOT AVAILABLE",
        address: "499 5TH AVE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['499','FIFTH A','CHULA','91910']
    },
    { 
        name: "NOT AVAILABLE",
        address: "624 EL CAJON BLVD, EL CAJON,CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['624','EL CAJON B','92020']
    },
    { 
        name: "NORTH COUNTY DAY CENTER",
        address: "2095 WEST VISTA WAY, VISTA, CA, 92083",
        abbrev: null,
        category: null,
        phone: '619-205-4585',
        criteria: ['2095','WEST VISTA','A W','92083']
    },
    { 
        name: "SURGERY CENTER",
        address: "8881 FLETCHER PARKWAY, SUITE 100, LA MESA, CA, 91942",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8881','FLETCHER P','100','MESA','91942']
    },
    { 
        name: "NOT AVAILABLE",
        address: "1200 GARDEN VIEW ROAD, SUITE 110, ENCINITAS, CA, 92024",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1200','GARDEN','VIEW R','110','ENCINITAS','92024']
    },
    { 
        name: "IHS RADIOLOGY - LOGAN HEIGHTS",
        address: "1809 NATIONAL AVENUE, STE 2104, SAN DIEGO, CA, 92113",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1809','NATIONAL AV','2104','DIEGO','92113']
    },
    { 
        name: "QUEST DIAGNOSTICS",
        address: "902 SYCAMORE AVE STE 201, VISTA, CA, 92081",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['902','SYCAMORE AV','201','VISTA','92081']
    },
    { 
        name: "SS VASCULAR SURGERY & ENDOVASCULAR THERAPY",
        address: "387 N ESCONDIDO BLVD,ESCONDIDO, CA, 92025",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['387 N','ESCONDIDO B','ESCONDIDO','92025']
    },
    { 
        name: "IHS RADIOLOGY",
        address: "3939 RUFFIN RD, SUITE 102, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: null,
        criteria: ['3939','RUFFIN R','102','DIEGO','92123']
    },
    { 
        name: "LABCORP",
        address: "374 H ST, SUITE 103, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['374','H S','103','CHULA','91911']
    },
    { 
        name: "SCRIPPS MERCY HOSPITAL SAN DIEGO",
        address: "4077 5TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '619-294-8111',
        criteria: ['4077','FIFTH AV','DIEGO','92103']
    },
    { 
        name: "SCRIPPS MERCY HOSPITAL SAN DIEGO",
        address: "4077 5TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '619-294-8111',
        criteria: ['4077','5TH AV','DIEGO','92103']
    },
    { 
        name: "SAN YSIDRO HEALTH PARADISE HILLS",
        address: "2400 E 8TH ST, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['2400 E','8TH ST','NATIONAL','91950']
    },
    { 
        name: "MARIUSZ W. WYSOCZANSKI",
        address: "754 MEDICAL CENTER CT, SUITE 101, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C','101','CHULA','91910']
    },
    { 
        name: "MARIUSZ W. WYSOCZANSKI",
        address: "754 MEDICAL CENTER CT, SUITE 101, 9350 CAMP",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C','101','CHULA','91911']
    },
    { 
        name: "STEVEN ROUGH/MD",
        address: "754 MEDICAL CENTER CT, SUITE 206, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C','206','CHULA','91911']
    },
    { 
        name: "CARDIOLOGY, DR.OVIEDO",
        address: "754 MEDICAL CENTER CT, SUITE 10, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C',' 10','CHULA','91910']
    },
    { 
        name: "CARDIOLOGY, DR.OVIEDO",
        address: "754 MEDICAL CENTER CT, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: 'CARDIOLOGY',
        phone: '619-434-4288',
        criteria: ['754','MEDICAL C','R C','CHULA','91910']
    },
    { 
        name: "SAN DIEGO IMAGING",
        address: "755 MEDICAL CENTER CT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'IMAGING',
        phone: '619-397-6577',
        criteria: ['755','MEDICAL C','R C','CHULA','91911']
    },
    { 
        name: "SAN DIEGO SPINE & SPORT",
        address: "1020 TIERRA DEL REY, SUITE A-1, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-585-7104',
        criteria: ['1020','TIERRA','REY','A-1','CHULA','91910']
    },
    { 
        name: "CASTLE MANOR",
        address: "541 S V AVE, NATIONAL CITY, CA 91950",
        abbrev: null,
        category: null,
        phone: '619-791-7900',
        criteria: ['541 S','V AV','NATIONAL','91950']
    }
    ,
    { 
        name: "SHARP MRI CENTER",
        address: "7910 FROST STREET, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-715-0465',
        criteria: ['7910','FROST ST','DIEGO','92123']
    },
    { 
        name: "NOT AVAILABLE",
        address: "955 LANE AVE, STE 200, CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['955','LANE AV','200','CHULA','91914']
    },
    { 
        name: "TOWN CENTER DENTISTRY",
        address: "11968 BERNARDO PLAZA DR, SAN DIEGO, CA, 92128",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['11968','BERNARDO','PLAZA DR','DIEGO','92128']
    },
    { 
        name: "IHS RADIOLOGY - ENCINITAS",
        address: "477 N EL CAMINO REAL, BLDG. A SUITE 102, ENCINITAS, CA, 92024",
        abbrev: null,
        category: 'RADIOLOGY',
        phone: '866-558-4320',
        criteria: ['477 N','CAMINO','REAL','102','ENCINITAS','92024']
    },
    { 
        name: "NOT AVAILABLE",
        address: "231 H ST, APT B, CHULA VISTA, 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['231 H','B','CHULA','91910']
    },
    { 
        name: "GROSSMONT HOSPITAL-SHARP",
        address: "5555 GROSSMONT CENTER DR, LA MESA, CA, 91942-3019",
        abbrev: null,
        category: null,
        phone: '858-939-3947',
        criteria: ['5555','GROSSMONT','R D','MESA','91942']
    },
    { 
        name: "UCSD GENERAL CARDIO CLINIC",
        address: "4138 FRONT STREET, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4138','FRONT ST','DIEGO','92103']
    },
    { 
        name: "BALBOA NEPHROLOGY SDPMG",
        address: "8010 FROST STREET, SUITE 510, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-279-4221',
        criteria: ['8010','FROST ST','510','DIEGO','92123']
    },
    { 
        name: "KEITH JACKSON, MD",
        address: "8010 FROST STREET, SUITE 100, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: '858-650-5073',
        criteria: ['8010','FROST ST','100','DIEGO','92123']
    },
    { 
        name: "NOT AVAILABLE",
        address: "959 LANE AVENUE BLDG. #B,CHULA VISTA, CA, 91914",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['959','LANE AV','#B','CHULA','91914']
    },
    { 
        name: "IHS RADIOLOGY - LA JOLLA",
        address: "4150 REGENTS PARK ROW, STE 195, LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['4150','GENTS PAR','195','JOLLA','92037']
    },
    { 
        name: "SOUTHBAY FAMILY HEALTH & DENTAL CENTER",
        address: "330 EAST 8TH STREET, NATIONAL CITY, CA, 91950",
        abbrev: null,
        category: null,
        phone: '619-434-3200',
        criteria: ['330 E','8TH ST','NATIONAL','91950']
    },
    { 
        name: "CALIFORNIA HEAD AND NECK SPECIALISTS",
        address: "39755 DATE STREET, SUITE 105, MURRIETA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '951-461-0770',
        criteria: ['39755','DATE ST','105','MURRIETA','91910']
    },
    { 
        name: "PARKWAY AQUATIC CENTER",
        address: "385 PARK WAY, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-409-1985',
        criteria: ['385 P','WAY','CHULA','91910']
    },
    { 
        name: "UCSD ALLERGY",
        address: "8899 UNIVERSITY CENTER LN, SUITE  230, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: 'ALLERGY',
        phone: null,
        criteria: ['8899 U','SITY C','230','DIEGO','92122']
    },
    { 
        name: "UCSD ENT",
        address: "8899 UNIVERSITY CENTER LN, SUITE 240, SAN DIEGO, CA, 92122",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['8899 U','SITY C','240','DIEGO','92122']
    },
    { 
        name: "NOT AVAILABLE",
        address: "4033 6TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: null,
        phone: '619-297-4086',
        criteria: ['4033','6TH AV','DIEGO','92103']
    },
    { 
        name: "NCHS OCEANSIDE HEALTH CENTER TRUE CARE",
        address: "605 CROUCH ST, OCEANSIDE, CA, 92054",
        abbrev: null,
        category: null,
        phone: '760-736-6767',
        criteria: ['605','CROUCH ST','OCEANSIDE','92054']
    },
    { 
        name: "OPHTHALMOLOGY ALLIANCE RETINA CONSULTANTS",
        address: "8262 UNIVERSITY AVE, LA MESA, CA, 91942",
        abbrev: null,
        category: 'OPHTHALMOLOGY',
        phone: '619-668-0045',
        criteria: ['8262','UNIVERSITY AV','MESA','91942']
    },
    { 
        name: "NOT AVAILABLE",
        address: "23113 VIEJAS GRADE RD, DESCANSO, CA, 91916",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['23113','VIEJAS G','DESCANSO','91916']
    },
    { 
        name: "SONUS",
        address: "9340 CLAIREMONT MESA BLVD, STE D, SAN DIEGO, CA, 92123",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9340','CLAIREMONT','MESA B',' D','DIEGO','92123']
    },
    { 
        name: "LA JOLLA LASER VISION & EYE CENTER & ACUITY EYE",
        address: "9850 GENESEE AVE, # 310,LA JOLLA, CA, 92037",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['9850','GENESEE AV','310','JOLLA','92037']
    },
    { 
        name: "DR CHANG - DERMATOLOGY",
        address: "9850 GENESEE AVENUE, SUITE 850, LA JOLLA, CA, 92037",
        abbrev: null,
        category: 'DERMATOLOGY',
        phone: '619-754-6869',
        criteria: ['9850','GENESEE AV','850','JOLLA','92037']
    },
    { 
        name: "THE WEST COAST EYE CARE & ACUITY EYE GROUP",
        address: "6945 EL CAJON BLVD, SAN DIEGO, CA, 92115",
        abbrev: null,
        category: null,
        phone: '619-697-4600',
        criteria: ['6945','EL CAJON B','DIEGO','92115']
    },
    { 
        name: "ENDODONTIST DR. FREER",
        address: "273 CHURCH AVENUE, CHULA VISTA, CA, 91910",
        abbrev: null,
        category: null,
        phone: '619-426-2250',
        criteria: ['273','CHURCH AV','CHULA','91910']
    },
    { 
        name: "ADVANCED PODIATRY INSTITUTE",
        address: "590 S MAGNOLIA AVE, EL CAJON, CA, 92020",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['590 S','MAGNOLIA AV','CAJON','92020']
    },
    { 
        name: "SOCIAL SECURITY OFFICE LOCATION",
        address: "1333 FRONT STREET, SAN DIEGO, CA, 92101",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['1333','FRONT ST','DIEGO','92101']
    },
    { 
        name: "SHARP CHULA VISTA",
        address: "751 MEDICAL CENTER COURT, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['751','MEDICAL C','R C','CHULA','91911']
    },
    { 
        name: "OXFORD PODIATRY",
        address: "336 OXFORD STREET, UNIT 104, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: 'PODIATRY',
        phone: '619-567-3556',
        criteria: ['336','OXFORD ST','104','CHULA','91911']
    },
    { 
        name: "GENESIS UROLOGY-RANCHO BERNARDO",
        address: "11770 BERNARDO PLAZA CT, SUITE 270, SAN DIEGO, CA, 92128",
        abbrev: null,
        category: 'UROLOGY',
        phone: '858-485-0554',
        criteria: ['11770','BERNARDO','PLAZA C','270','DIEGO','92128']
    },
    { 
        name: "NOT AVAILABLE",
        address: "463 CORTE MARIA AVE. CHULA VISTA, CA 91910",
        abbrev: null,
        category: null,
        phone: null,
        criteria: ['463','CORTE MA','A AV','CHULA','91910']
    },
    { 
        name: "ADVANCED THERAPY SERVICES",
        address: "2648 MAIN STREET, SUITE BC, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: null,
        phone: '619-575-2192',
        criteria: ['2648','MAIN ST','BC','CHULA','91911']
    },
    { 
        name: "HOSPITAL OF LA MESA LLC",
        address: "8665 LA MESA BLVD, LA MESA, CA 91942",
        abbrev: null,
        category: null,
        phone: '619-361-4056',
        criteria: ['8665','MESA B','MESA','91942']
    },
    { 
        name: "UCSD UC SAN DIEGO HEALTH PSYCHIATRY",
        address: "16918 DOVE CANYON RD, SUITE 100,SAN DIEGO, CA, 92127",
        abbrev: null,
        category: null,
        phone: '858-207-0938',
        criteria: ['16918','DOVE C','100','DIEGO','92127']
    }
     
    

    
]

module.exports= centers;

