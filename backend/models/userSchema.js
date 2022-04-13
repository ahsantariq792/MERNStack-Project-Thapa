const mongoose = require("mongoose")


const userSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        phone: {
            type: Number,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        cpassword: {
            type: String,
            required: true
        },
        pic: {
            type: String,
            // required: true,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    { timestaps: true }
);

//models means collection
const User = mongoose.model("User", userSchema);

module.exports = User;