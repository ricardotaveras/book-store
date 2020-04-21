import { Module } from '@nestjs/common';
import { TipoDeClienteController } from './tipo-de-cliente.controller';
import { TipoDeClienteService } from './tipo-de-cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDeCliente } from './tipo-de-cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDeCliente])],
  controllers: [TipoDeClienteController],
  providers: [TipoDeClienteService],
})
export class TipoDeClienteModule {}
