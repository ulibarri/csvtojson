const mongoose = require('mongoose');
let Ptp = mongoose.model('Ptp', {
    name: { type: String },
    participantID: { type: String },
    address: { type: Array },
    category: { type: String },
    wc: { type: Boolean },
    blind: { type: Boolean },
    deaf: { type: Boolean },
    phone: { type: String },
    gender: { type: String },
    DOB: { type: String },
    critera:{ type: Array },
    currentIndex: { type: Number }
});
module.exports=Ptp;