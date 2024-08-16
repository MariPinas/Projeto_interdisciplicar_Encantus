import { Evento } from "../model/entity/Evento";
import { EventoRepository } from "../repository/EventoRepository";

export class EventoService {
    private eventoRepository = EventoRepository.getInstance();

    async cadastrarEvento(eventoData: any): Promise<Evento> {
        const {idCliente, rua, numero, cep, nomeAniversariante, idFuncionario} = eventoData;
        
        const evento = new Evento(undefined, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario)

        const novoEvento =  await this.eventoRepository.insertEvento(evento);
        console.log("Service - Insert ", novoEvento);
        return novoEvento;
    }

    async atualizarEvento(eventoData: any): Promise<Evento> {
        const { id, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario } = eventoData;

        const evento = new Evento(id, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario)

        await this.eventoRepository.updateEvento(evento);
        console.log("Service - Update ", evento);
        return evento;
    }

    async deletarEvento(eventoData: any): Promise<Evento> {
        const { id, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario } = eventoData;

        const evento = new Evento(id, idCliente, rua, numero, cep, nomeAniversariante, idFuncionario)

        await this.eventoRepository.deleteEvento(evento);
        console.log("Service - Delete ", evento);
        return evento;
    }

    async filtrarEvento(eventoData: any): Promise<Evento> {
        const idNumber = parseInt(eventoData, 10);

        const evento =  await this.eventoRepository.filterEvento(idNumber);
        console.log("Service - Filtrar", evento);
        return evento;
    }

    async listarTodasEventos(): Promise<Evento[]> {
        const evento =  await this.eventoRepository.filterAllEvento();
        console.log("Service - Filtrar Todos", evento);
        return evento;
    }   
}