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
router.get("/:title", getOneArticle);
router.put("/:title", replaceOneArticle);
router.patch("/:title", updateOneArticle);
router.delete("/:title", deleteOneArticle);

module.exports = router;
