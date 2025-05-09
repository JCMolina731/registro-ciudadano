const express = require("express");
const router = express.Router();
const { validateDni } = require('../controllers/validateDni')
const CheckCitizenInDB = require('../middleware/checkCitizenInDB')

router.post('/',CheckCitizenInDB ,validateDni);


module.exports = router