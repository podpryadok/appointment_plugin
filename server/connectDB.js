// var mysql = require ('mysql');

// console.log("Get connection DB");

// var connectDB = mysql.createConnection({
//     database = "myDB",
//     host = "localhost",
//     user = "root",
//     password = "123456"
// });

// function connecting(){
//     connectDB.connect(function(err){
//         if(err){
//             throw err;
//         }
//         console.log("Connected!");
//     });
// }

// exports.connecting = connecting;

const sqlite3 = require('sqlite3').verbose();

function connecting() {
    let db = new sqlite3.Database('./db/users.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to DB");
    });
}

exports.connecting = connecting;
