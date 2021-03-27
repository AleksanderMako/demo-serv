import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from '../user/user';
import Bet from './bet';

  @Entity()
export default class Ticket {
      @PrimaryGeneratedColumn()
      id!: number;

      @ManyToOne(() => User, (user) => user.tickets, { cascade: true })
      user!: User;

      @OneToMany(() => Bet, (bet) => bet.ticket, { cascade: true })
      bets!:Bet;

      @Column({ type: 'bool', nullable: false })
      won!:boolean;

      @Column({ type: 'double', nullable: false })
      amountStaked!:number; // sa lek jane futur ne skedine

      @Column({ type: 'double', nullable: false })
      possbilePayout!:number; // fitimi

      @CreateDateColumn({ type: 'datetime', nullable: false })
      createdDate!: Date;

      @UpdateDateColumn({ type: 'datetime', nullable: false })
      updatedDate!: Date;
}
