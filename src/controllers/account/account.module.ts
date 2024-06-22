import { Module } from "@nestjs/common";
import { AccountEntity, CategoryEntity, OrderDetailEntity, OrderEntity, ToyEntity } from "src/database";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AccountEntity, OrderEntity, OrderDetailEntity, ToyEntity, CategoryEntity])
    ],
    controllers: [AccountController],
    providers: [
        AccountService,
    ]
})
export class AccountModule {
}