import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeorPelicula } from './entities/peores-pelicula.entity';
import { CreatePeorPeliculaDto } from './dto/create-peores-pelicula.dto';
import { UpdatePeoresPeliculaDto } from './dto/update-peores-pelicula.dto';

@Injectable()
export class PeoresPeliculasService {
  constructor(@InjectRepository(PeorPelicula)
    private readonly peoresPeliculaRepository: Repository<PeorPelicula>,
  ) {}

  async create(createPeoresPeliculaDto: CreatePeorPeliculaDto) {
    const peoresPelicula = this.peoresPeliculaRepository.create(createPeoresPeliculaDto);
    await this.peoresPeliculaRepository.save(peoresPelicula);
    return peoresPelicula;
  }

  async findAll() {
    const peoresPeliculas = await this.peoresPeliculaRepository.find();
    return peoresPeliculas;
  }

  async findOne(id: string) {
    const peorPelicula = await this.peoresPeliculaRepository.findOneBy({ id });
    if (!peorPelicula) {
      throw new NotFoundException(`Peor película con ID #${id} no se encontró`);
    }
    return peorPelicula;
  }

  async update(id: string, updatePeoresPeliculaDto: UpdatePeoresPeliculaDto) {
    const peoresPelicula = await this.peoresPeliculaRepository.preload({
     id,
      ...updatePeoresPeliculaDto,
    });
    if (!peoresPelicula) {
      throw new NotFoundException(`Peor película con ID #${id} no se encontró`);
    }
    await this.peoresPeliculaRepository.save(peoresPelicula);
    return peoresPelicula;
  }

  async remove(id: string) {
    const peoresPeliculas = await this.peoresPeliculaRepository.delete(id);
    return peoresPeliculas;
  }
}
