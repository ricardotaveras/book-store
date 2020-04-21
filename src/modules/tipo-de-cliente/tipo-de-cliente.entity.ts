import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { type } from 'os';
import { Clientes } from '../cliente/cliente.entity';

@Entity('tipo_de_cliente')
export class TipoDeCliente {
  @PrimaryColumn({ length: 4 })
  compania: string;

  @PrimaryGeneratedColumn('increment')
  tipo_de_cliente: number;

  @Column()
  descripcion: string;

  @OneToMany(
    type => Clientes,
    c => c.tipoDeCliente,
  )
  clientes?: Clientes[];

  @CreateDateColumn({ name: 'creado_en' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updateAt: Date;

  @Column('varchar', { length: 1, default: 'A' })
  estado: string;
}
