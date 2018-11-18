const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./configs/config'))
app.use('/api', require('./configs/route'));





app.listen(port, () => console.log(`Example app listening on port ${port}!`))