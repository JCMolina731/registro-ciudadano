const {citizensModel} = require('../models') 
const { handleHttpError } = require('../utils/handleError')

const getCitizens = async (req,res) => {
    try {
        const citizens = req.getCitizens
        const data = await citizensModel.findAll({})
        res.send({citizens,data})
        
    } catch (e) {
        handleHttpError(res,"ERROR_OBTENER_CIUDADANOS")
    }
}

const getCitizensById = async (req,res) => {
    try {
        const reqData  = req.params;
        const { id } = reqData;
        const data = await citizensModel.findByPk(id);
        res.send({data})
        
    } catch (e) {
        handleHttpError(res, "ERROR_OBTENER_DETALLE CIUDADANO")
    }
    
}

module.exports = { getCitizens, getCitizensById}