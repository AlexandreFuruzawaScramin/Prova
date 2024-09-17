import { Module } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { ComputersController } from './computers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';
import { Perifericos } from './entities/perifericos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Computer,Perifericos])],
  controllers: [ComputersController],
  providers: [ComputersService],
  exports: [TypeOrmModule]
})
export class ComputersModule {}
