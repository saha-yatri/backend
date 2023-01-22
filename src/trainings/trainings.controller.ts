import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { TrainingsService } from './trainings.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('trainings')
export class TrainingsController {
  constructor(
    private readonly trainingsService: TrainingsService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.trainingsService.create(createTrainingDto);
  }

  @Get()
  findAll() {
    return this.prismaService.training.findMany();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.prismaService.training.findFirst({ where: { id } });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainingDto: UpdateTrainingDto,
  ) {
    return this.trainingsService.update(+id, updateTrainingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingsService.remove(+id);
  }
}
