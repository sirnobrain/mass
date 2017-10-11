const express = require('express');
const router = express.Router();
const ReportController = require('../../controllers/admin/report');
const authMiddleware = require('../../helpers/authMiddleware');

router.use((req, res, next) => {
  authMiddleware('report', req, res, next);
})

router.get('/', (req, res) => {
  ReportController.index(req, res);
});

router.post('/generate', (req, res) => {
  ReportController.generate(req, res);
});

module.exports = router;
