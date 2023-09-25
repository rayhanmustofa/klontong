const express = require('express')
const app = express()
const cors = require(`cors`)
const { User, Inventory } = require(`./models`)
const bcryptjs = require(`bcryptjs`)
const jwt = require(`jsonwebtoken`)

const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use("/", require("./routes"));

module.exports = app