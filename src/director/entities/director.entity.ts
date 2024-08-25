import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PeorPelicula } from 'src/peores-peliculas/entities/peores-pelicula.entity';
@Entity()
export class director {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  fechaNacimiento: string;

  @Column()
  nacionalidad: string;

  @Column('text')
  biografia: string;

  @OneToMany(() => PeorPelicula, (peorPelicula) => peorPelicula.director)
  peoresPeliculas: PeorPelicula[];
}


