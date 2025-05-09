const express = require("express");
const router = express.Router()
const { getCitizens, getCitizensById } = require('../controllers/citizens')

router.get("/",getCitizens);
router.get("/:id",getCitizensById);


module.exports = router