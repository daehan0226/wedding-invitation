import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MongoGenericRepository } from 'src/modules/common/repository/generic.respository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository extends MongoGenericRepository<UserEntity> {

  constructor(
    @InjectModel('users')
    private readonly  _userEntity: Model<UserEntity>
) {
  super(_userEntity)
}

  async create(dto: CreateUserDto): Promise<UserEntity> {
    return await this._userEntity.create(dto);
  }


  async findByName(name: string): Promise<UserEntity> {
    return await this._userEntity.findOne({name}).exec();
  }

  async update(id: string, dto: UpdateUserDto) {
    return await this._userEntity
      .findByIdAndUpdate({
        _id: new Types.ObjectId(id)
      },{
        $set: {
          ...dto
        }
      });
  }
}
