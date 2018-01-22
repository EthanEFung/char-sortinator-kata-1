const router = require('express').Router();

router.get('/', (req, res) => res.sendStatus(200));
router.post('/sort', (req, res) => {
  console.log(req.body)
});

module.exports = router;