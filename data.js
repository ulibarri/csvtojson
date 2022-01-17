
const GENDERS = ["M", "F", "U"];
const PRIORITIES = ["HIGH", "NORMAL", "LOW"]


let delivery = new Delivery(
    {
      delivery_date : {datetime, required: true},
      tracking_number: { type: varchar, required: true, unique: true, maxLength:14, match: '[0-9]{14}' },
      comments: { type: varchar, required: false, maxLength:300 },
      priority: { type: String, required: true, enum: PRIORITIES },
      participant :
      {
        client_code: { type: varchar, required: true, unique: true, maxLength:9, match: '[A-Z]{3}[0-9]{6}' },
        first_name: { type: varchar, required: true, maxLength:60 },
        last_name: { type: varchar, required: true, maxLength:80 },
        middle_name: { type: varchar, required: false, maxLength:60 },
        gender:{ type: String, required: true, enum: GENDERS },
        address : { type: varchar, required: true, maxLength:100 },
        address_one : { type: varchar, required: false, maxLength:100 },
        state: { type: varchar, required: true, maxLength:2 },
        city: { type: varchar, required: true, maxLength:30 },
        zip_code: { type: varchar, required: true, maxLength:5, match: '[0-9]{5}' },
        email: { type: varchar, required: false, maxLength:100, match: '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/' },
        phone_number: { type: varchar, required: true, maxLength:12, match: '[0-9]{3}-[0-9]{3}-[0-9]{4}' },
        latitude: { type: float(11,7),required: true},
        longitude: { type: float(11,7),required: true},
      }
    })