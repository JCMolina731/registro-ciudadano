const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");


const Tickets = sequelize.define(
    "tickets",
    {
        code: 
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status:
        {
            type: DataTypes.ENUM("pendiente","proceso","atendido", "cancelado"),
            allowNull: false,
        },
        idoffice:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        idcitizens:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    },
    {
        timestamps: true,
        paranoid: true,
    }
);


module.exports = Tickets