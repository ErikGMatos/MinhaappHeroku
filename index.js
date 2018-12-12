const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/:id', function (req, res, next) {res.status(200).send({title: "ERIK GARCES MATOS", version: "0.0.1", meuteste:"Deu certinho!", teste:123});})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
