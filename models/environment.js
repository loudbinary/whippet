let mongoose = require('mongoose');
let _ = require('lodash');
//Used to Define a schema
let Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
let path = require('path');

let SymbolSchema = require(path.resolve(__dirname,'schemas/symbol-schema.js'));


mongoose.connect('mongodb://localhost:27017/whippet')

var EnvironmentSchema = new Schema({
    exchangeFilter: Array,
    rateLimits: Array,
    serverTime: Date,
    timeZone: String,
    symbols: [{ type: Schema.Types.ObjectId, ref: 'Symbol'}]
});

// Compile model from schema

let Symbol = mongoose.model('Symbol', SymbolSchema);
let Environment = mongoose.model('Environment', EnvironmentSchema );

module.exports = Environment
/*
module.exports = function(mongoose){
    return [{
        id: {type: mongoose.Schema.Types.ObjectId},
        exchangeFilter: {type: Array},
        rateLimits:     {type: Array},
        serverTime:     {type: Date},
        timeZone:       {type: String},


    }, {
        timestamps: true,
        createdby: true,
        updatedby: true
    }]
};

*/