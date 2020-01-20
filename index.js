const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const control = require('./products_controllers')

require('dotenv').config()

const app = express()

massive( process.env.CONNECTION_STRING).then( dbInstance => {
  app.set('db', dbInstance)
  console.log('db online')
}).catch( err => console.log(err));

app.use(bodyParser.json())

const port = process.env.PORT || 3000;

app.get('/api/products', control.getAll);
app.get('/api/products/:id', control.getOne);
app.put('/api/products/:id?desc=...', control.update);
app.post('/api/products', control.create);
app.delete('/api/products/:id', control.delete)

app.listen( port , () => {
  console.log(`Server Online at port ${port}.`)
})