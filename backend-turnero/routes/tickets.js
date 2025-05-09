const express = require("express");
const router = express.Router();
const { getTickets, getTicketById, createTicket } = require('../controllers/tickets')


router.get("/",getTickets);
router.get("/:id",getTicketById);
router.post("/",createTicket);


module.exports = router