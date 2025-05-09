const { citizensModel } = require('../models')
const { handleHttpError} = require('../utils/handleError')

const CheckCitizenInDB = async (req,res,next) => {
    try {
        const { dni } = req.body;
        const citizen = await citizensModel.findOne({where: {dni}})
        if (citizen) {
            return res.send({from:'db',data:citizen})
        }

        next();
        
    } catch (e) {
        handleHttpError(res,"ERROR_EN_VERIFICAR_CIUDADANO")
    }
}

module.exports = CheckCitizenInDB