module.exports = function(mongoose){
    return [{
        symbol: {type: String, required: true},
        status: {type: String, required: true}, //TODO FIGURE OUT ENUMS AND MAKE IT SO - {type: String, default: 'active', enum: ['TRADING', 'inactive', 'deleted']},
        baseAsset:{type: String, required: true},
        baseAssetPrecision: {type: Number, required: true},
        quoteAsset: {type: String, required: true},
        quotePrecision: {type: Number, required: true},
        orderTypes: [{type: String, required:true}], //TODO FIGURE OUT ENUMS, FIX AND ENFORCE
        icebergAllowed: {type: Boolean, required: true},
        filters: [{}]
    }, {
        timestamps: true,
        createdby: true,
        updatedby: true
    }]
};