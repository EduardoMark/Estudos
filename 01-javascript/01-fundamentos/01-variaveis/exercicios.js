// Cálculo de Área e Perímetro de um Retângulo
let altura = 10;
let base = 5;
const area = base * altura;
const perimetro = 2 * (base + altura);
console.log(`A área do retângulo é: ${area}`);
console.log(`O perímetro do retângulo é: ${perimetro}`);

// Conversão de Temperatura
let celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(`25°C é igual à ${fahrenheit}°F`);

// Média de Notas
let nota1 = 6.7;
let nota2 = 7.3;
let nota3 = 5.55;
const media = (nota1 + nota2+ nota3) / 3;
console.log(`A média é: ${media.toFixed(2)}`);

// Cálculo de Idade
const currentYear = 2024;
let birthYear = 2003;
const age = currentYear - birthYear;
console.log(`Em ${currentYear} você tem ${age} anos`);

//  Concatenando Strings
let firstName = "John";
let middleName = "Doe";
let lastName = "Silva";
console.log(`${firstName} ${middleName} ${lastName}`);

// Operações Matemáticas
let num1 = 17;
let num2 = 8;
console.log(`Soma: ${num1 + num2}
Subtração: ${num1 - num2}
Multiplicação: ${num1 * num2}
Divisão: ${num1 / num2}`);

// Calcule o Tempo em Minutos e Segundos
let totalSeconds = 179;
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60 
console.log(`${minutes} min ${seconds} s`);

// Interpolação de Strings
let name = "John";
let idade = 44;
const phrase = "Olá, " + name + "! Você tem " + idade + " anos.";
console.log(phrase);
