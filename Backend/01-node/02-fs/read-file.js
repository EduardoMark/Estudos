const fs = require('node:fs');

fs.readFile('./log.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("erro ao tentar ler o arquivo.");
        return;
    }

    console.log(data);
})