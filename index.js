const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())

let count = 0

// LOGICA
let data;
const readFile = async () => {
    try {
        data = await fs.promises.readFile('./path.txt', 'utf-8')
    } catch (e) {
        console.log('upss')
    }
}

readFile()

app.get('/1', (req, res) => {
    count += 1
    res.json({
        counter: count
    })
})

app.get('/2', (req, res) => {
    res.json({
        mensaje: '/2'
    })
})

app.get('/3', (req, res) => {
    res.json({
        mensaje: '/3'
    })
})


app.listen( 3233, () => {
    console.log('Running!')
})
