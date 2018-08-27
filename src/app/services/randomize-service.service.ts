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

  public getRandomSlot(indexes: number[]): number {
    return indexes[
      Math.floor(Math.random() * indexes.length)
    ];
  }

  public getRandomSlots(sections: SlotSection[]): ActiveSlotPair[] {
    return sections.map(({ id, elements }) => {
      const ids = new Array<number>(elements.length).fill(null)
        .map((_, index) => index);

      return {
        sectionId: id,
        slotIndex: this.getRandomSlot(ids)
      };
    });
  }
}
