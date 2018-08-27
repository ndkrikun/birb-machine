import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Price } from 'src/app/models/wallet.model';
import { SetWalletBalanceAction } from '../../reducers/wallet/actions/set-wallet-balance.action';
import { SetAppStageAction } from '../../reducers/stage/actions/set-app-stage.action';
import { StageNames } from '../../models/stage.model';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.scss']
})
export class BetFormComponent {
  /**
   * Collection of available bets
   */
  public readonly bets$ = this.store.select(
    ({ wallet: { bets } }) => bets
  );

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  /**
   * Selects player's bet
   */
  public chooseBet(price: Price): void {
    this.store.dispatch(new SetWalletBalanceAction(price));
    this.store.dispatch(new SetAppStageAction(StageNames.GAME));
  }
}
