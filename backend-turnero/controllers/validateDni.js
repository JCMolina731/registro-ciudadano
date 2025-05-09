const { citizensModel} = require('../models')
const axios = require('axios');
const { handleHttpError } = require('../utils/handleError')

const validateDni = async (req,res) => {
    try {
        const { dni } = req.body;

        const { data } = await axios.get(`http://localhost:8080/api/reniec/dni/${dni}`);
        if (!data || !data.numeroDocumento) {
            return handleHttpError(res,"DNI_NO_ENCONTRADO");
        }

        const citizen = await citizensModel.create(
            {
                dni: data.numeroDocumento,
                name: data.nombres,
                firstlastname: data.apellidoPaterno,
                secondlastname: data.apellidoMaterno

            }
        );
        res.send({from:'api',data:citizen});
        
    } catch (e) {
        handleHttpError(res,"ERROR_VALIDAR_DNI")
    }
}

module.exports = { validateDni}


