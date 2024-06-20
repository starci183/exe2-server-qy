import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn, OneToMany, ManyToOne } from "typeorm"
import { CategoryEntity } from "./category.entity"
import { OrderDetailEntity } from "./order-details.entity"

@Entity("toy")
export class ToyEntity {
    @PrimaryGeneratedColumn("uuid")
    toyId: string
    
    @Column({ type: "varchar", length: 200, default: null })
    name: string

    @Column({ type: "varchar", length: 200, default: null })
    imageUrl: string

    @Column({ type: "varchar", length: 2000, default: null })
    description: string

    @Column({ type: "uuid", length: 36, default: null })
    categoryId: string

    @ManyToOne(() => CategoryEntity, (category) => category.toys)
    @JoinColumn({ name: "categoryId" })
    category: CategoryEntity

    @OneToMany(() => ToyEntity, (toy) => toy.orderDetails)
    orderDetails: Array<OrderDetailEntity>
    
    @Column({
        type: "decimal",
        precision: 10,
        scale: 5,
        default: 0,
    })
    price: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}