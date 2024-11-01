const express = require('express');
const path = require('node:path');
const router = require('./routes/router');
const session = require('express-session');

const app = express();

// configurando ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
// middleware que analisa o body
app.use(express.urlencoded({ extended: true }));

// configurando o session
app.use(session({
    secret: 'palavra-chave',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})