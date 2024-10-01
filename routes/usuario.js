const { Router } = require('express');
const { findAllController, findByIdController, insertController, updateController, deleteByIdController } = require('../controllers/usuario');

const router = Router();

router.get('/', findAllController);

router.get('/:id', findByIdController);

router.post('/', insertController);

router.put('/', updateController);

router.delete('/:id', deleteByIdController);

module.exports = router;