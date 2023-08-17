let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(idProducto) {

    const producto = articulos.find(art => art.cod == idProducto);

    if (producto) {

        carrito.push(producto);

        mostrarAlerta("success", `${producto.nombre} ha sido añadido al carrito.`);

        actualizarCarritoBadge();

        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}


function mostrarCarrito() {

    let comprasRealizadasDiv = document.getElementById("compras-realizadas");

    if (comprasRealizadasDiv) {

        comprasRealizadasDiv.innerHTML = "";

        if (carrito.length === 0) {

            comprasRealizadasDiv.innerHTML = "<p class='carrito-vacio'>El carrito está vacío</p>";

            return;
        }

        carrito.forEach(item => {

            let compraRealizada = document.createElement("div");

            compraRealizada.classList.add("compra-realizada");

            compraRealizada.innerHTML = `
                <div class="compra-item d-flex border-bottom">
                    <img src="../assets/img/${item.img}" alt="${item.nombre} " class=" fotoArt col-3 rounded-3 d-flex align-items-center p-2  ">
                    <div class="compra-item-details  d-flex flex-column justify-content-center ">
                        <h3 class="titulo" >${item.nombre}</h3>
                        <p class="col-3  ">Precio:$${item.precio}</p>
                    </div>
                    <div class="eliminar-prod">
                        <button class="btn btn-danger " data-id="${item.cod}" onclick="eliminarDelCarrito(${item.cod})">X</button>
                    </div>
                    
                </div>
            `;

            comprasRealizadasDiv.appendChild(compraRealizada);

        });

        let eliminar = document.querySelectorAll(".eliminar");

        eliminar.forEach(button => {

            button.addEventListener("click", () => {

                let idProducto = parseInt(button.getAttribute("data-id"));

                eliminarDelCarrito(idProducto);

            });

        });

        calcularTotal();

    }
}



document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();

    const finalizarCompraBtn = document.querySelector(".finalizarCompra");

    if (finalizarCompraBtn) {

        finalizarCompraBtn.addEventListener("click", () => {

            // Calcula el total de la compra 
            const total = carrito.reduce((accumulator, item) => accumulator + item.precio, 0);

            // se crea una lista de lo comprado
            const purchasedItemsList = carrito.map(item => `- ${item.nombre}<br> `).join('\n');


            Swal.fire({

                title: 'Compra Finalizada',
                html: `<b>Los Articulos son :</b> <br>  ${purchasedItemsList}<br> <br> Total: $${total} <br> <br> Gracias por tu compra! , dentro de las proximas 24hrs nos contactaremos para coordinar la entrega y el metodo de pago!. `,
                icon: 'success',
                confirmButtonText: 'OK'

            }).then((result) => {

                if (result.isConfirmed) {

                    // reset the carrito y vuelvo a pag principal

                    carrito = [];

                    localStorage.setItem("carrito", JSON.stringify(carrito));

                    mostrarCarrito();

                    let totalCompra = document.getElementById("totalCompra");

                    totalCompra.textContent = "$0";

                    actualizarCarritoBadge();

                    window.location.href = "../index.html";
                }
            });

        });
    }

});



function eliminarDelCarrito(idProducto) {
    const index = carrito.findIndex(item => item.cod === idProducto);

    if (index !== -1) {

        carrito.splice(index, 1);

        mostrarAlerta("info", `El artículo ha sido eliminado del carrito.`);

        actualizarCarritoBadge();

        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();

        calcularTotal(); // se recalcula el total desp de eliminar articulo
    }
}

function calcularTotal() {

    const totalCompra = document.getElementById("totalCompra");

    const total = carrito.reduce((accumulator, item) => accumulator + item.precio, 0);

    totalCompra.textContent = `$${total}`;
}

document.addEventListener("DOMContentLoaded", () => {

    const seguirComprandoBtn = document.querySelector(".carr");

    seguirComprandoBtn.addEventListener("click", () => {

        actualizarCarritoBadge();

    });

});





