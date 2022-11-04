import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(user: UserEntity) {
    const { name } = user;
    const payload = { name };
    return {
      access_token: this.jwtService.sign(payload),
      name,
    };
  }
}
