export class Contrato{
    id: number;
    idCliente: number;
    idEvento: number;
    nomeCliente: string;
    valorTotal: number;

    constructor(id?:number, idCliente?:number, idEvento?: number, nomeCliente?:string, valorTotal?: number){
        this.id = id || 0;
        this.idCliente = idCliente || 0;
        this.idEvento = idEvento || 0;
        this.nomeCliente = nomeCliente || '';
        this.valorTotal = valorTotal || 0;
    }
}