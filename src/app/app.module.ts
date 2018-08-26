import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './app.state';
import { AppComponent } from './app.component';
import { SlotsMachineComponent } from './components/slots-machine/slots-machine.component';
import { slotsMachineReducer } from './reducers/slots-machine/slots-machine.reducer';
import { RandomizeServiceService } from 'src/app/services/randomize-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SlotsMachineComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>({
      slotsMachine: slotsMachineReducer,
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    RandomizeServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
