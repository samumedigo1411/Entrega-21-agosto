import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePeorPeliculaDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsInt()
  @IsNotEmpty()
  anoLanzamiento: number;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  directorId: string; }
