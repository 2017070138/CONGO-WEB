const util = require('util');
const mysql = require('mysql');
/**
 * connection to the database
 * */
const pool = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',

});

pool.getConnection((err,connection)=>{
    if(err)
         console.error("something went wrong connecting to the database...");
    
         if (connection)
         connection.release();
    return;     
});

pool.query = itil.promisify(pool.query);

module.exports = pool;