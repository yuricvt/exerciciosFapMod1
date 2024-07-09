/*
    Exercício 1
*/

// let cotAtual = 5.51;

// let calcValor = Number(prompt("Informe o valor a ser convertido"));
// let convert = Number(prompt("\n1 Converter Dólar -> Real \n2 Converter Real -> Dólar"));

// if (convert == 1) {
//   alert(`O valor convertido é ${calcValor * cotAtual}`);
// } else {
//   alert(`O valor convertido é ${calcValor / cotAtual}`);
// }

/*
    Exercício 2
*/

// let numero = Number(prompt("Digite um número: "));

// if (numero % 2 === 0) {
//   alert(`O número ${numero} é par`);
// } else {
//   alert(`O número ${numero} é ímpar`);
// }

/*
    Exercício 3
*/

// let num1 = Number(prompt("Digite o primeiro número: "));
// let num2 = Number(prompt("Digite o segundo número: "));

// if (num1 > num2) {
//   alert(`O número ${num1} é maior que o número ${num2}`);
// } else {
//   alert(`O número ${num2} é maior que o número ${num1}`);
// }

/*
    Exercício 4
*/

// let nota1 = Number(prompt("Digite a primeira nota:"));
// let nota2 = Number(prompt("Digite a segunda nota:"));
// let media = Number(nota1 + nota2) / 2;

// if (media >= 6) {
//   alert(`Sua média foi ${media}. Parabéns, você foi aprovado!`);
// } else {
//   let pRest = Number(6 - media);
//   alert(
//     `Sua média foi ${media}. Faltaram ${pRest} ponto(s) para ser aprovado!`
//   );
// }

/*
    Exercício 5
*/

// let combo = 30;
// let valorFinal = 0;

// let ticket = Number(prompt(`Qual ingresso você deseja? \n1 - VIP (poltrona) \n2 - Standard (cadeira comum)`));

// if(ticket === 1){
//     valorFinal = 80;
//     let popcorn = Number(prompt(`Deseja adicionar um combo de pipoca ao valor do ingresso?
//         \n1 - Comprar combo
//         \n2 - Não`));
//         if(popcorn === 1){ 
//             alert(`Valor a ser pago: R$${valorFinal + combo}`);
//         } else {
//             alert(`Valor a ser pago: R$${valorFinal}`);
//         }
// } else {
//     valorFinal = 40;
//     let popcorn = Number(prompt(`Deseja adicionar um combo de pipoca ao valor do ingresso?
//         \n1 - Comprar combo
//         \n2 - Não`));
//         if(popcorn === 1){ 
//             alert(`Valor a ser pago: R$${valorFinal + combo}`);
//         } else {
//             alert(`Valor a ser pago: R$${valorFinal}`);
//         }
// }

/*
    Exercício 6
*/


/*
    Exercício 7
*/

// let salario = Number(prompt(`Informe o salário bruto:`))
// let valorHora = salario/160;
// let horaMes = Number(prompt(`Digite o total de horas trabalhadas no mês:`));

// if (horaMes > 160){
//     let horaExtra = horaMes - 160;
//     let salarioExtra = salario + horaExtra * (valorHora *1.5);
//     alert(`Salário bruto + hora extra: ${salarioExtra}`);
// } else {
//     alert(`Salário bruto: ${salario}`);
// }

/*
    Exercício 8
*/

// let num1 = Number(prompt(`Digite o primeiro número:`));
// let num2 = Number(prompt(`Digite o segundo número:`));
// let ope = Number(prompt(`Qual operação você deseja realizar com ${num1} e ${num2}? \n1 - SOMA \n2 - SUBTRAÇÃO \n3 - DIVISÃO \n4 - MULTIPLICAÇÃO`));
// let resultado = 0;

// switch (ope) {
//     case 1:
//     resultado = num1 + num2;
//     alert(resultado);
//     break;

//     case 2:
//     resultado = num1 - num2;
//     alert(resultado);
//     break;

//     case 3:
//     resultado = num1 / num2;
//     alert(resultado);
//     break;

//     case 4:
//     resultado = num1 * num2;
//     alert(resultado);
//     break;
    
//     default:
//     alert(`Operação não reconhecida`);
// }
