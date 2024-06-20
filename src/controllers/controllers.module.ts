import { Module } from "@nestjs/common";
import { AuthModule } from "./auth";
import { ToyModule } from "./toy";
import { AccountModule } from "./account";

@Module({
    imports: [
        AuthModule,
        ToyModule,
        AccountModule
    ]
})
export class ControllersModule {
    
}