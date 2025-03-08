var express = require('express')
require('dotenv').config()
var cors = require('cors')
const {sql , poolPromise} = require('../databaseConnectivity')

var app = express()

let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('../swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const corsOption = {
  origin:'http://localhost:3000'
}
app.use(cors(corsOption))

app.get("/product",async (req,res)=>{
  try{
      const pool = await poolPromise;
      const result = await pool.request().query("select * from product2008");
      res.json(result.recordset);        
  }catch(err){
      res.status(500).send(err);
  }
});

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(process.env.PORT, function () {
  console.log('CORS-enabled web server listening on port',process.env.PORT);
})