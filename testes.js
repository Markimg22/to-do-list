/** Um pouco sobre a syntaxe do JS */

/**
 * Tipos:
 * 
 * number, string, array, object
 */

// int, float, double => number

// const numero = 20
// console.log(typeof numero);

// const frase = "Olá";
// console.log(typeof frase);

// const listaFrutas = ['maça', 'pera', 'melancia'];
// console.log(typeof listaFrutas);

// const pessoa = {
//   nome: 'Pedro',
//   ultimoNome: 'Antonio',
//   idade: 20,
//   cidade: 'Cuiabá',
// };

/**
 * Condições:
 * 
 * normal, ternária
 */

// const idade = 17;

// if (idade < 18) {
//   console.log('é menor de idade');
// } else {
//   console.log('é maior de idade');
// }

// console.log(idade < 18 ? 'é menor de idade' : 'é maior de idade');

/**
 * Funções:
 * 
 * normal, arrow function
 */

// function somar(x, y) {
//   return x + y;
// }

// const somar = (x, y) => x + y

// console.log(somar(10, 5));

// const nome = 'Marcos'; // o valor ñ pode ser alterado

// let nome = 'Marcos'; // pode ser alterado, escopo local

// var nome = 'Marcos'; // pode ser alterado, escopo global


// function mostrar() {
//   var frase = 'olá'
//   console.log('dentro da função', frase);
// }

// mostrar();
// console.log('fora da função', frase);



// const tarefasDeCasa = ['Estudar', 'lavar casa'];
// const tarefasDoTrabalho = ['trabalhar']

// const tarefas = [...tarefasDeCasa, ...tarefasDoTrabalho];

// console.log(tarefas);

const frutas = ['maça', 'abacaxi', 'melancia'];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

frutas.map(fruta => console.log(fruta));
console.log(frutas.filter(fruta => fruta[0] === 'm'));
