const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const TicketSequence = sequelize.define(
    "ticket_sequence",
    {
        idoffice:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        currentNumber:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lastreset: {
            type: DataTypes.DATEONLY,
            allowNull: false
          }
    },
    {
        tableName: "ticket_sequence",
        timestamps: true,
        paranoid: true,
    }
);  

module.exports = TicketSequence