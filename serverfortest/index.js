const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const routes = require('./routes/routes');

const HttpError = require('./utils/http-error');

// Configuration statements
const port = 3000;
app.use(bodyParser.json());


app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Role');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
})


// Routing
app.use('/', routes);



// Error Handling
app.use((req,res,next) => {
  const error = new HttpError('Page not found',404);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code);
  res.json({message: error.message || 'Unknown error occured' , code: error.code });
});


    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`)
    });
