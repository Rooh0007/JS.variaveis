ceil arredonda para cima 1.5.
floor arrendoda para baixo 1.4.
roud arredonda o valor inteiro. 

z toFixed retorna uma string para exibir para o usuario 
para impressao 
não da para fazer outras operacoes matematicas mas da para converter para numero 
utilizando a função number.

x.toUpperCase
transfoma o texto em maiusculo

x.length me tras a  quantidade de letras da minha string 

não posso acessar a letra 11 
mas a numeração é sempre menos 1 por que começa 0 

id tudo direto sem espeços sem pontuação 
colocar com letra maiuscula chmar com maiuscula 
então colocar com miniscula

addEventListener função de ação como click tudo em minusculo 
na parte de função 

addEventListener("click", function(){ apos o "click" adicionar a função 

  mandar para memoria oque é digitado convertendo de trs para frente e colocando os simbolos (*)

function inserirSimbolo(t, s){
        let saida ="";
        for (let i=0;
            i< t.length; i++){
                saida += t[i]+s;

            }
            console.log(saida);
    }
  

    tabela ACIL pesquisa 
esse code faz com que no cambo para digitar seja permitido apenas numeros
    let elemento1 = document.getElementById("txtv1");
let elemento2 = document.getElementById("txtv2");

//arrow function
let validarDados = (event)=>{
    return ((event.charCode >= 48
         && event.charCode <= 57 )
        || event.charCode == 46 ) ? true : event.preventDefault();

}

elemento1.addEventListener("keypress", validarDados)
elemento2.addEventListener("keypress", validarDados)

 let elemento1 = document.getElementById("txtv1");
let elemento2 = document.getElementById("txtv2");

//arrow function
let validarDados = (event)=>{
    return ((event.charCode >= 48
         && event.charCode <= 57 )
        || event.charCode == 46 ) ? true : event.preventDefault();

}
let elemento1 = document.getElementById("txtv1");
let elemento2 = document.getElementById("txtv2");

//arrow function
let validarDados = (event)=>{
    return ((event.charCode >= 48
         && event.charCode <= 57 )
        || event.charCode == 46 ) ? true : event.preventDefault();

}

para fazer a soma entre os valores 

elemento1.addEventListener("keypress", validarDados)
elemento2.addEventListener("keypress", validarDados)

document.getElementById("btn")
        .addEventListener("click", function(){
            let v1 = Number (elemento1.value);
            let v2 = Number (elemento2.value);
            document.getElementById("res").value=(v1+v2)
        });

no javascript os vetores almenta conforme a nescessidade 
no caso ele é infinito 