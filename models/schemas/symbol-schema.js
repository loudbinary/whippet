var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let path = require('path');
let TickerSchema = require(path.resolve(__dirname,'ticker-schema.js'));

module.exports = Schema({
    id: mongoose.Schema.Types.ObjectId,
    symbol: {type: String, required: true},
    status: {type: String, required: true}, //TODO FIGURE OUT ENUMS AND MAKE IT SO - {type: String, default: 'active', enum: ['TRADING', 'inactive', 'deleted']},
    baseAsset:{type: String, required: true},
    baseAssetPrecision: {type: Number, required: true},
    quoteAsset: {type: String, required: true},
    quotePrecision: {type: Number, required: true},
    orderTypes: [{type: String, required:true}], //TODO FIGURE OUT ENUMS, FIX AND ENFORCE
    icebergAllowed: {type: Boolean, required: true},
    filters: {},
    ticker: [{ type: Schema.Types.Object, ref: 'Ticker'}]
}, {
    timestamps: true,
    createdby: true,
    updatedby: true
})

let Ticker = mongoose.model('Ticker', TickerSchema );