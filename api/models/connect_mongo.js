let mongoose = require('mongoose');
mongoose.connect(process.env.URL_MONGO_CONNECT);
let Schema = mongoose.Schema;

module.exports = {
  Schema: Schema,
  mongoose: mongoose
};
