//importa el modulo 'router' desde el paquete 'express'
// 'router' permite crear rutas modulares y manejables dentro de una aplicación
const express = require('express');

//crea una instancia nueva del enrutador
//esta se puede usar para definir rutas especificas y luego integrarlas en la aplicación principal
const router = express.Router();

//importa los metodos del controlador
const userController = require('../controllers/user.controller');
// const {index } = require('../controllers/user.controller'); 

/**crear rutas */

//ruta para el modula index
router.get('/', userController.index);
//router.get('/', index);   

/**ruta para el metodo create */
router.post('/', userController.create);

/**ruta para el metodo show */
router.get('/show', userController.show);

/**ruta para el metodo update */
router.put('/:id', userController.update);

/** ruta de metodo destroy */
router.delete('/:id', userController.destroy);


//exportar el router para ser usado en otras partes de la api
module.exports = router;
