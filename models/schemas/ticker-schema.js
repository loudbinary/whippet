var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
        symbol: {type: String, required: true},
        price: {type: String, required: true}
    },
    {
        timestamps: true,
        createdby: true,
        updatedby: true
})