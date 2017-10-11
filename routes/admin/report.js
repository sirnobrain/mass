const express = require('express');
const router = express.Router();
const ReportController = require('../../controllers/admin/report');

router.get('/', (req, res) => {
  ReportController.index(req, res);
});

router.post('/generate', (req, res) => {
  ReportController.generate(req, res);
});

module.exports = router;
