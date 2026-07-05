var nome = window.prompt("Digite seu nome:"); // Solicita ao usuário que digite seu nome e armazena na variável "nome"
//window.alert("Olá, " + nome + "!"); // Exibe uma mensagem de alerta com o nome do usuário

// number transforma o valor digitado em número, caso contrário, o valor será tratado como string
// number.parseInt() transforma o valor digitado em número inteiro, caso contrário, o valor será tratado como string
// number.parseFloat() transforma o valor digitado em número decimal, caso contrário, o valor será tratado como string
// (number) + (number) -> (+) adicão
// (string) + (string) -> (+) concatenação
// s.tofixed(2) -> transforma o valor em string com duas casas decimais, caso contrário, o valor será tratado como número
// s.tolocalestring('pt-BR', {style: 'currency', currency: 'BRL'}) -> transforma o valor em string com duas casas decimais e formata como moeda brasileira, caso contrário, o valor será tratado como número

//var n1 = Number(window.prompt("Digite o primeiro número:")); // Solicita ao usuário que digite o primeiro número e armazena na variável "n1"
//var n2 = Number(window.prompt("Digite o segundo número:")); // Solicita ao usuário que digite o segundo número e armazena na variável "n2"
//var resul= n1 + n2; // Soma os valores de "n1" e "n2" e armazena na variável "resul"
//window.alert("O resultado da soma é: " + resul); // Exibe uma mensagem de alerta com o resultado da soma

//string() transforma o valor em string, caso contrário, o valor será tratado como número
// n.toString() transforma o valor em string, caso contrário, o valor será tratado como número

// var s = 'javascript' ->  as (''), ("") aspas simples ou duplas são usadas para definir uma string
// 'estou aprendendo javascript s' -> não faz interpolação de variáveis, ou seja, não é possível inserir o valor de uma variável dentro da string
// 'estou aprendendo ' + s -> (+) faz a concatenação de strings, ou seja, é possível inserir o valor de uma variável dentro da string
// `estou aprendendo ${s}` -> (``) usa template strings, ou seja, é possível inserir o valor de uma variável dentro da string usando a sintaxe ${variavel}

// s.length -> retorna o tamanho da string, ou seja, a quantidade de caracteres que ela possui
// s.toUpperCase() -> transforma todos os caracteres da string em maiúsculo
// s.toLowerCase() -> transforma todos os caracteres da string em minúsculo
// document -> é um objeto que representa o documento HTML, ou seja, a página web que está sendo exibida no navegador
// write() -> é um método do objeto document que permite escrever conteúdo na página web, ou seja, exibir informações para o usuário


document.write("<h1>Olá, " + nome + "!</h1>"); // Exibe uma mensagem de boas-vindas com o nome do usuário na página
document.write("<p>O seu nome tem " + nome.length + " letras.</p>"); // Exibe a quantidade de letras do nome do usuário na página
document.write("<p>O seu nome em maiúsculo é: " + nome.toUpperCase() + ".</p>");
document.write("<p>O seu nome em minúsculo é: " + nome.toLowerCase() + ".</p>");