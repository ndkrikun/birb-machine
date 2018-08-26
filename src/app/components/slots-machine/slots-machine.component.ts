import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

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
  ) {}

  public getSectionCoordinates(activeSlotId: number): string {
    return `-${(activeSlotId - 1) * this.slotHeight}px`;
  }

  public ngOnInit(): void { }

  public go() {

  }

}
