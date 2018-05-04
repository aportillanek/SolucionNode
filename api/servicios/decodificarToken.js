var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config/config');

function decodificarToken( token ){
    const decodificado = new Promise((resolver, rechazar)=>{
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN);

            if(payload.exp <= moment().unix()){
                rechazar({
                    status: 500,
                    mensaje: "El token ha expirado"
                });
            }
            resolver(payload.sub);
        }catch(err){
            rechazar({
                status: 500,
                mensaje: "Token inválido"
            });
        }
    });
    return decodificado;
}

module.exports = decodificarToken;