"use strict"

let frutas = [];// tudo que entre com [] são vetores 
let meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

frutas [0] = "manga";
frutas [1] = "uva"; 
frutas [2] = "maça";

console.log("FOR CLASSICO");
for (let i=0; i < meses.length; i++){
    console.log(meses[i]);
}

console.log("for...of");//for ... of percorre a caixa 1 a 1   
for(let mes of meses){
    console.log(mes);
}

meses.forEach( function(mes, i){
    console.log('${i+1} ${mes}')

})//pega cada caixinha 1 por 1, mais para deixa o trabalho mais bonito 