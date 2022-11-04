import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LogInDto {

    @ApiProperty({
        description: '3~20 length'
    })
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    name: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @ApiProperty({
        description: '5~20 length'
    })
    password: string;
}

