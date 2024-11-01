module.exports = {
    dashboard: (req, res) => {
        res.render('dashboard', {user: req.session.currentUser}); // renderiza a pg dashboard e envia o obj com dados do usuário.
    }
}