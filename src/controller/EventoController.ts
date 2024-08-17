import { Body, Controller, Post, Res, Route, Tags, TsoaResponse, Put, Delete, Get, Path } from "tsoa";
import { EventoService } from "../service/EventoService";
import { EventoRequestDto} from "../model/dto/EventoDTO/EventoRequestDto";
import { EventoDto } from "../model/dto/EventoDTO/EventoDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("evento")
@Tags("Evento")
export class EventoController extends Controller {
    eventoService = new EventoService();

    @Post()
    async inserirEvento(
        @Body() dto: EventoRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.cadastrarEvento(dto);
            return sucess(200, new BasicResponseDto("Evento criado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Put()
    async atualizarEvento(
        @Body() dto: EventoDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.atualizarEvento(dto);
            return sucess(200, new BasicResponseDto("Evento atualizado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Delete()
    async deletarEvento(
        @Body() dto: EventoDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.deletarEvento(dto);
            return sucess(200, new BasicResponseDto("Evento deletado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Get("id/{id}")
    async filtrarEvento(
        @Path() id: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.filtrarEvento(id);
            return sucess(200, new BasicResponseDto("Evento encontrado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Get("idCliente")
    async filtrarEventoPorIdCliente(
        @Path() idCliente: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.filtrarEventoPorIdCliente(idCliente);
            return sucess(200, new BasicResponseDto("Evento encontrado com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Get("all")
    async listarTodosEventos(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoEvento = await this.eventoService.listarTodosEventos();
            return sucess(200, new BasicResponseDto("Eventos listados com sucesso", novoEvento));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };
}
