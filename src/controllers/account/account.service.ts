import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { ToyEntity } from "src/database/toy.entity";
import { Repository } from "typeorm";
import { AccountEntity, CategoryEntity, OrderEntity } from "src/database";
import { GetAccountFilter, GetAccountResponseData, GetAllCountsResponseData } from "./account.dto";

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(AccountEntity)
        private readonly accountRepository: Repository<AccountEntity>,
        @InjectRepository(ToyEntity)
        private readonly toyRepository: Repository<ToyEntity>,
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
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

    async getAllCounts(): Promise<GetAllCountsResponseData> {
        const numberOfAccounts = await this.accountRepository.count()
        const numberOfToys = await this.toyRepository.count()
        const numberOfOrders = await this.orderRepository.count()
        
        const orders = await this.orderRepository.find({
            relations: {
                orderDetails: {
                    toy: true
                }
            }
        })

        let revenue = 0
        for (const { orderDetails } of orders) {
            for (const { quantity, toy : { price } } of orderDetails) {
                revenue += quantity * price
            }
        }

        return {
            numberOfAccounts,
            numberOfToys,
            numberOfOrders,
            revenue
        }
    }
}
