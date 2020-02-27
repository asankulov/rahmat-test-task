const {searchForHTTPEndpoint} = require("../helpers");
const {searchParamIsProvided} = require("../middlewares/");
const router = require('express').Router();

router.get('/', searchParamIsProvided, (req, res) => {
  searchForHTTPEndpoint(req.query.q)
    .then(searchResponse => {
      if (searchResponse.total === 0) {
        return res.status(404).json({
          message: "No records found"
        })
      }
      return res.json({
        data: searchResponse.data
      })
    })
    .catch(e => {
      console.log(e)
    })
});

module.exports = router;
