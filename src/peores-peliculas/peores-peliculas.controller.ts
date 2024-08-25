import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { CreatePeorPeliculaDto } from './dto/create-peores-pelicula.dto';
import { UpdatePeoresPeliculaDto } from './dto/update-peores-pelicula.dto';

@Controller('lavesyteaburres/peor_pelicula')
export class PeoresPeliculasController {
  constructor(private readonly peoresPeliculasService: PeoresPeliculasService) {}

  @Post()
  create(@Body() createPeoresPeliculaDto: CreatePeorPeliculaDto) {
    return this.peoresPeliculasService.create(createPeoresPeliculaDto);
  }

  @Get()
  findAll() {
    return this.peoresPeliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peoresPeliculasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeoresPeliculaDto: UpdatePeoresPeliculaDto) {
    return this.peoresPeliculasService.update(id, updatePeoresPeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peoresPeliculasService.remove(id);
  }
}
function AuthGuard(): Function | import("@nestjs/common").CanActivate {
  throw new Error('Function not implemented.');
}

