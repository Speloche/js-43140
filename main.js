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
                document.write("Se creo Correctamente su Cuenta." + "<br>" + "Sus datos de ingreso son:" + "<br>" + "Usuario: " + email + "<br>" + "Contraseña: " + contraseña);
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





























