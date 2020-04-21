import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TipoDeCliente } from './tipo-de-cliente.entity';
import { TipoDeClienteService } from './tipo-de-cliente.service';

@Controller('tipodecliente')
export class TipoDeClienteController {
  constructor(private readonly _tipoDeClienteService: TipoDeClienteService) {}

  @Get()
  showAll(): Promise<TipoDeCliente[]> {
    return this._tipoDeClienteService.getAll();
  }

  @Get(':compania/:id')
  show(
    @Param('compania') compania: string,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TipoDeCliente> {
    return this._tipoDeClienteService.get(compania, id);
  }
}
