const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET || "ahsan12345678"

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
            unique: false,
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
        date: {
            type: Date,
            default: Date.now
        },
        messages: [
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
                    unique: false,
                    required: true
                },
                message: {
                    type: String,
                    required: true
                },
            }
        ],
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ],
        pic: {
            type: String,
            // required: true,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    { timestaps: true }
);

//this function should be above creating model
//when password is modified then if is run

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next();
})

//storing message in database
userSchema.methods.addMessage = async function (name, email, phone, message) {
    try {
        this.messages = this.messages.concat({name, email, phone, message})
        await this.save()
        console.log("message saved")
        return this.messages
    } catch (error) {
        console.log(err)
    }
}



//jwt token generate function
userSchema.methods.generateToken = async function () {
    try {
        var token = jwt.sign({
            email: this.email,
            _id: this._id,
        }, SECRET);

        //adding token in array in user model
        this.tokens = this.tokens.concat({ token: token })

        //saving token in database
        await this.save()
        return token
    }
    catch (err) {
        console.log(err)
    }
}


//models means collection
const User = mongoose.model("User", userSchema);

module.exports = User;

