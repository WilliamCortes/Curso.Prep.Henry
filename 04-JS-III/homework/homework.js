// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1];

}


function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}


function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for (i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
}


function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    var frase = palabras[0];
    for (i = 1; i < palabras.length; i++) {
        frase = (`${frase} ${palabras[i]}`)
    }
    return frase;
}


function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    var x = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true;
            x = 1;
        }
    }
    if (x === 0) {
        return false;
    }
}


function agregarNumeros(numeros) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma = 0;
    for (i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var suma = 0;
    var conteo = 0;
    for (i = 0; i < resultadosTest.length; i++) {
        suma += resultadosTest[i];
        conteo++;
    }
    return suma / conteo;
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var mayor = 0;
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
       // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    var cantidaArgumentos = arguments.length;
    var x = 1;
    if (cantidaArgumentos === 0) {
        return 0;
    } else if (cantidaArgumentos === 1) {
        return arguments[0];
    } else {
        for (i = 0; i < arguments.length; i++) {
            x = x * arguments[i];
        }
        return x;
    }
}


function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
    //Escribe tu código aquí
    var cantidasDeElementos = 0;
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 19) {
            cantidasDeElementos++;
        }
    }
    return cantidasDeElementos;
}


function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    switch (numeroDeDia) {
        case 'Domingo':
            numeroDeDia = 1;
            break;
        case 'Lunes':
            numeroDeDia = 2;
            break;
        case 'Martes':
            numeroDeDia = 3;
            break;
        case 'Miercoles':
            numeroDeDia = 4;
            break;
        case 'Jueves':
            numeroDeDia = 5;
            break;
        case 'Viernes':
            numeroDeDia = 6;
            break;
        case 'Sabado':
            numeroDeDia = 7;
            break;
    }
    if (numeroDeDia === 1 || numeroDeDia === 7) {
        return 'Es fin de semana'
    }
    return 'Es dia Laboral'
}


function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    x = n.toString();
    if (x[0] === '9') {
        return true;
    }
    return false;
}


function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    var primerElemento = arreglo[0];
    var numerosIguales = 0;
    for (i = 1; i < arreglo.length; i++) {
        if (primerElemento === arreglo[i]) {
            numerosIguales++;
        }
    }
    if (numerosIguales === arreglo.length - 1) {
        return true;
    }
    return false;
}


function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    mesesPedidos = [];
    var x = 0;
    var enero = 0;
    var marzo = 0;
    var noviembre = 0;
    for (i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'Enero':
                mesesPedidos[x] = 'Enero';
                x++;
                enero++;
                break;
            case 'Marzo':
                mesesPedidos[x] = 'Marzo';
                marzo++;
                x++;
                break;
            case 'Noviembre':
                mesesPedidos[x] = 'Noviembre';
                noviembre++;
                x++;
                break;
        }
    }
    if (enero && marzo && noviembre) {
        return mesesPedidos;
    }
    return 'No se encontraron los meses pedidos'
}


function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    x = 0;
    var mayoresDeCien = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > 100) {
            mayoresDeCien[x] = array[i];
            x++;
        }
    }
    return mayoresDeCien;
}


function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var nuevoValor = [];
    // nuevoValor[0] = numero;
    for (i = 0; i < 10; i++) {
        numero += 2;
        nuevoValor[i] = numero;
        if (numero === i) {
            return 'Se interrumpió la ejecución'
            break;
        }
    }
    return nuevoValor;
}


function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    var nuevoValor = [];
    var x = 0;
    // nuevoValor[0] = numero;
    for (i = 0; i < 10; i++) {
        if (i === 4) {
            continue;
        }
        numero += 2;
        nuevoValor[x] = numero;
        x++;
    }
    return nuevoValor;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    continueStatement
};