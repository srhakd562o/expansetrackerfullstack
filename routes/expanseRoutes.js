const express = require('express');
const router = express.Router();
const expanseController = require('../controller/expanseController');

router.post('/', expanseController.addExpanse);
router.get('/', expanseController.getExpanse);
router.get('/:id', expanseController.getExpanseById);
router.put('/:id', expanseController.updateExpanse);
router.delete('/:id', expanseController.deleteExpanse);

module.exports = router;
