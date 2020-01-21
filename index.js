const express = require ('express');
const massive = require ('massive');
const bodyParser = require('body-parser')
const productController = require('./product_controller')
require('dotenv').config();

const app = express();

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err))

app.post("/api/products", productController.create);
app.get("/api/products", productController.getAll);
app.get("/api/products/:id", productController.getOne);
app.put("/api/products/:id", productController.update);
app.delete("/api/products/:id", productController.delete);


const port = process.env.PORT || 3005;

app.listen( port, () => { console.log(`server online at port ${port}`) }); 