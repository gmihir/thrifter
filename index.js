const express = require('express');
const path = require('path');
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const app = express();

// TODO: Replace the following with your app's Firebase project configuration


  // Initialize Firebase
  var project = firebase.initializeApp(firebaseConfig);
  var db = project.firestore();
  console.log(db.collection('user'));


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);