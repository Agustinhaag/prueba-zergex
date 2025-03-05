import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credentials";

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
}
