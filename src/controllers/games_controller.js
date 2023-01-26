import { pool } from '../conexion.js'


export const getGames = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM games")
        res.json(result)
    } catch (error) {
        return res.status(500).json({
            message:"Algo salio mal"
        })
    }
}

export const postsGames = async (req, res) => {
   try {
        const {nombre, precio, descripcion} = req.body
        const [rows] = await pool.query("INSERT INTO games (nombre, precio, descripcion) VALUES (?,?,?)", [nombre, precio, descripcion])

        console.log(req.body);
        res.send({
            id: rows.insertId,
            nombre,
            precio,
            descripcion
        })
        // res.json(result)
   } catch (error) {
        return res.status(500).json({
            message:"Algo salio mal"
        })
   }
}

export const putGames = async (req, res) => {
    try {
        const getOne = req.params.id
        const {nombre, precio, descripcion} = req.body
    
        const [result] = await pool.query("UPDATE games SET nombre = IFNULL(?, name), precio = IFNULL(?, precio), descripcion = IFNULL(?, descripcion) WHERE id = ?", [nombre, precio, descripcion,getOne])
        if (result.affectedRows === 0) return res.status(404).json({
            message: "Not Found"
        })
        res.json({message: "Updated"}).status(204)
    } catch (error) {
        return res.status(500).json({
            message:"Algo salio mal"
        })
    }
}

export const getOneGames = async (req, res) => {
    try {
        const getOne = req.params.id
        const [rows] = await pool.query("SELECT * FROM games WHERE id = ?", [getOne])
        if (rows.length <= 0) return res.status(404).json({
            message: "Not Found"
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:"Algo salio mal"
        })
    }
}

export const deleteGames = async (req, res) => {
    try {
        const getOne = req.params.id
        const [result] = await pool.query("DELETE FROM games WHERE id = ?", [getOne])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: "Not Found"
        })
        res.send("Delete Succesfuly").status(204)
    } catch (error) {
        return res.status(500).json({
            message:"Algo salio mal"
        })
    }
}