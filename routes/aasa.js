const express = require(`express`)
const router = express.Router()
const { Client } = require(`pg`)

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

router.get(`/`, (request, response) => {
    response.json({
        "applinks": {
            "apps": [],
            "details": [{
                "appID": "94U9UR9TXD.com.alageev.Jungle",
                "paths": ["*"]
            }]
        },
        "appclips": {
            "apps": ["94U9UR9TXD.com.alageev.Jungle.Clip"]
        }
    })
})

module.exports = router

