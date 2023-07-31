require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const accountsRouter = require("./routes/accounts");
app.use("/accounts", accountsRouter);

app.listen(5000, () =>
  console.log("Server listenig on http://localhost:5000/accounts")
);
