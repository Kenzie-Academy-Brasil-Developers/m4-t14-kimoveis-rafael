import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
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
  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal" })
  values: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, (address) => address.raelEstate)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (categories) => categories.realState)
  category: Category;

  @OneToMany(() => Schedule, (schedule) => schedule.realEstated)
  schedule: Schedule[];
}
