import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("account")
export class AccountEntity {
    @PrimaryGeneratedColumn("uuid")
    accountId: string
    
    @Column({ type: "varchar", length: 50, default: null })
    email: string
    
    @Column({ type: "varchar", length: 64, default: null })
    password: string

    @Column({ type: "varchar", length: 200, default: null })
    avatarUrl: string

    @Column({ type: "varchar", length: 60, default: null })
    username: string

    @Column({ type: "varchar", length: 100, default: null })
    name: string

    @Column({ type: "varchar", length: 12, default: null })
    phoneNumber: string

    @Column({ type: "boolean" })
    gender: boolean
    
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}