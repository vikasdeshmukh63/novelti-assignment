const mongoose = require("mongoose");
const validator = require("validator");

// user model 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please Provide First Name"],
        minLength: [5, "First Name should have more than 5 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Please Provide Last Name"],
        minLength: [5, "Last Name should have more than 5 characters"],
    },
    email: {
        type: String,
        required: [true, "Please Provide Email"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid email"],
    },
    mobile: {
        type: String,
        required: [true, "Please Provide Mobile No."],
        unique: true,
    },
    address1: {
        type: String,
        required: [true, "Please Provide address"],
    },
    address2: {
        type: String,
        required: [true, "Please Provide address"],
    },
    state: {
        type: String,
        required: [true, "Please Provide State"],
    },
    country: {
        type: String,
        required: [true, "Please Provide country"],
    },
    zipCode: {
        type: Number,
        required: [true, "Please Provide Zip Code"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// to make the first letter capital before save
userSchema.pre("save", async function () {
    this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1);
    this.lastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
});

module.exports = mongoose.model("User", userSchema);
