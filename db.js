const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'YOUR_MYSQLHOST',
    user: 'YOUR_MYSQLUSER',
    password: 'YOUR_MYSQLPASSWORD',
    database: 'YOUR_MYSQLDATABASE',
    port: 'YOUR_MYSQLPORT'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Railway Database Connected");
    }
});

module.exports = connection;
