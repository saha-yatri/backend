import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { GradesModule } from './grades/grades.module';
import { TagsModule } from './tags/tags.module';
import { TrainingsModule } from './trainings/trainings.module';

@Module({
  imports: [TeachersModule, StudentsModule, GradesModule, TagsModule, TrainingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
