let con = require('./connect_mongo');

let user_json = {
  nombre: {
    type: String,
    required: true,
    maxlength: [
      30,
      "El nombre no debe exceder los 30 caracteres"
    ]
  },
  username: String,
  email: {
    type: String,
    match: [
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
      "El email no es válidio"
    ]
  },
  fechaRegistro: { type: Date, default: Date.now() },
  password: {
    type: String,
    minlength: [
      5,
      "El password no debe ser menor a 5 caracteres"
    ],
    validate: {
      validator(pass){
        return this.password_confirm === pass;
      },
      message: "Las contraseas no coinciden"
    }
  }
};

let user_schema = new con.Schema(user_json);

 user_schema.virtual('password_confirm').get(function(){
    return this._password_conf;
  }).set(function(p){
    this._password_conf = p;
  });

let User = con.mongoose.model('User', user_schema);

module.exports.User = User;
