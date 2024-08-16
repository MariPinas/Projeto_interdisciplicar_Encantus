import { Contrato } from "../model/entity/Contrato";
import { ClienteRepository } from "../repository/ClienteRepository";
import { ContratoRepository } from "../repository/ContratoRepository";
import { EventoRepository } from "../repository/EventoRepository";

export class ContratoService {

    private contratoRepository = ContratoRepository.getInstance();
    private clienteRepository = ClienteRepository.getInstance();
    // private eventoRepository = EventoRepository.getInstance();

    async inserirContrato(contratoData: any): Promise<Contrato> {
        const { idCliente, idEvento, nomeCliente, valorTotal } = contratoData;

        const pessoa = await this.clienteRepository.filterCliente(idCliente);
        if (!pessoa) {
            throw new Error("Cliente informado não existe.");
        }
        /*
        const evento = await this.eventoRepository.filterEvento(id);
        if (!evento) {
            throw new Error("Evento informado não existe.");
        } remover dps de criar o evento service e repository*/

        const contrato = new Contrato(undefined, idCliente, idEvento, nomeCliente, valorTotal)

        const novoContrato = await this.contratoRepository.insertContrato(contrato);
        console.log("Service - Insert ", novoContrato);
        return novoContrato;
    }

    async atualizarContrato(contratoData: any): Promise<Contrato> {
        const { id, idCliente, idEvento, nomeCliente, valorTotal } = contratoData;

        const idContrato = await this.contratoRepository.filterContrato(id);
        if (!idContrato) {
            throw new Error("Contrato informado não existe.");
        }
        const pessoa = await this.clienteRepository.filterCliente(idCliente);
        if (!pessoa) {
            throw new Error("Cliente informado não existe.");
        }
        /*
        const evento = await this.eventoRepository.filterEvento(id);
        if (!evento) {
            throw new Error("Evento informado não existe.");
        } remover dps de criar o evento service e repository*/

        const contrato = new Contrato(id, idCliente, idEvento, nomeCliente, valorTotal)

        await this.contratoRepository.updateContrato(contrato);
        console.log("Service - Update ", contrato);
        return contrato;
    }

    async deletarContrato(contratoData: any): Promise<Contrato> {
        const { id, idCliente, idEvento, nomeCliente, valorTotal } = contratoData;

        const idContrato = await this.contratoRepository.filterContrato(id);
        if (!idContrato) {
            throw new Error("Contrato informado não existe.");
        }

        const contrato = new Contrato(id, idCliente, idEvento, nomeCliente, valorTotal)

        await this.contratoRepository.deleteContrato(contrato);
        console.log("Service - Delete ", contrato);
        return contrato;
    }

    async filtrarContrato(contratoData: any): Promise<Contrato> {
        const idNumber = parseInt(contratoData, 10);

        const contrato = await this.contratoRepository.filterContrato(idNumber);
        console.log("Service - Filtrar", contrato);
        return contrato;
    }

    async listarTodosContratos(): Promise<Contrato[]> {
        const contrato = await this.contratoRepository.filterAllContrato();
        console.log("Service - Filtrar Todos", contrato);
        return contrato;
    }
}