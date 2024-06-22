import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import {} from './account.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('get-accounts')
  async createToy(
    @Query('pageNumber') pageNumber: number,
    @Query('pageSize') pageSize: number,
  ) {
    return await this.accountService.getAccounts({ pageNumber, pageSize });
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('get-all-counts')
  async getAllCounts(
  ) {
    return await this.accountService.getAllCounts();
  }
}
