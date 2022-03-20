import { Module } from '@nestjs/common';
import { CreditCardService } from './creditcard.service';
import { CreditCardController } from './creditcard.controller';

@Module({
  providers: [CreditCardService],
  controllers: [CreditCardController],
})
export class CreditCardModule {}
