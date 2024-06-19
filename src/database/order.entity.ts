import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, } from "typeorm"
import { OrderDetailEntity } from "./order-details.entity"

@Entity("order")
export class OrderEntity {
    @PrimaryGeneratedColumn("uuid")
    orderId: string

    @Column({ type: "varchar", length: 400, default: null })
    deliveryLocation: string

    @Column({
        type: "decimal",
        precision: 10,
        scale: 5,
        default: 0,
    })
    discountPercent: number

    @OneToMany(() => OrderDetailEntity, (orderDetail) => orderDetail.order, { cascade: true })
    orderDetails: Array<OrderDetailEntity>

    @Column({ type: "boolean", default: false })
    hasPaid: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ type: "date", default: null })
    expectedDeliveryDate: string
}