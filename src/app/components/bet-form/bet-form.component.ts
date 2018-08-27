import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Price } from 'src/app/models/wallet.model';
import { SetWalletBalanceAction } from '../../reducers/wallet/actions/set-wallet-balance.action';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.scss']
})
export class BetFormComponent implements OnInit {
  private readonly bets$ = this.store.select(
    ({ wallet: { bets } }) => bets
  );

  constructor(
    private readonly store: Store<AppState>,
  ) {}

  public ngOnInit(): void {}

  public chooseBet(price: Price): void {
    this.store.dispatch(new SetWalletBalanceAction(price));
  }
}
