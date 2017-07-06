const express = require('express')  
const app = express()  
const port = 3333
	var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

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

// app.post('/CameraData', function(request, response){
// 	CameraData.push(request.body);
// 	console.log(CameraData.push);
// });

// app.get('/CameraData', function(request, response){  
//   response.send(CameraData[]);
//   console.log('route succesfully getting hit');
// });

// app.post('/CameraData', function(request, response){
// 	CameraData.push(request.body);

// 	console.log(CameraData.push);
// });


app.post('/CameraData', function(request,response){

	var requestData = request.body
	console.log(requestData);
	for (var i = 0; i < CameraData.length; i++){
		if (CameraData[i].id == requestData.id){
			CameraData[i].MSRP == requestData.MSRP
			console.log(CameraData[i])
	} 
	}
	console.log(CameraData);
});







