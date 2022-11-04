import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RsvpModule } from './modules/rsvp/rsvp.module';
import { SharedModule } from './modules/shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './modules/shared/config.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.rateLimitConfig,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.mongodbConfig,
      inject: [ConfigService],
    }),
    RsvpModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
