export interface playerModel {
    id: number,
    nome: string,
    time: string,
    posicao: string,
    nacionalidade: string,
    idade: number,
    statistics: {
    overall: number,
    velocidade: number,
    chute: number,
    passe: number,
    drible: number,
    defesa: number,
    fisico: number,
    }
}

