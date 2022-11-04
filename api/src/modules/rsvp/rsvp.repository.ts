import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateRsvpDto } from './dto/create-rsvp.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { RsvpEntity } from './entities/rsvp.entity';

@Injectable()
export class RsvpRepository {
  constructor(
    @InjectModel('rsvps')
    private readonly _rsvpEntity: Model<RsvpEntity>,
  ) {}

  async create(dto: CreateRsvpDto): Promise<RsvpEntity> {
    const numberOfPeople = dto.attend ? dto.numberOfPeople + 1 : 0;
    return await this._rsvpEntity.create({
      ...dto,
      numberOfPeople,
    });
  }

  async findAll(): Promise<RsvpEntity[]> {
    return await this._rsvpEntity.find({});
  }

  async update(id: string, updateRsvpDto: UpdateRsvpDto) {
    return await this._rsvpEntity.findByIdAndUpdate(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: {
          ...updateRsvpDto,
        },
      },
    );
  }

  async remove(id: string) {
    return await this._rsvpEntity.findByIdAndRemove({
      _id: new Types.ObjectId(id),
    });
  }
}
