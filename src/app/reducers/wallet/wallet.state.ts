import { Price } from 'src/app/models/wallet.model';

export interface WalletState {
  balance: Price;
  bets: ReadonlyArray<Price>;
  loseFee: number;
  winFee: number;
}
