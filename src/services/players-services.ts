import { playerModel } from "../models/player-model"
import { statisticPlayer } from "../models/statistics-model"
import { deleteOnePlayer, findAllPlayers, findAllPlayersById, findAndModifyPlayer, insertPlayer} from "../repositories/players-repositoy"






export const getPlayersService = async () => {
    const data = await findAllPlayers()
    
    return data
}

export const getPlayerByIdService = async (id: number) => {
    const data = await findAllPlayersById(id)
    return data
}



export const createPlayerService = async (player: playerModel): Promise<playerModel> => {
    
    const insertPlayers = await insertPlayer(player) 
    
    return insertPlayers
}



export const deletePlayerService = async (id: number) => {
    
 
    return await deleteOnePlayer(id)
}

export const updatePLayerServices =  async (id: number, statistics: statisticPlayer) => {
    const response = await findAndModifyPlayer(id, statistics)
    return response
    
}