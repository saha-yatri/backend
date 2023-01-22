import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app.module';
// import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prisma shutdown hook
  // const prismaService = app.get(PrismaService);
  // await prismaService.enableShutdownHooks(app);

  const config = new DocumentBuilder()
    .setTitle('Behavior System')
    .setDescription('The behaviour system API description')
    .setVersion('1.0')
    .addTag('behvaiours')
    .addBearerAuth()
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.log(`Applicaiton is running on: ${await app.getUrl()}`);
}
bootstrap();
