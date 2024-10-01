class Usuario{

    constructor(nombre, apellido, id, fecha, hora, genero){
        this._nombre = nombre;
        this._apellido = apellido;
        this._id = id;
        this._fecha = fecha;
        this._hora = hora;
        this._genero = genero;
    }

    get nombre(){
        this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get id(){
        this._id;
    }

    set id(id){
        this._id = id;
    }

    get fecha(){
        this._fecha;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }

    get hora(){
        this._hora;
    }

    set hora(hora){
        this._hora = hora;
    }

    get genero(){
        this._genero;
    }

    set genero(genero){
        this._genero = genero;
    }

}

module.exports = Usuario;