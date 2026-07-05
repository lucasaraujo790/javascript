/*
Intentificadores são nomes que damos para variáveis, funções, classes, etc. Eles são usados para identificar e acessar esses elementos no código.

- podem conter letras, números, $ e _ (não podem começar com número)
- não podem conter espaços
- não podem ser palavras reservadas da linguagem
- devem ser descritivos e significativos, para facilitar a leitura e manutenção do código
- devem seguir convenções de nomenclatura, como camelCase para variáveis e funções, PascalCase para classes, etc.
- devem ser consistentes em todo o código, para evitar confusão e erros
- é possível usar acentos e caracteres especiais, mas não é recomendado, pois pode causar problemas de compatibilidade e legibilidade
- maiúsculas e minúsculas são diferentes, ou seja, nome e Nome são identificadores diferentes
- tente escolher nomes curtos, mas significativos, para facilitar a escrita e leitura do código

*/

// var ( variável global, pode ser redeclarada e reatribuída, não é recomendada para uso em projetos modernos)
// let ( variável de escopo de bloco, pode ser reatribuída, mas não redeclarada no mesmo escopo)
// const ( variável de escopo de bloco, não pode ser reatribuída nem redeclarada, deve ser inicializada na declaração)

var nome = "lucas"; // variável global do tipo string, pode ser redeclarada e reatribuída, podem usar aspas simples, duplas ou crases, podem conter letras, números, espaços e caracteres especiais
var idade = 25; // variável global do tipo number, pode ser redeclarada e reatribuída, podem ser numeros inteiros, decimais, negativos e positivos

// typeof é um operador que retorna uma string indicando o tipo do operando. Ele pode ser usado para verificar o tipo de uma variável ou expressão.
// console.log é uma função que imprime no console do navegador ou do terminal o valor passado como argumento. Ele pode ser usado para depuração, teste e exibição de informações no código.

console.log(nome, typeof nome); // string
console.log(idade, typeof idade); // number
console.log(typeof []);
console.log(typeof {}); 
console.log(typeof null); 
console.log(typeof undefined); 
console.log(typeof function(){}); 
console.log(typeof NaN); 
console.log(typeof Infinity); 
console.log(typeof true, typeof false);

