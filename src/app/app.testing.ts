import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import { SlotsMachineComponent } from './components/slots-machine/slots-machine.component';
import { AppState } from './app.state';
import { slotsMachineReducer } from './reducers/slots-machine/slots-machine.reducer';
import { RandomizeServiceService } from './services/randomize-service.service';
import { MachineButtonComponent } from './components/machine-button/machine-button.component';
import { BetFormComponent } from 'src/app/components/bet-form/bet-form.component';
import { walletReducer } from './reducers/wallet/wallet.reducer';

export const AppConfigureTestingModule = () => {
  return TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      SlotsMachineComponent,
      MachineButtonComponent,
      BetFormComponent,
    ],
    imports: [
      StoreModule.forRoot<AppState>({
        slotsMachine: slotsMachineReducer,
        wallet: walletReducer,
      })
    ],
    providers: [
      RandomizeServiceService,
    ],
  });
};
