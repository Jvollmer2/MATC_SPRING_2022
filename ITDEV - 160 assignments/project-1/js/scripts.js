var priceMarch3 = .09;
var priceMarch6 = .4;
var priceDifference = priceMarch6 - priceMarch3;
priceDifference = Math.round((priceDifference + Number.EPSILON) * 100) / 100;
var intro = "The price has gone up since March 3rd by "
var solana = " Solana.";
var statement = intro + priceDifference + solana;

var statementEl = document.getElementById("statement");

statementEl.textContent = statement;
