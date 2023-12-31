import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT) || 3000;

  await app.listen(port);

  console.log(`Server is running on 127.0.0.1:${port}`);
}
bootstrap();
