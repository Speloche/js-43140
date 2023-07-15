// Clase de pelotas

class Pelotas {

    constructor(articulo,cod,marca, modelo, precio) {
        
        this.articulo = articulo
        this.cod = cod;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    descrip_pelotas(){

        return ("Codigo " + this.cod + " - " + this.marca + " " + this.modelo + "  " +  "u$d "+ this.precio);
    }

    info_pelota(){

        return (this.articulo + " " + this.marca + "  " + this.modelo + " - " + "u$d "+ this.precio);
    }

    precio_pelota(){
        return(this.precio)
    }

}