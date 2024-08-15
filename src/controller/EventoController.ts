import { Body, Controller, Post, Res, Route, Tags, TsoaResponse, Put, Delete, Get, Query } from "tsoa";
import { EventoService } from "../service/EventoService";
import { EventoRequestsDto } from "../model/dto/EventoRequestsDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("evento")
@Tags("Evento")
export class EventoController extends Controller {
    eventoService = new EventoService();

    @Post()
    async inserirEvento(
        @Body() dto: EventoRequestsDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.inserirEVento(dto);
            return sucess(201, new BasicResponseDto("Evento criado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Put()
    async atualizarEvento(
        @Body() dto: EventoRequestsDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.atualizarEvento(dto);
            return sucess(201, new BasicResponseDto("Evento atualizado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Delete()
    async deletarCliente(
        @Body() dto: EventoRequestsDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.deletarEvento(dto);
            return sucess(201, new BasicResponseDto("Evento deletado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Get()
    async filtrarCliente(
        @Query() id: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.filtrarEvento(id);
            return sucess(201, new BasicResponseDto("Evento encontrado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Get()
    async listarTodosEventos(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.listarTodosEventos();
            return sucess(201, new BasicResponseDto("Eventos listados com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };
}