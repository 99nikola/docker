import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  url: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
