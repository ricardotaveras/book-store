import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoDeCliente } from './tipo-de-cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoDeClienteService {
  constructor(
    @InjectRepository(TipoDeCliente)
    private readonly _tipoDeCliente: Repository<TipoDeCliente>,
  ) {}

  async getAll(): Promise<TipoDeCliente[]> {
    return await this._tipoDeCliente.find({ where: { estado: 'A' } });
  }

  async get(compania: string, id: number): Promise<TipoDeCliente> {
    const tipo = await this._tipoDeCliente.findOne({
      where: { compania, tipo_de_cliente: id },
      relations: ['clientes'],
    });
    if (!tipo) {
      throw new NotFoundException();
    }

    return tipo;
  }
}
