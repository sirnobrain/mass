const express = require('express');
const router = express.router();
const Admin = require('./../controllers/admin');

router.get('/', (req, res) => {
	Admin.showDashboard(req, res);
});

router.get('/users', (req, res) => {
	// tampilkan user dan rolenya
	Admin.showUsers(req, res);
});

router.post('/users', (req, res) => {
	Admin.createUser(req, res);
});

router.get('/:id/user-edit', (req, res) => {
	Admin.showUser(req, res);
});

router.post('/:id/user-edit', (req, res) => {
	Admin.updateUser(req, res);
});

router.get('/:id/user-delete', (req, res) => {
	Admin.deleteUser(req, res);
});

router.get('/tables', (req, res) => {
	Admin.showTables(req, res);
})

router.post('/tables', (req, res) => {
	Admin.createTable(req, res);
});

router.get('/:id/table-edit', (req, res) => {
	Admin.showTable(req, res);
});

router.post('/:id/table-edit', (req, res) => {
	Admin.editTable(req, res);
});

router.get('/:id/table-delete', (req, res) => {
	Admin.deleteTable(req, res);
});

router.get('/menus', (req, res) => {
	Admin.showMenus(req, res);
})

router.post('/menus', (req, res) => {
	Admin.createMenu(req, res);
});

router.get('/:id/menu-edit', (req, res) => {
	Admin.showMenu(req, res);
});

router.post('/:id/menu-edit', (req, res) => {
	Admin.updateMenu(req, res);
});

router.get('/:id/menu-delete', (req, res) => {
	Admin.deleteMenu(req, res);
});

module.exports = router;