import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { ToyEntity } from "./toy.entity"

@Entity("category")
export class CategoryEntity {
    @PrimaryGeneratedColumn("uuid")
    categoryId: string
    
    @Column({ type: "varchar", length: 200, default: null })
    name: string

    @OneToMany(() => ToyEntity, (toy) => toy.category)
    toys: Array<ToyEntity>

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}