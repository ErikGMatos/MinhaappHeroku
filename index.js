const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/teste', async (req, res) => {
    var funcao =  require('./index2');
    var executafuncao = await funcao(55);
    res.send({teste:executafuncao,dois:2});
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
