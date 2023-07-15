let total_compra = "";
let precio_total = 0;


let nombre, apellido, numTel, email, contraseña, contraseña2;

// consulta si se quiere crear una nueva cuenta 
let respuesta = prompt("Quieres realizar una nueva Cuenta? (si/no)");

switch (respuesta.toLowerCase()) {
    case "si":

        do {

            nombre = solicitarDatos("Ingrese su Nombre");

            if (nombre != false) {

                apellido = solicitarDatos("Ingrese su Apellido");

                if (apellido != false) {

                    numTel = solicitarDatos("Ingrese su numero de Telefono ");

                    if (numTel != false) {

                        email = solicitarDatos("Ingrese su Email");

                        if (email != false) {

                            let datos = "Nombre: " + nombre +
                                "\nApellido: " + apellido +
                                "\nNum de Tel: " + numTel +
                                "\nEmail: " + email;

                            // Se consulta si los datos son correctos 
                            let datosCorrectos = confirm("Confirma que Sus Datos son ?\n\n" + datos);


                            if (datosCorrectos) {

                                contraseña = prompt("Ingrese una contraseña");
                                contraseña2 = prompt("Verificar contraseña");


                                break;
                            }

                        }
                    }
                }
            }
        } while (true);

        if (contraseña === contraseña2) {

            // se muestra un mensaje de creacion de cuenta 
            alert("Se creo Correctamente su Cuenta." + "\n" + "Sus datos de ingreso son:" + "\n" + "\n" + "Usuario: " + email + "\n" + "Contraseña: " + contraseña);

            // Se ingresa a la Tienda
            alert("Bienevenid@s a la tienda de Tenis para Todos");

            let store = true;
            while (store) {

                let mensaje = " Como lo podemos ayudar? : ";
                mensaje += "\n1) Comprar Raquetas ";
                mensaje += "\n2) Comprar Pelotas ";
                mensaje += "\n3) Comprar Over Grips ";
                mensaje += "\n4) Carrito de Compra";
                mensaje += "\n5) Salir ";

                let response = prompt(mensaje);

                switch (response) {

                    case "1":
                        comprar_raqueta();
                        break;
                    case "2":
                        comprar_pelota();
                        break;
                    case "3":
                        comprar_grips();
                        break;
                    case "4":
                        pagar();
                        store = false;
                        break;
                    case "5":
                        alert("Gracias por visitar nuestra Tienda ");
                        store = false;
                        break;
                    case null:
                        alert("Gracias por visitar nuestra Tienda ");
                        store = false;
                        break;
                    default:
                        alert("La opcion ingresada no es valida");


                }
            }

            break;



        } else {
            alert("Las Contraseñas no coinciden ,vuelva a intentarlo");
        }

    case "no":
        // se muestra cancelacion de la creacion de la cuenta 
        alert("No ha sido posible creear su cuenta, intente nuevamente.");
        break;

    default:
        // se muestra mensaje de que los caracteres elejidos no son correctos 
        alert("Caracter invalido, no se puede crear la cuenta, intente nuevamente.");
        break;
}




function solicitarDatos(mensaje) {

    let nombre = prompt(mensaje);

    if (nombre != "") {

        return nombre;

    } else {

        alert("Este Campo no puede estar vacio");

        return false;

    }

}

//funcion para elegir que raqueta comprar

function comprar_raqueta() {

    listado_raquetas();

    let codigo_raqueta = prompt("Ingrese el Codigo de la Raqueta que quiera comprar");

    if (codigo_raqueta) {

// Busca entre el stock y verifica si es el mismo codigo ingresado por el usuario

        let raqueta_ok = stock_raquetas.find((r) => r.codigo == codigo_raqueta)

        if (raqueta_ok) {

            let respuesta = confirm("La Raqueta elegida es :" + "\n" + raqueta_ok.info_raqueta() + " ?");
// si los datos son correcto se suma art a carrito y precio a suma final.
            total_compra += raqueta_ok.info_raqueta() + "\n";
            precio_total += raqueta_ok.precio_raqueta();

            if (respuesta) {

                alert("Su articulo fue agregado correctamente al Carrito de compra")

            }
// si se ingresa codigo incorrecto se informa y se vuelve a menu de tienda
        } else alert("El codigo que ingreso no es correcto")

    }
}

