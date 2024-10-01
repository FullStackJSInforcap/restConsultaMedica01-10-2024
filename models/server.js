const express = require('express');

class Server{

    constructor(){
        this._app = express();
        this._port = 3000;
        this.routes();
    }

    routes(){
        this._app.use('/usuarios', require('../routes/usuario'));
    }

    listen(){
        this._app.listen(this._port, () => {
            console.log(`Escuchando en el puerto ${this._port}`);
        });
    }

}

module.exports = Server;