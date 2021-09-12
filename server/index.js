/***** server/index.js *****/

// log exceptions
process.on('uncaughtException', function(err) {
    console.log(err);
});

// import packages
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the static files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server! x" });
});

// Handle all other GET requests: return our React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// launch the server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

