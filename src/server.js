import path from 'path'
import express from 'express'
import cypherController from './controllers/cypherController'
import bodyParser from 'body-parser'

const app = express(),
      DIST_DIR = __dirname

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(DIST_DIR+'\\src'))
app.use('/cypher', cypherController)

app.get('/', (req, res) => {
    res.send('This is a cypher api.')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})