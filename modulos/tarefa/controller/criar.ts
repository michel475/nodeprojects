import pkg from "express"
const {Request, Response } = pkg

type tarefa = {
        descricao:string,
        tempo:number,
}

const arrayTarefas = [];

export const criarTarefa = (req:Request, res:Response):void => {
        arrayTarefas.push(req.body);
}

export const consultarTarefas = (req:Request, res:Response) => {
        arrayTarefas.forEach((tarefa) => {
                console.log(`Tarefa ${tarefa.descricao} e o tempo total é de ${tarefa.tempo}`);
        })
}