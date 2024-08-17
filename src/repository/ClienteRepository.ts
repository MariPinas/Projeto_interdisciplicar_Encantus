import { executarComandoSQL } from "../database/mysql";
import { Cliente } from "../model/entity/Cliente";

export class ClienteRepository {

    private static instance: ClienteRepository

    public static getInstance(): ClienteRepository {
        if (!this.instance) {
            this.instance = new ClienteRepository();
        }
        return this.instance;
    }

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS encantus.Cliente (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            rua VARCHAR(255) NOT NULL,
            numero INT NOT NULL,
            cep VARCHAR(255) NOT NULL,
            telefone VARCHAR(11) NOT NULL,
            cpf VARCHAR(14) NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertCliente(cliente: Cliente): Promise<Cliente> {
        const query = "INSERT INTO encantus.Cliente (nome, email, endereco, telefone, cpf) VALUES (?, ?, ?, ?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [cliente.nome, cliente.email, cliente.endereco, cliente.telefone, cliente.cpf]);
            console.log('Cliente inserido com sucesso, ID: ', resultado.insertId);
            cliente.id = resultado.insertId;
            return new Promise<Cliente>((resolve) => {
                resolve(cliente);
            })
        } catch (err) {
            console.error('Erro ao inserir o cliente:', err);
            throw err;
        }
    }

    async updateCliente(cliente: Cliente): Promise<Cliente> {
        const query = "UPDATE encantus.Cliente set nome = ?, email = ?, endereco = ?, telefone= ?, cpf = ? where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [cliente.nome, cliente.email, cliente.endereco, cliente.telefone, cliente.cpf, cliente.id]);
            console.log('Cliente atualizado com sucesso, ID: ', resultado);
            return new Promise<Cliente>((resolve) => {
                resolve(cliente);
            })
        } catch (err: any) {
            console.error(`Erro ao atualizar o cliente de ID ${cliente.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteCliente(cliente: Cliente): Promise<Cliente> {
        const query = "DELETE FROM encantus.Cliente where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [cliente.id]);
            console.log('Cliente deletado com sucesso: ', cliente);
            return new Promise<Cliente>((resolve) => {
                resolve(cliente);
            })
        } catch (err: any) {
            console.error(`Falha ao deletar o cliente de ID ${cliente.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterCliente(id: number): Promise<Cliente[]> {
        const query = "SELECT * FROM encantus.Cliente where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Cliente localizado com sucesso, ID: ', resultado);
            return new Promise<Cliente[]>((resolve) => {
                resolve(resultado);
            })
        } catch (err: any) {
            console.error(`Falha ao procurar o cliente de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllCliente(): Promise<Cliente[]> {
        const query = "SELECT * FROM encantus.Cliente";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Cliente[]>((resolve) => {
                resolve(resultado);
            })
        } catch (err: any) {
            console.error(`Falha ao listar os clientes gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterClientePorCpf(cpf: string): Promise<Cliente[]> {
        const query = "SELECT * FROM encantus.Cliente where cpf = ?";
        try {
            const resultado: Cliente[] = await executarComandoSQL(query, [cpf]);
            console.log('Cliente localizado com sucesso, cpf: ', resultado);
            return new Promise<Cliente[]>((resolve) => {
                resolve(resultado);
            })
        } catch (err: any) {
            console.error(`Falha ao procurar o cliente de CPF ${cpf} gerando o erro: ${err}`);
            throw err;
        }
    }
}