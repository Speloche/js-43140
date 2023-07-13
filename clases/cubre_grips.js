// Clase de Grips

class Grips {

    constructor(marca, modelo, precio) {

        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    descrip_grips(){

        return (" - " + this.marca + " " + this.modelo + " " + "u$d "+ this.precio);
    }



}