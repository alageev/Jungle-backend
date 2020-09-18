let express = require(`express`)
let router = express.Router()
const { Client } = require(`pg`)

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

/* GET home page. */
router.get(`/`, (request, response, next) => {
    client.query(`select * from jungle.beverages`)
        .then((data) => {
            response.json(data.rows)
        })
})

module.exports = router
