import { Body, Controller, Post, Res, Route, Tags, TsoaResponse } from "tsoa";
import { ClienteService } from "../service/ClienteService";
import { ClienteRequestDto } from "../model/dto/ClienteRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";


@Route("cliente")
@Tags("Cliente")
export class ClienteController extends Controller{
    clienteService = new ClienteService();

@Post()
  async cadastrarCliente (
    @Body() dto: ClienteRequestDto,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() sucess: TsoaResponse<201, BasicResponseDto> 

):Promise<void>{
    try {
        const novoCliente = await this.clienteService.cadastrarCliente(dto);
        return sucess(201, new BasicResponseDto("Produto criado com sucesso", novoCliente));
    } catch (error: any) {
        return fail(400, new BasicResponseDto(error.message, undefined))
    }
};
/*
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
*/
}