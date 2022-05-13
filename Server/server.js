require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.open('open', () => console.log('You are connected to database.'))

app.use(express.json())

const playerRouter = require('./routes/player')
app.use('/player', playerRouter)

app.listen(3000, () => console.log('Server is listening on port http://localhost:3000'))