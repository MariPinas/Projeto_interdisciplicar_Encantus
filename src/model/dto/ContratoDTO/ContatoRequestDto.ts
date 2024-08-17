export class ContratoRequestDto{
    idCliente: number;
    idEvento: number;
    nomeCliente: string;
    valorTotal: number;

    constructor(idCliente?:number, idEvento?: number, nomeCliente?:string, valorTotal?: number){
        this.idCliente = idCliente || 0;
        this.idEvento = idEvento || 0;
        this.nomeCliente = nomeCliente || '';
        this.valorTotal = valorTotal || 0;
    }
}