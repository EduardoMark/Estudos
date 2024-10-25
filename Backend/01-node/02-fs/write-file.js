const fs = require('node:fs');

const content = "Criando arquivo";

fs.writeFile('./log.txt', content, "utf-8", err => {
    if (err) {
        console.error("Não foi possível criar/escrever o arquivo.");
        return;
    }
})

// fs.appendFile('mynewfile1.txt', '\ncontent!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });