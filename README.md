# Whippet

    **Cryptocurrency trading technique, and sandbox for progrmatic musings.**

Looking for the maximum whipping, with high occurences.  Whipping is a coin whose market allows has the most large, green candles, where such spread has most possible satoshi gains

## System Requirements

* Nodejs v9.8.0 or >
* Typescript module installed globally - `npm install -g typescript`
* Gulp Cli module installed globally - `npm install -g gulp-cli`
* Docker is optional, but a requirement soon.

## Configuration Requirements

* Create a *.env* in this directory, and add
    * EXCHANGE_API_KEY="<your binance api key here>"
    * EXCHANGE_API_SECRET="<you api keys secret>"
    * EXCHANGE_SANDBOX=true
        Disables actual trading at Binance connection.

## Exchange Communication Requirements

* You will have to at mininum setup an API-Key at Binance, and then either place in .env file, or pass in as environment variables. 

## Contributing

* Create branches, and make pull request with atleast one reviewer.

