var http = require('http');
var html = `
<h1> HTML form using node </h1>
<div>
<lable>Name:</lable>
<input name="name" id="name" type="text">
</div>
<div>
<lable>Email:</lable>
<input name="email" id="email" type="email">
</div>
<div>
<lable>Phone :</lable>
<input name="phone" id="phone" type="number">
</div>
<div>
<lable>Message:</lable>
<input name="message" id="mesage" type="text">
</div>
<div>
<input name="submit" id="submit" type="button" value='submit'>
</div>
`
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':"text/html"})
res.write(html);
res.end();

}).listen(4000)