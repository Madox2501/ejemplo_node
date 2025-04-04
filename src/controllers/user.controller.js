const User =  require('../models/user.model');

const {op} = require("sequelize");

const index  = async (req, res) =>{

/**funcion index para testeo, devuelve estado de usuario 
/*     try {
        res.status(200).json({message:"ingreso al controlador de index"});   
    } catch (error) {   
        res.status(404).json({message:"A monkey shut down the server"});
    }*/
 
//metodo index
try {
    const users = await User.findAll();
    if (!users || users.length == 0)
    {
        return res.status(404).json({
            status: false,
            msg:"no existen usuarios en la base de datos",
            data: null,
        });
    }
    return res.status(200).json({
        status: true,
        msg: "listado de usuarios obtenido con exito",
        data: users,
    });

} catch (error) {
    return res.status(500).json({
        status: false,
        msg:`error al obtener listado de usuarios: ${error.message}`,
        data: null,
    });
}
};

/**función create, crea un nuevo usuario */
const create = async (req, res) =>{
 try {

    //const user = await User.create(req.body);
    const [user, created] = await User.findOrCreate({
        where: {email : req.body.email},
        defaults: req.body,
    });

    if (!created)
    {
        return res.status(409).json({
            status: false,
            msg: "email ya existe en otro usuario",
            data: null,
        }); 
    }

    return res.status(201).json({
        status: true,
        msg: "usuario creado con exito",
        data: user,
    });

 } catch (error) {
    
    return res.status(500).json({
        status: false,
        msg:`error al crear el usuario: ${error.message}`,
        data: null,
    });
 }
};

/**función show, */
const show = (req, res) =>{
    try {
        res.status(200).json({message:"ingreso al controlador de show"});   
    } catch (error) {   
        res.status(404).json({message:"A monkey shut down the server"});
    }
};


/**función update */
const update = (req, res) =>{
    try {
        const id = req.params.id;
        res.status(200).json({message:`ingreso al controlador de update con el id: ${id}`});   
    } catch (error) {   
        res.status(404).json({message:"A monkey shut down the server"});
    }
};

/**función destroy, función de borrado */
const destroy = (req, res) =>{
    try {
        res.status(200).json({message:"ingreso al controlador de destroy"});   
    } catch (error) {   
        res.status(404).json({message:"A monkey shut down the server"});
    }
};



/**exportar el modulo para uso externo */
module.exports= {
    index,
    create,
    show,
    update,
    destroy,
};