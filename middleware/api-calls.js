const axios = require('axios');

const getAll = async (req, res, next) => {
  try{
    const res = await axios.get("https://article-api-ats.onrender.com/articles");
    req.articles = res.data;
    next();
  }catch(err) {
    console.log(err);
  }
}

const postOne = async (req, res, next) => {
  try{
    const res = await axios.post("https://article-api-ats.onrender.com/articles", {
    author: req.body.author,
    title: req.body.title,
    content: req.body.content
    });
    next();
  }catch(err) {
    console.log(err);
  }
}

const getOne = async (req, res, next) => {
try{
  const res = await axios.get("https://article-api-ats.onrender.com/articles/" + String(req.params.id));
  req.article = res.data;
  next();
}catch(err) {
  console.log(err);
}

}

const updateOne = async (req, res, next) => {
  try {
    const res = await axios.patch("https://article-api-ats.onrender.com/articles/" + String(req.params.id), {
      author: req.body.author,
      title: req.body.title,
      content: req.body.content
    });
    next();
  } catch(err) {
    console.log(err);
  }
}

const removeOne = async (req, res, next) => {
  try {
    const res = await axios.delete("https://article-api-ats.onrender.com/articles/" + String(req.params.id));
    next();
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  getAll,
  postOne,
  getOne,
  updateOne,
  removeOne
}
