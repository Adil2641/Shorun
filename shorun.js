const http = require("http");
const fs = require("fs");
const port = 5353;

const server = http.createServer(function (req, res) {
    if (req.url==="/elma.jpg") {
        fs.readFile("elma.jpg", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Elma image not found 😥");
            }
            res.writeHead(200, {"Content-Type":"image/jpg"});
            res.end(data);
        }); 
        return
    }
    if (req.url === "/rida2.jpg") {
        fs.readFile("rida2.jpg", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Rida2 image not found 😥");
            }
            res.writeHead(200, {"Content-Type": "image/jpg"});
            res.end(data);
        });
        return
    }
    if (req.url==="/rida.mp4") {
        fs.readFile("rida.mp4", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Rida video not found 😥");
            }
            res.writeHead(200, {"Content-Type": "video/mp4"});
            res.end(data);
        });
        return
    }

    if (req.url==="/"){
    const Shorun = ["Saoda", "Rida", "Sabiha", "Sumaiya", "Elma","Rika","Mitsuri"];
    const RandomName = Shorun[Math.floor(Math.random() * Shorun.length)];
    let contentType = "";
    let contentPlay = "";

    if (RandomName==="Rida") {
        const isVideo = Math.random() < 0.5;
        contentType = isVideo? "video" : "photo";
        if (isVideo) {
            contentPlay = `
        <video style="display:block; margin:auto;" 
        controls>
        <source src="rida.mp4" type="video/mp4">
       </video>`;
    }
        else {
    
    contentPlay = `<img src="rida2.jpg" style="display:block; margin:auto;">`;
}
    }
    else if (RandomName==="Elma") {
        contentType = "photo";
        contentPlay = `<img src="/elma.jpg" style="display:block; margin:auto;">`;
    }
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Shorun's Bou</title>
        </head>
        <body style="height:100vh; background: linear-gradient(45deg, #F52787, #2787F5, #27EEF5);">
        <button style="padding: 10px 20px; border-radius: 10px; background: linear-gradient(180deg, #FF008C, #00FF73);"onclick="location.reload()">Reload</button>
        <h1 style="font-family: Cursive;
    text-align: center;
    font-size: 50px;
    color: #FF69B5;">
    ❥Shorun⸜(｡˃ ᵕ ˂)⸝♡ જ⁀➴ ♡🧸ྀི${RandomName}˚ʚ♡ɞ˚</h1>
        ${contentPlay}
        </body>
        </html>
        `);
    res.end();
    }

});

server.listen(port, () => { 
    console.log(`Shorun's Server is Running at http://localhost:${port}`);
});

