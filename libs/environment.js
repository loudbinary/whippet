let exchange = require('./exchange.js');

module.exports = {
        refresh: function refresh(){
            exchange.getEnvironmentInfo((data)=>{
                console.log('done');
            })
        }
}