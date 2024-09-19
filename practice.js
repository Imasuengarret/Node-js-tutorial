const {readFile, writeFile} = require('fs')

console.log('start work');

readFile('./content/gamble.txt', 'utf8', (err, result) =>{
    if (err) {
       console.log(err);
        return 
    } 
    const first = result;
    readFile('./content/first.txt', 'utf8', (err, result) =>{
        if (err) {
            console.log(err);
          return  
        }
         const second = result;
    })
    writeFile('./content/gatyu.txt', `here it is gutz`, (err, result)=>{
        if (err) {
            console.log('err');
            return
        }
         console.log('task is done');
        
    } )
})
console.log('next project can start now');

