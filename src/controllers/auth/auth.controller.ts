import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInRequestBody, SignUpRequestBody } from "./auth.dto";
import { JwtAuthGuard, AccountId } from "../common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post("sign-in")
    async signIn(@Body() body: SignInRequestBody) {
        return await this.authService.signIn(body)
    }

    @Post("sign-up")
    async signUp(@Body() body: SignUpRequestBody) {
        return await this.authService.signUp(body)
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get("me")
    async me(@AccountId() accountId: string) {
        return await this.authService.me(accountId)
    }
}