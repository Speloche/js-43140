// Clase de Grips

class Grips {

    constructor(codi,marca, modelo, precio) {
        
        this.codi = codi;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    descrip_grips(){

        return ("Codigo " + this.codi +" - " + this.marca + " " + this.modelo + " " + "u$d "+ this.precio);
    }

    info_grips(){

        return (" - " + this.marca + "  " + this.modelo + " - " + "u$d "+ this.precio);
    }

    precio_grips(){
        return(this.precio)
    }



}