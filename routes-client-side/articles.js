const express = require("express");
const router = express.Router();

const {
  getAll,
  postOne,
  getOne,
  updateOne,
  removeOne
} = require("../middleware/api-calls");


router.get("/", getAll, (req, res) => {
  res.render("index", {title: "Home Page", articles: req.articles});
});

router.get("/add", (req, res) => {
  res.render("add_articles", {title: "Add Article"});
});

router.post("/add", postOne, (req, res) => {
  res.redirect("/");
});

router.get("/edit/:id", getOne, (req, res) => {
  res.render("edit_articles", {title: "Edit Article", article: req.article});
});

router.post("/edit/:id", updateOne, (req, res) => {
  res.redirect("/");
});

router.get("/remove/:id", removeOne, (req, res) => {
  res.redirect("/");
});

router.get("/display/:id", getOne, (req, res) => {
  res.render("display_articles", {title: "Display Article", article: req.article});
});

module.exports = router;
