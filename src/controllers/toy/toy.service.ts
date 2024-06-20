import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToyEntity } from 'src/database/toy.entity';
import { Repository } from 'typeorm';
import {
  CreateCategoryRequestBody,
  CreateCategoryResponseData,
  CreateOrderRequestBody,
  CreateOrderResponseData,
  CreateToyRequestBody,
  CreateToyResponseData,
  GetOrdersFilter,
  GetOrdersResponseData,
  GetToysFilter,
  GetToysResponseData,
  UpdateOrderRequestBody,
  UpdateOrderResponseData,
} from './toy.dto';
import { CategoryEntity, OrderEntity } from 'src/database';

@Injectable()
export class ToyService {
  constructor(
    @InjectRepository(ToyEntity)
    private readonly toyRepository: Repository<ToyEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async createToy(body: CreateToyRequestBody): Promise<CreateToyResponseData> {
    await this.toyRepository.save(body);
    return {
      message: 'Create toy successfully',
    };
  }

  async createCategory(
    body: CreateCategoryRequestBody,
  ): Promise<CreateCategoryResponseData> {
    await this.categoryRepository.save(body);
    return {
      message: 'Create category successfully',
    };
  }

  async createOrder(
    body: CreateOrderRequestBody,
  ): Promise<CreateOrderResponseData> {
    await this.orderRepository.save(body);
    return {
      message: 'Create order successfully',
    };
  }

  async getToys(filter: GetToysFilter): Promise<GetToysResponseData> {
    const { pageNumber, pageSize } = filter;
    const toys = await this.toyRepository.find({
      skip: pageNumber * pageSize,
      take: pageSize,
      relations: {
        category: true,
      },
    });
    const count = await this.toyRepository.count();
    return {
      toys,
      count,
    };
  }

  async getOrders(filter: GetOrdersFilter): Promise<GetOrdersResponseData> {
    const { pageNumber, pageSize } = filter;
    const orders = await this.orderRepository.find({
      skip: pageNumber * pageSize,
      take: pageSize,
      relations: {
        orderDetails: {
          toy: true,
        },
      },
    });
    const count = await this.orderRepository.count();
    return {
      orders,
      count,
    };
  }

  async getOrder(orderId: string): Promise<OrderEntity> {
    return await this.orderRepository.findOne({
      where: { orderId },
      relations: {
        orderDetails: {
          toy: true,
        },
      },
    });
  }

  async updateOrder({
    orderId,
    deliveryLocation,
    expectedDeliveryDate,
    hasPaid,
    status,
  }: UpdateOrderRequestBody): Promise<UpdateOrderResponseData> {
    await this.orderRepository.update(orderId, {
      deliveryLocation,
      expectedDeliveryDate: new Date(expectedDeliveryDate),
      hasPaid,
      status,
    });

    return {
      message: 'Cập nhật đơn hàng thành công',
    };
  }
}
