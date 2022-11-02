import { Logger } from '@nestjs/common';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

export class ConfigService {
    private readonly logger = new Logger(ConfigService.name);

    constructor() {
        const nodeEnv = process.env.ENV?? 'local';
        dotenv.config({
            path: `.env.${nodeEnv}`,
        });

        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
    }

    get port(): number {
        const port = Number(process.env.NEST_PORT?? 8003)
        this.logger.debug(`nest api port: ${port}`)
        return port
    }

    get mongodbConfig(): MongooseModuleOptions {
        const host = process.env.MONGO?? 'localhost'
        const port = process.env.MONGO_PORT?? '27017'
        const database = process.env.MONGO_DATABASE?? 'dbname'
        const username = process.env.MONGO_USERNAME?? 'username'
        const password = process.env.MONGO_PASSWORD?? 'password'
        const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`
        this.logger.debug(`mongodb uri: ${uri}`)
        return {
            uri
        }
    }

}