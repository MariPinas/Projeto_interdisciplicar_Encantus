import { Cliente } from "../model/entity/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";


export class ClienteService {

    private clienteRepository = ClienteRepository.getInstance();

    async cadastrarCliente(clienteData: any): Promise<Cliente> {
        const { nome, email, rua, numero, cep, telefone, cpf } = clienteData;


        const clienteExistente = await this.clienteRepository.filterClientePorCpf(cpf);

        if (clienteExistente.length > 0) {
            throw new Error("Já existe uma pessoa cadastrada com esse cpf.");
        }
        const cliente = new Cliente(undefined, nome, email, rua, numero, cep, telefone, cpf)

        const novoCliente = await this.clienteRepository.insertCliente(cliente);
        console.log("Service - Insert ", novoCliente);
        return novoCliente;
    }

    async atualizarCliente(clienteData: any): Promise<Cliente> {
        const { id, nome, email, rua, numero, cep, telefone, cpf } = clienteData;

        const pessoa = await this.clienteRepository.filterCliente(id);
        if (pessoa.length == 0) {
            throw new Error("Cliente informado não existe.");
        }

        const cliente = new Cliente(id, nome, email, rua, numero, cep, telefone, cpf)

        await this.clienteRepository.updateCliente(cliente);
        console.log("Service - Update ", cliente);
        return cliente;
    }

    async deletarCliente(clienteData: any): Promise<Cliente> {
        const { id, nome, email, rua, numero, cep, telefone, cpf } = clienteData;

        const cliente = new Cliente(id, nome, email, rua, numero, cep, telefone, cpf)

        const pessoa = await this.clienteRepository.filterCliente(id);
        if (pessoa.length == 0) {
            throw new Error("Cliente informado não existe.");
        }

        await this.clienteRepository.deleteCliente(cliente);
        console.log("Service - Delete ", cliente);
        return cliente;
    }

    async filtrarCliente(clienteData: any): Promise<Cliente[]> {
        const idNumber = parseInt(clienteData, 10);

        const cliente = await this.clienteRepository.filterCliente(idNumber);
        console.log("Service - Filtrar", cliente);
        return cliente;
    }

    async listarTodosClientes(): Promise<Cliente[]> {
        const cliente = await this.clienteRepository.filterAllCliente();
        console.log("Service - Filtrar Todos", cliente);
        return cliente;
    }
    /*
    async filtrarPorCpf(cpf: string): Promise<Cliente> {
        const cliente = await this.clienteRepository.filterClientePorCpf(cpf);
        console.log("Service - Filtrar por CPF", cliente);
        return cliente;
    } */
}