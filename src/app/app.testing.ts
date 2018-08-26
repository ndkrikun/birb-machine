import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import { SlotsMachineComponent } from './components/slots-machine/slots-machine.component';
import { AppState } from './app.state';
import { slotsMachineReducer } from './reducers/slots-machine/slots-machine.reducer';
import { RandomizeServiceService } from './services/randomize-service.service';

export const AppConfigureTestingModule = () => {
  return TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      SlotsMachineComponent,
    ],
    imports: [
      StoreModule.forRoot<AppState>({
        slotsMachine: slotsMachineReducer,
      })
    ],
    providers: [
      RandomizeServiceService,
    ],
  });
};
