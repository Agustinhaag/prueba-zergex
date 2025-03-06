import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "coins" })
export class Currency {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    unique: true,
  })
  name: string;

  @Column({})
  ticker: string;
  @Column({})
  price: number;
  @Column({})
  amount: number;

  @ManyToOne(() => User, (user) => user.coins) 
  @JoinColumn({ name: 'userId' })
  user: User;

  get investmentAmount(): number {
    return this.price * this.amount;
  }
}
