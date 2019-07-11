var mongoClient = require('mongodb').MongoClient

var mongoDb = {};
mongoClient.connect('mongodb://localhost:27017', function(err, client){
  if (!err) {
    console.log('Connected to MongoDB!');
    mongoDb = client.db('freshco');
  }
}); //27017 is the port mongodb is running on

exports.ping = function(req, res){
  res.status(200).send('hello');
};

exports.getProducts = function(req, res){
  var productsCollection = mongoDb.collection('products');
  productsCollection.find().toArray(function(err, products){
    if (!err) {
      res.status(200).send(products);
    }
  });
};


exports.getProductsByEAN = function(req, res){

  var requestedEAN = req.params.ean;

  var productsCollection = mongoDb.collection('products');
  productsCollection.find({ ean: requestedEAN }).toArray(function(err, products){
    if (!err) {
      res.status(200).send(products);
    }
  });
};

exports.addProduct = function(req, res){
  var productToAdd = req.body;
  var productsCollection = mongoDb.collection('products');
  productsCollection.insertOne(productToAdd, function(err, response) {
    if (!err) {
      response.sendStatus(201);
    }
  });

};
