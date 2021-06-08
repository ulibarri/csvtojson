let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://admin:admin@beducluster.eiuzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    let dbo = db.db("CFS");
    let collection = dbo.collection('participants');  // ge
    dbo.collection('participants', {}, function(err, contacts) {
        contacts.remove({}, function(err, result) {
            if (err) {
                console.log(err);
            }
        
            console.log(result);
            db.close();
        });
    });
  }); //conexion


