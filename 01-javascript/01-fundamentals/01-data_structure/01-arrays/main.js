/*
    Coleção de elementos que podem ser identificados por índice

    Sintaxe: [];
    Índice: Começa de 0.
*/

const characters = ["Hulk", "Iron Man", "Captain America", "Batman"];

// => Adicionar elementos
// push => adiciona ao final
characters.push("Spongebob");

// unshif => adiciona ao começo
characters.unshift("Patrick");

// => Removendo elementos
// pop => remove do final
characters.pop();

// shift => remove do inicio
characters.shift();

// => Buscar elemento
// []
characters[0];

// includes => verifica se algo existe no array
const include = characters.includes("Iron Man");

// indexOf => busca o indice de algo no array
const index = characters.indexOf("Capitain America");

// => Cortar e Concatenar
// slice => retorna um novo array com os elementos extraídos do original
const DC = characters.slice(-1);

// concat => concatena itens em um array
const concatenado = characters.concat(["Snow White", "Chandler"], ["Marvel", "DC", "Disney"]);

// => Substituir elementos
// splice => remove e substitui elementos
const x = characters.splice(0, 1, "Harbie");