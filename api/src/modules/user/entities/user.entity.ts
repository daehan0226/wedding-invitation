import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UtilsService } from 'src/modules/shared/utils.service';

@Schema({ timestamps: true })
export class UserEntity extends Document {
    @Prop({ type: String, required: true, unique: true, index: true })
    name: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: Boolean, required: true, default: false })
    isAdmin: boolean;

    updatedAt: Date;
    createdAt: Date;
}

const UserSchema = SchemaFactory.createForClass(UserEntity);
UserSchema.pre('save', function (next) {
    const user = this;

    if (user.password) {
        user.password = UtilsService.generateHash(user.password);
    }

    next();
});

export {UserSchema}