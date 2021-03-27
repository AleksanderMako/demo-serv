import {
  Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class MatchOdds {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'json', nullable: false })
    odds!: any;

    @Column({ type: 'varchar', nullable: false, length: '200' })
    @Index()
    matchId!:string;

    @CreateDateColumn({ type: 'datetime', nullable: false })
    createdDate!: Date;

    @UpdateDateColumn({ type: 'datetime', nullable: false })
    updatedDate!: Date;
}
