import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./addresses.entites";
import { Category } from "./categories.entities";
import { Schedule } from "./schedulesUsers.entities";

@Entity()
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ type: "boolean", default: true })
  sold: boolean = false;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (categories) => categories.realEstate)
  category: Category;

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[];
}
