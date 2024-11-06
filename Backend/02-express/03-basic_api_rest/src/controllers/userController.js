const users = require("../models/users");

const userController = {

    index(req, res) {
        return res.json(users);
    },

    show(req, res) {
        const { id } = req.params;

        const user = users.find(user => user.id === +id);

        if (!user) return res.status(404).json({ message: "Nenhum usuário encontrado" });

        return res.status(200).json(user);
    },

    save(req, res) {
        const { name, age } = req.body;

        if (!name || !age) return res.status(400).json({ message: "Todos os campos devem esta preenchidos." });

        const newUser = { id: Math.floor(Math.random() * 9999), name, age };
        users.push(newUser);

        return res.status(201).json({ message: "Usuário cadastrado com sucesso." });
    },

    update(req, res) {
        const { id } = req.params
        const { name, age } = req.body

        const userIndex = users.findIndex(user => user.id === +id)

        if (userIndex === -1) {
            return res.status(404).json({ message: "Usuário não encontrado!" })
        }

        users[userIndex].name = name
        users[userIndex].age = age

        res.status(200).json(users[userIndex])
    },

    delete(req, res) {
        const { id } = req.params

        const userIndex = users.findIndex(game => game.id === +id)

        if (userIndex === -1) {
            return res.status(404).json({ message: "Usuário não encontrado!" })
        }

        users.splice(userIndex, 1)

        res.status(204).end()
    }

};

module.exports = userController