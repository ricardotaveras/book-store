import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from '../role/role.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @ManyToMany(
    type => Role,
    role => role.users,
  )
  @JoinTable({ name: 'user_roles' })
  roles: Role[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'create_at' })
  createAt: Date;

  @Column({ type: 'timestamp', name: 'update_at' })
  updateAt: Date;
}
