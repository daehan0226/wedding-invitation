import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

const providers = [
  ConfigService,
];

@Global()
@Module({
  imports: [
    // JwtModule.registerAsync({
    //     useFactory: (configService: ConfigService) => ({
    //         secret: configService.get('JWT_SECRET_KEY'),
    //     }),
    //     inject: [ConfigService],
    // }),
  ],
  providers,
  exports: [...providers],
})
export class SharedModule {}