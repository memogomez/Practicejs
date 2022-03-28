function suma(x, y) {
    return x + y; 
}

function resta(x, y){
    return x - y;
}

function invertir(cadena){
    c = 0;
    cadena_invertida = "";
    tamano = cadena.length;
    while(c < tamano) {
        cadena_invertida = cadena[c] + cadena_invertida
        c = c + 1;
    }
    return cadena_invertida
}

function ordenar(arr){
    if(arr.length <= 1){
        return arr;
    }
    return(arr.sort());
}

exports.suma = suma
exports.resta = resta
exports.invertir = invertir
exports.ordenar =  ordenar