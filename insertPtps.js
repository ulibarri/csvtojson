

let MongoClient = require('mongodb').MongoClient;
let participants= require('./participants');
let url = "mongodb+srv://admin:admin@beducluster.eiuzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const config = { server: { 
  // sets how many times to try reconnecting
  reconnectTries: Number.MAX_VALUE,
  // sets the delay between every retry (milliseconds)
  reconnectInterval: 1000 
  } 
}



MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  let dbo = db.db('CFS');
  let collection = dbo.collection('participants'); 
  // console.log('Documentos encontrados------>',db.collection("participants").countDocuments({}));


let i=1;
participants.forEach((ptp)=>{

    dbo.collection("participants").findOne({"participantID" : ptp.participantID}, function(err, result) {
      if (err) throw err;
      
      if(result){
        console.log(`participant ${i}-> ${ptp.participantID} already in catalog`);
      }else
        {//aqui vamos a insertar a los nuevos participantes
        
        collection.insertOne(ptp, function(err, res) {
            if (err) throw err;
          
            console.log(`Inserting participant ${i}-> ${ptp.participantID}`);    
          });
        }
      i++;
      // db.close();
    });
    
  });
});