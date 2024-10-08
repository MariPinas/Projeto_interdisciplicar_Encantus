import { Body, Controller, Post, Res, Route, Tags, TsoaResponse, Put, Delete, Get, Path } from "tsoa";
import { ClienteService } from "../service/ClienteService";
import { ClienteRequestDto } from "../model/dto/ClienteDTO/ClienteRequestDto";
import { ClienteDto } from "../model/dto/ClienteDTO/ClienteDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";


@Route("cliente")
@Tags("Cliente")
export class ClienteController extends Controller {
    clienteService = new ClienteService();

    @Post()
    async cadastrarCliente(
        @Body() dto: ClienteRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>

    ): Promise<void> {
        try {
            const novoCliente = await this.clienteService.cadastrarCliente(dto);
            return sucess(201, new BasicResponseDto("Cliente criado com sucesso", novoCliente));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Put()
    async atualizarCliente(
        @Body() dto: ClienteDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoCliente = await this.clienteService.atualizarCliente(dto);
            return sucess(201, new BasicResponseDto("Cliente atualizado com sucesso", novoCliente));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Delete()
    async deletarCliente(
        @Body() dto: ClienteDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoCliente = await this.clienteService.deletarCliente(dto);
            return sucess(201, new BasicResponseDto("Cliente deletado com sucesso", novoCliente));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Get("id/{id}")
    async filtrarCliente(
        @Path() id: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoCliente = await this.clienteService.filtrarCliente(id);
            return sucess(201, new BasicResponseDto("Cliente encontrado com sucesso", novoCliente));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Get("all")
    async listarTodosCliente(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoCliente = await this.clienteService.listarTodosClientes();
            return sucess(201, new BasicResponseDto("Cliente listados com sucesso", novoCliente));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };
}