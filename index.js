var http = require('http');
http.createServer(onRequest).listen(8787);
function onRequest(req,res) {
    var opts = {
        hostname: 'i.ytimg.com',
        port: 80,
        path: req.url,
        method: 'GET'
    };
    var proxy = http.request(opts, function(response){
        response.pipe(res,{end:true});
    });
    req.pipe(proxy,{end:true});
}