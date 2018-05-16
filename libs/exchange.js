let environment = require('../models/environment.js');
const binance = require('node-binance-api');

binance.options({
    APIKEY: process.env.EXCHANGE_API_KEY,
    APISECRET: process.env.EXCHANGE_API_SECRET,
    useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
    test: true // If you want to use sandbox mode where orders are simulated
});

module.exports = {

    getKline: function getKline({symbol,interval,limit,startTime,endTime},cb){

    },
    getEnvironmentInfo: function getEnvironmentInfo(cb){
        binance.exchangeInfo((error,data)=>{
            let envs = environment(data)
            envs.symbols.push(data.symbols)
            envs.symbols.save()
            envs.save((err,data)=>{
                console.log(err);
                console.log(data);
            });
            cb(data);
        })
    }

}