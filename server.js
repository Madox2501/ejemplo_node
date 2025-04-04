
require("dotenv").config();

const express = require('express');

const myServer = express();

// este middleware se ubica aquí para que la api entienda que la info de entrada es .json
myServer.use(express.json());

const routes = require('./api.routes');
myServer.use('/api/v1', routes);

//cargar archivo de base de datos
const sequelize = require('./src/models/dbconnection');

//sincroniza los modelos de la base de datos
require('./src/models/sync_tables');

myServer.get('/',(req, res) => {
res.send('ya estamos usando express y nodemon');
});

myServer.listen(process.env.PORT, async () =>{
    console.log(process.env.BIENVENIDA, process.env.PORT);

    try {
        //conectarse a la base de datos
        await sequelize.authenticate();
        console.log("conección establecida con exito a la base de datos");

        await sequelize.sync({alter: true});
        console.log('tablas sincronizadas');

    } catch (error) {
        console.error("error conectando a la base de datos", error);        
    }
});
