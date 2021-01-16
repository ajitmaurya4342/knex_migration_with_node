 const configObj = require('../knexfile');

var knex3 = require('knex')(configObj.development);
const { attachPaginate } = require('knex-paginate');
attachPaginate();
// connect to database
console.log(`Connecting to Database via Knex ${knex3}`);

module.exports = knex3;



// const mysql = require('mysql2')

// const _p = mysql.createPool({
//     host: 'localhost',
//     database: 'shops',
//     password: '',
//     user: 'root'
// })
// console.log('.database.database :', _p);


// module.exports = _p.promise()


// const mysql = require('mysql');
// const configObj = require('./config/keys');



// const mc = mysql.createPool(
// 	configObj.database
// );

// // connect to database
// console.log(`Connecting to Database ${configObj.database.database}`);

// module.exports = mc;
