var http=require('http')
var port = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Hello World\n");
}));
server.listen(7000);