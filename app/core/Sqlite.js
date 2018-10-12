// app/core/Sqlite.js
var SQLite = require('react-native-sqlite-storage')

let database;

export const open = () => {
    return new Promise( (resolve, reject) => {
        SQLite.openDatabase({name: 'database.db', location: 'default'}, 
                        function(db) {
                            database = db; 
                            console.log("SQLite DB opened successfully..")
                            resolve(true);
                        }, function(err) {
                            console.log("Could not open SQLite DB ", err);
                            reject(err);
       });
    })
}

export const executeSql = (statement, params = []) => {
    return new Promise(function(resolve, reject) {
        database.transaction((tx) => {
            tx.executeSql(statement, params, (tx, results) => {
                //resolve(tx)
                resolve(results)
            });
        });
    });
}
 