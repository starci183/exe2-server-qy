import { ApiProperty } from '@nestjs/swagger';
import {
  OrderDetailEntity,
  OrderEntity,
  OrderStatus,
  ToyEntity,
} from 'src/database';

export class CreateToyRequestBody {
  @ApiProperty()
  name: string;
  @ApiProperty()
  imageUrl: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  categoryId: string;
  @ApiProperty()
  price: number;
}

export class CreateToyResponseData {
  @ApiProperty()
  message: string;
}

export class CreateCategoryRequestBody {
  @ApiProperty()
  name: string;
}

export class CreateCategoryResponseData {
  @ApiProperty()
  message: string;
}

export class OrderDetail {
  @ApiProperty()
  toyId: string;
  @ApiProperty()
  quantity: number;
}
export class CreateOrderRequestBody {
  @ApiProperty({
    default:
      '53 Tân Lập 1, Phường Hiệp Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
  })
  deliveryLocation: string;
  @ApiProperty({
    default: [{ toyId: 'e01e9c9d-754b-479e-b093-8312db7e593b', quantity: 5 }],
  })
  orderDetails: Array<OrderDetail>;
  @ApiProperty({ default: 'Đã thanh toán bằng Momo. Mã giao dịch 123456' })
  note: string;
}

export class CreateOrderResponseData {
  @ApiProperty()
  message: string;
}

export class GetToysFilter {
  pageNumber: number;
  pageSize: number;
}

export class GetToysResponseData {
  @ApiProperty()
  toys: Array<ToyEntity>;
  @ApiProperty()
  count: number;
}

export class GetOrdersFilter {
  pageNumber: number;
  pageSize: number;
}

export class GetOrdersResponseData {
  @ApiProperty()
  orders: Array<OrderEntity>;
  @ApiProperty()
  count: number;
}

export class UpdateOrderRequestBody {
  @ApiProperty({ default: "9b7f9d3d-55a4-44a0-934d-3be2f609219c" })
  orderId: string;
  @ApiProperty({ default: 'S902A Vinhome Grandpark Quận 9' })
  deliveryLocation: string;
  @ApiProperty({ default: true })
  hasPaid: boolean;
  @ApiProperty({ default: new Date().toISOString() })
  expectedDeliveryDate: string;
  @ApiProperty({ default: OrderStatus.Approved })
  status: OrderStatus;
}

export class UpdateOrderResponseData {
  @ApiProperty()
  message: string;
}
