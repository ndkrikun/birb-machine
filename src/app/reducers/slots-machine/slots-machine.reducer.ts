import { SlotsMachineState } from './slots-machine.state';
import { SetActiveSlotAction } from './actions/set-active-slot.action';
import { SlotsMachineActionTypes } from './slots-machine.action-types';
import { slotsCollection } from '../../data/slots.data';

const slotsMachineDefaultState: SlotsMachineState = {
  sections: [{
    id: 1,
    elements: slotsCollection,
    activeElementId: 1,
  }, {
    id: 2,
    elements: slotsCollection,
    activeElementId: 2,
  }, {
    id: 3,
    elements: slotsCollection,
    activeElementId: 3,
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
