import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Perifericos } from '../entities/perifericos.entity';

@Entity()
export class Computer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  dataFabricacao: number;
}
