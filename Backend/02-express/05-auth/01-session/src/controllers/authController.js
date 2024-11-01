const users = [
    { username: "Eduardo", password: '1234' },
    { username: "Ester", password: '4321' }
];

module.exports = {
    // GET /
    index: (req, res) => {
        res.render('index');
    },

    // POST /auth/register
    register: (req, res) => {
        const { username, password } = req.body;

        const userAlredyExist = users.find(user => user.username === username);
        if (userAlredyExist) return res.status(400).redirect('/');

        const newUser = { username, password };
        users.push(newUser);


        req.session.authenticated = true; // indica que o usuário esta autenticado
        req.session.currentUser = newUser; // armazena um obj com dados do usuário

        return res.status(201).redirect('/dashboard');
    },

    // POST /auth/login
    login: (req, res) => {
        const { username, password } = req.body;

        const user = users.find(user => user.username === username)

        if (!user) return res.status(404).redirect('/');

        if (password !== user.password) return res.status(400).redirect('/');

        req.session.authenticated = true; // indica que o usuário esta autenticado
        req.session.currentUser = user; // armazena um obj com dados do usuário

        return res.status(200).redirect('/dashboard');
    },

    // GET auth/logout
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
};