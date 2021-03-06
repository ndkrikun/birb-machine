import { SlotsMachineState } from 'src/app/reducers/slots-machine/slots-machine.state';
import { SlotsMachineActionTypes } from 'src/app/reducers/slots-machine/slots-machine.action-types';
import { SetActiveSlotAction } from 'src/app/reducers/slots-machine/actions/set-active-slot.action';
import { slotsCollection } from 'src/app/data/slots.data';

const slots = [
  ...slotsCollection,
  ...slotsCollection,
  ...slotsCollection,
];

const slotsMachineDefaultState: SlotsMachineState = {
  sections: [{
    id: 1,
    elements: slots,
    activeElementIndex: 0,
  }, {
    id: 2,
    elements: slots,
    activeElementIndex: 1,
  }, {
    id: 3,
    elements: slots,
    activeElementIndex: 2,
  }]
};

type SlotsMachineActions = (
  | SetActiveSlotAction
);

export function slotsMachineReducer(
  this: void,
  state = slotsMachineDefaultState,
  action: SlotsMachineActions,
): SlotsMachineState {
  switch (action.type) {
    case SlotsMachineActionTypes.SET_ACTIVE_SLOT: return action.reduce(state, action);
    default: return state;
  }
}
