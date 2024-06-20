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