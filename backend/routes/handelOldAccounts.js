const express = require("express");
const router = express.Router();

const Account = require("../models/account");
const OldAccount = require("../models/oldAccounts");


router.get("/accounts", async (req, res) => {
        try {
            const accounts = await Account.find();
            res.status(200).json(accounts);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
});
router.get("/oldAccounts/:id", async (req, res) => {

        try {
            const account = await oldAccount.findOne({ id: req.params.id });
            res.status(200).json(account);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
});

router.post("/", async (req, res) => {
    const oldAccount = new OldAccount(req.body);
    try {
        const newAccount = await oldAccount.save();
        res.status(201).json({ message: "Account created" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router