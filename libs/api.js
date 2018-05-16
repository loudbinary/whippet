let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
const PORT = 3000;
let instantMongoCrud = require('express-mongo-crud'); // require the module

module.exports = {
    start: function start(){
        // REQUIRE MIDDLEWARE


        //INJECT PROMISEER BLUEBIRD
        mongoose.Promise = require('bluebird');

        var promise = mongoose.connect('mongodb://localhost:27017/whippet', {
            //useMongoClient: true,
            /* other options */
        });

        var options = { //specify options
            host: `127.0.0.1:${PORT}`
        }

        //USE AS MIDDLEWARE

        app.use(bodyParser.json()); // add body parser
        app.use(instantMongoCrud(options)); // use as middleware
        app.listen(PORT, ()=>{
            console.log('started');
        });
    }
}