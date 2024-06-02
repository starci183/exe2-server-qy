import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInRequestBody } from "./auth.dto";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post("sign-in")
    async signIn(@Body() body: SignInRequestBody) {
        return await this.authService.signIn(body)
    }
}