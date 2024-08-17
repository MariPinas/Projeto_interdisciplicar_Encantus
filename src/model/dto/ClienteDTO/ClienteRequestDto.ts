export class ClienteRequestDto {
    nome: string;
    email: string;
    endereco: string;
    telefone: string;
    cpf: string;

    constructor(nome?: string, email?: string, endereco?: string, telefone?: string, cpf?: string) {
        this.nome = nome || '';
        this.email = email || '';
        this.endereco = endereco || '';
        this.telefone = telefone || '';
        this.cpf = cpf || '';
    }
}