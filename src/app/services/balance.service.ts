import { Injectable } from '@angular/core';
import { SlotSection } from '../models/slots.model';
import { WalletState } from '../reducers/wallet/wallet.state';
import { Price } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor() { }

  public isEqualSlots(sections: SlotSection[]): boolean {
    return sections
      .map(
        ({ elements, activeElementIndex }) => elements[activeElementIndex].id
      )
      .every(
        (el, index, array) => !array[index - 1] ? true : array[index - 1] === el
      );
  }

  public multiplyDecimals(first: number, second: number): number {
    return Number(
      (first * second).toFixed(2)
    );
  }

  public getUpdatedBalance(
    sections: SlotSection[],
    wallet: WalletState,
  ): Price {
    const { winFee, loseFee, balance: { currency, value } } = wallet;
    const multiplier = this.isEqualSlots(sections) ? 1 + winFee : 1 - loseFee;
    return {
      currency,
      value: this.multiplyDecimals(value, multiplier),
    };
  }
}
