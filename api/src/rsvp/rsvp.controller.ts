import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { CreateRsvpDto } from './dto/create-rsvp.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { RsvpOutDto } from './dto/rsvp-out.dto';

@Controller('rsvp')
export class RsvpController {
  private readonly logger = new Logger(RsvpController.name);

  constructor(
    private readonly rsvpService: RsvpService
  ) {}

  @Post()
  async create(@Body() dto: CreateRsvpDto): Promise<RsvpOutDto> {
    this.logger.debug(`create rsvp ${JSON.stringify(dto)}`)
    const result = await this.rsvpService.create(dto);
    return new RsvpOutDto(result)
  }

  @Get()
  async findAll(): Promise<RsvpOutDto[]> {
    const result = await this.rsvpService.findAll();
    return result.map(rsvp=> new RsvpOutDto(rsvp))
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRsvpDto: UpdateRsvpDto) {
    await this.rsvpService.update(id, updateRsvpDto);
    return;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.rsvpService.remove(id);
    return;
  }
}
