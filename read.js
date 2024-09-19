const {readFileSync, writeFileSync} = require('fs')

const game = readFileSync('./content/third.txt', 'utf8');
console.log(game);

writeFileSync('./content/gamble.txt', 'shape, king of spade, ice heart', {flog: 'a'})
