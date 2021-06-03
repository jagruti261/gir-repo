// for run in browser
// var http = require('http');
// http.createServer(function(req, res){
//    res.write('hello welcome');

//    res.end();
// }).listen(5000)

// addithion example
// function sum(a, b){

//    return a+b 
// }
// console.log(sum(10, 30));



//call from another file
var other = require('./othother.js');

console.log( other());