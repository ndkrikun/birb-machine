import { inject } from '@angular/core/testing';
import { RandomizerService } from './randomizer.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';
import { slotsCollection } from 'src/app/data/slots.data';
import { SlotSection } from 'src/app/models/slots.model';

describe('RandomizeServiceService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([RandomizerService], (service: RandomizerService) => {
    expect(service).toBeTruthy();
  }));

  it('get random element', inject([RandomizerService], (service: RandomizerService) => {
    const longArray = new Array<number>(1000).fill(null).map((_, index) => index);
    const randomEl = service.getRandomElement(longArray);
    expect(
      longArray.includes(randomEl)
    ).toBeTruthy();
  }));

  it('get random slots', inject([RandomizerService], (service: RandomizerService) => {
    const sections = new Array<SlotSection>(3).fill(null).map((_, index) => {
      return {
        id: index + 1,
        elements: { ...slotsCollection },
        activeElementIndex: 1,
      };
    });
    const slotPairs = service.getRandomSlots(sections);
    expect(
      sections.length === slotPairs.length &&
      sections.every((section, index) => section.id === slotPairs[index].sectionId)
    ).toBeTruthy();
  }));
});
