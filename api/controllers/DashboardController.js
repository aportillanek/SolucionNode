module.exports = {
  Index(req, res, next){
    return res.send({mensaje: "Si ves esto, es porque estás autenticado"});
  }
}
