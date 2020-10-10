import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { BeforeInsert, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DateColumn } from "../core/column/date-column.decorator";
import { TextColumn } from "../core/column/text-column.decorator";
import { User } from "../identity/user/user.entity";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @TextColumn()
    content: string;

    @ApiProperty({ type: () => User })
    @ManyToOne(() => User)
    @JoinColumn()
    sender: User;

    @ApiProperty({ type: () => User, isArray: true })
    @ManyToMany(() => User)
    @JoinTable()
    attendees: User[];

    @ApiProperty({ type: () => User, isArray: true })
    @ManyToMany(() => User)
    @JoinTable()
    administrators: User[];

    @CreateDateColumn()
    createdAt: Date;
}
