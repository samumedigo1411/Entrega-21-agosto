import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { director } from './entities/Director.entity';
@Module({
  imports: [TypeOrmModule.forFeature([director])],
  providers: [DirectorService],
  controllers: [DirectorController],
})
export class DirectoresModule {}
