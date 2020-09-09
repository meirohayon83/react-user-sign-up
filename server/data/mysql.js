
const mysql = require('mysql');

const db = mysql.createConnection({ 
   
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-react',
    multipleStatements : true,


})

db.connect((error) => {
    if(!error) {

        console.log('mysql connect')
    }
})


module.exports = db