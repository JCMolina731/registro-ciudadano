const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Citizens = sequelize.define(
    "citizen",
    {
        dni:{
            type:DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        firstlastname:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        secondlastname:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },
    {
        timestamps: true,
        paranoid: true,
    }
);


Citizens.find = Citizens.findAll;
Citizens.findById = Citizens.findByPk;



module.exports = Citizens