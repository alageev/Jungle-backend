const express = require(`express`)
const path = require(`path`)

const beveragesRouter   = require(`./routes/beverages`)
const foodsRouter = require(`./routes/foods`)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, `public`)))

app.use(`/beverages`,   beveragesRouter)
app.use(`/foods`, foodsRouter)

module.exports = app
