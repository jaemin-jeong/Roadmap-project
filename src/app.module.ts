import { Module } from '@nestjs/common';
import { StationController } from './station/station.controller';
import { StationService } from './station/station.service';

@Module({
  imports: [],
  controllers: [StationController],
  providers: [StationService],
})
export class AppModule {}
