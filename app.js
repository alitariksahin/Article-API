const express = require("express");
const app = express();
const articles = require("./routes/articles");

const dbInitializer = require("./db/setup");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/articles", articles);
const start = async () => {
  try {
    await dbInitializer(process.env.MONGO_URI);
    console.log("Connected to database successfully.");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Connection is made on port 5000.");
    });
  }catch(err) {
    console.log(err);
  }
}

start();
