import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { RsvpOutDto } from 'src/modules/rsvp/dto/rsvp-out.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendRsvpSubmit(rsvp: RsvpOutDto) {
    const { name, message, attend } = rsvp;
    await this.mailerService.sendMail({
      to: 'dh16931@gmail.com',
      subject: 'A RSVP',
      template: './rsvp-submit',
      context: {
        name,
        attend: attend ? 'YES' : 'NO',
        message,
      },
    });
  }
}
