const express = require('express')
const bodyParser = require('body-parser')

const app = express()
var port = process.env.PORT || 8080

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/chat', function (req, res) {

  var message = req.body.msg

  if (message === 'météo') {
    res.send("Il fait beau \n")
  } else if (message === 'ville') {
    res.send("Vous êtes à Paris \n")
  }
});

app.get('/hello', function (req,res) {
  var nom = req.param('nom');

  if (nom === undefined)  {
    res.send('Quel est votre prénom ?')
  }

  else {
    res.send('Bonjour, ' + nom)
  }

})

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
