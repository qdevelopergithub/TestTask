const express = require("express");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const url = `mongodb://127.0.0.1:27017/user`;
const port = 5677;

app.use(bodyParser.json());
app.use(express.json());
app.use("/", router);

mongoose.connect(url);

const db = mongoose.connection;

db.once("open", (_) => {
    console.log("database connected:", url);
});

db.on("error", (err) => {
    console.log("connection error:", err);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
