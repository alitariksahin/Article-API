const asyncWrapper = (func) => {
  return async (req, res, next) => {
    try{
      await func(req, res, next);
    }catch(err) {
      console.log(err);
      next();
    }
  }
}

module.exports = asyncWrapper;
