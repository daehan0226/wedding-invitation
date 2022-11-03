import { Injectable } from '@nestjs/common';
import { CreateRsvpDto } from './dto/create-rsvp.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { RsvpEntity } from './entities/rsvp.entity';
import { RsvpRepository } from './rsvp.repository';

@Injectable()
export class RsvpService {
  
  constructor(
    private readonly _rsvpRepository: RsvpRepository,
  ) {}

  async create(dto: CreateRsvpDto): Promise<RsvpEntity> {
    return await this._rsvpRepository.create(dto);
  }

  async findAll(): Promise<RsvpEntity[]> {
    return await this._rsvpRepository.findAll();
  }


  async update(id: string, dto: UpdateRsvpDto) {
    return await this._rsvpRepository.update(id, dto);
  }

  async remove(id: string) {
    return await this._rsvpRepository.remove(id);
  }
}
