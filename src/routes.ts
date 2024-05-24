import { Router } from "express";
import { deletePlayer, getPlayerById, getPlayers, postPlayer, updatePlayer } from "./controllers/player-controller";


const router = Router();


router.get("/players", getPlayers)
router.get("/players/:id", getPlayerById)
router.post("/players", postPlayer)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayer)


export default router