let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

    console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor")
        } else {
            asignarTextoElemento("p","El número secreto es mayor")
        }
        intentos++;
        limpiarcaja();
    
    }


   return;
}

function limpiarcaja(){
    document.querySelector("#valorUsuario").value = "";
  
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;


    console.log (numeroGenerado);
    console.log (listaNumeroSorteados);
    //si ya mostramos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");

    }else {
    // Si el numero generado esta incluido en la lista

    if (listaNumeroSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push (numeroGenerado);
        return numeroGenerado;
    }
}
}
        
function condicionesIniciales() {
        asignarTextoElemento("h1","Juego del número secreto");
        asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
    
}

    

function reiniciarJuego() {
     //limpiar juego
     limpiarcaja();
     //indicar mensaje de intervalo de numeros 
     //generar el numero aleatorio
     //inicializar el numero de intentos
     condicionesIniciales();
     //deshabilitar el boto de nuevo juego
     document.querySelector("#reiniciar").setAttribute("disabled", "true");

   
    
}

condicionesIniciales();
