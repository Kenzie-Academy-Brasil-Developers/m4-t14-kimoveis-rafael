import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./schedulesUsers.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({
    type: "varchar",
    unique: true,
    length: 45,
  })
  email: string;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({
    type: "boolean",
    default: false,
  })
  admin: boolean;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Schedule[];
}
