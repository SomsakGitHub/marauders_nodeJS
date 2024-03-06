const redis = require("redis")

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT))

// initialize using default config
const RedisClient = redis.createClient()

const connectRedis = async () => {
    // connect to redis
    await RedisClient.connect()

    // handle error
    RedisClient.on('error', (err) => {
        console.error(`An error occurred with Redis: ${err}`)
    })

    console.log('Redis connected successfully...')

    await RedisClient.set("name", "Timmy")
}

connectRedis()
