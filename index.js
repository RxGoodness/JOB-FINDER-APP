console.log('Hello World!')
const express = require('express')
const dotenv = require('dotenv').config()

const port = 4000

const app = express();

app.listen(port, ()=>{ console.log(
    `Server started on port ${port}`)
})