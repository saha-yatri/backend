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

import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Grade, Student } from '@prisma/client';

@Controller('grades')
export class GradesController {
  constructor(
    private readonly gradesService: GradesService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradesService.create(createGradeDto);
  }

  @Get()
  findAll(): Promise<Grade[]> {
    return this.prismaService.grade.findMany();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.prismaService.grade.findUnique({ where: { id: id } });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto) {
    return this.gradesService.update(+id, updateGradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gradesService.remove(+id);
  }

  @Get(':id/students')
  get_students(@Param('id', ParseIntPipe) id: number): Promise<Student[]> {
    return this.prismaService.student.findMany({ where: { gradeId: id } });
  }
}
