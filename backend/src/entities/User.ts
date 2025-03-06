import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credentials";
import { Currency } from "./Currency";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  
  })
  email: string;

  @Column({
  
  })
  name: string;

  @OneToOne(() => Credential)
  @JoinColumn()
  credential: Credential;

  @OneToMany(() => Currency, (coin) => coin.user) 
  coins: Currency[];
}
