const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.static('./methods-public'))

app.post('/login', (req, res) =>{
    const {name} = req.body;
    if(name) {
        res.status(200).send(`Welcome ${name}`)
    }
    res.status(404).send('please enter name')
    
})

app.listen(7000, () =>{
    console.log('app is listening at port 7000');
    
})