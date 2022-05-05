const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors());

let router = require('./router');
let userController = require('./api/userController');

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Started server at http://localhost:3000`);
  userController.initUsers();
})
