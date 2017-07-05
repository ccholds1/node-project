const express = require('express')  
const app = express()  
const port = 3333

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`)
});



app.get('/pair-test', function(request, response) {  
  response.send('Hello from Express!');
  console.log('route succesfully getting hit');
});

var PublicData = [{
	"id":1,
	"FirstName": "Will",
	"Age": "22",
	"Hometown": "Monroe, LA",
	"NumberOfSiblings": "1",
	"Dietary": "Normal",
},{ 
	"id":2,
	"FirstName": "Chris",
	"Age": "23",
	"Hometown": "New Orleans, LA",
	"NumberOfSiblings": "2",
	"Dietary": "Normal",
}];



app.get('/u1PublicData', function(request, response) {  
  response.send('Foundu1PublicData');
  console.log('route succesfully getting hit');
});

app.get('/u2PublicData', function(request, response) {  
  response.send(u2PublicData);
  console.log('route succesfully getting hit');
});