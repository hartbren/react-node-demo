/***** server/index.js *****/

// log exceptions
process.on('uncaughtException', function(err) {
    console.log(err);
});

// import packages
const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the static files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


// data store in memory
let messages = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/send-message', (req, res) => {

    const msg = req.body;

    // Output the book to the console for debugging
    console.log(msg);
    messages.push(msg);

    res.send('OK');
});

// Handle GET requests to /api route
app.get("/api/list-messages", (req, res) => {

    res.json(messages);
});


// Handle all other GET requests: return our React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// launch the server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

