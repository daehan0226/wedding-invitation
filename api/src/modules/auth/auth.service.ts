import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LogInDto } from './dto/LogIn.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = {
      name: 'daehan',
      password: '1',
    };
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(dto: LogInDto) {
    const payload = { name: dto.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
