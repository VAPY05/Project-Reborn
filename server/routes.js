const express = require("express");
const router = express.Router();

const userController = require('./src/controllers/userController.js');
const tribeController = require('./src/controllers/tribeController.js');
const storyController = require('./src/controllers/storyController.js')

router.get("/",(req,res)=>{
    return res.status(200).send("Initial Page");
})

router.use("/user", userController);
router.use("/tribe", tribeController);
router.use("/story", storyController);

router.get("*",(req,res)=>{
    return res.status(404).send("404");
})

module.exports = router;