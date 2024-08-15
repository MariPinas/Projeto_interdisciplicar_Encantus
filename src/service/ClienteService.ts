import { Cliente } from "../model/entity/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";

export class ClienteService {
    /*
    clienteRepository: ClienteRepository = new ClienteRepository(); //

    async cadastrarCliente(clienteData: any): Promise<Cliente> {
        const { nome, email, senha } = clienteData;
        
        const cliente = new Cliente(undefined, nome, email, senha)

        const novoCliente =  await this.clienteRepository.insertCliente(cliente);
        console.log("Service - Insert ", novoCliente);
        return novoCliente;
    }

    async atualizarCliente(clienteData: any): Promise<Cliente> {
        const { id, nome, email, senha } = clienteData;

        const cliente = new Cliente(id, nome, email, senha)

        await this.clienteRepository.updateCliente(cliente);
        console.log("Service - Update ", cliente);
        return cliente;
    }

    async deletarCliente(clienteData: any): Promise<Cliente> {
        const { id, nome, email, senha } = clienteData;

        const cliente = new Cliente(id, nome, email, senha)

        await this.clienteRepository.deleteCliente(cliente);
        console.log("Service - Delete ", cliente);
        return cliente;
    }

    async filtrarCliente(clienteData: any): Promise<Cliente> {
        const idNumber = parseInt(clienteData, 10);

        const cliente =  await this.clienteRepository.filterCliente(idNumber);
        console.log("Service - Filtrar", cliente);
        return cliente;
    }

    async listarTodosClientes(): Promise<Cliente[]> {
        const cliente =  await this.clienteRepository.filterAllCliente();
        console.log("Service - Filtrar Todos", cliente);
        return cliente;
    }
    */
}