import { Logger } from '@nestjs/common';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export class ConfigService {
  private readonly logger = new Logger(ConfigService.name);

  constructor() {
    const nodeEnv = process.env.ENV ?? 'local';
    dotenv.config({
      path: `.env.${nodeEnv}`,
    });

    for (const envName of Object.keys(process.env)) {
      process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
    }
  }

  get port(): number {
    const port = Number(process.env.NEST_PORT ?? 8003);
    this.logger.debug(`nest api port: ${port}`);
    return port;
  }

  get mongodbConfig(): MongooseModuleOptions {
    const host = process.env.MONGO;
    const port = process.env.MONGO_PORT ?? process.env.MONGO_EXTERNAL_PORT;
    const database = process.env.MONGO_DATABASE;
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;
    this.logger.debug(`mongodb uri: ${uri}`);
    return {
      uri,
    };
  }

  get redisConfig() {
    const host = process.env.REDIS;
    const port = process.env.REDIS_PORT ?? process.env.REDIS_EXTERNAL_PORT;
    this.logger.debug(`redis host: ${host} port: ${port}`);
    return {
      redis: {
        host,
        port,
      },
    };
  }

  get mailConfig() {
    return {
      transport: {
        host: process.env.SMTP_HOST,
        secure: false,
        auth: {
          user: process.env.SMTP_AUTH_USER,
          pass: process.env.SMTP_AUTH_PASS,
        },
      },
      defaults: {
        from: `"No Reply" <${process.env.SMTP_HOST_FROM}>`,
      },
      template: {
        dir: join(__dirname, '../mail/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    };
  }
}
