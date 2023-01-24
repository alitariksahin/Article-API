const mongoose = require("mongoose");
const asyncWrapper = require("../middleware/async-wrapper");


const articleSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String
});

const Article = new mongoose.model("article", articleSchema);

const getAllArticles = asyncWrapper(async (req, res) => {
  const result = await Article.find({});
  res.send(result);
});

const postAnArticle = asyncWrapper(async (req, res) => {
  const newAuthor = req.body.author;
  const newTitle = req.body.title;
  const newContent = req.body.content;

  const newArticle = new Article({
    author: newAuthor,
    title: newTitle,
    content: newContent
  });
  await newArticle.save();
  res.send(newArticle);
});

const deleteAllArticles = asyncWrapper(async (req, res) => {
  await Article.deleteMany({});
  res.send("All the articles are deleted successfully");
});

const getOneArticle = asyncWrapper(async (req, res) => {
  const relatedTitle = req.params.title;
  const result = await Article.findOne({title: relatedTitle});
  if (result) {
    res.send(result);
  }
  else {
    res.send("No articles found with this title");
  }
})

const replaceOneArticle = asyncWrapper(async (req, res) => {
  const relatedTitle = req.params.title;
  await Article.replaceOne({title: relatedTitle}, {author: req.body.author, title: req.body.title, content: req.body.content});
  res.send("The article is successfully replaced.");
});

const updateOneArticle = asyncWrapper(async (req, res) => {
  const relatedTitle = req.params.title;

  await Article.updateOne({title: relatedTitle}, {$set: req.body});
  res.send("The article is successfully updated.");

});

const deleteOneArticle = asyncWrapper(async (req, res) => {
  const relatedTitle = req.params.title;
  const result = await Article.findOneAndDelete({title: relatedTitle});
  if (result) {
    res.send("The article has been deleted successfully.");
  }
  else {
    res.send("There is no such article already.")
  }
});

module.exports = {
  getAllArticles,
  postAnArticle,
  deleteAllArticles,
  getOneArticle,
  replaceOneArticle,
  updateOneArticle,
  deleteOneArticle
}
