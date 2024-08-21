export class ClienteDto {
    id: number;
    nome: string;
    email: string;
    rua: string;
    numero: number;
    cep: number;
    telefone: string;
    cpf: string;

    constructor(id?: number, nome?: string, email?: string, rua?: string, numero?: number, cep?: number, telefone?: string, cpf?: string) {
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.rua = rua || '';
        this.numero = numero || 0;
        this.cep = cep || 0;
        this.telefone = telefone || '';
        this.cpf = cpf || '';
    }
}