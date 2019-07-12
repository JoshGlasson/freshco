import { MongoClient as mongoClient } from 'mongodb';

var mongoDb = {};
mongoClient.connect('mongodb://localhost:27017', function(err, client){
  if (!err) {
    console.log('Connected to MongoDB!');
    mongoDb = client.db('freshco');
  }
}); 

// 27017 is the port mongodb is running on

export function ping(req, res){
  res.status(200).send('hello');
}

export function getProducts(req, res){
  var productsCollection = mongoDb.collection('products');
  productsCollection.find().toArray(function(err, products){
    if (!err) {
      res.status(200).send(products);
    }
  });
}


export function getProductsByEAN(req, res){

  var requestedEAN = req.params.ean;

  var productsCollection = mongoDb.collection('products');
  productsCollection.find({ ean: requestedEAN }).toArray(function(err, products){
    if (!err) {
      res.status(200).send(products);
    }
  });
}

export function addProduct(req, res){

  var productToAdd = req.body;
  
  var productsCollection = mongoDb.collection('products');
  
  productsCollection.insertOne(productToAdd, function(err, response) {
    if (!err) {
      res.sendStatus(201);
    }
  });
}
