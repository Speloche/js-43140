let total_compra = "";

function cuentaNueva() {
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
                            listado_grips();
                            break;
                        case "4":
                            pagar();
                            store= false;
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
}


// Se llama para reiniciar la funcion nuevamente 
cuentaNueva();


function solicitarDatos(mensaje) {

    let nombre = prompt(mensaje);

    if (nombre != "") {

        return nombre;

    } else {

        alert("Este Campo no puede estar vacio");

        return false;

    }

}

function comprar_raqueta() {

    listado_raquetas();

    let codigo_raqueta = prompt("Ingrese el Codigo de la Raqueta que quiera comprar");

    if (codigo_raqueta) {

        let raqueta_ok = stock_raquetas.find((e) => e.codigo == codigo_raqueta)

        if (raqueta_ok) {

            let respuesta = confirm("La Raqueta elegida es :" + "\n" + raqueta_ok.info_raqueta() + " ?");

            total_compra += raqueta_ok.info_raqueta() + "\n";

            if (respuesta) {

                alert("Su articulo fue agregado correctamente al Carrito de compra")

            
            }



        }


    }
}

function pagar(){

    let pagar = confirm ("Los articulos seleccionados son: " + "\n" + total_compra + "\n" + "\n" + "Quieres confirmar la compra y pagar?");

    if (pagar){

        document.write("Su numero de Recibo es : " + Math.random()*100000000000000000 + "<br>" + "<br>" + "Metodos de Pago: " + "<br>" + "<br>" + "- Transferencia bancaria: Cuenta 23452 Banco Itau" + "<br>"+"<br>" + "- Si el pago es en efectivo, puede realizarlo en cualquier Abitab o Redpagos del pais con su Numero de Recibo" + "<br>" + "<br>" + "Gracias por comprar en Tenis para Todos!");

    }
    
}


function listado_raquetas() {

    let mensaje = "Las raquetas Disponibles son: ";

    stock_raquetas.forEach((raqueta) => {
        mensaje += "\n " + raqueta.descrip_raqueta();

    })

    alert(mensaje);
}


function listado_pelotas() {

    let mensaje = "Las Pelotas Disponibles son: ";

    stock_pelotas.forEach((pelota) => {
        mensaje += "\n " + pelota.descrip_pelotas();

    })

    alert(mensaje);
}

function listado_grips() {

    let mensaje = "Los Grips Disponibles son: ";

    stock_grips.forEach((grip) => {
        mensaje += "\n " + grip.descrip_grips();

    })

    alert(mensaje);
}


























