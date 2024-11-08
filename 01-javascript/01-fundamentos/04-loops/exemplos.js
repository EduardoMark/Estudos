// 1. Loop FOR
console.log("Exemplo de Loop FOR:");
for (let i = 1; i <= 5; i++) {
  console.log("Contagem: ", i);
}

// 2. Loop WHILE
console.log("\nExemplo de Loop WHILE:");
let contador = 5;
while (contador >= 1) {
  console.log("Contagem: ", contador);
  contador--;
}

// 3. Loop DO...WHILE
console.log("\nExemplo de Loop DO...WHILE:");
let num = 2;
do {
  console.log("Contagem: ", num);
  num++;
} while (num <= 1);

// 4. Loop FOR...OF
console.log("\nExemplo de Loop FOR...OF:");
let frutas = ["Maçã", "Banana", "Laranja"];
for (let fruta of frutas) {
  console.log("Fruta: ", fruta);
}

// 5. Loop FOR...IN
// O loop `for...in` é utilizado para iterar sobre as propriedades de um objeto.
// Ele permite acessar cada chave (ou índice) de um objeto ou array.
console.log("\nExemplo de Loop FOR...IN:");
let pessoa = { nome: "John Doe", idade: 25, cidade: "New York" };
for (let propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}