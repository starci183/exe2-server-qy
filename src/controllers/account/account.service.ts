import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { ToyEntity } from "src/database/toy.entity";
import { Repository } from "typeorm";
import { AccountEntity, CategoryEntity, OrderEntity } from "src/database";
import { GetAccountFilter, GetAccountResponseData } from "./account.dto";

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(AccountEntity)
        private readonly accountRepository: Repository<AccountEntity>,
    ) { }

    async getAccounts(filter: GetAccountFilter): Promise<GetAccountResponseData> {
        const { pageNumber, pageSize } = filter
        const accounts = await this.accountRepository.find({
            skip: pageNumber * pageSize,
            take: pageSize,
        })
        const count = await this.accountRepository.count()
        return {
            accounts,
            count
        }
    }
}
