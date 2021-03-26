import {
  Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn, OneToOne,
  JoinColumn,
} from 'typeorm';
import MatchOdds from '../odds/odds';

@Entity()
export default class Match {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', nullable: false, length: '200' })
    @Index()
    matchId!:string;

    @Column({ type: 'varchar', nullable: false, length: '100' })
    home!:string;

    @Column({ type: 'varchar', nullable: false, length: '100' })
    away!:string;

    @Column({ type: 'varchar', nullable: false, length: '100' })
    league!:string;

    @OneToOne(() => MatchOdds, { cascade: true })
    @JoinColumn()
    odds!: MatchOdds;

    @CreateDateColumn({ type: 'datetime', nullable: false })
    createdDate!: Date;

    @UpdateDateColumn({ type: 'datetime', nullable: false })
    updatedDate!: Date;
}
