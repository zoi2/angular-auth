const express = require('express');

const cors = require('cors');
 
const app = express();

const dbConnection = require('./db/config')

const path = require('path')

app.use(express.static('public'))

require('dotenv').config();

dbConnection();

app.use(cors());

app.use(express.json());

app.use( '/api/auth', require('./routes/auth') );

app.get('*', (req,resp)=>{
    resp.sendFile(path.resolve(__dirname, 'public/index.html'))
})


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});