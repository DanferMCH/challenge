/*Validar
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

var entradaTexto = document.querySelector(".caja_texto");
var mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = cifradoDatos(entradaTexto.value);
    mensaje.value = textoEncriptado;
}
function cifradoDatos(encriptar){
    var validacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    encriptar=encriptar.toLowerCase();

    for (let i = 0; i < validacion.length; i++) {
        if(encriptar.includes(validacion[i][0])){
            encriptar = encriptar.replaceAll(validacion[i][0],validacion[i][1]);
        }
        
    }
    return encriptar;
}

function btnDesencriptar(){
    var mensaje = document.querySelector(".mensaje");
    const textoDesencriptado = descifradoDatos(mensaje.value);
    mensaje.value = textoDesencriptado;
}
function descifradoDatos(desencriptar){
    var validacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    desencriptar=desencriptar.toLowerCase();

    for (let i = 0; i < validacion.length; i++) {
        if(desencriptar.includes(validacion[i][1])){
            desencriptar = desencriptar.replaceAll(validacion[i][1],validacion[i][0]);
        }
        
    }
    return desencriptar;
}