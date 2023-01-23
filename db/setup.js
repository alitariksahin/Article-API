const mongoose = require("mongoose");

const initializeDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url);
}

module.exports = initializeDB
