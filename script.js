const ingresoMensaje = document.querySelector(".mensaje-ingreso");
const muestraResultado = document.querySelector(".muestra-resultado");
const copiarMensaje = document.querySelector(".copiar");
//copiar.style.display = "none" //para ocultar el botón enviar*/


/*var ingreso =[];

ingreso.includes(searchElement);  //elemento a buscar, distingue mayúsculas y minúsuclas / devuelve true o false
*/


//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`



function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncriptada;
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada;
}



function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(ingresoMensaje.value);
        muestraResultado.value = textoEncriptado;  //muestro el mensaje encriptado en el textarea muestra-resultado
        muestraResultado.style.backgroundImage = "none"; //saco imagen en textarea muestra-resultado
        ingresoMensaje.value = "";  //limpio el textarea
        copiarMensaje.style.display = "block";
    
    }
}


function validarTexto(){
    let textoEscrito = document.querySelector(".mensaje-ingreso").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(ingresoMensaje.value);
    muestraResultado.value = textoEncriptado;
    ingresoMensaje.value = "";
    
}



function copiar(){
    muestraResultado.select();
    navigator.clipboard.writeText(mensaje.value);
    muestraResultado.value = "";
    alert("Texto Copiado");
}



