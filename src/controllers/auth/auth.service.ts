import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AccountEntity } from "src/database";
import { Repository } from "typeorm";
import { SignInRequestBody, SignInResponseData } from "./auth.dto";
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
        const jwtToken = await this.jwtService.signAsync(found)
        return {
            jwtToken
        }
    }
}