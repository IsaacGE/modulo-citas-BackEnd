const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
    try {
        let tokenEncriptado = req.header('aa_token');
        let tokenDesencriptado = jwt.verify(tokenEncriptado, process.env.SEED);
        req.user = tokenDesencriptado.user;
        // TODO: agregar ip
        next();
    } catch (err) {
        return res.status(401).json({
            ok: false,
            status: 401,
            msg: 'Sesión expirada, porfavor inicia sesión nuevamente',
            cont: { err: err.message }
        });
    }
};

module.exports = {
    verificaToken
}