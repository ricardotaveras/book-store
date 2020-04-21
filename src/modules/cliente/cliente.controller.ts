import { Controller, Get, Query } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Clientes } from './cliente.entity';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly _cliente: ClienteService) { }

  @Get()
  index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 25,
  ): Promise<Pagination<Clientes>> {
    limit = limit > 100 ? 100 : limit;
    return this._cliente.paginate({
      page,
      limit,
      route: 'http://localhost:3000/api/cliente',
    });
  }
}
