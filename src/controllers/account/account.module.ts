import { Module } from "@nestjs/common";
import { AccountEntity } from "src/database";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AccountEntity])
    ],
    controllers: [AccountController],
    providers: [
        AccountService,
    ]
})
export class AccountModule {
}