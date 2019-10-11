const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('./dist'));

app.get('/', (req, res) => {
  res.status(200).send('./dist/index.html');
});

app.listen(8080, () => {
  console.log('CORS-enabled web server listening on port 8080');
});