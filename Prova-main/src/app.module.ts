import { Module } from '@nestjs/common';
import { ComputersModule } from './computers/computers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Computer } from './computers/entities/computer.entity';
import { Perifericos } from './computers/entities/perifericos.entity';

@Module({
  imports: [ComputersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'computador',
    entities: [Computer,Perifericos],
    synchronize: true,
  }),]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
