import { playerModel } from "../models/player-model";
import { statisticPlayer } from "../models/statistics-model";




const database: playerModel[] = [
    {
        id: 1,
        nome: "Lionel Messi",
        time: "Paris Saint-Germain",
        posicao: "Atacante",
        nacionalidade: "Argentina",
        idade: 36,
        statistics: {
            overall: 91,
            velocidade: 85,
            chute: 92,
            passe: 91,
            drible: 95,
            defesa: 34,
            fisico: 65
        }
    },
    {
        id: 2,
        nome: "Cristiano Ronaldo",
        time: "Al Nassr",
        posicao: "Atacante",
        nacionalidade: "Portugal",
        idade: 39,
        statistics: {
            overall: 87,
            velocidade: 82,
            chute: 93,
            passe: 81,
            drible: 84,
            defesa: 35,
            fisico: 75
        }
    },
    {
        id: 3,
        nome: "Kevin De Bruyne",
        time: "Manchester City",
        posicao: "Meio-campista",
        nacionalidade: "Bélgica",
        idade: 32,
        statistics: {
            overall: 91,
            velocidade: 76,
            chute: 86,
            passe: 93,
            drible: 88,
            defesa: 64,
            fisico: 78
        }
    },
    {
        id: 4,
        nome: "Kylian Mbappé",
        time: "Paris Saint-Germain",
        posicao: "Atacante",
        nacionalidade: "França",
        idade: 25,
        statistics: {
            overall: 91,
            velocidade: 97,
            chute: 89,
            passe: 80,
            drible: 92,
            defesa: 39,
            fisico: 76
        }
    },
    {
        id: 5,
        nome: "Robert Lewandowski",
        time: "Barcelona",
        posicao: "Atacante",
        nacionalidade: "Polônia",
        idade: 35,
        statistics: {
            overall: 91,
            velocidade: 78,
            chute: 93,
            passe: 79,
            drible: 85,
            defesa: 45,
            fisico: 82
        }
    },
    {
        id: 6,
        nome: "Virgil van Dijk",
        time: "Liverpool",
        posicao: "Zagueiro",
        nacionalidade: "Holanda",
        idade: 32,
        statistics: {
            overall: 90,
            velocidade: 74,
            chute: 60,
            passe: 71,
            drible: 70,
            defesa: 91,
            fisico: 86
        }
    },
    {
        id: 7,
        nome: "Neymar Jr.",
        time: "Paris Saint-Germain",
        posicao: "Atacante",
        nacionalidade: "Brasil",
        idade: 32,
        statistics: {
            overall: 89,
            velocidade: 88,
            chute: 85,
            passe: 84,
            drible: 93,
            defesa: 37,
            fisico: 60
        }
    },
    {
        id: 8,
        nome: "Luka Modrić",
        time: "Real Madrid",
        posicao: "Meio-campista",
        nacionalidade: "Croácia",
        idade: 38,
        statistics: {
            overall: 88,
            velocidade: 72,
            chute: 76,
            passe: 89,
            drible: 89,
            defesa: 71,
            fisico: 65
        }
    },
    {
        id: 9,
        nome: "Erling Haaland",
        time: "Manchester City",
        posicao: "Atacante",
        nacionalidade: "Noruega",
        idade: 23,
        statistics: {
            overall: 91,
            velocidade: 89,
            chute: 94,
            passe: 71,
            drible: 80,
            defesa: 45,
            fisico: 88
        }
    }
]


export const findAllPlayers = async (): Promise<playerModel[]> => {
    return database;
}


export const findAllPlayersById = async (id: number): Promise<playerModel | undefined>  => {
    return database.find((p) => p.id === id ) 
}



export const insertPlayer = async (player: playerModel): Promise<playerModel> => {
    database.push(player);
    return player
}



export const deleteOnePlayer = async (id: number) => {
 const index = database.findIndex((p) => p.id === id)
 
 if(index !== -1) {
    database.splice(index, 1)
    return {message: "Sucess"}
 } else {
   return {message: "player not found"}
 }
}


export const findAndModifyPlayer = async (id: number, statistics: statisticPlayer) => {
    const playerIndex = database.findIndex((p) => p.id === id)
    
    if(playerIndex !== -1) {
        database[playerIndex].statistics = statistics
        
        return database[playerIndex];
    }
    
   
}
