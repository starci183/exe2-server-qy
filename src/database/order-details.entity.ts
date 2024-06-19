import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn, ManyToOne, } from "typeorm"
import { OrderEntity } from "./order.entity"
import { ToyEntity } from "./toy.entity"

@Entity("order-detail")
export class OrderDetailEntity {
    @PrimaryGeneratedColumn("uuid")
    orderDetailId: string

    @Column({ type: "uuid", length: 36 })
    orderId: string

    @ManyToOne(() => OrderEntity, (order) => order.orderDetails)
    @JoinColumn({ name: "orderId" })
    order: OrderEntity

    @Column({ type: "uuid", length: 36 })
    toyId: string

    @Column({ type: "int", default: 0 })
    quantity: number

    @ManyToOne(() => ToyEntity, (toy) => toy.orderDetails)
    @JoinColumn({ name: "toyId" })
    toy: ToyEntity

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}