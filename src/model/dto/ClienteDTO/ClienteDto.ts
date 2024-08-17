export class ClienteDto {
    id: number;
    nome: string;
    email: string;
    rua: string;
    numero: number;
    cep: string;
    telefone: string;
    cpf: string;

    constructor(id?: number, nome?: string, email?: string, rua?: string, numero?: number, cep?: string, telefone?: string, cpf?: string) {
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.rua = rua || '';
        this.numero = numero || 0;
        this.cep = cep || '';
        this.telefone = telefone || '';
        this.cpf = cpf || '';
    }
}