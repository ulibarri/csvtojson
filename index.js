const csvFilePath = './files/marzo8.csv'
const csv = require('csvtojson')
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);

    })

