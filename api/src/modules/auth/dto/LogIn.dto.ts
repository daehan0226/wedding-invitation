import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LogInDto {
  @ApiProperty({
    description: 'Name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Password',
  })
  @IsString()
  password: string;
}
