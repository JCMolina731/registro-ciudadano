const { ticketsSequenceModel, officesModel } = require("../models");
const { Op } = require("sequelize");

const getToday = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // YYYY-MM-DD
};

const generateTicketCode = async (idoffice) => {
  const office = await officesModel.findByPk(idoffice);
  if (!office) throw new Error("Oficina no encontrada");

  const acronym = office.acronym;
  const today = getToday();

  // Buscar secuencia existente
  let sequence = await ticketsSequenceModel.findOne({
    where: {
      idoffice: idoffice,
    },
  });

  if (!sequence) {
    // No existe aún → crear nueva con currentNumber: 1
    sequence = await ticketsSequenceModel.create({
      idoffice,
      currentNumber: 1,
      lastreset: today,
    });
  } else {
    // Validar si es un nuevo día para reiniciar
    if (sequence.lastreset !== today) {
      sequence.currentNumber = 1;
      sequence.lastreset = today;
    } else {
      sequence.currentNumber += 1;
    }
    await sequence.save();
  }

  const paddedNumber = String(sequence.currentNumber).padStart(3, "0");
  const code = `${acronym}-${paddedNumber}`;

  return code;
};

module.exports = {
  generateTicketCode,
};