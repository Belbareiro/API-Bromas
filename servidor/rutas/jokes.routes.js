const express = require('express');
const {
    obtenerChistes,
    obtenerChiste,
    crearChiste,
    actualizarChiste,
    eliminarChiste,
} = require('../controladores/jokes.controller');

const router = express.Router();

router.get('/', obtenerChistes);
router.get('/:id', obtenerChiste);
router.post('/', crearChiste);
router.put('/:id', actualizarChiste);
router.delete('/:id', eliminarChiste);

module.exports = router;