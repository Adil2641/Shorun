var http = require("http");
var port = 5353;

var server = http.createServer(function (req, res) {
    var Shorun = ["Saoda", "Rida", "Sabiha", "Sumaiya", "Elma","Rika","Mitsuri"];
    var RandomName = Shorun[Math.floor(Math.random() * Shorun.length)];

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
        <body style= "#87e3ff">

        <h1 style="background-color:#87e3ff; 
        font-family:courier; 
        text-align:center;
        font-size:50px;
        ">Shorun er bou er Name : ${RandomName}</h1>
        <p style="background-color:#87e3ff;
        font-family:courier;">Click the photo</p>
        <a href="https://www.facebook.com/kyojuro.rengoku.574779" taget="_blank" style="color:Red">  <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/492880114_570989816026114_4100233029826738315_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvjItVMpCCMEucVcIBoSCmAqhJqC59BBECqEmoLn0EEeL1T1iuhInEgPoEUSkGRY-jIEMPA4V3bv5NqQrqC3SN&_nc_ohc=rD_P9ovrvhAQ7kNvwEtkfT-&_nc_oc=AdneKwquEs240Y_vxme7CBr8v8Fnrh0EkDXI4DPwDgg3WFVAxam03GGSrhJvEsneiZ962Qavd9xSetFTS1RmmqE1&_nc_zt=23&_nc_ht=scontent-sin6-2.xx&_nc_gid=GdtRZruvBo-__4iAL2aJ3A&oh=00_AfLk_zvWyu8u_vvYmlCMRXUuZjEgJjADgXETfzCAYZ76rQ&oe=68375C4B" style="float:left; width:500px;height:600px;" alt="shorun"></a>
        </body>
        </head>
        </html>
        `);
    res.end();

});

server.listen(port, () => { 
    console.log(`Shorun's Server is Running at http://localhost:${port}`);
});

