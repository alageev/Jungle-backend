const express = require(`express`)
const path = require(`path`)

const beveragesRouter = require(`./routes/beverages`)
const eventsRouter = require(`./routes/events`)
const foodsRouter = require(`./routes/foods`)
const aasaRouter = require(`./routes/aasa`)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, `public`)))

app.use(`/beverages`, beveragesRouter)
app.use(`/events`, eventsRouter)
app.use(`/foods`, foodsRouter)
app.use(`/apple-app-site-association`, aasaRouter)

module.exports = app
