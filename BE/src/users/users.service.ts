import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) { }


  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto);
    console.log('created data', createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userModel.find().exec();
    return allUsers;
  }

  async findOne(id: string): Promise<User> {

    const userData = await this.userModel.findById(id).exec();
    if (!userData) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return userData;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
