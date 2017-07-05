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

var CameraData = [{
	"id":1,
	"Make": "Sony",
	"Model": "A7S II",
	"MSRP": "$2999.99",
	"Weight": "22 oz",
	"Resolution": "HD",
	"SensorSize": "35 mm",
	"MaxISO": "102,400",
	"MinISO": "100",
},{ 
	"id":2,
	"Make": "RED",
	"Model": "Weapon",
	"MSRP": "$49,500",
	"Weight": "52.8 oz",
	"Resolution": "8K",
	"SensorSize": "33.8 mm",
	"MaxISO": "102,500",
	"MinISO": "100",

}];


app.get('/CameraData', function(request, response) {  
  response.send('Foundu1PublicData');
  console.log('route succesfully getting hit');
});

app.get('/UserData', function(request, response) {  
  response.send(u2PublicData);
  console.log('route succesfully getting hit');
});