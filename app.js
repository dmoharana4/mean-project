var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname,'public'))); // to enable static folder so that css js files linked to html file will work
app.get('/', function (req,res) {
  console.log('This is starting page');
  res
  .status(200)
  .send('Its starting page')
});
app.get('/home', function (req,res) {
  console.log('This is home page');
  res
  .status(200)
  .sendFile(path.join(__dirname,'public/index.html'))
});
app.get('/data', function (req,res) {
  console.log('This is data page');
  res
  .status(200)
  .send('Its home pagessss')
});

app.get('/json', function (req,res) {
  console.log('This is home page');
  user = {
    name:'John',
    age:25,
    description:'Handsome'
  }
  res
  .status(200)
  .json(user)   // to send a json data.....
});

app.get('/file', function (req,res) {
  console.log('This is home page');
  res
  .status(200)
  // .sendFile(__dirname+'/server.js')  // always use absolute path... using __dirname we can solve this BUT we can't go back to previous DIR so we use PATH JOINER from PATH module
.sendFile(path.join(__dirname,'/server.js')) // in same directory............
.sendFile(path.join(__dirname,'../server.js')) // to go back 1 directory
})



app.set('port' , 3000);
app.listen(app.get('port') , function () {
  console.log('Server IS RUNNING BY USING EXPRESS');
// app.get('port')
} );
