const express = require('express');
const app = express()

app.get('/', (req, res)=> res.send('Hello World this is mahesh'));

const portn = process.env.port || 3000;
app.listen(portn, ()=>{
    console.log('my api is running on '+ portn);
})