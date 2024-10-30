const express = require('express');
const multer = require('multer'); // importa a biblioteca multer

const app = express();
const upload = multer({ dest: './upload' }); // instancia e cria um destino para armazenar o arquivo

// criando meu próprio middleware
function logRequestTime(req, res, next) {
    const currentTime = new Date();
    console.log(`Pedido recebido em: ${currentTime.toLocaleString()}`);

    next();
}

app.use(express.static('public')) // middleware do express para usar a pasta de arquivos estáticos
app.use(logRequestTime); // meu middlewware para registra o horário da requisição em todas as rotas

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello World!" });
})

// rota post onde esta usando o middleware de upload de arquivos
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.json({ message: "Arquivo salvo com sucesso." });
})

const PORT = process.env.PORT || 3000.

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})