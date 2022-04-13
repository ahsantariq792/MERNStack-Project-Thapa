const express = require("express");
const router = express.Router();
const app = express()

router.route("/").get(async (req, res) => {
    res.send("Hello world Router")
})

module.exports = router