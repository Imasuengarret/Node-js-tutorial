const path = require('path')

console.log(path.sep);
const filePath = path.join('/content','first.txt','')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);


const ab = path.resolve(__dirname, 'content', 'first.txt')
console.log(ab);
