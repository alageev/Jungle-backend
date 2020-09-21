const express = require(`express`)
const path = require(`path`)

const beveragesRouter   = require(`./routes/beverages`)
const khachapurisRouter = require(`./routes/khachapuris`)
const patesRouter       = require(`./routes/pates`)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, `public`)))

app.use(`/beverages`,   beveragesRouter)
app.use(`/khachapuris`, khachapurisRouter)
app.use(`/pates`,       patesRouter)

module.exports = app
