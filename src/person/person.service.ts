import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
  getPerson() {
    return 'Person';
  }
}
