import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', function(req, res) {
    res.status(200).send('test')
});

app.use((err, req, res, next) => {
    res.status(500).send('Something broke! Please try again or contact support.')
    console.error(err.stack)
})

app.listen(process.env.APP_PORT, () => {
    console.log('The server is running on Port:', process.env.APP_PORT)
})