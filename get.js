var http=require("http");
var url=require("url");
var querystring=require("querystring");
function samp(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log(path)
    var query=url.parse(request.url).query;
    console.log(query)
    var name=querystring.parse(query)["username"];
    var email=querystring.parse(query)["email"];
    response.write('Your name '+name+' and email '+email+'');
}
http.createServer(samp).listen(8000);
console.log("Server Started");
