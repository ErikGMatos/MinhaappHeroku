const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/:id', function (req, res, next) {res.status(200).send({title: "Node Express API", version: "0.0.1"});})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))