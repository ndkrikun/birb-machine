import { CurrencyTypes } from '../../models/wallet.model';
import { WalletState } from 'src/app/reducers/wallet/wallet.state';
import { WalletActionTypes } from './wallet.action-types';
import { SetWalletBalanceAction } from 'src/app/reducers/wallet/actions/set-wallet-balance.action';

const walletDefaultState: WalletState = {
  balance: {
    value: 0,
    currency: CurrencyTypes.GBP,
  },
  bets: [{
    value: 100,
    currency: CurrencyTypes.GBP,
  }, {
    value: 500,
    currency: CurrencyTypes.GBP,
  }, {
    value: 1000,
    currency: CurrencyTypes.GBP,
  }],
  loseFee: 0.1,
  winFee: 0.5,
};

type WalletActions = (
  | SetWalletBalanceAction
);

export function walletReducer(
  this: void,
  state = walletDefaultState,
  action: WalletActions,
): WalletState {
  switch (action.type) {
    case WalletActionTypes.SET_WALLET_BALANCE: return action.reduce(state, action);
    default: return state;
  }
}
