import { executarComandoSQL } from "../database/mysql";
import { Contrato } from "../model/entity/Contrato";


export class ContratoRepository {

    public static instance: ContratoRepository;

    public static getInstance(): ContratoRepository {
        if (!this.instance) {
            this.instance = new ContratoRepository();
        }
        return this.instance;
    }

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS encantus.Contrato (
            id INT AUTO_INCREMENT PRIMARY KEY,
            idCliente INT NOT NULL,
            idEvento INT NOT NULL,
            nomeCliente VARCHAR(255) NOT NULL,
            valorTotal DECIMAL(8,2) NOT NULL,
            FOREIGN KEY (idCliente) REFERENCES Cliente(id)
            FOREIGN KEY (idEvento) REFERENCES Evento(idEvento)
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertContrato(contrato: Contrato): Promise<Contrato> {
        const query = "INSERT INTO encantus.Contrato (idCliente, idEvento, nomeCliente, valorTotal) VALUES (?, ?, ?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [contrato.idCliente, contrato.idEvento, contrato.nomeCliente, contrato.valorTotal]);
            console.log('Contrato inserido com sucesso, ID: ', resultado.insertId);
            contrato.id = resultado.insertId;
            return new Promise<Contrato>((resolve) => {
                resolve(contrato);
            })
        } catch (err) {
            console.error('Erro ao inserir o contrato:', err);
            throw err;
        }
    }

    async updateContrato(contrato: Contrato): Promise<Contrato> {
        const query = "UPDATE encantus.Contrato set idCliente =?, idEvento=?, nomeCliente=?, valorTotal=? where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [contrato.idCliente, contrato.idEvento, contrato.nomeCliente, contrato.valorTotal, contrato.id]);
            console.log('Contrato atualizado com sucesso, ID: ', resultado);
            return new Promise<Contrato>((resolve) => {
                resolve(contrato);
            })
        } catch (err: any) {
            console.error(`Erro ao atualizar o contrato de ID ${contrato.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteContrato(contrato: Contrato): Promise<Contrato> {
        const query = "DELETE FROM encantus.Contrato where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [contrato.id]);
            console.log('Contrato deletado com sucesso: ', contrato);
            return new Promise<Contrato>((resolve) => {
                resolve(contrato);
            })
        } catch (err: any) {
            console.error(`Falha ao deletar o contrato de ID ${contrato.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterContrato(id: number): Promise<Contrato[]> {
        const query = "SELECT * FROM encantus.Contrato where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Contrato localizado com sucesso, ID: ', resultado);
            return new Promise<Contrato[]>((resolve) => {
                resolve(resultado);
            })
        } catch (err: any) {
            console.error(`Falha ao procurar o contrato de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllContrato(): Promise<Contrato[]> {
        const query = "SELECT * FROM encantus.Contrato";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Contrato[]>((resolve) => {
                resolve(resultado);
            })
        } catch (err: any) {
            console.error(`Falha ao listar os contratos gerando o erro: ${err}`);
            throw err;
        }
    }
}