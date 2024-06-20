import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ToyService } from './toy.service';
import {
  CreateCategoryRequestBody,
  CreateOrderRequestBody,
  CreateToyRequestBody,
  UpdateOrderRequestBody,
} from './toy.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common';

@ApiTags('Toy')
@Controller('toy')
export class ToyController {
  constructor(private readonly toyService: ToyService) {}

  @Post('create-toy')
  async createToy(@Body() body: CreateToyRequestBody) {
    return await this.toyService.createToy(body);
  }

  @Post('create-category')
  async createCategory(@Body() body: CreateCategoryRequestBody) {
    return await this.toyService.createCategory(body);
  }

  @Post('create-order')
  async createOrder(@Body() body: CreateOrderRequestBody) {
    return await this.toyService.createOrder(body);
  }

  @Get('get-toys')
  async getToys(
    @Query('pageNumber') pageNumber: number,
    @Query('pageSize') pageSize: number,
  ) {
    return await this.toyService.getToys({ pageNumber, pageSize });
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('get-orders')
  async getOrders(
    @Query('pageNumber') pageNumber: number,
    @Query('pageSize') pageSize: number,
  ) {
    return await this.toyService.getOrders({ pageNumber, pageSize });
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('get-order/:orderId')
  async getOrder(
    @Param('orderId') orderId: string,
  ) {
    return await this.toyService.getOrder(orderId);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('update-order')
  async updateOrder(
    @Body() body: UpdateOrderRequestBody,
  ) {
    return await this.toyService.updateOrder(body);
  }
}

