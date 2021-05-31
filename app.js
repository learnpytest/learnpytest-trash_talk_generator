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
  const targetID = Object.keys(req.body)[0]
  // target[0].task[0] phrase[0] 數字之後以隨機數取代
  // 放入一個陣列，找到陣列中id相符的元素
  const trashTalk = generateTrashTalk(targetID)
  res.render('index', { trashTalk })
})

app.listen(port, () => {
  console.log(`The server running on http://localhost:${port}`)
})