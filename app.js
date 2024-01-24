let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disable');        
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');  
        }  else {
                asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random())+1;
    console.log(numeroGenerado);
    console.log(generarNumeroSecreto);
    // si ya sorteamos todos los números.
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    }
    //Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listaNumerosSorteados.push (numeroGenerado);
        return numeroGenerado;
    
    }
}

function condicionesIniciales() {
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p', `Adivina un número del 1 ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego() {
    //limpiar la caja.
    limpiarCaja();
    //Empezar de 0 el juego.
    //Indicar mensaje de inicio.
     //Inicializar el # de intentos.
    //Generar el número aleatorio.
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   
}
condicionesIniciales();