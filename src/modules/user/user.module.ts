import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from '../role/role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, RoleRepository])],
})
export class UserModule { }
