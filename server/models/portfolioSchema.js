var mongoose = require("mongoose");

// Dividends schema setup
var Dividends = new mongoose.Schema({
   dividendDate : {type: Date},
   dividend     : {type: Number, min: 0}
});

// Stocks schema setup
var Stocks = new mongoose.Schema({
   symbol          : {type: String, required: true},
   buyDate         : {type: Date, default: null},
   price           : {type: Number, min: 0},
   shares          : {type: Number, min: 0},
   market          : {type: String, default: null},
   lastPrice       : {type: Number, default: null},
   change          : {type: Number, default: null},
   changePercent   : {type: Number, default: null},
   gainLoss        : {type: Number, default: null},
   gainLossPercent : {type: Number, default: null},
   value           : {type: Number, default: null},
   updateTime      : String,
   dividends       : [Dividends],
   totalDividends  : {type: Number, min: 0}
});

// Portfolio schema setup
var portfolioSchema = new mongoose.Schema({
   name                 : {type: String, required: true},
   owner                : String,
   totalBuy             : {type: Number, default: 0},
   totalValue           : {type: Number, default: 0},
   totalGainLoss        : {type: Number, default: 0},
   totalGainLossPercent : {type: Number, default: 0},
   stocks               : [Stocks]
});

// Export model
var Portfolio = mongoose.model("Portfolio",portfolioSchema);
module.exports = Portfolio;