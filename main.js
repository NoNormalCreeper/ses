require('dotenv').config();

const express = require('express');
const app = express();

app.engine('art', require('express-art-template'));
app.set('views', 'views');
app.set('view options', {
  debug: process.env.NODE_ENV == 'development'
});
app.set('view engine', 'art');

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.render(req.path.slice(1));
})

app.listen(process.env.PORT);
console.log(`\x1B[36mServer running at http://127.0.0.1:${process.env.PORT}\x1B[39m`);