var MongoClient =require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    
    var myobj ={ name: "GIC-EDU LTD", address: "Dhaka 1212" };
    dbo.collection("customers").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log(" customer collection created ");
        db.close();
    })
});