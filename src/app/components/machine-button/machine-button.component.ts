import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { RandomizerService } from '../../services/randomizer.service';
import { SetActiveSlotAction } from 'src/app/reducers/slots-machine/actions/set-active-slot.action';
import { take, withLatestFrom } from 'rxjs/operators';
import { BalanceService } from '../../services/balance.service';
import { SetWalletBalanceAction } from '../../reducers/wallet/actions/set-wallet-balance.action';

@Component({
  selector: 'app-machine-button',
  templateUrl: './machine-button.component.html',
  styleUrls: ['./machine-button.component.scss']
})
export class MachineButtonComponent {

  /**
   * Slot sections' data
   */
  public readonly slotSections$ = this.store.select(
    ({ slotsMachine: { sections } }) => sections
  );

  constructor(
    private readonly store: Store<AppState>,
    private readonly randomzer: RandomizerService,
    private readonly balance: BalanceService,
  ) { }

  /**
   * Sets random slots activity
   */
  public setRandomSlots() {
    this.slotSections$.pipe(
      take(1),
    ).subscribe(sections => {
      const newSections = this.randomzer.getRandomSlots(sections);
      this.store.dispatch(new SetActiveSlotAction(newSections));
    });
  }

  /**
   * Updates player's balance
   */
  public updateBalance(): void {
    this.store.select(({ wallet }) => wallet).pipe(
      take(1),
      withLatestFrom(this.slotSections$),
    ).subscribe(([wallet, selections]) => {
      const updated = this.balance.getUpdatedBalance(selections, wallet);
      this.store.dispatch(new SetWalletBalanceAction(updated));
    });
  }

  /**
   * Click on the button handler
   */
  public clickOnButton(): void {
    this.setRandomSlots();
    this.updateBalance();
  }
}
