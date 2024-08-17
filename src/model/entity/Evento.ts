export class Evento{
    id: number;
    idCliente: number;
    rua: string;
    numero: number;
    cep: number;
    nomeAniversariante: string;
    idFuncionario: number;

    constructor(id?:number, idCliente?:number, rua?: string, numero?:number, cep?:number, nomeAniversariante?:string, idFuncionario?:number){
        this.validatesInformation(idCliente, rua, numero, cep, nomeAniversariante, idFuncionario);
        this.id = id || 0;
        this.idCliente = idCliente || 0;
        this.rua = rua || '';
        this.numero = numero || 0;
        this.cep = cep || 0;
        this.nomeAniversariante = nomeAniversariante || '';
        this.idFuncionario = idFuncionario || 0;
    }


    private validatesInformation(idCliente:any, rua:any, numero:any, cep:any, nomeAniversariante:any, idFuncionario:any){
        let error ='';
        if (typeof idCliente !=='number' ||typeof rua!=='string'|| typeof numero!=='number'|| typeof cep!=='number'|| typeof nomeAniversariante!=='string'||typeof idFuncionario!=='number') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
    
}
