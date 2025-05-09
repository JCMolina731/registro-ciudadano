const Citizens = require("./citizens");
const Tickets = require("./tickets");
const Offices = require("./offices");

// Relaciones entre modelos
Citizens.hasMany(Tickets, {
  foreignKey: "idcitizens",
  as: "tickets",
});

Tickets.belongsTo(Citizens, {
  foreignKey: "idcitizens",
  as: "citizen",
});

Tickets.belongsTo(Offices, {
  foreignKey: "idoffice",
  as: "office",
});

Offices.hasMany(Tickets, {
  foreignKey: "idoffice",
  as: "tickets",
});

module.exports = {
  Citizens,
  Tickets,
  Offices
};