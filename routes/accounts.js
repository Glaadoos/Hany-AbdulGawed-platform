const express = require("express");
const router = express.Router();
const Account = require("../models/account");

//Getting all accounts
router.get("/", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Getting specific account
router.get("/:id", getAccount, (req, res) => {
  res.send(res.account);
});

//Creating one account
router.post("/", async (req, res) => {
  const account = new Account({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    payingSystem: req.body.payingSystem,
  });

  try {
    await account.save();
    res.status(201).json({message:'account created!'});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating one account
router.patch("/:id", getAccount, async (req, res) => {
  if (req.body.name != null) {
    res.account.name = req.body.name;
  }
  if (req.body.email != null) {
    res.account.email = req.body.email;
  }
  if (req.body.payingSystem != null) {
    res.account.payingSystem = req.body.payingSystem;
  }
  try {
    const updatedaccount = await res.account.save();
    res.json(updatedaccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting one account
router.delete("/:id", getAccount, async (req, res) => {
  try {
    await res.account.remove();
    res.json({ message: "account deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getAccount(req, res, next) {
  let account;
  try {
    account = await Account.findOne({ email: req.params.id });
    if (account == null) {
      return res.status(404).json({ message: "cannont find this account" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.account = account;
  next();
}

module.exports = router;
