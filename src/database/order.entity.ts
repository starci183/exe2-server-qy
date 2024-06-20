import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, } from "typeorm"
import { OrderDetailEntity } from "./order-details.entity"

export enum OrderStatus {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected"
}

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

    @Column({ type: "nvarchar", length: 1000, default: null })
    note: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ type: "datetime", default: null })
    expectedDeliveryDate: Date

    @Column({
        type: "enum",
        enum: OrderStatus,
        default: OrderStatus.Pending,
    })
    status: OrderStatus
}