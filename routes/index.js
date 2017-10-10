const express = require('express');
const router = express.router();
const Index = require('./../controllers/index');

router.get('/', (req, res) => {
  // panggil view index untuk render available tables
	Index.showAvailableTables(req, res);
});

module.exports = router;