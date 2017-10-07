import express from 'express';
import config from 'config';

const app = express();
const PORT = config.get('server').port;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})