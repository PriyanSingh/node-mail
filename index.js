const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mail = require('./send-email')
const sendMail = mail.sendVerifyMail;
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/test',()=>{
    console.log('testing')
})
app.post('/api/v1',sendMail)


app.listen(port ,()=>{
    console.log('lets go')
})
