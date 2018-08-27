import { ColorCode } from './colors.model';

export interface SlotSection {
  id: number;
  elements: ReadonlyArray<SlotElement>;
  activeElementIndex: number;
}

export interface SlotElement {
  id: number;
  name: SlotElementNames;
  color: ColorCode;
  imageUrl: string;
}

export enum SlotElementNames {
  MIKE = 'Screaming Mike',
  JOHN = 'Scarry John',
  JAKE = 'Friendly Jake',
}

export interface ActiveSlotPair {
  sectionId: number;
  slotIndex: number;
}
