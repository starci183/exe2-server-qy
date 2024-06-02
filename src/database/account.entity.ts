import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"

@Entity("account")
export class AccountEntity {
    @PrimaryGeneratedColumn("uuid")
    userId: string
    @Column({ type: "varchar", length: 50, default: null })
    email: string
    @Column({ type: "varchar", length: 64, default: null })
    password: string

    @Column({ type: "uuid", length: 36, default: null })
    avatarId: string
    @Column({ type: "varchar", length: 60, default: null })
    username: string

    @Column({
        type: "decimal",
        precision: 10,
        scale: 5,
        default: 0,
    })
    balance: number

    @Column({ type: "varchar", length: 50, default: null })
    firstName: string

    @Column({ type: "varchar", length: 50, default: null })
    lastName: string

    @Column({ type: "date", default: null })
    birthdate: Date
}