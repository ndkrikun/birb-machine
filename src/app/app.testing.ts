import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import { SlotsMachineComponent } from './components/slots-machine/slots-machine.component';
import { AppState } from './app.state';
import { slotsMachineReducer } from './reducers/slots-machine/slots-machine.reducer';
import { RandomizerService } from './services/randomizer.service';
import { MachineButtonComponent } from './components/machine-button/machine-button.component';
import { BetFormComponent } from 'src/app/components/bet-form/bet-form.component';
import { walletReducer } from './reducers/wallet/wallet.reducer';
import { stageReducer } from './reducers/stage/stage.reducer';
import { StageService } from './services/stage.service';
import { PlayerBalanceComponent } from 'src/app/components/player-balance/player-balance.component';
import { BalanceService } from './services/balance.service';
import { SoundsPlayerService } from './services/sounds-player.service';

export const AppConfigureTestingModule = () => {
  return TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      SlotsMachineComponent,
      MachineButtonComponent,
      BetFormComponent,
      PlayerBalanceComponent,
    ],
    imports: [
      StoreModule.forRoot<AppState>({
        slotsMachine: slotsMachineReducer,
        wallet: walletReducer,
        stage: stageReducer,
      })
    ],
    providers: [
      RandomizerService,
      StageService,
      BalanceService,
      SoundsPlayerService,
    ],
  });
};
