const express = require('express');
const router = express.Router();
const Index = require('./../controllers/index');

router.get('/', (req, res) => {
  // panggil view index untuk render available tables
	Index.showAvailableTables(req, res);
});

module.exports = router;