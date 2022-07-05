const aposentada = true;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if(!aposentada || !portadoraDeDoenca){
    console.log("ISENTA")
}else if(totalDeRendimentos <= 2855969){
    console.log("Vaza Leão! já tá difícil sem você!")
}else if(totalDeRendimentos >= 2855969){
    console.log("Pega Leão!")
}

    