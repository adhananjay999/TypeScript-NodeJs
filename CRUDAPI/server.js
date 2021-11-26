const bodyParser = require('body-parser');
const express=require('express');
require('dotenv/config');
const morgan=require('morgan');
const connectDB=require('./server/database/connection');
const app=express();
const PORT=process.env.PORT || 8080;
const routes=require('./server/routes/routes');

//log requests
app.use(morgan('tiny'));
//mongodb connection
connectDB();

//body-parser
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

//load routes
// app.get('/',()=>console.log('CRUD Application'));
app.use('/v1',routes);

//listening server
app.listen(PORT,()=>console.log(`Application running on  http://localhost:${PORT}`));