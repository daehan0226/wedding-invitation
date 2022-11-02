import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RsvpModule } from './rsvp/rsvp.module';
import { SharedModule } from './modules/shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './modules/shared/config.service';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forRootAsync({
      imports: [ConfigService],
      useFactory: (configService: ConfigService) =>
          configService.mongodbConfig,
      inject: [ConfigService],
  }),
    RsvpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
