import { Test, TestingModule } from '@nestjs/testing';
import { StarknetDelegationService } from './starknet-delegation.service';

describe('StarknetDelegationService', () => {
  let service: StarknetDelegationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarknetDelegationService],
    }).compile();

    service = module.get<StarknetDelegationService>(StarknetDelegationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
