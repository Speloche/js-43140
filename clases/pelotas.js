// Clase de pelotas

class Pelotas {

    constructor(marca, modelo, precio) {

        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    descrip_pelotas(){

        return (" - " + this.marca + " " + this.modelo + "  " +  "u$d "+ this.precio);
    }



}