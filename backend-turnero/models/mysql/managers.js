const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Offices = require("./offices");

const Managers = sequelize.define(
    "managers",
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
        },
        idoffice:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    },
    {
        timestamps: true,
        paranoid: true,
    }
);
//asociacion
Managers.belongsTo(Offices,{
    foreignKey: "idoffice",
    as: "office",
});

//buscar todas las oficinas con los gerentes registrados
Managers.findAllData = function () {
    
    return this.findAll({
        include: 
        {model: Offices,
            as: "office",
        }
    });
}

//buscar la oficina por usuario registrado
Managers.findOneData = function (id) {
    return this.findOne({
        where: {id},
        include: {
            model:Offices,
            as: "office",
        }
    });
}

module.exports = Managers