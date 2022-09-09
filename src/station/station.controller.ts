import { Controller, Get, Query } from '@nestjs/common';
import { SerachStationDto } from './dto/search-station.dto';
import { StationService } from './station.service';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get()
  search(@Query() query: SerachStationDto) {
    return this.stationService.search(query.start, query.end);
  }
}
