import fs from "node:fs";

export function createFile(pathFile, content) {
    try {        
        fs.writeFileSync(pathFile, content, "utf-8")
        console.log("Arquivo criado com sucesso.");
    } catch (error) {
        console.error(`Error ao tentar criar o arquivo ${pathFile}: ${error.message}`);
    }
}

export function showFile(pathFile) {
    try {
        const data = fs.readFileSync(pathFile, "utf-8");
        console.log(data);
    } catch (error) {
        console.error(`Error ao tentar exibir o arquivo ${pathFile}: ${error.message}`);
    }
}

export function updateFile(pathFile, content) {
    try {
        fs.writeFileSync(pathFile, content, "utf-8")
        console.log('Arquivo atualizado com sucesso');
    } catch (error) {
        console.error(`Error ao tentar atualizar o arquivo ${pathFile}: ${error.message}`);
    }
}

export function deleteFile(pathFile) {
    try {        
        fs.unlinkSync(pathFile)
        console.log("Arquivo excluido com sucesso.");
    } catch (error) {
        console.error(`Error ao tentar excluir o arquivo ${pathFile}: ${error.message}`);
    }
}