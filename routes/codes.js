const express = require("express");
const router = express.Router();
const Code = require("../models/code");


// get all codes
router.get("/", async (req, res) => {
    try {
      const codes = await Code.find();
      res.status(200).json(codes);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


// add code to
router.post("/", async (req, res) => {
    const code = new Code({
        order: req.body.order,
        code: req.body.code
    });

    try {
        let inCode = await Code.findOne({older: req.body.older})
        console.log(req.body.code)
        if(inCode === null){
            await code.save();
            return res.status(201).json({ message: "Code Saved" });
        }
        else{
            return res.status(201).json({ message: "Code already exist" });
        }
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;