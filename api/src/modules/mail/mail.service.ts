import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { RsvpOutDto } from 'src/modules/rsvp/dto/rsvp-out.dto';
import { ConfigService } from '../shared/config.service';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async sendRsvpSubmit(rsvp: RsvpOutDto) {
    const { name, message, attend, numberOfPeople } = rsvp;
    const attendStr = attend ? 'YES' : 'NO';
    const msg = `${name}, ${message}, ${attendStr}, ${numberOfPeople}`;
    try {
      this.logger.debug(
        `send mail ${msg} to ${this.configService.emailRecipient}`,
      );
      await this.mailerService.sendMail({
        to: this.configService.emailRecipient.split(','),
        subject: 'A NEW RSVP',
        template: './rsvp-submit',
        context: {
          data: [
            {
              name,
              message,
              attend: attendStr,
              numberOfPeople,
            },
          ],
        },
      });
      this.logger.debug(`mail sent ${msg}`);
    } catch (e) {
      this.logger.error(`fail to send mail: ${String(e)}`);
      this.logger.error(`${msg}`);
    }
  }
}
