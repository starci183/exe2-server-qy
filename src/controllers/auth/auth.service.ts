import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AccountEntity } from "src/database";
import { Repository } from "typeorm";
import { MeResponseBody, SignInRequestBody, SignInResponseData, SignUpRequestBody, SignUpResponseData } from "./auth.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AccountEntity)
        private readonly accountRepository: Repository<AccountEntity>,
        private readonly jwtService: JwtService
    ) { }

    async signIn({ email, password }: SignInRequestBody): Promise<SignInResponseData> {
        const found = await this.accountRepository.findOneBy({ email })
        if (!found) throw new NotFoundException("Người dùng không tồn tại")
        if (found.password !== password) throw new BadRequestException("Mật khẩu sai")
        const jwtToken = await this.jwtService.signAsync({
            ...found
        }, {
            secret: "cuongdeptrai"
        })
        return {
            jwtToken
        }
    }

    async signUp(body: SignUpRequestBody): Promise<SignUpResponseData> {
        const found = await this.accountRepository.findOneBy({ email: body.email })
        if (found) throw new NotFoundException("Tài khoản này đã được đăng ký")
        await this.accountRepository.save(body)
        return {
            message: "Đăng ký thành công"
        }
    }

    async me(userId: string): Promise<MeResponseBody> {
        const {
            avatarId,
            balance,
            email,
            gender,
            name,
            phoneNumber,
            username,
        } = await this.accountRepository.findOneBy({ userId })
        
        return {
            userId,
            avatarId,
            balance,
            email,
            gender,
            name,
            phoneNumber,
            username,
        }
    }
}