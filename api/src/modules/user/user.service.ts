import { Injectable, Logger } from '@nestjs/common';
import { UtilsService } from 'src/modules/shared/utils.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LogInDto } from './dto/log-in.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: CreateUserDto): Promise<UserEntity> {
    return await this.userRepository.create(dto);
  }

  async validatePassword(dto: LogInDto): Promise<UserEntity> {
    const user = await this.userRepository.findByName(dto.name);
    const isPasswordValid = await UtilsService.validateHash(
      dto.password,
      user.password,
    );
    this.logger.debug(`${dto.name} password validation: ${isPasswordValid}`);
    if (user && isPasswordValid) {
      return user;
    }
    return null;
  }

  async findByName(name: string): Promise<UserEntity> {
    return await this.userRepository.findByName(name);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.userRepository.findById(id);
  }

  async update(id: string, dto: UpdateUserDto) {
    return await this.userRepository.update(id, dto);
  }

  async remove(id: string) {
    return await this.userRepository.deleteById(id);
  }
}
