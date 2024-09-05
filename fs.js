const { writeFileSync, readFileSync} = require('fs')


const first = readFileSync('./content/first.txt','utf8')
console.log(first)

// writeSync file

const second  = readFileSync('./content/second.txt', 'utf8')
console.log(second)

writeFileSync('./content/third.txt', `Here is the result: ${first}, ${second}`,{flag: 'a'})
const third = readFileSync('./content/third.txt', 'utf8')

console.log(third)
