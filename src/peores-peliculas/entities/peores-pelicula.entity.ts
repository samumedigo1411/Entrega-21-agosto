import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { director } from 'src/director/entities/Director.entity';
@Entity()
export class PeorPelicula {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  anoLanzamiento: number;

  @Column()
  genero: string;

  @Column('text')
  descripcion: string;

  @ManyToOne(() => director, (director) => director.peoresPeliculas)
  director: director;
}


