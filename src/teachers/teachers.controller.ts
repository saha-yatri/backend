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

import { TeachersService } from './teachers.service';
import { CreateTeacherDto, LoginTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

import {
  Teacher,
  Grade,
  Routine,
  Level,
  Tag,
  Behaviour,
  Student,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('teachers')
export class TeachersController {
  constructor(
    private readonly teachersService: TeachersService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Post('login')
  async login(@Body() loginTeacherDto: LoginTeacherDto) {
    const foundUser = await this.prismaService.teacher.findFirst({
      where: {
        phone: loginTeacherDto.phone_number,
      },
    });

    console.log('found user is ', foundUser);
    return 'k xa fucche haru';
  }

  @Get()
  async findAll() {
    return this.prismaService.teacher.findMany({
      select: {
        name: true,
        grade: true,
        level: true,
        address: true,
        email: true,
        phone: true,
        photoUrl: true,
      },
    });
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Teacher> {
    return this.prismaService.teacher.findUnique({
      where: {
        id: id,
      },
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teachersService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersService.remove(+id);
  }
}
