class GestionarProductos {

    iniciar() {

        fetch (url)

        .then(resp => resp.json())
        .then(resultado => {

            articulos = resultado.articulos;
        

        let haystock = articulos.filter(prod => prod.stock > 0);

        this.cargarArticulos(haystock);
    })
}
    

    cargarArticulos(articulos) {

        let divProductos = document.getElementById("articulo");
        divProductos.innerHTML = "";


        if (articulos.length == 0) {

            alert(" No se encontraron articulos");
            return false;
        } else {

            articulos.forEach((art) => {


                let cod = art.cod;
                let nombre = art.nombre;
                let img = art.img;
                let descripcion = art.descripcion;
                let precio = art.precio;


                let prod = document.createElement("div");
                prod.classList.add('col-12', 'h200', 'border', 'bg-light', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
                prod.innerHTML = `
                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                    <p class="precio ">$ ${precio}</p>
                                    <button onclick="agregarAlCarrito(${cod})" class="carr btn btn-primary">Comprar</button>
                                </div>
                                <div class="p-3 d-flex flex-column w-60 h-150">
                                    <h3>${nombre}</h3>                                            
                                    <p>${descripcion.substring(0, 120)}</p>
                                </div>
                                <div class="w-20">
                                    <img src="./assets/img/${img}" alt="" width="130" height="160" class="rounded-3">
                                </div>`;

                divProductos.appendChild(prod);
            });
        }
    }




    buscar(valor) {

        let result = articulos.filter(art => art.nombre.toLowerCase().includes(valor.toLowerCase()) || art.descripcion.toLowerCase().includes(valor.toLowerCase()));

        this.cargarArticulos(result);
    }


}


