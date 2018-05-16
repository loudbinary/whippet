let mongoose = require('mongoose');
let _ = require('lodash');

//INJECT PROMISEER BLUEBIRD
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/whippet')



//Used to Define a schema
let Schema = mongoose.Schema;

var SymbolSchema = new Schema({
    symbol: {type: String, required: true},
    status: {type: String, required: true}, //TODO FIGURE OUT ENUMS AND MAKE IT SO - {type: String, default: 'active', enum: ['TRADING', 'inactive', 'deleted']},
    baseAsset:{type: String, required: true},
    baseAssetPrecision: {type: Number, required: true},
    quoteAsset: {type: String, required: true},
    quotePrecision: {type: Number, required: true},
    orderTypes: [{type: String, required:true}], //TODO FIGURE OUT ENUMS, FIX AND ENFORCE
    icebergAllowed: {type: Boolean, required: true},
    filters: {}
}, {
    timestamps: true,
    createdby: true,
    updatedby: true
});

var EnvironmentSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    exchangeFilter: Array,
    rateLimits: Array,
    serverTime: Date,
    timeZone: String,
    symbols: [SymbolSchema]
}, {
    timestamps: true,
    createdby: true,
    updatedby: true
});

// Compile model from schema
var Environment = mongoose.model('Environment', EnvironmentSchema );

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