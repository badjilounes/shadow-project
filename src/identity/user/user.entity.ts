import { BeforeInsert, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TextColumn } from "../../core/column/text-column.decorator";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @TextColumn()
    firstName: string;

    @TextColumn()
    lastName: string;

    @TextColumn()
    email: string;

    @TextColumn()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        const salt = await bcrypt.genSalt(+(process.env.SALT ?? '10'));
        this.password = await bcrypt.hash(this.password, salt);
    }

    async checkUserPassword(password: string) {
        return bcrypt.compare(password, this.password);
    }
}
