# Freshco Product API

## Set Up

`npm install` to get the necessary packages

`nodemon` is used to run the server, it reloads it upon saving any changes to the files.

`esm` allows you to use ES6 imports

Run the code with `nodemon -r esm index.js`

## Mongo Set Up

To set up MongoDB, do the following.

```
brew install mongodb
sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db
```

Then in the terminal 
- `$ mongod`

In a new terminal tab/window
- `$ mongo`

In the `mongo` window, to create the new database
- `use <database name>`

Enter `db` to confirm you are in the new database

To create a collection

- `db.createCollection("myCollection")`

Enter `quit()` to exit `mongo`
