import { Injectable } from '@angular/core';
import { ActiveSlotPair, SlotSection } from 'src/app/models/slots.model';

@Injectable({
  providedIn: 'root'
})
export class RandomizeServiceService {
  /**
   * Returns random int in area inclusive min and max values
   */
  public getRandomInt(min: number, max: number): number {
    return Math.floor(
      Math.random() * (max - min + 1)
    ) + min;
  }

  public getRandomSlotId(slotIds: number[]): number {
    return slotIds[
      Math.floor(Math.random() * slotIds.length)
    ];
  }

  public getRandomSlots(sections: SlotSection[]): ActiveSlotPair[] {
    return sections.map(section => {
      const ids = section.elements.map(({ id }) => id);
      return {
        sectionId: section.id,
        slotId: this.getRandomSlotId(ids)
      };
    });
  }
}
