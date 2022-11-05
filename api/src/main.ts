import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from './modules/shared/config.service';
import { SharedModule } from './modules/shared/shared.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  console.log(`env ${process.env.ENV}`);
  if (process.env.ENV === 'local') {
    console.log(`build swagger`);
    const config = new DocumentBuilder()
      .setTitle('Wedding swagger')
      .setDescription('The wedding API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  const configService = app.select(SharedModule).get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(configService.port);
}
bootstrap();
