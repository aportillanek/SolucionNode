var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');
let controllers = require('../controllers');


// router.get('/', controllers.AccesoController.Index);
router.get('/isauth', auth.isAuth, controllers.AccesoController.Validar);
router.post('/registrar', controllers.AccesoController.Registrar);
router.post('/login', controllers.AccesoController.Login);
router.get('/dashboard', auth.isAuth, controllers.DashboardController.Index);

module.exports = router;