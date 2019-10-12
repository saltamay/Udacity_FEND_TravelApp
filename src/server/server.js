const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const async = require('express-async-errors')
const fetch = require('node-fetch')

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('./dist'));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).send('./dist/index.html');
});

app.post('/current', async (req, res, next) => {
  if (req.body.endpoint !== " ") {
    const endpoint = req.body.endpoint;
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonRes = await response.json();
        res.status(201).send(jsonRes);
      }
    } catch (error) {
    console.log(error);
    }
  } else {
    res.status(400).json('Bad Request');
  }
})