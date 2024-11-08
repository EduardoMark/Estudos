let temChave = true;
let estaCansado = false;
let temEscudo = true;
let temArma = false;

// Exemplo básico de if e else
if (temChave) {
  console.log("Você encontrou o tesouro!"); // Isso será executado se "temChave" for true
} else {
  console.log("Continue procurando..."); // Isso será executado se "temChave" for false
}

// Usando else if para adicionar mais opções
if (temChave) {
  console.log("Você encontrou o tesouro!");
} else if (estaCansado) {
  console.log("Hora de descansar... "); // Isso será executado se "temChave" for false e "estaCansado" for true
} else {
  console.log("Continue procurando..."); // Isso será executado se todas as condições anteriores forem false
}

// switch case
let pontuacao = 3;

switch (pontuacao) {
  case 1:
    console.log("Parabéns! Você completou o primeiro nível!");
    break;
  case 2:
    console.log("Incrível! Você avançou para o segundo nível!");
    break;
  case 3:
    console.log("Uau! Você está no nível três!");
    break;
  case 4:
    console.log("Impressionante! Você chegou ao nível quatro! ");
    break;
  default:
    console.log("Jogue e ganhe mais pontos!"); // Executado se "pontuacao" não for 1, 2, 3 ou 4
    break;
}

// if ternário
let idade = 20;
let mensagem = idade >= 18 ? "Bem-vindo ao clube!" : "Desculpe, você não pode entrar.";

console.log(mensagem);
