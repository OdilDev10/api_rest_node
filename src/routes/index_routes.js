import { Router } from "express"
import { pool } from '../conexion.js'

const router_index = Router()

router_index.get('/ping', async (req, res) => {
    const result = await pool.query("SELECT * FROM games")
    res.json(result)
})

export default router_index