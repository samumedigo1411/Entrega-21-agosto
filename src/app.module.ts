import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectoresModule } from './director/director.module';
import { PeoresPeliculasModule } from './peores-peliculas/peores-peliculas.module';
import { director } from './director/entities/Director.entity';
import { PeorPelicula } from './peores-peliculas/entities/peores-pelicula.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, 
    }),
    PeoresPeliculasModule,
    DirectoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
