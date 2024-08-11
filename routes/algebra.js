const express = require("express");
const router = express.Router();
const Code = require("../models/algebraCodes");


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

// Delete code & Updata calculus Codes
// /algebra/?order=~
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

// Delete Order 
router.delete("/", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  try {
    let order = await Code.findOne({ order: req.query.order });
    console.log(order ? "founded" : "not found")
    if (order === null) {
      return res.status(404).json({ message: "There's not any order provided " });
    } else {
        await Code.deleteOne({ order: req.query.order });

        return res
          .status(201)
          .json({
            codeDeleted: "yes"
          });
      
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

// delete all
router.delete("/deleteAll", async (req, res) => {
  try {
    await Code.deleteMany();  
    return res
      .status(201)
      .json({
        message: "All codes deleted"
      });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
