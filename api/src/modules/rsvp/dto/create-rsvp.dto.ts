import {
  IsNumber,
  IsString,
  Min,
  MaxLength,
  MinLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRsvpDto {
  @ApiProperty({
    description: 'First and Last name',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(1000)
  name: string;

  @ApiProperty({
    description: 'Message',
  })
  @IsString()
  @IsOptional()
  @MaxLength(2000)
  message: string;

  @ApiProperty({
    description: 'attend or not',
  })
  @IsBoolean()
  attend: boolean;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The number of people incluing requester',
  })
  numberOfPeople: number;
}
