import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "coins" })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  ticker: string;
  @Column({
    nullable: false,
  })
  price: number;
  @Column({
    nullable: false,
  })
  amount: string;
}
