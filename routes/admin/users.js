const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/admin/user');
const authMiddleware = require('../../helpers/authMiddleware');

router.use((req, res, next) => {
  authMiddleware('users', req, res, next);
})

router.get('/', (req, res) => {
  UserController.index(req, res);
});

router.get('/add', (req, res) => {
  UserController.add(req, res);
});

router.post('/add', (req, res) => {
  UserController.create(req, res);
});

router.get('/:id/edit', (req, res) => {
  UserController.edit(req, res);
})

router.post('/:id/edit', (req, res) => {
  UserController.update(req, res);
});

router.get('/:id/delete', (req, res) => {
  UserController.delete(req, res);
});

router.post('/:id/delete', (req, res) => {
  UserController.destroy(req, res);
});

module.exports = router;
