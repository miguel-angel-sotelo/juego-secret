let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto) {
    let titulo = document.querySelector(elemento);
 titulo.innerHTML =texto ;
 return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`felicidades, acertaste el numero ${intentos}  ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el numero es menor');
        }else{
            if(numeroDeUsuario < numeroSecreto) {
                asignarTextoElemento('p','el numero es mayor');
            }
            
        }
    }  

     intentos++;
        limpiarCaja();
    return;
}


function limpiarCaja() {
  document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //si ya sorteamos todos los numero
    if(listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros');
    }else{
        //si el numero generado esta en la lista
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`digita un numero de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar  mensaje interbalo de numeros
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //dehabilitar el boton nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}
 
condicionesIniciales();
 