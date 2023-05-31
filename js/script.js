const ingresoMensaje = document.querySelector(".mensaje-ingreso");
const muestraResultado = document.querySelector(".muestra-resultado");
const salidaInicial = document.getElementById("salida-inicial");
const salidaResultado = document.getElementById("salida-resultado");

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
        return;      
    }

    if(validarTexto())
        return;

    const textoEncriptado = encriptar(ingresoMensaje.value);
    muestraResultado.value = textoEncriptado;  //muestro el mensaje encriptado en el textarea muestra-resultado          
    ingresoMensaje.value = "";  //limpio el textarea
    salidaInicial.classList.add("disable");//saco imagen en textarea muestra-resultado
    salidaResultado.classList.remove("disable");        
}


function validarTexto(){
    let textoEscrito = ingresoMensaje.value;
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
        salidaInicial.classList.add("disable");
        salidaResultado.classList.remove("disable");     
    }    
}


function copiarPortapapeles(){
    muestraResultado.select();
    muestraResultado.setSelectionRange(0,99999);
    document.execCommand('copy');
    alert("Copiado al portapapeles, utilice crtl+v para desenciptar");

    ingresoMensaje.value = muestraResultado.value;
    muestraResultado.value = "";

    salidaInicial.classList.remove("disable");
    salidaResultado.classList.add("disable");   
}


function darkMode() {
    toggle.addEventListener('change',() => {
        let body = document.querySelector('body');
        
        if (toggle.checked) {
            console.log('activado')
            body.classList.add('modoNoche');
        } else {
            body.classList.remove('modoNoche');
        }
    })
}

window.addEventListener("load",() => {
    darkMode();
})
