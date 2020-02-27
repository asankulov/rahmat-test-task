module.exports.searchParamIsProvided = (req, res, next) => {
  const query = req.query.q;
  if (query){
    req.query.q = query.replace(/\s{2,}/gm, " ").trim();
    return next();
  }
  return res.status(400).json({
    message: "q param is not provided."
  });
};
