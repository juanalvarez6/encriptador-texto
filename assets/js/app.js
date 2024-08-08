var btnEncriptar = document.querySelector('.botones-encriptar');
var btnDesencriptar = document.querySelector('.botones-desencriptar');
var btnCopiar = document.querySelector('.copiar');
var textArea = document.querySelector('.encriptador-input');

btnEncriptar.addEventListener('click', () => {
    let inputMensaje = document.querySelector('.encriptador-input').value;

    if (inputMensaje != '') {
        if (tieneMayusculas(inputMensaje) || tieneTildes(inputMensaje)) {
            mostrarMensaje('Solo letras minúsculas y sin acentos');
        } else {
            document.querySelector('#cont-res p').innerHTML = encriptar(inputMensaje);
            document.querySelector('.texto-desencriptado-cont-img img').style.display = 'none';
            document.querySelector('.mensajes').style.display = 'none';
            document.querySelector('#cont-res').style.display = 'flex';
        }
    }
});

btnDesencriptar.addEventListener('click', () => {
    let inputMensaje = document.querySelector('.encriptador-input').value;

    if (inputMensaje != '') {
        if (tieneMayusculas(inputMensaje) || tieneTildes(inputMensaje)) {
            mostrarMensaje('Solo letras minúsculas y sin acentos');
        } else {
            document.querySelector('#cont-res p').innerHTML = desencriptar(inputMensaje);
            document.querySelector('.texto-desencriptado-cont-img img').style.display = 'none';
            document.querySelector('.mensajes').style.display = 'none';
            document.querySelector('#cont-res').style.display = 'flex';
        }
    }
});

btnCopiar.addEventListener('click', () => {
    let textRespuesta = document.querySelector('.respuesta').innerHTML;
    copiarContenido(textRespuesta);
});

const encriptar = (mensaje) => {
    let vocales = ['e', 'i', 'a', 'o', 'u'];
    let claves = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    vocales.forEach((element, index) => {
        if(mensaje.includes(element)){
            mensaje = mensaje.replaceAll(element, claves[index]);
        }
    });
    return mensaje;
}

const desencriptar = (mensaje) => {
    let vocales = ['e', 'i', 'a', 'o', 'u'];
    let claves = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    claves.forEach((element, index) => {
        if (mensaje.includes(element)) {
            mensaje = mensaje.replaceAll(element, vocales[index]);
        }
    });
    return mensaje;
}

const tieneMayusculas = (cadena) => {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === cadena[i].toUpperCase() && cadena[i] !== cadena[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

const copiarContenido = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        mostrarMensaje('Texto copiado en el portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

const tieneTildes = (cadena) => {
    return /[áéíóúÁÉÍÓÚ]/.test(cadena);
}

const mostrarMensaje = (mensaje) => {
    const notificaciones = document.getElementById('notificaciones');
    notificaciones.innerHTML = mensaje;
    notificaciones.style.display = 'block';

    setTimeout(() => {
        notificaciones.style.display = 'none';
    }, 3000);
}