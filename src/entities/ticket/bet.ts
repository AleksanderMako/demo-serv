import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import Match from '../match/match';
import Ticket from './ticket';

@Entity()
export default class Bet {
    @PrimaryGeneratedColumn()
    id!:number;

    @CreateDateColumn()
    createdDate!:Date;

    @OneToOne(() => Match)
    @JoinColumn()
    match!:Match;

    @ManyToOne(() => Ticket, (ticket) => ticket.bets)
    ticket!:Ticket;

    @Column({ type: 'double', nullable: false })
    odd!:number;

    @Column('text', { nullable: false })
    betType!:string; // main or goals or ht

    @Column('text', { nullable: false })
    betSubType!:string; // on of the nested keys in goals or main or half time

    @Column({ type: 'int', nullable: false })
    option!:number; // index of selected choice

    @Column('text', { nullable: false })
    teams!:string;
}
