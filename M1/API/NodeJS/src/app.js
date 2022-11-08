const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
    let url = req.url;
    
    switch (url){
        case "/":
            res.end("Home");
            break;
        case "/posts":
            res.statusCode = 200;
            res.setHeader = ("Content-type", "text/html");
            res.end("Liste des articles");
        default:
            res.statusCode = 404;
            res.setHeader = ("Content-type", "text/html");
            res.end("Erreur !");
    }
});

server.listen(port, hostname);

