import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class RsvpEntity extends Document {
    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: Number, required: true })
    numberOfPeople: number;

    updatedAt: Date;
    createdAt: Date;
}

export const RsvpSchema = SchemaFactory.createForClass(RsvpEntity);