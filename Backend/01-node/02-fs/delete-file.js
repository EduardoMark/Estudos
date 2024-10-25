const fs = require('node:fs');

fs.unlink('./arquivo.txt', err => {
    if (err) {
        console.error("não foi possivel deletar o arquivo");
        return;
    }
})