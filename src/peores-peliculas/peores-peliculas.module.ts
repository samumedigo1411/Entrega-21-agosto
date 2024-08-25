import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { PeoresPeliculasController } from './peores-peliculas.controller';
import { PeorPelicula } from './entities/peores-pelicula.entity';
@Module({
  imports: [TypeOrmModule.forFeature([PeorPelicula])],
  providers: [PeoresPeliculasService],
  controllers: [PeoresPeliculasController],
})
export class PeoresPeliculasModule {}
