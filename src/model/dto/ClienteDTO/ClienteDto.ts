export class ClienteDto {
    id: number;
    nome: string;
    email: string;
    endereco: string;
    telefone: string;
    cpf: string;

    constructor(id?: number, nome?: string, email?: string, endereco?: string, telefone?: string, cpf?: string) {
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.endereco = endereco || '';
        this.telefone = telefone || '';
        this.cpf = cpf || '';
    }
}