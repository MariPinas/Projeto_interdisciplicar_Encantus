export class ClienteRequestDto {
    nome: string;
    email: string;
    rua: string;
    numero: number;
    cep: number;
    telefone: string;
    cpf: string;

    constructor(nome?: string, email?: string, rua?: string, numero?: number, cep?: number, telefone?: string, cpf?: string) {
        this.nome = nome || '';
        this.email = email || '';
        this.rua = rua || '';
        this.numero = numero || 0;
        this.cep = cep || 0;
        this.telefone = telefone || '';
        this.cpf = cpf || '';
    }
}