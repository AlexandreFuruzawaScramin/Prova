import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';
import { Repository } from 'typeorm';
import { CreateComputerDto } from './dto/create-computer.dto';
import { UpdateComputerDto } from './dto/update-computer.dto'

@Injectable()
export class ComputersService {
  constructor(
    @InjectRepository(Computer)
    private usersRepository: Repository<Computer>,
  ) {}

  findAll(): Promise<Computer[]> {
    return this.usersRepository.find();
  }

  async addPeriferico(userDto: CreateComputerDto) {
    await this.usersRepository.save(userDto);
    return userDto;
  }

  async update(id: number, userDto: UpdateComputerDto) {
    await this.usersRepository.update(id, userDto);
  }

  findOne(id: number): Promise<Computer | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async removePeriferico(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}