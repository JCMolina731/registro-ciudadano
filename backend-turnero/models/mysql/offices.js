const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");



const Offices = sequelize.define(
    "offices",
    {
        name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        acronym:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        location:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    },
    {
        timestamps: true,
        paranoid: true,
    }
);



Offices.find = Offices.findAll;
Offices.findById = Offices.findByPk;

module.exports = Offices;