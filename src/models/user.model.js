const {Model, DataTypes} = require("sequelize");
const sequelize = require('./dbconnection');


class User extends Model {}
User.init({

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: true,
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},
{
    sequelize,
    modelName: "user",
    tableName: "users",
    timestamps: true,
},
);

module.exports = User;