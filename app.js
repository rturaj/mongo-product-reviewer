const express = require('express');
const routes = require('./routes');
const errorHandlerMiddleware = require('./middleware/error');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product-reviewer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
