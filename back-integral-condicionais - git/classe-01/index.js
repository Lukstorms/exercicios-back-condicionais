const jogada1 = "tesoura";
const jogada2 = "papel";


//seu código aqui

if(jogada1 === jogada2){
    console.log("Empate");
}else if(jogada1 === "pedra" &&  jogada2 === "tesoura"){
    console.log("Pedra vence tesoura");
}else if(jogada1 === "pedra" && jogada2 === "papel"){
    console.log("Papel vence pedra")
}else if(jogada1 === "tesoura" && jogada2 === "papel"){
    console.log("Tesoura vence papel")
}else if(jogada1 === "tesoura" && jogada2 === "pedra"){
    console.log("Pedra vence tesoura")
}else if(jogada1 === "papel" && jogada2 === "tesoura"){
    console.log("Tesoura vence papel")
}else if(jogada1 === "papel" && jogada2 === "pedra"){
    console.log("Papel vence pedra")
}