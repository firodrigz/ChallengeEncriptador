const ingresoMensaje = document.querySelector(".mensaje-ingreso");
const muestraResultado = document.querySelector(".muestra-resultado");

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
    if (ingresoMensaje.value == ""){
        alert("Ingrese texto a encriptar");        
    }
    else{
        if(!validarTexto()) {
            const textoEncriptado = encriptar(ingresoMensaje.value);
            muestraResultado.value = textoEncriptado;  //muestro el mensaje encriptado en el textarea muestra-resultado          
            ingresoMensaje.value = "";  //limpio el textarea
            document.getElementById("output-initial").classList.add("disable");//saco imagen en textarea muestra-resultado
            document.getElementById("output-result").classList.remove("disable"); //muestra mensaje encriptado/desencriptado        
        }        
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
    if (ingresoMensaje.value == ""){
        alert("Ingrese texto a desencriptar");        
    }
    else{
        const textoEncriptado = desencriptar(ingresoMensaje.value);
        muestraResultado.value = textoEncriptado;
        ingresoMensaje.value = "";
    }    
}


function copiar(){
    muestraResultado.select();
    navigator.clipboard.writeText(muestraResultado.value);
    muestraResultado.value = "";
    alert("Texto Copiado");
}


function darkMode() {
    toggle.addEventListener('change',() => {
        if (toggle.checked) {
            console.log('activado')
            document.querySelector('body').classList.add('modoNoche');
        } else {
            document.querySelector('body').classList.remove('modoNoche');
        }
    })
}

window.addEventListener("load",() => {
    darkMode();
})
