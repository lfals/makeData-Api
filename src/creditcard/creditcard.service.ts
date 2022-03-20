import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditCardService {
  getCreditCard() {
    return 'Credit Card';
  }
}
