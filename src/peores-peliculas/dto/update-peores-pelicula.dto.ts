import { PartialType } from '@nestjs/mapped-types';
import { CreatePeorPeliculaDto } from './create-peores-pelicula.dto';

export class UpdatePeoresPeliculaDto extends PartialType(CreatePeorPeliculaDto) {}
