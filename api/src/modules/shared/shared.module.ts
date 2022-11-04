import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

const providers = [ConfigService];

@Global()
@Module({
  imports: [],
  providers,
  exports: [...providers],
})
export class SharedModule {}
