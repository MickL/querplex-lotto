import { Test, TestingModule } from '@nestjs/testing';
import { BlockService } from './block.service';

describe('RandomService', () => {
  let service: BlockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockService],
    }).compile();

    service = module.get<BlockService>(BlockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create random numbers >=1 && <=49', () => {
    const numbers = [];

    for (let i = 0; i <= 100; i++) {
      numbers.push(service.getRandomNumber());
    }

    numbers.forEach((number) => {
      expect(number).toBeGreaterThan(0);
      expect(number).toBeLessThan(50);
    });
  });

  it('should create a block of unique random numbers', () => {
    const blocks = [];

    for (let i = 0; i <= 100; i++) {
      blocks.push(service.getBlock());
    }

    blocks.forEach((drawnNumbers) => {
      expect(drawnNumbers.length).toEqual(6);

      for (let i = 1; i <= 49; i++) {
        expect(
          drawnNumbers.filter((number) => number == i).length,
        ).toBeLessThanOrEqual(1);
      }
    });
  });

  it('should create amount of blocks', () => {
    const blocks = service.getBlocks(3);
    expect(blocks.length).toEqual(3);
  });
});
