const express = require('express')  
const app = express()  
const port = 3333
var bodyParser = require('body-parser')
var mongoose = require('mongoose')


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
	"id":"1",
	"Make": "Sony",
	"Model": "A7S II",
	"MSRP": "$2999.99",
	"Weight": "22 oz",
	"Resolution": "HD",
	"SensorSize": "35 mm",
	"MaxISO": "102,400",
	"MinISO": "100",
},{ 
	"id":"2",
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




// app.post('/CameraData', function(request,response){

// 	var requestData = request.body
// 	console.log(requestData);
// 	for (var i = 0; i < CameraData.length; i++){
// 		if (CameraData[i].id == requestData.id){
// 			CameraData[i].MSRP == requestData.MSRP
// 			console.log(CameraData[i])
// 	} 
// 	}
// 	console.log(CameraData);
// });

Schema = new mongoose.Schema
({
	id			:String,
	Make		:String,
	Model		:String,
	MSRP		:String,
	Weight		:String,
	Resolution	:String,
	SensorSize	:String,
	MaxISO		:String,
	MinISO		:String,

},{collection: 'Camera'}),



mongoose.connect('mongodb://heroku_fhc6q208:psbn1hmfrq4fcmvhst2skbb461@ds153752.mlab.com:53752/heroku_fhc6q208', function (error) 
{
    if (error) console.error(error);
    else console.log('mongo connected');
}); 

// Cameras.find(function(err, CameraData){
// 	console.log(CameraData)
// })

mongoose.model('Camera',Schema);
var Cameras = mongoose.model('Camera');

app.get('/CameraData', function(request, response){
	Cameras.find({}, function(err,Camera){
		if(err){
			console.log('you shall not pass');
		}else{
			response.send(Camera);
			console.log(Camera)
			console.log('great success!');
			
		}
	});
// response.send(CameraData);
// console.log('route succesfully getting hit');
});





app.post('/CameraData', function(request, response){
	var camera = new Cameras(request.body);
	console.log("this is my new camera data:", camera);
	// console.log(camera);
	camera.save(function(err) {
		if(err){
			console.log('wtf');
		}else{
			console.log("hell yeah brother");
		}
	});
// CameraData.push(request.body);
// console.log(CameraData);
 })
// app.get('/CameraData', function(request,response){
// 	Cameras.find({}, function(err,Camera){
// 		if(err){

// 		}else{

// 		}
// 	});
// });
/*Todo.find(function(err, todos){
	res.json(200,todos);
});


app.post('/api/cameras',function(req,res)
	{
	var camera = new Camera();
	camera=
	{
		"Make":"yes",
	};

camera.save(function(err)
	{
	console.log(challenge)
	if (err)
		res.send(err);

	res.json({message: "Camera Created!"})
	});
*/



