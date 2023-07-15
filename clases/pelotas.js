// Clase de pelotas

class Pelotas {

    constructor(cod,marca, modelo, precio) {
        
        this.cod = cod;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    descrip_pelotas(){

        return ("Codigo " + this.cod + " - " + this.marca + " " + this.modelo + "  " +  "u$d "+ this.precio);
    }

    info_pelota(){

        return (" - " + this.marca + "  " + this.modelo + " - " + "u$d "+ this.precio);
    }

    precio_pelota(){
        return(this.precio)
    }

}