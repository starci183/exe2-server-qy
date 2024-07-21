import { ApiProperty } from '@nestjs/swagger';
import { AccountEntity } from 'src/database';

export class GetAccountFilter {
  pageNumber: number;
  pageSize: number;
}

export class GetAccountResponseData {
  @ApiProperty()
  accounts: Array<AccountEntity>
  @ApiProperty()
  count: number
}

export class GetAllCountsResponseData {
  @ApiProperty()
  numberOfAccounts: number
  @ApiProperty()
  numberOfToys: number
  @ApiProperty()
  numberOfOrders: number
  @ApiProperty()
  revenue: number
}