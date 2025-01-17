import { Module } from '@nestjs/common';
import { StarknetDelegationService } from './starknet-delegation.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  providers: [StarknetDelegationService],
  imports: [ScheduleModule.forRoot()],
})
export class StarknetDelegationModule {}
