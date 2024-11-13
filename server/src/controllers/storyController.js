const express = require("express");
const router = express.Router();

router.get("/:id", (req,res) => {
    if(req.params.id == "sky") {
        return res.status(200).send("Sky");
    }
    else if(req.params.id == "wild") {
        return res.status(200).send("Wild");
    }
    else if(req.params.id == "water") {
        return res.status(200).send("Water");
    }
    else {
        return res.status(404).redirect("/404")
    }
})

module.exports = router;