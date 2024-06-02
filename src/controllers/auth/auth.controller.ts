import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInRequestBody, SignUpRequestBody } from "./auth.dto";
import { JwtAuthGuard, UserId } from "../common";
import { ApiBearerAuth } from "@nestjs/swagger";

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
    async me(@UserId() userId: string) {
        return await this.authService.me(userId)
    }
}