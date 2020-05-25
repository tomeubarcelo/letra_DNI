const letterDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function introduceDni() {

    do {
        var numDni = (prompt('Introduce los 8 dígitos de tu DNI: ', 43218383));
    } while (numDni.length != 8);
    numDni = parseInt(numDni);

    var result = numDni % 23; //calculamos el resto del dni introducido entre 23 (num de letras)
    console.log('El resultado de ' + numDni + ' % 23 es: ' + result);

    var letraSeleccionada = letterDni[result]; //segun el resto obtenido buscaremos en el array dicha posicion
    console.log('La letra correspondiente es: ' + letraSeleccionada);
    console.log('Por tanto tu DNI es: ' + numDni + '-' + letraSeleccionada);
}

introduceDni();