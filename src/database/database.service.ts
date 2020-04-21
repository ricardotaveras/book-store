import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: false,
        type: 'postgres',
        host: config.get('HOST'),
        port: config.get('PORT_DB'),
        username: config.get('USERNAME'),
        password: config.get('PASSWORD'),
        database: config.get('DATABASE'),
        entities: ['dist/**/*.entity.js'],
        // entities: ['dist/**/*.entity.js'],
        logging: true,
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + 'src/database/migrations/*{.ts,.js}'],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
      } as ConnectionOptions;
    },
  }),
];
