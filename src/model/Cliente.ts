export class Cliente{
    id: number;
    nome: string;
    email: string;
    endereco: string;
    telefone: string;
    cpf : string;


    constructor(id?:number, nome?:string, email?:string, endereco?:string, telefone?:string, cpf?:string){
        this.validatesInformation(nome, email, endereco, telefone, cpf);
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.endereco = endereco || '';
        this.telefone = telefone || '';
        this.cpf = cpf || '';
    }

    private validatesInformation(nome:any, email:any, endereco:any, telefone:any, cpf:any){
        let error ='';
        if (typeof nome !== 'string' || typeof email !== 'string' || typeof endereco !== 'string'|| typeof telefone !== 'string'|| typeof cpf !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}