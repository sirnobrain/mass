const express = require('express');
const router = express.Router();
const MenuController = require('../../controllers/admin/menu');

router.get('/', (req, res) => {
  MenuController.index(req, res);
});

router.get('/add', (req, res) => {
  MenuController.add(req, res);
});

router.post('/add', (req, res) => {
  MenuController.create(req, res);
});

router.get('/:id/edit', (req, res) => {
  MenuController.edit(req, res);
})

router.post('/:id/edit', (req, res) => {
  MenuController.update(req, res);
});

router.get('/:id/delete', (req, res) => {
  MenuController.delete(req, res);
});

router.post('/:id/delete', (req, res) => {
  MenuController.destroy(req, res);
});

module.exports = router;
