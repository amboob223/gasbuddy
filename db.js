
const POOL = require("pg").Pool
const pool = new POOL({
    connectionString:"postgres://postgres:8896@localhost:5432/gas?ssl=true"
})
module.exports= pool;