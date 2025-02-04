import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();
  app.use(compression());

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Shadow project')
    .setDescription('Shadow project API Documentation')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('openapi', app, document, {
    swaggerOptions: {
      displayRequestDuration: true,
      docExpansion: 'none',
      operationsSorter: 'alpha',
      tagsSorter: 'alpha'
    }
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
