import {
  IsNumber,
  IsString,
  Min,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'The number of people incluing requester',
  })
  numberOfPeople: number;
}