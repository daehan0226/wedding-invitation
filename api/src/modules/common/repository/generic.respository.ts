
import { Document, Model, Types } from 'mongoose';
import { IGenericRepository } from '../inferface/IGenericRepository';

export class MongoGenericRepository<T extends Document> implements IGenericRepository {
    private _model: Model<T>;

    constructor(model: Model<T>) {
        this._model = model;
    }

    async findAll(): Promise<T[]> {
        return await this._model.find({}).exec()
    }

    async findById(id: string): Promise<T> {
        return await this._model.findOne({
            _id: new Types.ObjectId(id)
        } as any).exec()
    }

    async deleteById(id: string) {
        return await this._model
            .findByIdAndRemove({
                _id: new Types.ObjectId(id)
            }).exec();
    }
}