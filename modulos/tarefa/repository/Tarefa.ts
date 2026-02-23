export class Tarefa {
    descricao:string|undefined;
    tempo_conclusao:number|undefined;

    constructor(descricao:string|undefined, tempo_conclusao:number|undefined){
        this.descricao = descricao;
        this.tempo_conclusao = tempo_conclusao;
    }

    public getDescricao = ():string|undefined => {
        return this.descricao;
    }

    public getTempoConclusao = ():number|undefined => {
        return this.tempo_conclusao;
    }
}