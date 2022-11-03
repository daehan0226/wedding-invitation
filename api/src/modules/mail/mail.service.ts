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
    const { name, message, attend } = rsvp;
    const msg = `${name}, ${message}, ${attend}`;
    try {
      this.logger.debug(`send email ${msg}`);
      await this.mailerService.sendMail({
        to: this.configService.emailRecipient,
        subject: 'A RSVP',
        template: './rsvp-submit',
        context: {
          name,
          attend: attend ? 'YES' : 'NO',
          message,
        },
      });
      this.logger.debug(`mail sent ${msg}`);
    } catch (e) {
      this.logger.error(`fail to send mail: ${String(e)}`);
      this.logger.error(`${msg}`);
    }
  }
}
