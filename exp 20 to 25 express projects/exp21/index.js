var express = require('express');
var app = express();

app.use(express.json());
app.get('/test', (req, res) => {
   res.send('this will send something back');
});

app.post('/test', (req, res) => {
   const data = req.body;
   res.json({
       message: 'POST request received',
       receivedData: data
   });
});

app.listen(3011);

