import express from 'express';
import { ping, getProducts, getProductsByEAN, addProduct } from './routes/products';
import { json } from 'body-parser';

var app = express();
app.use(json());

app.get('/api/ping', ping);
app.get('/api/products', getProducts);
app.get('/api/products/:ean', getProductsByEAN);
app.post('/api/products', addProduct);

app.listen(5050, function(err){
  if (!err) {
    console.log("Freshco Product API is listening on port 5050...");
  }
});


// Start with nodemon -r esm server.js to get ES6 working

