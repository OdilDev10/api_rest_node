import express from 'express'
import router_gamer from './routes/routes_games.js'
import router_index from './routes/index_routes.js'


const app = express()
app.use(express.json())


app.use(router_index)
app.use('/api', router_gamer)

app.use((req, res, next) => {
    res.status(404).json({
        message:"URL not found"
    })
})

export default app