import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  get investmentAmount(): number {
    return this.price * this.amount;
  }
}
