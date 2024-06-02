import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsPhoneNumber, IsStrongPassword } from "class-validator"

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

export class SignUpRequestBody {
    @IsEmail()
    @ApiProperty()
    email: string
    @IsStrongPassword()
    @ApiProperty()
    password: string
    @ApiProperty()
    name: string
    @ApiProperty()
    @IsPhoneNumber()
    phoneNumber: string
    @ApiProperty()
    gender: boolean
}

export class SignUpResponseData {
    @ApiProperty()
    message: string
}

export class MeResponseBody {
    @ApiProperty()
    userId: string

    @ApiProperty()
    email: string

    @ApiProperty()
    avatarId: string

    @ApiProperty()
    username: string

    @ApiProperty()
    balance: number

    @ApiProperty()
    name: string

    @ApiProperty()
    phoneNumber: string
    
    @ApiProperty()
    gender: boolean
}

