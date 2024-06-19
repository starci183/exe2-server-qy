import { Module } from "@nestjs/common";
import { AuthModule } from "./auth";
import { ToyModule } from "./toy";

@Module({
    imports: [
        AuthModule,
        ToyModule
    ]
})
export class ControllersModule {
    
}