require('dotenv');
let path = require('path');
let environment = require(path.resolve(__dirname,'libs/environment.js'));

// Updates environments collection in mongodb
environment.refresh();
