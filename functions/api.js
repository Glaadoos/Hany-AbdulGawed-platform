const express = require("express");
const serverless = require("serverless-http")


const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect('mongodb+srv://abosama150:MSg6fl6TrYkUBc9e@hany-server.px9xs90.mongodb.net/account');
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const accountsRouter = require("../routes/accounts");
const route = express.Router()

route.get("/", (req, res) => {
    res.json({
      hello: "hi!"
    });
  });

app.use('/.netlify/functions/api/', accountsRouter);

module.exports.handler = serverless(app);