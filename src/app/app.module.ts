import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './app.state';
import { AppComponent } from './app.component';
import { SlotsMachineComponent } from './components/slots-machine/slots-machine.component';
import { slotsMachineReducer } from './reducers/slots-machine/slots-machine.reducer';
import { RandomizeServiceService } from 'src/app/services/randomize-service.service';
import { MachineButtonComponent } from './components/machine-button/machine-button.component';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { walletReducer } from './reducers/wallet/wallet.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SlotsMachineComponent,
    MachineButtonComponent,
    BetFormComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>({
      slotsMachine: slotsMachineReducer,
      wallet: walletReducer,
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    RandomizeServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
