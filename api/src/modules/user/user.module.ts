import { Module, OnModuleInit } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { Logger } from 'mongodb';
import { ConfigService } from '../shared/config.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: 'users',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule implements OnModuleInit {
  private readonly logger = new Logger(UserModule.name);

  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async onModuleInit() {
    await this.userService.createAdminUserOnInit(this.configService.adminUser);
  }
}
