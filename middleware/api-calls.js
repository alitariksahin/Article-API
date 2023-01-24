
const getAll = async (req, res, next) => {
  try{
    const res = await fetch("https://article-api-ats.onrender.com/articles");
    const json = await res.json();
    req.articles = json;
    next();
  }catch(err) {
    console.log(err);
  }
}

const postOne = async (req, res, next) => {
  try{
    const res = await fetch("https://article-api-ats.onrender.com/articles", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    next();
  }catch(err) {
    console.log(err);
  }
}

const getOne = async (req, res, next) => {
try{
  const res = await fetch("https://article-api-ats.onrender.com/articles/" + String(req.params.id));
  const json = await res.json();
  req.article = json;
  next();
}catch(err) {
  console.log(err);
}

}

const updateOne = async (req, res, next) => {
  try {
    const res = await fetch("https://article-api-ats.onrender.com/articles/" + String(req.params.id), {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    next();
  } catch(err) {
    console.log(err);
  }
}

const removeOne = async (req, res, next) => {
  try {
    const res = await fetch("https://article-api-ats.onrender.com/articles/" + String(req.params.id), {
      method: "DELETE",
    });
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
