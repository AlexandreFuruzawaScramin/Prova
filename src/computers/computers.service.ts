import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Computer } from './entities/computer.entity';
import { Perifericos } from './entities/perifericos.entity';
import { Repository } from 'typeorm';
import { CreateComputerDto } from './dto/create-computer.dto';
import { UpdateComputerDto } from './dto/update-computer.dto';
import { CreatePerifericoDto } from './dto/create-computer.dto';

@Injectable()
export class ComputersService {
  constructor(
    @InjectRepository(Computer)
    private computersRepository: Repository<Computer>,
    @InjectRepository(Perifericos)
    private perifericosRepository: Repository<Perifericos>,
  ) {}

  findAll(): Promise<Computer[]> {
    return this.computersRepository.find({ relations: ['perifericos'] });
  }

  async addPeriferico(createComputerDto: CreateComputerDto): Promise<Computer> {
    const computer = this.computersRepository.create(createComputerDto);
    return this.computersRepository.save(computer);
  }

  findOne(id: number): Promise<Computer | null> {
    return this.computersRepository.findOne({ where: { id }, relations: ['perifericos'] });
  }

  async update(id: number, updateComputerDto: UpdateComputerDto): Promise<Computer> {
    const computer = await this.computersRepository.findOne({ where: { id }, relations: ['perifericos'] });

    if (!computer) {
      throw new Error('Computer not found');
    }

    computer.name = updateComputerDto.name || computer.name;
    computer.color = updateComputerDto.color || computer.color;
    computer.dataFabricacao = updateComputerDto.dataFabricacao || computer.dataFabricacao;

    if (updateComputerDto.perifericos) {
      const perifericosEntities = await Promise.all(
        updateComputerDto.perifericos.map(async (perifericoDto: CreatePerifericoDto) => {
          const periferico = new Perifericos();
          periferico.name = perifericoDto.name;
          return await this.perifericosRepository.save(periferico);
        }),
      );
      computer.perifericos = perifericosEntities;
    }

    return this.computersRepository.save(computer);
  }

  async removePeriferico(id: number): Promise<void> {
    await this.perifericosRepository.delete(id); 
  }

  async removeComputer(id: number): Promise<void> {
    await this.computersRepository.delete(id);
  }
}
