const { matchedData, body } = require('express-validator')
const {officesModel} = require('../models')
const { handleHttpError } = require('../utils/handleError')

const getOffices = async (req,res) => {
    try {
        const office = req.office
        const data = await officesModel.findAll({})
        res.send({office,data})
        
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_OFFICES')
    }
};

const getOfficebyId = async(req,res) =>{
    try {
        const reqData = req.params;
        const { id } = reqData;
        const data = await officesModel.findById(id);
        res.send({data});       
    } catch (e) {
        console.log(e)
        handleHttpError(res,'ERROR_GET_DETALLE OFICINA')
    }
};

const createOffice = async (req,res) => {
    try {
        const body = req.body;
        const data = await officesModel.create(body);
        res.send({data});
    } catch (e) {
        handleHttpError(res,'ERROR_CREATE_OFFICE');
    }
}

const updateOffice = async (req,res) =>{
    try {
        const {id} = req.params;
        const updateData = req.body;
        const office = await officesModel.findByPk(id);
        const data = await office.update(updateData);
        res.send({data});
    } catch (e) {
        handleHttpError(res,'ERROR_UPDATE_OFFICE')
    }
}

module.exports = {getOffices, createOffice,getOfficebyId, updateOffice}