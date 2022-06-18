require('dotenv').config()
// app-express-connection
  const express = require('express')
// app-env-connection
  const dotenv = require('dotenv')
// DB-connection 
  const mongoose = require('mongoose');

  const app = express()

//app-configuring-json-data // note-importent set it befour-routes
  app.use(express.json())

//app-configuring-routers-connections
  const appRoutes = require('./routes/routes')
  app.use(appRoutes)


  // mongoose.connect('mongodb://localhost:27017/mydb');

  main().catch(err => console.log(err));

  // 0 = disconnected
  // 1 = connected
  // 2 = connecting
  // 3 = disconnecting
  // 4 = invalid credentials 
 
  // Demonstrate the readyState and on event emitters
  console.log(mongoose.connection.readyState); //logs 0
  mongoose.connection.on('connecting', () => { 
    console.log('connecting')
    console.log(mongoose.connection.readyState); //logs 2
  });
  mongoose.connection.on('connected', () => {
    console.log('connected');
    console.log(mongoose.connection.readyState); //logs 1
  });
  mongoose.connection.on('disconnecting', () => {
    console.log('disconnecting');
    console.log(mongoose.connection.readyState); // logs 3
  });
  mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
    console.log(mongoose.connection.readyState); //logs 0
  });

  // ready states being
  console.log(mongoose.connection.readyState); //logs 2

  // Connect to a MongoDB server running on 'localhost:27017' and use the
  //'test' database.
  async function main() {
    await mongoose.connect('mongodb://localhost:27017/mydb');
  }

// app-connection-general-db connection

  // var MongoClient = require('mongodb').MongoClient;
  // var url ="mongodb://localhost:27017/mydb";
  // MongoClient.connect(url, (err, db)=>{
  //     if (err) {
  //         throw err;
  //     }else{
  //         console.log("Database connected!");
  //         db.close();
  //     }
  // })


//app-Route-connection-without-express-Router methods
  // app.get('/', (req, res) => res.send('Hello World!'))

//app-listen-connection
  app.listen(process.env.PORT, () => console.log(` App listening on port ${process.env.PORT}!`))

