import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RsvpModule } from './modules/rsvp/rsvp.module';
import { SharedModule } from './modules/shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './modules/shared/config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.mongodbConfig,
      inject: [ConfigService],
    }),
    RsvpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
