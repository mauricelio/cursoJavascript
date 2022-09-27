const painel = document.getElementById('painel');

let texto=' ';
let texto2=' ';

let numero1=30, numero2=10;

//função com parametros e com retorno
function soma(variavel1,variavel2){
    return variavel1 + variavel2;
}

//funcao sem parametro com retorno
function endereco(){
    return "R São Geraldo, 664";
}

//função sem parametro e sem retorno
function olaMundo(){
    console.log("Olá mundo!");
}

//Chamando as funções

olaMundo();

//texto = endereco();

texto2 = soma(numero1,numero2);

const resultado = document.createTextNode(texto);
painel.appendChild(resultado);

const resultado2 = document.createTextNode(texto2);
painel.appendChild(resultado2);
