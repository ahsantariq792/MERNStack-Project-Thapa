const jwt = require("jsonwebtoken");
const User = require("../models/userSchema")

const Authenticate = async (req, res, next) => {
    try {

        //we can get token from request or cookies 
        // another way of getting token is used in (The-MERNStack-Project)
        const token = req.cookies.token;

        //Verifying token with secret key
        const verifyToken = jwt.verify(token, process.env.SECRET);
        // console.log(verifyToken)

        //after verification of token we match id of user (from token) and searching it in database
        //if user found we save all he details of user in a rootUser var
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        // console.log("rootUser: ", rootUser)
        
        
        if (!rootUser) { throw new Error("User Not Found") };
        
        //saving token in var
        req.token = token;


        //if user found we are getting all the details of the user
        req.rootUser = rootUser
        req.userID = rootUser._id;

        //to process further otherwise we will stuck here
        next();

    } catch (err) {
        res.status(401).send("Unauthorized:No token provided");
        console.log(err)
    }


}
module.exports = Authenticate;