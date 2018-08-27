import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { RandomizeServiceService } from 'src/app/services/randomize-service.service';
import { SetActiveSlotAction } from 'src/app/reducers/slots-machine/actions/set-active-slot.action';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-machine-button',
  templateUrl: './machine-button.component.html',
  styleUrls: ['./machine-button.component.scss']
})
export class MachineButtonComponent implements OnInit {

  public readonly slotSections$ = this.store.select(
    ({ slotsMachine: { sections } }) => sections
  );

  constructor(
    public readonly store: Store<AppState>,
    private readonly randomze: RandomizeServiceService,
  ) { }

  public ngOnInit(): void { }

  public setRandomSlots() {
    this.slotSections$.pipe(
      take(1),
    ).subscribe(sections => {
      const newSections = this.randomze.getRandomSlots(sections);
      this.store.dispatch(new SetActiveSlotAction(newSections));
    });
  }

}
