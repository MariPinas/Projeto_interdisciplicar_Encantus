export class Cliente {
    id: number;
    nome: string;
    email: string;
    rua: string;
    numero: number;
    cep: number;
    telefone: string;
    cpf: string;

    constructor(id?: number, nome?: string, email?: string, rua?: string, numero?: number, cep?: number, telefone?: string, cpf?: string) {
        this.validatesInformation(nome, email, rua, numero, cep, telefone, cpf);
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.rua = rua || '';
        this.numero = numero || 0;
        this.cep = cep || 0;
        this.telefone = telefone || '';
        this.cpf = cpf || '';
    }

    private validatesInformation(nome: any, email: any, rua: any, numero: any, cep: any, telefone: any, cpf: any) {
        let error = '';
        if (typeof nome !== 'string' || typeof email !== 'string' || typeof rua !== 'string' || typeof numero !== 'number' || typeof cep !== 'number' || typeof telefone !== 'string' || typeof cpf !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if (error != '') {
            throw new Error(error);
        }
    }
}