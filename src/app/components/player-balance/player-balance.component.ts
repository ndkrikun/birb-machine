import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-player-balance',
  templateUrl: './player-balance.component.html',
  styleUrls: ['./player-balance.component.scss']
})
export class PlayerBalanceComponent implements OnInit {
  public readonly balance$ = this.store.select(
    ({ wallet: { balance } }) => balance
  );

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  public ngOnInit(): void {}

}
