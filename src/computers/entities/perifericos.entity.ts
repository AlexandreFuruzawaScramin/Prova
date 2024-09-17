import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Perifericos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}