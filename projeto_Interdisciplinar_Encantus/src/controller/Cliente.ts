import { Request, Response } from "express";
import { ClienteService } from "../service/Cliente";

const clienteService = new ClienteService();

export async function cadastrarCliente (req: Request, res: Response){
    try {
        const novoCliente = await clienteService.cadastrarCliente(req.body);
        res.status(201).json(
            {
                mensagem:"Cliente adicionado com sucesso!",
                cliente:novoCliente
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarCliente (req: Request, res: Response){
    try {
        const cliente = await clienteService.atualizarCliente(req.body);
        res.status(200).json(
            {
                mensagem:"Cliente atualizado com sucesso!",
                cliente:cliente
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarCliente (req: Request, res: Response){
    try {
        const cliente = await clienteService.deletarCliente(req.body);
        res.status(200).json(
            {
                mensagem:"Cliente deletado com sucesso!",
                cliente:cliente
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function filtrarCliente (req: Request, res: Response){
    try {
        const cliente = await clienteService.filtrarCliente(req.query.id);
        res.status(200).json(
            {
                mensagem:"Cliente encontrado com sucesso!",
                cliente:cliente
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function listarTodosClientes (req: Request, res: Response){
    try {
        const clientes = await clienteService.listarTodosClientes();
        res.status(200).json(
            {
                mensagem:"Clientes listados com sucesso!",
                clientes:clientes
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};