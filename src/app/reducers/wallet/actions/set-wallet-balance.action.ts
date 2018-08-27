import { Action } from '@ngrx/store';
import { WalletActionTypes } from '../wallet.action-types';
import { WalletState } from '../wallet.state';
import { Price } from '../../../models/wallet.model';

/**
 * Sets wallet balance action
 */
export class SetWalletBalanceAction implements Action {

  public readonly type = WalletActionTypes.SET_WALLET_BALANCE;

  constructor(
    public payload: Price,
  ) { }

  public reduce(this: void, state: WalletState, action: SetWalletBalanceAction): WalletState {
    return {
      ...state,
      balance: {
        ... action.payload
      },
    };
  }
}
