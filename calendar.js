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
        address: "292 EUCLID AVE, SAN DIEGO, CA, 92114",
        abbrev: "DAVITA S.D. EAST" ,
        category: "DIALYSIS",
        phone: "619-262-7225",
        criteria: ['292 EU','EUCLID AV','DIEGO','92114']
    },
    {   
        name: "DAVITA SAN MARCOS",
        address: "2135 MONTIEL RD, SAN MARCOS, CA, 92069",
        abbrev: "DAVITA SAN MARCOS" ,
        category: "DIALYSIS",
        phone: null,
        criteria: ['2135','MONTIEL R','MARCOS','92069']
    },
  
    {   
        name: "DAVITA SAN DIEGO SOUTH",
        address: "995 GATEWAY CENTER WAY, SAN DIEGO, CA, 92102",
        abbrev: "DAVITA S.D.S",
        category: "DIALYSIS",
        phone:"619",
        criteria: ['995','GATEWAY','R W','DIEGO','92102']

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
        criteria: ['5961','UNIVERSITY AV','317','DIEGO','92115']
    },
    {   
        name: "FMC COLLEGE",
        address: "5961 UNIVERSITY AVENUE, SAN DIEGO, CA, 92115",
        abbrev: "FMC COLLEGE",
        category: "DIALYSIS",
        phone: "619-286-0821",
        criteria: ['5961','UNIVERSITY AV','DIEGO','92115']
    },
    {   
        name: "FMC CHULA VISTA SOUTH",
        address: "2252 VERUS ST, SAN DIEGO, CA, 92154",
        abbrev: "FMC CVS",
        category: "DIALYSIS",
        phone: "619-429-9201",
        criteria: ['2252','VERUS','DIEGO','92154']
    },
    {   
        name: "FMC EAST COUNTY",
        address: "570 N 2ND ST #7715, EL CAJON, CA, 92021",
        abbrev: "FMC E.C.",
        category: "DIALYSIS",
        phone: "619-588-7500",
        criteria: ['570','2ND','7715','CAJON','92021']
    },
    {   
        name: "FMC EAST COUNTY",
        address: "570 N 2ND ST, EL CAJON, CA, 92021",
        abbrev: "FMC E.C.",
        category: "DIALYSIS",
        phone: "619-588-7500",
        criteria: ['570','2ND','CAJON','92021']
    },
    {   
        name: "FMC BALBOA EASTLAKE",
        address: "2391 BOSWELL RD, CHULA VISTA, CA, 91914",
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
        address: "720 GATEWAY CENTER DR, SAN DIEGO, CA, 92102",
        abbrev: "FMC GE",
        category: "DIALYSIS",
        phone:"619-264-4100",
        criteria: ['720','GATEWAY','Y C','R D','DIEGO','92192']
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
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "2765 MAIN STREET, SUITE A, CHULA VISTA, CA, 91911",
        abbrev: null,
        category: "ALZHEIMER",
        phone: '619-420-1703',
        criteria: ['2765','MAIN ST','CHULA','91911']
    },
    { 
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "3686 4TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: "ALZHEIMER",
        phone: null,
        criteria: ['3686','FOURTH AV', 'DIEGO','92103']
    },
    { 
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "3686 4TH AVE, SAN DIEGO, CA, 92103",
        abbrev: null,
        category: "ALZHEIMER",
        phone: null,
        criteria: ['3686','4TH AV', 'DIEGO','92103']
    },
    { 
        name: "THE GEORGE G GLENNER ALZHEIMER'S FAMILY CENTERS INC.",
        address: "335 SAXONY RD, ENCINITAS, CA 92024",
        abbrev: null,
        category: "ALZHEIMER",
        phone: null,
        criteria: ['335','SAXONY RD', 'ENCINITAS','92024']
    }    
]

module.exports= centers;

