import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getPerson() {
    return this.personService.getPerson();
  }
}
