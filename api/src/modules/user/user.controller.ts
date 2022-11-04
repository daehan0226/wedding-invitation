import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  ForbiddenException,
  HttpCode,
  HttpStatus,
  ConflictException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserOutDto } from './dto/user-out.dto';
import { LogInDto } from './dto/log-in.dto';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<UserOutDto> {
    if (await this.userService.findByName(dto.name)) {
      this.logger.debug(`create fail ${dto.name} - 409`);
      throw new ConflictException();
    }

    this.logger.debug(`create user ${dto.name}`);
    const result = await this.userService.create(dto);
    return new UserOutDto(result);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LogInDto) {
    this.logger.debug(`login user ${dto.name}`);
    const user = await this.userService.validatePassword(dto);
    if (user) {
      return this.authService.generateToken(user);
    }
    throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<UserOutDto[]> {
    const result = await this.userService.findAll();
    return result.map((user) => new UserOutDto(user));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    await this.userService.update(id, dto);
    return;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userService.remove(id);
    return;
  }
}
