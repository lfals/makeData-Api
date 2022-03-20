import { Controller, Get } from '@nestjs/common';
import { CreditCardService } from './creditcard.service';

@Controller('creditcard')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Get()
  getCredotCard() {
    return this.creditCardService.getCreditCard();
  }
}
