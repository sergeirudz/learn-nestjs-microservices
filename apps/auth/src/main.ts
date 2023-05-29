import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove passed properties that are not in the DTO
    }),
  );
  app.useLogger(app.get(Logger));
  await app.listen(3001);
}
bootstrap();