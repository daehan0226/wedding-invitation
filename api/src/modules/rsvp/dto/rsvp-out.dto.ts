import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { RsvpEntity } from '../entities/rsvp.entity';

export class RsvpOutDto {
  @IsString()
  @ApiProperty({
    description: 'Mongo DB Object Id',
  })
  id: string;

  @IsString()
  @ApiProperty({
    description: 'Name',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Message',
  })
  message: string;

  @IsBoolean()
  @ApiProperty({
    description: 'Attend or not',
  })
  attend: boolean;

  @IsNumber()
  @ApiProperty({
    description: 'number of people including the requester',
  })
  numberOfPeople: number;

  @IsString()
  @ApiProperty({
    description: 'requested time',
  })
  createdAt: Date;

  @IsString()
  @ApiProperty({
    description: 'updated time',
  })
  updatedAt: Date;

  constructor(model: RsvpEntity) {
    this.id = String(model._id);
    this.name = model.name;
    this.numberOfPeople = model.numberOfPeople;
    this.message = model.message;
    this.attend = model.attend;
    this.createdAt = model.createdAt;
    this.updatedAt = model.updatedAt;
  }
}
