import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "coins" })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

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
}
