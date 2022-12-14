const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./categories.json')
app.get('/', (req, res) => {
    res.send('hellow world')
})
app.get('/news-categories', (req, res) => {
    res.send(categories)
})
app.listen(port, () => {
    console.log('Dragon news is runnig on port:', port)
})