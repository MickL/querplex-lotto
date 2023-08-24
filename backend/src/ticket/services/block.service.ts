import { Injectable } from '@nestjs/common';

@Injectable()
export class BlockService {
  getBlocks(amount: number): number[][] {
    const blocks = [];

    for (let i = 1; i <= amount; i++) {
      blocks.push(this.getBlock());
    }

    return blocks;
  }

  getBlock(numbers = 6): number[] {
    const drawnNumbers: number[] = [];

    for (let i = 1; i <= numbers; i++) {
      drawnNumbers.push(this.getUniqueRandomNumber(drawnNumbers));
    }

    return drawnNumbers;
  }

  getUniqueRandomNumber(others: number[]): number {
    const drawnNumber = this.getRandomNumber();

    if (others.includes(drawnNumber)) {
      return this.getUniqueRandomNumber(others);
    } else {
      return drawnNumber;
    }
  }

  getRandomNumber(min = 1, max = 49): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
