let User = require('../models/User').User;
let crearToken = require('../servicios/crearToken');

module.exports = {
  Index(req, res, next){
    res.render('index', {nombre: "Jose"});
  },
  Registrar(req, res, next){
    // registrar

    let user = new User({
      nombre:req.body.nombre,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      password_confirm: req.body.password_confirm
    });

    user.save().then(()=>{
      return res.status(200).send({ mensaje: "Hemos guardado al usuario", token: crearToken( user )});
    },(err)=>{
      return res.status(500).send({mensaje: "No pudimos guardar al usuario", err: String(err)});
    });

  },
  Login(req, res, next){
    // Login
      User.find({username: req.body.username, password: req.body.password},'_id nombre email', function(err, doc){
      if(err) res.status(res.status || 500).json({mensaje: "Tuvimos un error inesperado"});
      if(doc.length==0){
        res.status(404);
        res.json({mensaje: "No encontramos coincidencias"});
      }
      else {
        return res.status(200).send(
          {
            mensaje: "Te has logeado correctamente",
            token: crearToken( doc )
          });
      }
    });
  },

  Validar(req, res, next ){
    return res.send({auth: true });
  }
}
