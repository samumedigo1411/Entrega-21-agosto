import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDirectorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  fechaNacimiento: string;

  @IsNotEmpty()
  @IsString()
  nacionalidad: string;

  @IsNotEmpty()
  @IsString()
  biografia: string;
}
