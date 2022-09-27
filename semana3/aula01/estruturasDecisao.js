/*
    Programa javascript, isto é um comentário
*/

//criando variáveis var, let, const [também pode sero comentado assim]


let letra="Javascript";
console.log(letra);


//operadoreslógicos
let numero1=10, numero2=25;

console.log(numero1!=numero2);
console.log(numero1==numero2);
console.log(numero1<=numero2);



//estruturas de decisão

if(numero1!=numero2)
    console.log("Os dois são diferentes!");
else
    console.log("Os dois são iguais");


let opcao=3;
switch(opcao){
    case 1 : console.log("ensino médio"); break;
    case 2 : console.log("graduação"); break;
    case 3 : console.log("mestrado"); break;
    case 4 : console.log("doutorado"); break;
    default : console.log("escolaridade não definida");
}