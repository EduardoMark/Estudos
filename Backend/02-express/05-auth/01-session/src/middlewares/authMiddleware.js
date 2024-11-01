const authMiddleware = (req, res, next) => {
    // verifica se o usuário está autenticado
    if (req.session.authenticated) next();
    else res.redirect('/');
}

module.exports = authMiddleware;