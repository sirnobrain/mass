const express = require('express');
const router = express.router();
const Table = require('./../controllers/table');

router.get('/:id', (req, res) => {
	// query menu dan tampilkan ke view
	Table.showMenu(req, res);
});

router.post('/:id', (req, res) => {
	// render billing via modal/dialog box
	// button pay pada modal trigger router ini
	// untuk create order
	Table.createOrder(req, res);
});

router.get('/:id/wait', (req, res) => {
	// tampilkan halaman tunggu
	// opsi [leave, order again => /]
	Table.showWaitPage(req, res);
});

router.get('/:id/leave', (req, res) => {
	// set table to empty => req.params.id as parameter
	Table.setEmpty(req, res);
});

module.exports = router;