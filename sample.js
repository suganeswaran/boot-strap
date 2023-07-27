http=require('http');
url=require('url');
querystring=require('querystring');
function samp(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log('request for path'+path+'received');
    var query=url.parse(request.url).query;
    console.log=(query);
    var name=querystring.parse(query)["name"];
    var email=querystring.parse(query)["email"];
    response.write('hi'+name+'your mail id is'+);
    response.end();

}
http.createServer(samp).listen(8000);
console.log("server created");