import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { UserEntity } from "../entities/user.entity";


export class UserOutDto {
    
    @IsString()
    @ApiProperty({
        description: 'Mongo DB Object Id',
    })
    id: string;

    @IsString()
    @ApiProperty({
        description: 'Name',
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'created time',
    })
    createdAt: Date;


    @IsString()
    @ApiProperty({
        description: 'updated time',
    })
    updatedAt: Date;


    constructor(model: UserEntity) {
        this.id = String(model._id)
        this.name = model.name
        this.createdAt = model.createdAt
        this.updatedAt = model.updatedAt
    }
}
