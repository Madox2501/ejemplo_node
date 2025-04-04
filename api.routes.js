//importa el modulo 'router' desde el paquete 'express'
// 'router' permite crear rutas modulares y manejables dentro de una aplicación
const express = require('express');

//crea una instancia nueva del enrutador
//esta se puede usar para definir rutas especificas y luego integrarlas en la aplicación principal
const router = express.Router();

//rutas para el controlador de usuarios
const userRouter = require("./src/routes/user.routes");
router.use("/users", userRouter);

module.exports = router;