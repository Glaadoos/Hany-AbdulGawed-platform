const express = require("express");
const router = express.Router();
const Code = require("../models/algebraCodes");
/* const spawn = require('child_process').spawn;
const ls = spawn('python', ['upload.py', 'arg1']); */

// get all codes for algebra
router.get("/getAll", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  try {
    const branch = await Code.find();
    res.status(200).json(branch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get specific codes for algebra
router.get("/code", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  let ele;
  try {
    ele = await Code.findOne({ order: req.query.order });
    if (ele == null) {
      return res.status(404).json({ message: "This order isn't exist" });
    } else {
      let codeArray = ele.code;
      let codeExist = codeArray.filter((code) => code === req.query.code);
      return res.status(200).json({ codeExist: codeExist.length });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err.message, src: "catch in get specific" });
  }
});

// Add code
router.post("/", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  const code = new Code({
    order: req.body.order,
    code: req.body.code,
  });

  try {
    let inCode = await Code.findOne({ order: req.body.order });

    if (inCode === null) {
      await code.save();
      console.log(1);
      return res.status(201).json({ message: "Code Saved" });
    } else {
      console.log(2);
      return res.status(201).json({ message: "Code already exist" });
    }
  } catch (err) {
    console.log(3);
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

// Delete code & Updata algebra Codes
router.get("/delete", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  try {
    let order = await Code.findOne({ order: req.query.order });
    
    if (order === null) {
      return res.status(404).json({ message: "order isn't exist" });
    } else {
      let arrayOfCodes = order.code;

      let codeExist =
        order.code.filter((code) => code === req.query.code).length === 1
          ? true
          : false;
      if (codeExist) {
        const code = new Code({
          order: req.query.order,
          code: await arrayOfCodes.filter((ele) => ele !== req.query.code)
        });
        
        await Code.deleteOne({ order: req.query.order });
        await code.save();

        return res
          .status(201)
          .json({
            codeExist: codeExist,
            codeDeleted: "yes",
            newOrederSaved: "yes",
          });
      }else{
        return res
          .status(201)
          .json({
            message:"Code isn't exist"
          });
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
