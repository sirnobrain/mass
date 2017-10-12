const express = require('express');
const router = express.Router();
const AdminController = require('../../controllers/admin/index');

const authenticate = require('../../helpers/authenticate');

const menus = require('./menus');
const tables = require('./tables');
const users = require('./users');
const report = require('./report');

router.use('/menus', menus);
router.use('/tables', tables);
router.use('/users', users);
router.use('/report', report);

router.get('/', (req, res) => {
  if (authenticate(req.session))
	 AdminController.index(req, res);
  else
    res.redirect('/admin/login');
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

router.get('/change-password', (req, res) => {
  AdminController.changePasswordIndex(req, res);
});

router.post('/change-password', (req, res) => {
  AdminController.changePasswordPost(req, res)
});

module.exports = router;
