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
  app.locals.partials.targets = []
  app.locals.partials.targets.push(...targets.results)
  return res.render('index')
})
app.post('/', (req, res) => {
  const id = req.body.id
  // Generate a trash talk for a target based on it's id
  const trashTalk = generateTrashTalk(id)
  // this will reserve the option that was chosed by user last turn
  const targetList = app.locals.partials.targets.map(target => {
    if (target.id.toString() === id) {
      target.checked = true
    } else {
      target.checked = false
    }
  })
  return res.render('index', { trashTalk })
})



app.listen(port, () => {
  console.log(`The server running on http://localhost:${port}`)
})