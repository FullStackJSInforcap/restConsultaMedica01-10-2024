const fs = require('fs');
const readline = require('node:readline');
const Usuario = require('../models/usuario');

const findAll = async () => {
    const arregloUsuarios = [];
    const fileStream = fs.createReadStream('./data/usuarios.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        const arregloLinea = line.split(',');
        const usuario = new Usuario(arregloLinea[0], arregloLinea[1], arregloLinea[2], arregloLinea[3], arregloLinea[4], arregloLinea[5]);
        arregloUsuarios.push(usuario);   
    }
    return arregloUsuarios;
}

const findById = (id) => {

}

const insert = (usuario) => {

}

const update = (usuario) => {

}

const deleteById = (id) => {

}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    deleteById
}