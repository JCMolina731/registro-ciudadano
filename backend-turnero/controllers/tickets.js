const { ticketsModel, citizensModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const { generateTicketCode } = require('../services/ticketGenerator')


const getTickets = async (req,res) => {
    try {
        const tickets = req.getTickets
        const data = await ticketsModel.findAll({})
        res.send({tickets,data})
    } catch (e) {
        handleHttpError(res,"ERROR_OBTENER_TICKETS")
    }
}

const getTicketById = async (req,res) => {
    try {
        const reqData = req.params
        const { id } = reqData
        const data = await ticketsModel.findByPk(id)
        res.send({data})
        
    } catch (e) {
        handleHttpError(res,"ERROR_OBTENER_DETALLE_TICKET")
    }
}

const createTicket = async (req,res) => {
    try {
        const { dni, idoffice } = req.body;

        const citizen = await citizensModel.findOne({where:{dni}});
        if(!citizen){
            return handleHttpError(res,"CIUDADANO_NO_ENCONTRADO")
        }

        const code = await generateTicketCode(idoffice);

        const newTicket = await ticketsModel.create(
            {
                code,
                status: "pendiente",
                idoffice,
                idcitizens: citizen.id
            }
        )

        return res.send({
            ticket: {
              code: newTicket.code,
              createdAt: newTicket.createdAt
            },
            citizen: {
              name: citizen.name,
              firstlastname: citizen.firstlastname
            }
          });
        
    } catch (e) {
        console.log(e)
        handleHttpError(res,"ERROR_GENERAR TICKET")
    }
    
}

module.exports = { getTickets, getTicketById, createTicket}