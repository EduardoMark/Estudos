import { createFile, showFile, updateFile, deleteFile } from './functions.js';

createFile("log.txt", "Criando meu arquivo com módulo fs");
showFile("./log.txt");
updateFile("log.txt", "Conteúdo atualizado");
showFile("./log.txt");
deleteFile("log.txt")