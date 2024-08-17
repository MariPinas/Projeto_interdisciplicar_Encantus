import { executarComandoSQL } from "../database/mysql";
import { Evento } from "../model/entity/Evento";


export class EventoRepository {
    public static instance: EventoRepository;

    public static getInstance(): EventoRepository {
        if (!this.instance) {
            this.instance = new EventoRepository();
        }
        return this.instance;
    }
    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS encantus.Evento (
            id INT AUTO_INCREMENT PRIMARY KEY,
            idCliente INT NOT NULL,
            rua VARCHAR(255) NOT NULL,
            numero INT NOT NULL,
            cep VARCHAR(255) NOT NULL,
            nomeAniversariante VARCHAR(255) NOT NULL,
            idFuncionario INT NOT NULL,
            FOREIGN KEY (idCliente) REFERENCES Cliente(id),
            FOREIGN KEY (idFuncionario) REFERENCES Funcionario(id)
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }
   
    async insertEvento(evento:Evento) :Promise<Evento>{
        const query = "INSERT INTO encantus.Evento (idCliente, rua, numero, cep, nomeAniversariante, idFuncionario) VALUES (?,?,?,?,?,?)" ;

        try {
            const resultado = await executarComandoSQL(query, [evento.idCliente, evento.rua, evento.numero, evento.cep, evento.nomeAniversariante, evento.idFuncionario]);
            console.log('Evento inserido com sucesso, ID: ', resultado.insertId);
            evento.id = resultado.insertId;
            return new Promise<Evento>((resolve)=>{
                resolve(evento);
            })
        } catch (err) {
            console.error('Erro ao inserir o evento:', err);
            throw err;
        }
    }

    async updateEvento(evento:Evento) :Promise<Evento>{
        const query = "UPDATE encantus.Evento set idCliente = ?,  rua = ?, numero=?, cep=?, nomeAniversariante=?, idFuncionario=? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [evento.idCliente, evento.rua, evento.numero, evento.cep, evento.nomeAniversariante, evento.idFuncionario, evento.id]);
            console.log('Evento atualizado com sucesso, ID: ', resultado);
            return new Promise<Evento>((resolve)=>{
                resolve(evento);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o evento de ID ${evento.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteEvento(evento:Evento) :Promise<Evento>{
        const query = "DELETE FROM encantus.Evento where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [evento.id]);
            console.log('Evento deletado com sucesso: ', evento);
            return new Promise<Evento>((resolve)=>{
                resolve(evento);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o evento de ID ${evento.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterEvento(id: number) :Promise<Evento[]>{
        const query = "SELECT * FROM encantus.Evento where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Evento localizado com sucesso, ID: ', resultado);
            return new Promise<Evento[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o evento de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterEventoPorIdCliente(idCliente: number) :Promise<Evento>{
        const query = "SELECT * FROM encantus.Evento where idCliente = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [idCliente]);
            console.log('Evento localizado com sucesso, ID de cliente: ', resultado);
            return new Promise<Evento>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o evento de ID ${idCliente} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllEventos() :Promise<Evento[]>{
        const query = "SELECT * FROM encantus.Evento" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Evento[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os eventos gerando o erro: ${err}`);
            throw err;
        }
    }
}