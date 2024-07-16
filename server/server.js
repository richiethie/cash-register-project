const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const productsRouter = require('./routes/products')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.use('/products', productsRouter);

app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`)
})