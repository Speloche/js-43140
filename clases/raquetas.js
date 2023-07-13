
// Clase de Raquetas

class Raquetas {

    constructor(codigo,marca, modelo, peso, precio) {
        
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
        this.peso = peso;
        this.precio = precio;
    }

    descrip_raqueta(){

        return ("Codigo " + this.codigo + " - " + this.marca + "  " + this.modelo + " - " + this.peso + " - " + "u$d "+ this.precio);
    }



info_raqueta(){

    return (" - " + this.marca + "  " + this.modelo + " - " + this.peso + " - " + "u$d "+ this.precio);
}

}