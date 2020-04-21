import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('role')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @ManyToMany(
    type => User,
    user => user.roles,
  )
  @JoinTable()
  users: User[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'create_at' })
  createAt: Date;

  @Column({ type: 'timestamp', name: 'update_at' })
  updateAt: Date;
}
