import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Perifericos } from './perifericos.entity';

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

  @OneToMany(() => Perifericos, (periferico) => periferico.computer, { cascade: true, onDelete: 'CASCADE' })
  perifericos: Perifericos[];
}