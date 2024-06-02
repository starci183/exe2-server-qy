import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountEntity } from "src/database";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtAuthGuard, JwtStrategy } from "../common";

@Module({
    imports: [
        TypeOrmModule.forFeature([AccountEntity])
    ],
    controllers: [AuthController],
    providers: [
        JwtService,
        AuthService,
        JwtStrategy,
        JwtAuthGuard
    ]
})
export class AuthModule {
}