import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RealEstate } from "./realEstate.entities";
import { User } from "./users.entitie";

@Entity("schedules_users_properties")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (user) => user.schedule)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedule)
  realEstated: RealEstate;
}
//realEstated:
