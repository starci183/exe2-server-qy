import { ApiProperty } from "@nestjs/swagger"

export class SignInRequestBody {
    @ApiProperty()
    email: string
    @ApiProperty()
    password: string
}

export class SignInResponseData {
    @ApiProperty()
    jwtToken: string
}