export class EventoDto{
    id : number;
    idCliente: number;
    rua: string;
    numero: number;
    cep: number;
    nomeAniversariante: string;
    idFuncionario: number;

    constructor(id?:number, idCliente?:number, rua?: string, numero?:number, cep?:number, nomeAniversariante?:string, idFuncionario?:number){
        this.id = id || 0;
        this.idCliente = idCliente || 0;
        this.rua = rua || '';
        this.numero = numero || 0;
        this.cep = cep || 0;
        this.nomeAniversariante = nomeAniversariante || '';
        this.idFuncionario = idFuncionario || 0;
    }
}