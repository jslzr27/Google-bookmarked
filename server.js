const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books");
let db = mongoose.connection; 

//Check for connection
db.once('open', () => console.log("connected to MongoDB")) ;

//Check for db errors
db.on('error', err => console.log(err));

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
});

