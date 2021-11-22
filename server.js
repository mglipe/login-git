const express = require('express')
const routes = require('./routes/routes')
const app = express()
const connection = require('./database/index')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

try{
    connection.authenticate()
    console.log('connection has been established successfuly')
}catch(err){
    console.log(err)
}



app.use(routes)
app.listen(8080)
console.log('open server')








