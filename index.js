require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/pallav', (req, res) =>{
    res.send('Hello Pallav!')
})
app.get('/palla', (req, res) =>{
    res.send('Hello Pallav!')
})
app.get('/sher', (req, res) =>{
    res.send('<h1>Hello Sher!</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
