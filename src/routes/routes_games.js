import { Router } from "express";
import { getGames } from "../controllers/games_controller.js";
import { postsGames } from "../controllers/games_controller.js";
import { putGames } from "../controllers/games_controller.js";
import { getOneGames } from "../controllers/games_controller.js";
import { deleteGames } from "../controllers/games_controller.js";

const router_gamer = Router()

// API GAMES
router_gamer.get('/games', getGames)
router_gamer.post('/games', postsGames)
router_gamer.put('/games/:id', putGames)
router_gamer.patch('/games/:id', putGames)
router_gamer.get('/games/:id', getOneGames)
router_gamer.delete('/games/:id', deleteGames)

export default router_gamer
