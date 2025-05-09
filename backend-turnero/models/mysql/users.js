const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
    "user",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        role:{
            type:DataTypes.ENUM("admin","ventanilla"),
            allowNull:false,
        }
    },
    {
        timestamps: true,
        paranoid: true,
    }
)