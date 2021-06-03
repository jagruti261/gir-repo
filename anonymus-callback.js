// var add = function(a, b)
// {
//     return a + b
// }

// function complexExp(add)
// {
//     console.log(add(200,300))
// }
 
// complexExp(add)

//similar call back function like above or othet method to call function
// complexExp( function(a, b)
// {
//     return a + b
// })
var http = require('http');
var upper = require('upper-case');
http.createServer(function(req,res){
res.write(upperc.upperCase("this is a code"));
res.end();

}).listen(4000)