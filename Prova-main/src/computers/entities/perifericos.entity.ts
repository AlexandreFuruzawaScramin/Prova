import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Computer } from './computer.entity';

@Entity()
export class Perifericos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Computer, (computer) => computer.perifericos)
  computer: Computer;
}