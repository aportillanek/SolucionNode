let fs = require('fs');
let path = require('path')
// devuelve un arreglo con los nombres de cada uno de los arcihvos de la carpeta controllers
let archivos = fs.readdirSync(__dirname);

archivos.forEach(function(archivo){
  let fileName = path.basename(archivo, '.js');
  if(fileName !== 'index'){
    exports[fileName] = require(`./${fileName}`);
  }
});
