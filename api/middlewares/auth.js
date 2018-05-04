//const jwt = require('jwt-simple');
//const moment = require('moment');
//const config = require('../config/config');
const decodificarToken = require('../servicios/decodificarToken');

function isAuth( req, res, next){
    if(!req.headers.authorization){
        return res.status(500).send({mensaje: "No estás autorizado"});
    }
    
    const token = req.headers.authorization.split(" ")[1];
    decodificarToken( token )
                .then(respuesta => {
                    req.user = respuesta;
                    next();
                })
                .catch( respuesta => {
                    res.status(respuesta.status).send({mensaje: respuesta.mensaje});
                })
}

module.exports.isAuth = isAuth;