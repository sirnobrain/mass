const express = require('express');
const router = express.Router();
const AdminController = require('../../controllers/admin/index');

const menus = require('./menus');
const tables = require('./tables');

router.use('/menus', menus);
router.use('/tables', tables);

router.get('/', (req, res) => {
	AdminController.index(req, res);
});

router.get('/login', (req, res) => {
  AdminController.loginIndex(req, res);
});

router.post('/login', (req, res) => {
  AdminController.loginPost(req, res);
});

router.get('/logout', (req, res) => {
  AdminController.logout(req, res);
});

module.exports = router;
