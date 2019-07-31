import path from 'path'
import express from 'express'
import cypherController from './controllers/cypherController'

const app = express(),
      DIST_DIR = __dirname

app.use('/cypher', cypherController)

app.get('/', (req, res) => {
    res.send('This is a cypher api.')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})