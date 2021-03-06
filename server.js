const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);



// var express = require('express');
// var app = express();
// var fs = require('fs');

// app.get('/contacts', (req, res) => {
//     fs.readFile(__dirname + "/" + "./contacts.json" , 'utf8', (err, data) => {
//         console.log(data);
//         res.send(data);
//     });
// });

// var server = app.listen( 8080 , () => {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("REST API demo app listening at http://%s:%S", host, port)
// })

