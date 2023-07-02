const mongoose = require("mongoose");

// phone codes model 
const phoneCodes = new mongoose.Schema({
    name:String,
    dial_code:String,
    code:String
});

module.exports = mongoose.model("PhoneCodes", phoneCodes);