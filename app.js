const express = require('express')
const app = express()
const path = require('path')
const port = 3031

const template = require('./utils/template')
  app.get('/', template.index)
  app.get('/:file',template.index)
  
  app.use((err, req, res, next) => {
    if (!err) return next();
    return res.status(404).send('Caminho Não existe')
  });
  app.use('/', express.static(path.resolve(__dirname, 'public/assets')));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})