let carrito = [];
let articulos = new Array();

let gestor;

document.addEventListener("DOMContentLoaded", () => {

    // Chequeo de si el usuario esta logueado,si lo esta ,se muestra tienda ,sino el form de nuevo.

    const logueado = estaLogueado();

    if (logueado) {

        const infoUsuario = getInfoUsuario();

        mostrarTienda(infoUsuario);
        
    } else {
        mostrarForm();
    }
});

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        mostrarAlerta("error", "Las Contraseñas no son iguales!");
        return;
    }

    // Se guarda la info del usuario en Local storage y se convierte a formato Json
    const infoUsuario = {
        nombre,
        apellido,
        celular,
        email,
        password,
    };
    localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario));

    // se muestra la tienda
    mostrarTienda(infoUsuario);
});



document.querySelector("#search").addEventListener("keyup", () => {


    let search = document.querySelector("#search").value;

    if (search.length >= 2) {

        gestor.buscar(search);



    } else {

        gestor.cargarArticulos(articulos)


    }
})



























