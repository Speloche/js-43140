class GestionarProductos {

    iniciar() {

        articulos = [

            {
                "cod": 1,
                "nombre": "Babolat Pure Aero",
                "descripcion": "Raqueta de grafito de 300 g, Tamaño de la cabeza: 100 in² con patron de encordado 16/20",
                "precio": 300,
                "stock": 10,
                "img": "pure-aero.jpeg",


            },
            {
                "cod": 2,
                "nombre": "Babolat Pure Drive",
                "descripcion": "Raqueta de grafito de 310 g, Tamaño de la cabeza: 100 in², Encordado 16/19",
                "precio": 320,
                "stock": 10,
                "img": "pure-drive.jpeg",


            },
            {
                "cod": 3,
                "nombre": "Babolat Pure Aero Rafa",
                "descripcion": "Raqueta de grafito de 317 g, Tamaño de la cabeza: 98 in², Encordado 16/20",
                "precio": 367,
                "stock": 10,
                "img": "pure-aero-rafa.jpeg",


            },
            {
                "cod": 4,
                "nombre": "Babolat Pure Strike",
                "descripcion": "Raqueta de grafito de 305 g, Tamaño de la cabeza: 100 in², Encordado 16/19",
                "precio": 280,
                "stock": 10,
                "img": "pure-strike.jpeg",


            },
            {
                "cod": 5,
                "nombre": "Wilson Clash 100 V2",
                "descripcion": "Raqueta de grafito de 300 g, Tamaño de la cabeza: 100 in², Encordado 16/19",
                "precio": 269,
                "stock": 10,
                "img": "wilson-clash.jpg",


            },
            {
                "cod": 6,
                "nombre": "Wilson Blade 98 V8 ",
                "descripcion": "Raqueta de grafito y basalto de 305 g, Tamaño de la cabeza: 98 in², Encordado 18/20",
                "precio": 249,
                "stock": 10,
                "img": "wilson-blade.jpg",


            },
            {
                "cod": 7,
                "nombre": "Pelotas Wilson Regular Duty ",
                "descripcion": "Las pelotas Wilson Regular Duty son ideales para todo tipo de superficies",
                "precio": 11,
                "stock": 50,
                "img": "wilson-extraduty.png",

            },
            {
                "cod": 8,
                "nombre": "Pelotas Wilson Tour Clay  ",
                "descripcion": "Pelotas para Polvo de ladrillo construidas para resistir la humedad",
                "precio": 12,
                "stock": 50,
                "img": "wilson-tour-clay.jpeg",

            },
            {
                "cod": 9,
                "nombre": "Pelotas Wilson Roland Garros  ",
                "descripcion": "Pelota de alto rendimiento especial para Polvo de ladrillo ",
                "precio": 16,
                "stock": 50,
                "img": "wilson-roland.jpeg",

            },
            {
                "cod": 10,
                "nombre": "Grips Tecnifibre Wax Feel ",
                "descripcion": "Ideal para absorber la sudoración en altas temperaturas. Adherencia máxima. ",
                "precio": 9,
                "stock": 50,
                "img": "grip-feel.jpeg",

            },
            {
                "cod": 11,
                "nombre": "Grips Tecnifibre Contact Pro ",
                "descripcion": "Sobregrip que optimiza el agarre de la raqueta con un tacto adherente. ",
                "precio": 13,
                "stock": 50,
                "img": "grip-contact-pro.jpeg",

            },
            {
                "cod": 12,
                "nombre": "Grips Tecnifibre Contact Slim ",
                "descripcion": "Menos grueso que un sobregrip clásico para reducir el aumento del mango ",
                "precio": 10,
                "stock": 50,
                "img": "grip-slim.jpeg",

            },

        ]

        let haystock = articulos.filter(prod => prod.stock > 0);

        this.cargarArticulos(haystock);
    }

    cargarArticulos(articulos) {

        let divProductos = document.getElementById("articulo");
        divProductos.innerHTML = "";


        if (articulos.length == 0) {

            alert(" No se encontraron articulos");
            return false;
        } else {

            articulos.forEach((art) => {


                let id = art.id;
                let nombre = art.nombre;
                let img = art.img;
                let descripcion = art.descripcion;
                let precio = art.precio;


                let prod = document.createElement("div");
                prod.classList.add('col-12', 'h200', 'border', 'bg-light', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');

                prod.innerHTML = `<div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                            <p class="precio ">$ ${precio}</p>
                            <a href="javascript:addCarrito(${id})" class=" carr btn btn-primary">Comprar</a>
                            </div>
                            <div class="p-3 d-flex flex-column w-60 h-150">
                            <h3>${nombre}</h3>                                            
                            <p>${descripcion.substring(0, 120)}</p>
                        </div>
                                
                            <div class="w-20">
                                    <img src="./assets/img/${img}" alt="" width="130" height="160" >
                            </div>
                            
                            `;

                divProductos.appendChild(prod);
            });
        }
    }




    buscar(valor) {

let result = articulos.filter (art => art.nombre.toLowerCase().includes(valor.toLowerCase()) || art.descripcion.toLowerCase().includes(valor.toLowerCase()));

this.cargarArticulos(result);
}

}
