var express = require('express');
var productsRoute = require('./routes/products');
var bodyParser - require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/ping', productsRoute.ping);
app.get('/api/products', productsRoute.getProducts);
app.get('/api/products/:ean', productsRoute.getProductsByEAN);
app.post('/api/products', productsRoute.addProduct);

app.listen(5050, function(err){
  if (!err) {
    console.log("Freshco Product API is listening on port 5050...");
  }
});
