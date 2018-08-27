import { inject } from '@angular/core/testing';
import { BalanceService } from './balance.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';
import { slotsCollection } from '../data/slots.data';
import { SlotSection } from '../models/slots.model';
import { WalletState } from '../reducers/wallet/wallet.state';
import { CurrencyTypes } from '../models/wallet.model';

describe('BalanceService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([BalanceService], (service: BalanceService) => {
    expect(service).toBeTruthy();
  }));

  it('is equal slots', inject([BalanceService], (service: BalanceService) => {
    const slots = { ...slotsCollection };
    const sections = new Array<SlotSection>(3).fill(null).map((_, index) => {
      return {
        id: index + 1,
        elements: slots,
        activeElementIndex: 1,
      };
    });
    expect(
      service.isEqualSlots(sections)
    ).toBeTruthy();
  }));

  it('multiply decimals', inject([BalanceService], (service: BalanceService) => {
    const first = 0.1;
    const second = 0.2;
    const composition = service.multiplyDecimals(first, second);
    expect(
      String(composition).split('.')[1].length <= 2
    ).toBeTruthy();
  }));

  it('get updated balance', inject([BalanceService], (service: BalanceService) => {
    const slots = { ...slotsCollection };
    const sections = new Array<SlotSection>(3).fill(null).map((_, index) => {
      return {
        id: index + 1,
        elements: slots,
        activeElementIndex: 1,
      };
    });
    const wallet: WalletState = {
      balance: {
        currency: CurrencyTypes.GBP,
        value: 1000,
      },
      bets: [],
      loseFee: 0.9,
      winFee: 2,
    };

    const updated = service.getUpdatedBalance(sections, wallet);

    expect(updated.value).toEqual(3000);
  }));
});
