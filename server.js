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
	"First Name": "Will",
	"Age": "22",
	"Hometown": "Monroe, LA",
	"Number Of Siblings": "1",
	"Dietary": "Normal",
},{ 
	"First Name": "Chris",
	"Age": "23",
	"Hometown": "New Orleans, LA",
	"Number Of Siblings": "2",
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