const express = require("express");
const router = express.Router();
const User = require("../models/userSchema")
const bcrypt = require("bcryptjs")

router.route("/").get(async (req, res) => {
    res.send("Hello world Router")
})


//Signup Route
router.route('/signup').post((req, res) => {


    //destructuring so we dont need write req.body everytime
    const { name, email, phone, password, cpassword, pic } = req.body

    //validation
    if (!name, !email, !phone, !password, !cpassword) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    }


    //check if user already exists 
    User.findOne({ email })
        .then((user) => {
            if (user) {
                res.status(422).send("user already exist");
            } else {
                console.log(req.body)

                let newUser = new User({ name, email, password, phone, cpassword, pic })

                newUser.save()
                    .then(() => {
                        console.log("data saved")
                        res.send('signup success')
                    })
                    .catch(err => console.log(err))
            }
        })

})



//Login Route
router.route('/login').post((async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email, !password) {
            res.status(403).send("required field missing");
            return;
        }

        const user = await User.findOne({ email });

        //condition if user is registered

        if (user) {

            //matching password
            const isMatch = await bcrypt.compare(password, user.password)

            //if email and password is matched then token will be generated
            //generate token function is in userSchema file

            
            if (!isMatch) {
                res.status(400).send("Invalid Credentials")
            }
            else {
                const token = await user.generateToken()
                console.log("token : ", token)

                //saving token in cookies
                res.cookie("token", token, {
                    httpOnly: true,
                    maxAge: 300000,
                    // expires: new Date(Date.now + 300000)
                });

                res.send("user loggined successfully")
            }
        }
    }
    catch (err) {
        res.send("Error in Login")
    }
}))

module.exports = router