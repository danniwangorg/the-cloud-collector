//Server with Express
const { response } = require('express');
let express = require('express');
let app = express();

//DB initial code
let Datastore = require('nedb');
let db = new Datastore({ filename: 'clouds.db', timestampData: true });
db.loadDatabase();

//Serve files from the "public" folder
app.use(express.static('public'));

//Parse JSON data
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({
    extended: true,
    limit: '25mb'
}));

//Send Data Route
app.get('/data', (request, res) => {
    db.find({}, (err, docs) => {
        if (err) {
            res.json({ task: "task failed" });
        } else {
            let obj = docs;
            console.log(obj);
            res.json(obj);
        }
    });
});

//Send LatestData Route
app.get('/latestData', (request, res) => {
    db.find({}, (err, docs) => {
        if (err) {
            res.json({ task: "task failed" });
        } else {
            //1. get timestamp of all images
            let timestampData = new Array();

            //2. compare timestamp of all images (need to sort them)
            //3. return the latest image
            timestampData.sort(function(x, y) {
                return x.timestampData - y.timestampData;
            })
        }
    });
});

//Receive Data Route
app.post('/clouds', (request, res) => {
    console.log("A POST Request!");
    console.log(request.body);

    //Grab the cloud
    let cloudObj = request.body;
    db.insert(cloudObj, (err, newDocs) => {
        if (err) {
            res.json({ task: "task failed" });
        } else {
            res.json({ task: "success" });
        }
    });
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('listening at ', port);
});

// //Initialize the express 'app' object
// let express = require('express');
// let app = express();
// app.use('/', express.static('public'));

// //Initialize the actual HTTP server
// let http = require('http');
// let server = http.createServer(app);
// let port = process.env.PORT || 3000;
// server.listen(port, () => {
//     console.log("Server listening at port: " + port);
// });

// //Initialize socket.io
// let io = require('socket.io');
// io = new io.Server(server);

// //Listen for individual clients/users to connect
// io.sockets.on('connection', function(socket) {
//     console.log("We have a new client: " + socket.id);

//     //Listen for a message named 'msg' from this client
//     socket.on('msg', function(data) {
//         //Data can be numbers, strings, objects
//         console.log("Received a 'msg' event");
//         console.log(data);

//         //Send a response to all clients, including this one
//         io.sockets.emit('msg', data);

//         //Send a response to all other clients, not including this one
//         // socket.broadcast.emit('msg', data);

//         //Send a response to just this client
//         // socket.emit('msg', data);
//     });

//     //Listen for this client to disconnect
//     socket.on('disconnect', function() {
//         console.log("A client has disconnected: " + socket.id);
//     });
// });