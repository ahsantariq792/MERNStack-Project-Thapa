const jwt = require("jsonwebtoken");
const User = require("../models/userSchema")

const Authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.token;  //token get krlia
        const verifyToken = jwt.verify(token, process.env.SECRET);
        console.log(verifyToken);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        //tokens k andar jo token hai usse match kraenge

        console.log("hy", rootUser)
        if (!rootUser) { throw new Error("User Not Found") };

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch (err) {

        res.status(401).send("Unauthorized:No token provided");
        console.log("here", err)

    }


}
module.exports = Authenticate;