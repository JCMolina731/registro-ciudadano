require("./mysql/associations");
const models = {
    usersModel: require('./mysql/users'),
    managersModel: require('./mysql/managers'),
    officesModel: require('./mysql/offices'),
    ticketsModel: require('./mysql/tickets'),
    ticketsSequenceModel: require('./mysql/ticket_sequence'),
    citizensModel: require('./mysql/citizens')
}

module.exports = models