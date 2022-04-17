const express = require("express");
const router = express.Router();
const User = require("../models/userSchema")
const bcrypt = require("bcryptjs")
const Authenticate = require("../middleware/Authenticate");


router.route("/").get(async (req, res) => {
    res.send("Hello world Router")
})


//Signup Route
router.route('/signup').post((req, res) => {


    //destructuring so we dont need write req.body everytime
    const { name, email, phone, password, cpassword, pic } = req.body
    console.log(name)
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
        if (!user) {
            res.send("User not Found")

        }
        else {

            //matching password
            const isMatch = await bcrypt.compare(password, user.password)

            //if email and password is matched then token will be generated
            //generate token function is in userSchema file

            if (!isMatch) {
                res.send("Invalid Credentials")
            }
            else {
                const token = await user.generateToken()

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

router.get('/about', Authenticate,(req,res)=>{
    console.log("About Page");  
    res.send(req.rootUser);   // rootuser contains the whole document (data) of the user we get it from the token (in middleware/authentication)
                    
})

module.exports = router