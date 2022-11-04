import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { CreateRsvpDto } from './dto/create-rsvp.dto';
import { UpdateRsvpDto } from './dto/update-rsvp.dto';
import { RsvpOutDto } from './dto/rsvp-out.dto';
import { MailService } from 'src/modules/mail/mail.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('rsvp')
export class RsvpController {
  private readonly logger = new Logger(RsvpController.name);

  constructor(
    private readonly rsvpService: RsvpService,
    private readonly mailService: MailService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() dto: CreateRsvpDto): Promise<RsvpOutDto> {
    this.logger.debug(`create rsvp ${JSON.stringify(dto)}`);
    const result = await this.rsvpService.create(dto);
    const outDto = new RsvpOutDto(result);
    this.mailService.sendRsvpSubmit(outDto);
    return outDto;
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<RsvpOutDto[]> {
    const result = await this.rsvpService.findAll();
    return result.map((rsvp) => new RsvpOutDto(rsvp));
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRsvpDto: UpdateRsvpDto) {
    await this.rsvpService.update(id, updateRsvpDto);
    return;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.rsvpService.remove(id);
    return;
  }
}
