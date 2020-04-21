import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { TipoDeClienteModule } from './modules/tipo-de-cliente/tipo-de-cliente.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, RoleModule, ClienteModule, TipoDeClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get('PORT');
  }
}
