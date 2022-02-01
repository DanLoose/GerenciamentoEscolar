const Sequelize = require("sequelize");
const connection = new Sequelize("scholar", "root", "MAscarenhas..123", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
});

module.exports = connection;