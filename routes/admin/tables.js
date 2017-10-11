const express = require('express');
const router = express.Router();
const TableController = require('../../controllers/admin/table');

router.get('/', (req, res) => {
  TableController.index(req, res);
});

router.get('/add', (req, res) => {
  TableController.add(req, res);
});

router.post('/post', (req, res) => {
  TableController.create(req, res);
});

router.get('/:id/edit', (req, res) => {
  TableController.edit(req, res);
});

router.post('/:id/edit', (req, res) => {
  TableController.update(req, res);
});

router.get('/:id/delete', (req, res) => {
  TableController.delete(req, res);
});

router.post('/:id/delete', (req, res) => {
  TableController.destroy(req, res);
})

module.exports = router;
