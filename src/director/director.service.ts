import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { director } from './entities/director.entity';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(director)
    private readonly directorRepository: Repository<director>,
  ) {}

  async create(createDirectorDto: CreateDirectorDto): Promise<director> {
    const director = this.directorRepository.create(createDirectorDto);
    return this.directorRepository.save(director);
  }
  

  async findAll(): Promise<director[]> {
    return await this.directorRepository.find();
  }

  async findOne(id: string): Promise<director> {
    const director = await this.directorRepository.findOne({ where: { id } });
    if (!director) {
      throw new NotFoundException(`Director con ID ${id} no encontrado`);
    }
    return director;
  }

  async update(id: string, updateDirectorDto: UpdateDirectorDto): Promise<director> {
    const director = await this.directorRepository.preload({
      id,
      ...updateDirectorDto,
    });

    if (!director) {
      throw new NotFoundException(`Director con ID ${id} no encontrado`);
    }

    await this.directorRepository.save(director);
    return director;
  }

  async remove(id: string): Promise<void> {
    const director = await this.directorRepository.findOne({ where: { id } });
    if (!director) {
      throw new NotFoundException(`Director con ID ${id} no encontrado`);
    }

    await this.directorRepository.remove(director);
  }
}
