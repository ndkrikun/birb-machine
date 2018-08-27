import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { RandomizerService } from '../../services/randomizer.service';
import { SetActiveSlotAction } from 'src/app/reducers/slots-machine/actions/set-active-slot.action';
import { take, withLatestFrom } from 'rxjs/operators';
import { BalanceService } from '../../services/balance.service';
import { SetWalletBalanceAction } from '../../reducers/wallet/actions/set-wallet-balance.action';
import { SoundsPlayerService } from '../../services/sounds-player.service';
import { SoundNames } from '../../models/sound.model';

@Component({
  selector: 'app-machine-button',
  templateUrl: './machine-button.component.html',
  styleUrls: ['./machine-button.component.scss']
})
export class MachineButtonComponent {
  /**
   * Slot section's animation inprogress flag
   */
  public gameStepInProgress = false;

  /**
   * Slot section's animation duration
   */
  private readonly gameStepDebounceDelay = 1200;

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
    private readonly soundsPlayer: SoundsPlayerService,
  ) { }

  /**
   * Tells if button have disabled status
   */
  public get isDisabled(): boolean {
    return this.gameStepInProgress;
  }

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
   * Inits debounce timer
   */
  public setDebounceTimer(): void {
    this.gameStepInProgress = true;
    setTimeout(
      () => this.gameStepInProgress = false,
      this.gameStepDebounceDelay,
    );
  }

  /**
   * Click on the button handler
   */
  public async clickOnButton(): Promise<void> {
    if (!this.isDisabled) {
      await this.soundsPlayer.play(SoundNames.WINGS);
      this.setDebounceTimer();
      this.setRandomSlots();
      this.updateBalance();
    }
  }
}
