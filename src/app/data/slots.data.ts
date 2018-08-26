import { SlotElementNames, SlotElement } from '../models/slots.model';
import { ColorCode } from '../models/colors.model';

export const slotsCollection: ReadonlyArray<SlotElement> = Object.freeze([{
  id: 1,
  name: SlotElementNames.JOHN,
  color: ColorCode.red,
  imageUrl: '/assets/john.png',
}, {
  id: 2,
  name: SlotElementNames.JAKE,
  color: ColorCode.yellow,
  imageUrl: '/assets/jake.png',
}, {
  id: 3,
  name: SlotElementNames.MIKE,
  color: ColorCode.green,
  imageUrl: '/assets/mike.png',
}]);
