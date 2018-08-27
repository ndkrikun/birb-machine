import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-slots-machine',
  templateUrl: './slots-machine.component.html',
  styleUrls: ['./slots-machine.component.scss']
})
export class SlotsMachineComponent {
  /**
   * Single slot height
   */
  private readonly slotHeight = 240;

  /**
   * Slot sections' data
   */
  public readonly slotSections$ = this.store.select(
    ({ slotsMachine: { sections } }) => sections
  );

  constructor(
    public readonly store: Store<AppState>,
  ) {}

  /**
   * Prepares section coordinates
   */
  public getSectionCoordinates(activeSlotIndex: number): string {
    return `-${(activeSlotIndex) * this.slotHeight}px`;
  }

  /**
   * Prepares slot element's background image
   */
  public backgroundImage(url: string): string {
    return `url('${url}')`;
  }
}
