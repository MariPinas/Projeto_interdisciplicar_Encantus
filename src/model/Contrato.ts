export class Contrato{
    id: number;
    idCliente: number;
    idEvento: number;
    nomeCliente: string;
    valorTotal: number;


    constructor(id?:number, idCliente?:number, idEvento?: number, nomeCliente?:string, valorTotal?: number){
        this.validatesInformation(idCliente, idEvento, nomeCliente, valorTotal );
        this.id = id || 0;
        this.idCliente = idCliente || 0;
        this.idEvento = idEvento || 0;
        this.nomeCliente = nomeCliente || '';
        this.valorTotal = valorTotal || 0;
    }

    private validatesInformation(idCliente:any, idEvento:any, nomeCliente:any, valorTotal: any){
        let error ='';
        if (typeof idCliente !== 'number' || typeof idEvento !== 'number' || typeof nomeCliente !== 'string' || typeof valorTotal !== 'number' ) {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}