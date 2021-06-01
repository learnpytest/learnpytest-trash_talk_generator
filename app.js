const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const targets = require('./targets.json')
const generateTrashTalk = require('./generate_trash_talk')
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
  const targetID = req.body.target
  // Generate a trash talk for a target based on it's id
  const trashTalk = generateTrashTalk(targetID)
  res.render('index', { trashTalk })
})

app.listen(port, () => {
  console.log(`The server running on http://localhost:${port}`)
})