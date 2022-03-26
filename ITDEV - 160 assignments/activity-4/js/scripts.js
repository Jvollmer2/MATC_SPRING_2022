var user = "Mike";
var salutation = "Hello, ";
var greeting = salutation + user + "! Here area the latest Osmosis Lab reviews.";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

var pool1 = 77.96,
    pool1El = document.getElementById('pool1');
var pool560 = 126.87,
    pool560El = document.getElementById('pool560');

pool1El.textContent = pool1.toFixed(2);
pool560El.textContent = pool560.toFixed(2);