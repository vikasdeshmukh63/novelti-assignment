const PhoneCode = require("../model/phoneCodeModel");


//! Get Phone Code Controller
const getPhoneCodes = async(req,res)=>{
    try {
        // finding phone codes in database
        const phoneCodes = await PhoneCode.find({});
        // seding phone code to client 
        res.json({
            message:"phone codes fetched successfully",
            success:true,
            phoneCodes
        });
        
    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        });
    }
}

module.exports = getPhoneCodes