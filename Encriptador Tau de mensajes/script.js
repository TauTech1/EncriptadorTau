const textArea= document.querySelector(".text-area" );
const mensaje= document.querySelector(".mensaje");

const copyBtn = document.querySelector(".copiar");

copyBtn.addEventListener("click", function() {
    if(mensaje.value){
        mensaje.select();
        document.execCommand("copy");
        alert("Text copied to clipboard");
    }
});

function btnEncriptar(){
    if(textArea.value){
        const textoEncriptado= encriptar(textArea.value);
        mensaje.value= textoEncriptado;
        textArea.value= "";
        mensaje.style.backgroundImage="none"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i] [0])){
            stringEncriptada=stringEncriptada.replace(matrizCodigo[i] [0],matrizCodigo[i] [1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    if(textArea.value){
        const textoDesencriptado= desencriptar(textArea.value);
        mensaje.value= textoDesencriptado;
        textArea.value= "";
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replace(matrizCodigo[i] [1],matrizCodigo[i] [0])
        }
    }
    return stringDesencriptada
}

