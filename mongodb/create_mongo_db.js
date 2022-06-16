var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db)=>{
    if (err) {
        throw err;
    }else{
        console.log("Database created!");
        db.close();
    }
})