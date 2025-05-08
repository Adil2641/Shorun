var http = require("http");
var url  = require("url");
var port = 5353;

var server = http.createServer(function (req, res) {
    var Shorun = ["Saoda", "Rida", "Sabiha", "Sumaiya", "Elma","Rika","Mitsuri"];
    var RandomName = Shorun[Math.floor(Math.random() * Shorun.length)];

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<h1>Shorun er bou er Name : ${RandomName}</h1>`);
    res.end();

});

server.listen(port, () => { 
    console.log(`Shorun's Server is Running at http://localhost:${port}`);
});

