const express = require("express");
const router = express.Router()
const { getManagers, createManager, getManagerById, updateManager } = require("../controllers/managers")

router.get("/",getManagers);
router.get("/:id",getManagerById);
router.post("/",createManager);
router.put("/:id",updateManager);
module.exports = router