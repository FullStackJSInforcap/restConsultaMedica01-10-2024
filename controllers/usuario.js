const { request, response } = require('express');
const { findAll } = require('../service/usuario');

const findAllController = async (req = request, res = response) => {
    const usuarios = await findAll();
    res.json(usuarios);
}

const findByIdController = (req = request, res = response) => {
    res.json('findById usuarios');
}

const insertController = (req = request, res = response) => {
    res.json('insert usuarios');
}

const updateController = (req = request, res = response) => {
    res.json('update usuarios');
}

const deleteByIdController = (req = request, res = response) => {
    res.json('deleteById usuarios');
}

module.exports = {
    findAllController,
    findByIdController,
    insertController,
    updateController,
    deleteByIdController
}