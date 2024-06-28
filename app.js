/*let titulo = document.querySelector('h1');
titulo.innerHTML ='Juego del número secreto';*/

/*let parrafo = document.querySelector('p')
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1?"vez":"veces"}`)

        // Habilitamos el botón de nuevo juego desde el DOM
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Número secreto es menor')
        }else{
            asignarTextoElemento('p','Número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
    

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function generarNumeroSecreto(){

    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //si el número generado esta incluido en la lista

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto();

        }else{

            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo número
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales()
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true)


}

condicionesIniciales();


