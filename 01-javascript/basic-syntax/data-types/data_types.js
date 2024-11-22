/*
    Tipos de dados: É a forma de representar os dados em JavaScript. Eles são classificados em dois tipos principais: primitivos e objetos.

    Primitivos:
        string => É o tipo de dado textual, representado por aspas simples (' '), aspas duplas("") ou crases(``).
                  Exemplo:
                  let texto = "Olá, mundo!";
                  let nome = 'João';
                  let mensagem = `Bem-vindo, ${nome}!`;

        number => Representa números inteiros ou decimais.
                  Exemplo:
                  let idade = 30;
                  let preco = 199.99;

        boolean => Tipo de dado lógico, pode ser `true` (verdadeiro) ou `false` (falso).
                   Exemplo:
                   let estaLogado = true;
                   let possuiPermissao = false;

        null => Indica que algo é intencionalmente vazio ou sem valor.
                Exemplo:
                let resposta = null;

        undefined => Representa algo que não tem valor atribuído ou foi declarado mas não inicializado.
                     Exemplo:
                     let valor; // undefined

        bigint => Representa números inteiros muito grandes, além do limite de `number`. Deve ser seguido de um `n`.
                  Exemplo:
                  let numeroGrande = 123456789012345678901234567890n
*/

// Tipo string
let saudacao = "Olá, mundo!"; // Aspas duplas
let nome = 'João'; // Aspas simples
let mensagem = `Bem-vindo, ${nome}!`; // Template string com crases
console.log(saudacao, nome, mensagem);

// Tipo number
let idade = 25; // Número inteiro
let preco = 199.99; // Número decimal
console.log(idade, preco);

// Tipo boolean
let estaLogado = true; // Verdadeiro
let possuiPermissao = false; // Falso
console.log(estaLogado, possuiPermissao);

// Tipo null
let resposta = null; // Intencionalmente vazio
console.log(resposta);

// Tipo undefined
let valor; // Variável declarada mas não inicializada
console.log(valor);

// Tipo bigint
let numeroGrande = 123456789012345678901234567890n; // Número muito grande
console.log(numeroGrande);