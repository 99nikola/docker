import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { UsersService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersCntroller {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  async find(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.find(id).then((user) => {
      if (user === null) {
        throw new NotFoundException();
      }

      return user;
    });
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
