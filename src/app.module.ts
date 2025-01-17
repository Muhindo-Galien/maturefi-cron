import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarknetDelegationModule } from './starknet-delegation/starknet-delegation.module';

@Module({
  imports: [StarknetDelegationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
