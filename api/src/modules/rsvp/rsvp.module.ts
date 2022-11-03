import { forwardRef, Module } from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { RsvpController } from './rsvp.controller';
import { RsvpRepository } from './rsvp.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { RsvpSchema } from './entities/rsvp.entity';
import { MailModule } from 'src/modules/mail/mail.module';

@Module({
  imports: [
    MailModule,
    MongooseModule.forFeature([
      {
        name: 'rsvps',
        schema: RsvpSchema,
      },
    ]),
  ],
  controllers: [RsvpController],
  providers: [RsvpService, RsvpRepository],
  exports: [RsvpService, RsvpRepository],
})
export class RsvpModule {}
