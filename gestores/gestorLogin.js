function estaLogueado() {

    return localStorage.getItem("infoUsuario") !== null;
}

function getInfoUsuario() {

    const userInfoString = localStorage.getItem("infoUsuario");

    return JSON.parse(userInfoString);
}

function mostrarForm() {

    document.querySelector(".login-contenedor").style.display = "block";

    document.querySelector(".main").style.display = "none";
}

function mostrarTienda(infoUsuario) {

    document.querySelector(".login-contenedor").style.display = "none";

    document.querySelector(".main").style.display = "block";

    // Mensaje de bienvenida para el usuario

    const saludo = document.createElement("div");

    saludo.textContent = `Hola, ${infoUsuario.nombre}!`.toUpperCase();

    saludo.classList.add("saludo");


    // muestro primero el mensaje de bienvenida 
    const mainDiv = document.querySelector(".main");

    mainDiv.insertBefore(saludo, mainDiv.firstChild);
    

    // Iniciar  GestionarProductos y mostrar la tienda
    gestor = new GestionarProductos();

    gestor.iniciar();


}

function mostrarAlerta(type, message) {
    Toastify({
        text: message,
        duration: 2000,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: type === "success" ? "#28a745" : "#dc3545",
    }).showToast();
}