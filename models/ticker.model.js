module.exports = function(mongoose){
    return [{
        symbol: {type: String, required: true},
        price: {type: String, required: true}
    }, {
        timestamps: true,
        createdby: true,
        updatedby: true
    }]
};