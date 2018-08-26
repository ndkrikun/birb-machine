import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { SetActiveSlotAction } from '../../reducers/slots-machine/actions/set-active-slot.action';
import { take } from 'rxjs/operators';
import { RandomizeServiceService } from '../../services/randomize-service.service';

@Component({
  selector: 'app-slots-machine',
  templateUrl: './slots-machine.component.html',
  styleUrls: ['./slots-machine.component.scss']
})
export class SlotsMachineComponent implements OnInit {
  private readonly slotHeight = 240;

  public readonly slotSections$ = this.store.select(
    ({ slotsMachine: { sections } }) => sections
  );

  constructor(
    public readonly store: Store<AppState>,
    private readonly randomze: RandomizeServiceService,
  ) {}

  public getSectionCoordinates(activeSlotId: number): string {
    return `-${(activeSlotId - 1) * this.slotHeight}px`;
  }

  public ngOnInit(): void { }

  public backgroundImage(url: string): string {
    return `url('${url}')`;
  }

  public go() {
    this.slotSections$.pipe(
      take(1),
    ).subscribe(sections => {
      const newSections = this.randomze.getRandomSlots(sections);
      this.store.dispatch(new SetActiveSlotAction(newSections));
    });
  }

}
