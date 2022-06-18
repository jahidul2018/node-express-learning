require('dotenv').config()
// app-express-connection
  const express = require('express')
// app-env-connection
  const dotenv = require('dotenv')
// DB-connection 
  const mongoose = require('mongoose');

  const app = express()

//app-configuring-routers-connections
  const appRoutes = require('./routes/routes')
  app.use(appRoutes)
  
  //app-main-db
    main().catch(err => console.log(err));
    // 'test' database.
    async function main() {
      await mongoose.connect('mongodb://localhost:27017/mydb');
    }

//app-listen-connection
  app.listen(process.env.PORT, () => console.log(` App listening on port ${process.env.PORT}!`))

