const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    return res.status(200).send("User Page")
})

router.get("/login", (req, res) => {
    return res.status(200).send("Login Page");
});

router.get("/register", (req, res) => {
    return res.status(200).send("Register Page");
});

router.get("/logout", (req, res) => {
    return res.status(200).send("Logout Page");
});

module.exports = router;