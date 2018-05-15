const Express = require('express');
const helmet = require('helmet');
const serveStatic = require('serve-static');

const app = Express();

app.use(helmet());
app.use(serveStatic('public'));

app.use((req, res, next) => {
  console.log('middleware');
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World 3');
});

app.get('/home', (req, res) => {
  res.send('Hello Home');
});

app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
  res.send('user id: ' + req.params.id);
});

app.listen(3000, function() {
  console.log('start listen http://localhost:3000/');
});
