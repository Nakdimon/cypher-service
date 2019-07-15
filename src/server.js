import path from 'path'
import express from 'express'
const app = express(),
            DIST_DIR = __dirname            
app.use(express.static(DIST_DIR))

app.get('/', function (req, res) {
 return res.send('Hello world');
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})