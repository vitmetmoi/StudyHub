import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log("create dto", createUserDto)
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    console.log('findall ')
    return this.usersService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string, @Res() res) {
    try {
      console.log('findone')
      const data = this.usersService.findOne(id);

      return res.status(HttpStatus.OK).json({
        message: 'get users successfully!',
        data
      })
    }
    catch (e) {
      return res.status(e.status).json(e.response);
    }


  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
