import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { ToyEntity } from "src/database/toy.entity";
import { Repository } from "typeorm";
import { CreateCategoryRequestBody, CreateCategoryResponseData, CreateOrderRequestBody, CreateOrderResponseData, CreateToyRequestBody, CreateToyResponseData } from "./toy.dto";
import { CategoryEntity, OrderEntity } from "src/database";

@Injectable()
export class ToyService {
    constructor(
        @InjectRepository(ToyEntity)
        private readonly toyRepository: Repository<ToyEntity>,
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
    ) { }

    async createToy(body: CreateToyRequestBody): Promise<CreateToyResponseData> {
        await this.toyRepository.save(body)
        return {
            message: "Create toy successfully"
        }
    }

    async createCategory(body: CreateCategoryRequestBody): Promise<CreateCategoryResponseData> {
        await this.categoryRepository.save(body)
        return {
            message: "Create category successfully"
        }
    }

    async createOrder(body: CreateOrderRequestBody): Promise<CreateOrderResponseData> {
        await this.orderRepository.save(body)
        return {
            message: "Create order successfully"
        }
    }
}