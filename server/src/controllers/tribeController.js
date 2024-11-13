const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    return res.status(200).send("All Tribes")
})

router.get("/:id", (req, res) => {
    return res.status(200).send(`Tribe With ID ${req.params.id}`);
});

router.get("/create", (req, res) => {
    return res.status(200).send("Create Tribe");
});

router.get("/:id/delete", (req, res) => {
    return res.status(200).send("Delete Tribe");
});

router.get("/:id/change-ownership", (req, res) => {
    return res.status(200).send("Change Tribe's Ownership");
});

router.get("/:id/kick", (req, res) => {
    return res.status(200).send("Kick from the Tribe");
});

module.exports = router;