const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ContactRouter =require('./routers/ContactRouter')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api',ContactRouter)

app.listen(8080,()=>{
    console.log('Server ligado');
    
})