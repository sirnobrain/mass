const express = require('express');
const router = express.Router();
const Kitchen = require('./../controllers/kitchen');

router.get('/', (req, res) => {
	// query active orders and display it on kitchen screen
	Kitchen.showActiveOrders(req, res);
});

router.post('/', (req, res) => {
	// update batch status after food ready
	Kitchen.updateBatchStatus(req, res);
});

module.exports = router;