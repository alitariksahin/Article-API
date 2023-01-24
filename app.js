const express = require("express");
const app = express();
const articles_server_side = require("./routes-server-side/articles");
const articles_client_side = require("./routes-client-side/articles");
const ejs = require("ejs");

const dbInitializer = require("./db/setup");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/articles", articles_server_side);
app.use("/", articles_client_side);



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
