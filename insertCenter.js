var centers = require('./centers');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://admin:admin@beducluster.eiuzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";




MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("CFS");
    let collection = dbo.collection('centers');  // ge
  
    centers.forEach((center)=>{
        console.log(`Center --> ${center.name}`);
        collection.insertOne(center, function(err, res) {
          if (err) throw err;
          
          console.log("Center inserted");
        });
    });


  
    
  }); //conexion
  








