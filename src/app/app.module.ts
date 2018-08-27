import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './app.state';
import { AppComponent } from './app.component';
import { SlotsMachineComponent } from './components/slots-machine/slots-machine.component';
import { slotsMachineReducer } from './reducers/slots-machine/slots-machine.reducer';
import { RandomizerService } from './services/randomizer.service';
import { MachineButtonComponent } from './components/machine-button/machine-button.component';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { walletReducer } from './reducers/wallet/wallet.reducer';
import { stageReducer } from './reducers/stage/stage.reducer';
import { StageService } from 'src/app/services/stage.service';
import { PlayerBalanceComponent } from './components/player-balance/player-balance.component';
import { BalanceService } from './services/balance.service';

@NgModule({
  declarations: [
    AppComponent,
    SlotsMachineComponent,
    MachineButtonComponent,
    BetFormComponent,
    PlayerBalanceComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>({
      slotsMachine: slotsMachineReducer,
      wallet: walletReducer,
      stage: stageReducer,
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    RandomizerService,
    StageService,
    BalanceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
