import { Injectable } from '@angular/core';
import { ActiveSlotPair, SlotSection } from 'src/app/models/slots.model';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {
  /**
   * Returns random element from array
   */
  public getRandomElement<T>(indexes: T[]): T {
    return indexes[
      Math.floor(Math.random() * indexes.length)
    ];
  }

  /**
   * Return randomize selected slots
   */
  public getRandomSlots(sections: SlotSection[]): ActiveSlotPair[] {
    return sections.map(({ id, elements }) => {
      const ids = new Array<number>(elements.length)
        .fill(null)
        .map((_, index) => index);

      return {
        sectionId: id,
        slotIndex: this.getRandomElement(ids)
      };
    });
  }
}
