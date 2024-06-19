import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ToyService } from "./toy.service";
import { ToyEntity } from "src/database/toy.entity";
import { CategoryEntity } from "src/database/category.entity";
import { ToyController } from "./toy.controller";
import { OrderDetailEntity, OrderEntity } from "src/database";

@Module({
    imports: [
        TypeOrmModule.forFeature([ToyEntity, CategoryEntity, OrderEntity, OrderDetailEntity])
    ],
    controllers: [ToyController],
    providers: [
        ToyService,
    ]
})
export class ToyModule {
}