// Funcion para comprar pelotas

function comprar_pelota() {

    listado_pelotas()

    let codigo_pelota = prompt("Ingrese el Codigo de las pelotas que quiera comprar");

    if (codigo_pelota) {

        // Busca entre el stock y verifica si es el mismo codigo ingresado por el usuario

        let pelota_ok = stock_pelotas.find((p) => p.cod == codigo_pelota)

        if (pelota_ok) {

            let resp = confirm("Las Pelotas elegida son :" + "\n" + pelota_ok.info_pelota() + " ?");
// si los datos son correcto se suma art a carrito y precio a suma final.
            total_compra += pelota_ok.info_pelota() + "\n";
            precio_total += pelota_ok.precio_pelota();


            if (resp) {

                alert("Su articulo fue agregado correctamente al Carrito de compra")

            }
// si se ingresa codigo incorrecto se informa y se vuelve a menu de tienda
        } else alert("El codigo que ingreso no es correcto")

    }
}

// Funcion para Comprar Grips

function comprar_grips() {

    listado_grips()

    let codigo_grips = prompt("Ingrese el Codigo del Overgrip que quiera comprar");

    if (codigo_grips) {

                // Busca entre el stock y verifica si es el mismo codigo ingresado por el usuario

        let grip_ok = stock_grips.find((g) => g.codi == codigo_grips)

        if (grip_ok) {

            let response = confirm("El Overgrip elegido es :" + "\n" + grip_ok.info_grips() + " ?");
// si los datos son correcto se suma art a carrito y precio a suma final.
            total_compra += grip_ok.info_grips() + "\n";
            precio_total += grip_ok.precio_grips();


            if (response) {

                alert("Su articulo fue agregado correctamente al Carrito de compra")

            }
// si se ingresa codigo incorrecto se informa y se vuelve a menu de tienda
        } else alert("El codigo que ingreso no es correcto")

    }
}



// funcion Pagar , confirma todo lo que se eligio y muestra metodos de pago.

function pagar() {
// Se confirma que los art cargados sean correctos y se muestra descripcion
    let pagar = confirm("Los articulos seleccionados son: " + "\n" + "\n" + total_compra + "\n" + "\n" + "Quieres confirmar la compra y pagar?");

    if (pagar) {
// se genera una "orden de compra" y se informa metodos de pagos
        document.write("Su numero de Recibo es : " + Math.random() * 100000000000000000 + "<br>" + "<br>" + "El total de la Compra es : " + "u$d " + precio_total + "<br>" + "<br>" + "Metodos de Pago: " + "<br>" + "<br>" + "- Transferencia bancaria: Cuenta 23452 Banco Itau" + "<br>" + "<br>" + "- Efectivo: puede realizarlo en cualquier Abitab o Redpagos del pais con su Numero de Recibo." + "<br>" + "<br>" + "Gracias por comprar en Tenis para Todos!");

    } else alert("Gracias por visitar nuestra Tienda ");

}


// funciones de listado de productos
function listado_raquetas() {

    let mensaje = "Las raquetas Disponibles son: ";
//se recorre el array en busca de todos los articulos del stock y devuelve listado
    stock_raquetas.forEach((raqueta) => {
        mensaje += "\n " + raqueta.descrip_raqueta();

    })

    alert(mensaje);
}


function listado_pelotas() {

    let mensaje = "Las Pelotas Disponibles son: ";
//se recorre el array en busca de todos los articulos del stock y devuelve listado
    stock_pelotas.forEach((pelota) => {
        mensaje += "\n " + pelota.descrip_pelotas();

    })

    alert(mensaje);
}

function listado_grips() {
//se recorre el array en busca de todos los articulos del stock y devuelve listado
    let mensaje = "Los Grips Disponibles son: ";

    stock_grips.forEach((grip) => {
        mensaje += "\n " + grip.descrip_grips();

    })

    alert(mensaje);
}


























