import { ContratoService } from "../service/ContratoService";
import { Body, Controller, Post, Res, Route, Tags, TsoaResponse, Put, Delete, Get, Path } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { ContratoRequestDto } from "../model/dto/ContratoDTO/ContatoRequestDto";
import { ContratoDto } from "../model/dto/ContratoDTO/ContratoDto";

@Route("contrato")
@Tags("Contrato")
export class ContratoController extends Controller {
    contratoService = new ContratoService();

    @Post()
    async inserirContrato(
        @Body() dto: ContratoRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoContrato = await this.contratoService.inserirContrato(dto);
            return sucess(201, new BasicResponseDto("Contrato criado com sucesso", novoContrato));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };

    @Put()
    async atualizarContrato(
        @Body() dto: ContratoDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoContrato = await this.contratoService.atualizarContrato(dto);
            return sucess(201, new BasicResponseDto("Contrato atualizado com sucesso", novoContrato));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Delete()
    async deletarContrato(
        @Body() dto: ContratoDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoContrato = await this.contratoService.deletarContrato(dto);
            return sucess(201, new BasicResponseDto("Contrato deletado com sucesso", novoContrato));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Get("id/{id}")
    async filtrarContrato(
        @Path() id: number,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoContrato = await this.contratoService.filtrarContrato(id);
            return sucess(201, new BasicResponseDto("Contrato encontrado com sucesso", novoContrato));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };


    @Get("all")
    async listarTodosContratos(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const novoContrato = await this.contratoService.listarTodosContratos();
            return sucess(201, new BasicResponseDto("Contratos listados com sucesso", novoContrato));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined))
        }
    };
}