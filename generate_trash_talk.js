function sample(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function generateTrashTalk(id) {
  // import task and phrase which will be selected and used to generate trash talk for specific target character
  let trashTalk = ''
  const targets = require('./targets.json')
  const phrases = require('./phrases.json')
  // select correct task for selected character from target list by the target id
  const target = targets.results.filter(target => target.id.toString() === id)[0]
  const character = target.character
  const task = sample(target.task)

  // random select one of phrases
  const phrase = sample(phrases.results)

  // start generating trash talk
  trashTalk = `身為一個${character}, ${task}, ${phrase}吧!`

  // return trash talk
  return trashTalk
}
module.exports = generateTrashTalk