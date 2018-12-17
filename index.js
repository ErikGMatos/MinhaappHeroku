const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/teste', async (req, res) => {
    var funcao =  require('./public/js/src/index2');
    var executafuncao = await funcao(55);
    res.send({teste:executafuncao,dois:2});
  })
  .get('/google/:id', async (req, res) => {
    var parametro = req.params.id;
    var funcao =  require('./public/js/src/index3');
    var executafuncao = await funcao(parametro);
    res.send({teste:executafuncao,dois:2});
  })
  .get('/api/:id/:hash/:teste', async (req, res) => {
    var url = req.url;
    var funcao =  require('./public/js/src/api');
    var oteste = funcao(req.params.id, req.params.hash);
    res.send(oteste);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
