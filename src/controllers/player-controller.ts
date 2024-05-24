import { Request, Response } from "express"
import {  createPlayerService, deletePlayerService, getPlayerByIdService, getPlayersService, updatePLayerServices } from "../services/players-services"
import { statisticPlayer } from "../models/statistics-model"


export const getPlayers = async (req: Request, res: Response) => {
    
    const data = await getPlayersService()
    
    
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(404).json("Not Found ")
    }
    }
    
    
    
export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    
    const data = await getPlayerByIdService(id)
    
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(404).json("Not Found ")
    }
    
    }
    
    
export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    
    
    const httpResponse = await createPlayerService(bodyValue)
      
    
    if(Object.keys(httpResponse).length !== 0){
     res.status(201).json(httpResponse)   
    } else {
        res.status(404).json('Bad Request')
    }
 
    
}


export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id)
    
   return res.status(200).json(httpResponse)
}



export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: statisticPlayer = req.body
    
    const httpResponse = await updatePLayerServices(id, bodyValue)
    
    return res.status(200).json(httpResponse)
}


