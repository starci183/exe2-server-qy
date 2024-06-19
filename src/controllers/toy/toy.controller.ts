import { Body, Controller, Post } from "@nestjs/common";
import { ToyService } from "./toy.service";
import { CreateCategoryRequestBody, CreateOrderRequestBody, CreateToyRequestBody } from "./toy.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Toy")
@Controller("toy")
export class ToyController {
    constructor(
        private readonly toyService: ToyService
    ) { }

    @Post("create-toy")
    async createToy(@Body() body: CreateToyRequestBody) {
        return await this.toyService.createToy(body)
    }

    @Post("create-category")
    async createCategory(@Body() body: CreateCategoryRequestBody) {
        return await this.toyService.createCategory(body)
    }

    @Post("create-order")
    async createOrder(@Body() body: CreateOrderRequestBody) {
        return await this.toyService.createOrder(body)
    }
}