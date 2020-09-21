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


router.get(`/`, (request, response) => {
    client.query(`select * from jungle.foods where type = 'Pate'`)
        .then((data) => {
            response.json(data.rows)
        })
})

module.exports = router

