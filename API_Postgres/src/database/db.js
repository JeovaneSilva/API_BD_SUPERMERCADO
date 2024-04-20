const { Pool } = require("pg");
const conect = new Pool({
    connectionString: process.env.CONNECTION_STRING
});

console.log("criou o pool de conexao");

module.exports = conect