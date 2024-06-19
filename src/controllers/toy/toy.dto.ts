import { ApiProperty } from '@nestjs/swagger';

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
  @ApiProperty({default: "53 Tân Lập 1, Phường Hiệp Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh"})
  deliveryLocation: string;
  @ApiProperty({ default: [{ toyId: 'e01e9c9d-754b-479e-b093-8312db7e593b', quantity: 5 }] })
  orderDetails: Array<OrderDetail>;
}

export class CreateOrderResponseData {
  @ApiProperty()
  message: string;
}
