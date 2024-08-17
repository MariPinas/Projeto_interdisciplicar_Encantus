import { Evento } from "../model/entity/Evento";
import { ClienteRepository } from "../repository/ClienteRepository";
import { EventoRepository } from "../repository/EventoRepository";

export class EventoService {
    private eventoRepository = EventoRepository.getInstance();
    private clienteRepository = ClienteRepository.getInstance();

    async cadastrarEvento(eventoData: any): Promise<Evento> {
        const {idCliente, rua, numero, cep, nomeAniversariante, idFuncionario} = eventoData;
        
        const evento = new Evento(undefined, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario)
        const eventoDeIdClienteExistente = await this.clienteRepository.filterCliente(idCliente);
        if (eventoDeIdClienteExistente.length == 0) {
            throw new Error("Evento nao pode ser cadastrado, cliente nao existe.");
        }
        /*
        nao foi checado que funcionario existe antes pois deviamos escolher 3 entidades e nao escolhemos implementar essa entidade
        mas ficaria desta forma:
        const eventoDeIdFuncionarioExistente = await this.funcionarioRepository.filterFuncionario(idFuncionario);
        if (eventoDeIdFuncionarioExistente.length == 0) {
            throw new Error("Evento nao pode ser cadastrado, funcionario nao existe.");
        }*/
        const novoEvento =  await this.eventoRepository.insertEvento(evento);
        console.log("Service - Insert ", novoEvento);
        return novoEvento;
    }

    async atualizarEvento(eventoData: any): Promise<Evento> {
        const { id, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario } = eventoData;

        const evento = new Evento(id, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario)
        const eventoExistente = await this.eventoRepository.filterEvento(id);
        if (eventoExistente.length == 0) {
            throw new Error("Evento nao pode ser atualizado, ele nao existe.");
        }

        await this.eventoRepository.updateEvento(evento);
        console.log("Service - Update ", evento);
        return evento;
    }

    async deletarEvento(eventoData: any): Promise<Evento> {
        const { id, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario } = eventoData;

        const evento = new Evento(id, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario)

        const eventoExistente = await this.eventoRepository.filterEvento(id);
        if (eventoExistente.length == 0) {
            throw new Error("Evento nao pode ser deletado, ele nao existe.");
        }
        await this.eventoRepository.deleteEvento(evento);
        console.log("Service - Delete ", evento);
        return evento;
    }

    async filtrarEvento(eventoData: any): Promise<Evento[]> {
        const idNumber = parseInt(eventoData, 10);

        const evento =  await this.eventoRepository.filterEvento(idNumber);
        console.log("Service - Filtrar", evento);
        return evento;
    }

    async filtrarEventoPorIdCliente(eventoData: any): Promise<Evento[]> {
        const idNumber = parseInt(eventoData, 10);

        const evento =  await this.eventoRepository.filterEvento(idNumber);
        console.log("Service - Filtrar", evento);
        return evento;
    }

    async listarTodosEventos(): Promise<Evento[]> {
        const evento =  await this.eventoRepository.filterAllEventos();
        console.log("Service - Filtrar Todos", evento);
        return evento;
    }   
}