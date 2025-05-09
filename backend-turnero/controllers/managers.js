const { managersModel } = require("../models")
const { handleHttpError} = require("../utils/handleError")

const getManagers = async (req,res) => {
    try {
        const manager = req.getManagers
        const data = await managersModel.findAll({})
        res.send({manager,data}) 
    } catch (e) {
        handleHttpError(res,"ERROR_OBTENER_FUNCIONARIOS")
    }
}

const getManagerById = async (req,res) => {
    try {
        const reqData = req.params;
        const { id } = reqData;
        const data = await managersModel.findByPk(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res,"ERROR_OBTENER_DETALLE_FUNCIONARIO")
    }
}

const createManager = async (req,res) => {
    try {
        const body = req.body
        const data = await managersModel.create(body)
        res.send({data});
        
    } catch (e) {
        handleHttpError(res,"ERROR_CREAR_FUNCIONARIO")
    }
    
}

const updateManager = async (req,res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const manager = await managersModel.findByPk(id);
        const data = await manager.update(updateData);
        res.send({data});
    } catch (e) {
        handleHttpError(res,"ERROR_ACTUALIZAR_FUNCIONARIO")
    }
}

module.exports = {getManagers, createManager, getManagerById, updateManager}