const {writeFileSync, readFileSync} = require('fs')

const fourth = readFileSync('./content/work1.txt', 'utf8')
console.log(fourth)

writeFileSync('./content/work2.txt','A written file by writeFileSync', {flag: 'a'})