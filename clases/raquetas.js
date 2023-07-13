
// Clase de Raquetas

class Raquetas {

    constructor(marca, modelo, peso, precio) {

        this.marca = marca;
        this.modelo = modelo;
        this.peso = peso;
        this.precio = precio;
    }

    descrip_raqueta(){

        return (this.marca + "  " + this.modelo + " - " + this.peso + " - " + "u$d "+ this.precio);
    }



}