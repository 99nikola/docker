import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return this.usersRepository.save(user);
  }

  async findAll() {
    console.log(typeof this.usersRepository.find);
    return this.usersRepository.find();
  }

  async find(id: number) {
    return this.usersRepository.findOneBy({ id: id });
  }

  async remove(id: number) {
    return this.usersRepository.delete(id).then((deleteResult) => ({
      success: Boolean(deleteResult.affected),
    }));
  }
}
