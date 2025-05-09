const express = require("express");
const router = express.Router();
const {getOffices, createOffice, getOfficebyId, updateOffice} = require("../controllers/offices");

router.get("/",getOffices);
router.get("/:id",getOfficebyId);
router.post("/",createOffice);
router.put("/:id",updateOffice)
module.exports = router