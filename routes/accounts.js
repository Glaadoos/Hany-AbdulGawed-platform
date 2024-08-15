const express = require("express");
const router = express.Router();
const Account = require("../models/account");

const generateCodes = () => {
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";

  for (let i = 1; i <= 24; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  return pass;
};

//Getting all accounts
router.get("/", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  try {
    const account = await Account.find();
    res.status(200).json(account);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Getting specific account
router.get("/account/:id", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  let account;
  try {
    account = await Account.findOne({ email: req.params.id });
    if (account == null) {
      return res.status(404).json({ message: "Account isn't exist" });
    } else {
      return res.status(200).json(account);
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err.message, src: "catch in get specific" });
  }
});


//Get user's availableCodes
router.get("/availablecodes", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  let account;
  try {
    account = await Account.findOne({ email: req.query.user });
    if (account == null) {
      return res.status(404).json({ message: "Account isn't exist" });
    } else {
      return res.status(200).json(account.availableCodes);
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err.message, src: "catch in get specific" });
  }
});

//Creating one account
router.post("/", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  const account = new Account({
    id: generateCodes(),
    name: req.body.name,
    email: req.body.email,
    payingSystem: req.body.payingSystem || "",
    availableCodes: req.body.availableCodes || [],
  });

  try {
    let user = await Account.findOne({ email: req.body.email });
    if (user === null) {
      await account.save();
      return res.status(201).json({ message: "account created!" });
    } else {
      return res.status(404).json({ message: "user is already exist" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one account
router.patch("/:id", getAccount, async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  if (req.body.name != null) {
    res.account.name = req.body.name;
  }
  if (req.body.email != null) {
    res.account.email = req.body.email;
  }
  if (req.body.payingSystem != null) {
    res.account.payingSystem = req.body.payingSystem;
  }
  if (req.body.availableCodes != null) {
    if (
      res.account.availableCodes.find(
        (code) => code.order === req.body.availableCodes.order
      ) === undefined
    ) {
      res.account.availableCodes.push({
        branch:req.body.availableCodes.branch,
        order: req.body.availableCodes.order,
        code: req.body.availableCodes.code,
        date: req.body.availableCodes.date
      });
    } else {
      return res.json({ message: "code exist" });
    }
  }

  try {
    await res.account.save();
    res.json({ message: "account updated!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting one account
router.delete("/delete", async (req, res) => {
  console.log(req.apiGateway.event.rawUrl)
  console.log(req.headers['x-nf-request-id'])
  let Id = req.query.id
  try {
    let account = await Account.findOneAndRemove({ id: Id });
    // let deleted = await account.deleteOne();
    console.log("deleted")
    res.json({ message: "account deleted" });
  } catch (err) {
  console.log(Id)

    res.status(500).json({ message: err.message, path:'accounts/delete' , id:Id});
  }
});

// Delete All Accounts
router.delete("/deleteAll", async (req, res) => {
  try {
    await Account.deleteMany();
    res.json({ message: "accounts deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getAccount(req, res, next) {
  let account;
  try {
    account = await Account.findOne({ id: req.params.id });
    if (account == null) {
      return res
        .status(404)
        .json({
          message: "cannont find this account",
          src: "try=>null-cond in getAccount middleware",
          params: req.params,
        });
    }
  } catch (err) {
    res.status(500).json({ message: err.message, src: "catch in getAccount" });
  }
  res.account = account;
  next();
}

module.exports = router;
