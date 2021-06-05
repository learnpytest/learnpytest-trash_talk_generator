const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const helpers = require('handlebars-helpers')
const targets = require('./targets.json')
const generateTrashTalk = require('./generate_trash_talk')
const port = 3000
let isSelected = {}
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: { isdefined: function (value) { return isSelected[value] !== undefined } } }))

app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  if (!app.locals.partials) {
    app.locals.partials = {}
  }
  app.locals.partials.targets = targets.results
  // reset selected option and then render view page
  isSelected = {}
  return res.render('index')
})
app.post('/', (req, res) => {
  const id = req.body.id
  // Generate a trash talk for a target based on it's id
  const trashTalk = generateTrashTalk(id)
  // this will reserve the option that was chosed by user last turn
  isSelected[id] = true
  return res.render('index', { trashTalk })
})



app.listen(port, () => {
  console.log(`The server running on http://localhost:${port}`)
})