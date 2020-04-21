import {
  Entity,
  PrimaryColumn,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { type } from 'os';
import { TipoDeCliente } from '../tipo-de-cliente/tipo-de-cliente.entity';

@Entity('clientes')
export class Clientes {
  @PrimaryColumn({ length: 4 })
  compania: string;

  @PrimaryGeneratedColumn('increment')
  clienteId: number;

  @Column()
  descripcion: string;

  @Column('varchar', { length: 25, nullable: true })
  telefono: string;

  @ManyToOne(type => TipoDeCliente)
  @JoinColumn([
    { name: 'compania', referencedColumnName: 'compania' },
    { name: 'tipo_de_cliente', referencedColumnName: 'tipo_de_cliente' },
  ])
  tipoDeCliente: TipoDeCliente;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updateAt: Date;

  @Column('varchar', { length: 1, default: 'A' })
  estado: string;
}
