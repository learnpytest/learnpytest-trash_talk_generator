const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const targets = require('./targets.json')
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  if (!app.locals.partials) {
    app.locals.partials = {}
  }
  app.locals.partials.targets = targets.results
  res.render('index')
})
app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`The server running on http://localhost:${port}`)
})