let express = require(`express`)
let path = require(`path`)
// let logger = require(`morgan`)


let beveragesRouter = require(`./routes/beverages`)
let foodsRouter = require(`./routes/foods`)

let app = express()

// app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, `public`)))

app.use(`/beverages`, beveragesRouter)
app.use(`/foods`, foodsRouter)

module.exports = app
