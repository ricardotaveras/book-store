import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './cliente.entity';
import { TipoDeCliente } from '../tipo-de-cliente/tipo-de-cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes, TipoDeCliente])],
  providers: [ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}
