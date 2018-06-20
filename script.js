let casas = document.querySelectorAll("section div");

let jogador1 = prompt("Qual é seu nome");
let simbolo1 = prompt("Digite seu simbolo");

let jogador2 = prompt("Qual é seu nome");
let simbolo2 = prompt("Digite seu simbolo");

let i = 0;

function trocarSimbolo(simbolo){
    this.innerHTML = simbolo;   
}

function verificaJogada(){
    if(i % 2 === 0){
        let indicador = document.querySelector("#jogador");
        indicador.innerHTML = jogador1;
        trocarSimbolo(simbolo1);
        
    }else{
        let indicador = document.querySelector("#jogador");
        indicador.innerHTML = jogador2;
        
    }
    i++;
}

for(let casa of casas){

    casa.onclick = trocarSimbolo
 
}


// for(let casa of casas){

//     casa.onclick = trocarSimbolo;
 
// }



