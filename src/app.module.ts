import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { CreditCardModule } from './creditcard/creditcard.module';

@Module({
  imports: [PersonModule, CreditCardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
