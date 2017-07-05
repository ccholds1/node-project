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

var u1PublicData = [{}]

}

app.get('/u1PublicData', function(request, response) {  
  response.send('u1PublicData found');
  console.log('route succesfully getting hit');
});