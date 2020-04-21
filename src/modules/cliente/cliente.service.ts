import { Injectable } from '@nestjs/common';
import { Clientes } from './cliente.entity';
import { Repository, FindConditions, FindManyOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Clientes)
    private readonly _clientes: Repository<Clientes>,
  ) {}

  async paginate(
    options: IPaginationOptions,
    searchOptions?: FindConditions<Clientes> | FindManyOptions<Clientes>,
  ): Promise<Pagination<Clientes>> {
    return await paginate<Clientes>(this._clientes, options, {
      relations: ['tipoDeCliente'],
    });
  }
}
