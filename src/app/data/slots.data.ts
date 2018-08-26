import { SlotElementNames, SlotElement } from '../models/slots.model';
import { ColorCode } from '../models/colors.model';

export const slotsCollection: ReadonlyArray<SlotElement> = Object.freeze([{
  id: 1,
  name: SlotElementNames.JOHN,
  color: ColorCode.red,
  imageUrl: '',
}, {
  id: 2,
  name: SlotElementNames.MICHAEL,
  color: ColorCode.yellow,
  imageUrl: '',
}, {
  id: 3,
  name: SlotElementNames.MIKE,
  color: ColorCode.green,
  imageUrl: '',
}]);
