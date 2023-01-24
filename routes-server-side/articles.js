const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  postAnArticle,
  deleteAllArticles,
  getOneArticle,
  replaceOneArticle,
  updateOneArticle,
  deleteOneArticle
} = require("../controllers/articles");



router.get("/", getAllArticles);
router.post("/", postAnArticle);
router.delete("/", deleteAllArticles);
router.get("/:id", getOneArticle);
router.put("/:id", replaceOneArticle);
router.patch("/:id", updateOneArticle);
router.delete("/:id", deleteOneArticle);

module.exports = router;
