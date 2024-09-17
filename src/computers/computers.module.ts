import { Module } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { ComputersController } from './computers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Computer])],
  controllers: [ComputersController],
  providers: [ComputersService],
  exports: [TypeOrmModule]
})
export class ComputersModule {}
