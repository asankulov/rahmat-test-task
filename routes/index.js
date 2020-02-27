const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send(new Date())
});

module.exports = router;
