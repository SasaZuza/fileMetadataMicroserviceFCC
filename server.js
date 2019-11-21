'use strict';

var express = require('express');
var cors = require('cors');
// import middleware for file uploads
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

// create endpoint to submit files to
// notice that upload.single uses the name of the upload input field of the form
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  // create response object with name and size of file
  res.json({name: req.file.originalname, size: req.file.size})
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
