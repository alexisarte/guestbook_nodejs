const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

//Settings
app.set('appName', 'Fazt ejs tutorial')
app.set('port', '3000');
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev')); // Para usar la consola
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))    ;

// Routes
require('./routes/index.js')(app);

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port', app.get('port'));
});
