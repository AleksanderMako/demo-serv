import {
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Ticket from '../ticket/ticket';

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToMany(() => Ticket, (ticket) => ticket.user)
    tickets!: Ticket[];
}
